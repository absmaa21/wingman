import authStatics from '../statics/authentication-statics';
import * as LogSystem from '../utils/log-system/log-system';
import {getHeaders, addHeaders} from '../headers';
import {ApiState} from '../api-state';
import Axios from 'axios';
import {AxiosResponse} from 'axios';
import {DevSettings} from "react-native";

export enum AuthReturnStatus {
    WRONG_CREDENTIALS,
    MULTIFACTOR,
    AUTH_FAILED,
    INVALID_SESSION,
    INVALID_MULTIFACTOR_CODE,
    AUTH_SUCCESS,
}

let multifactorCookies: string;

export async function login(
    username: string,
    password: string,
    apiState: ApiState,
): Promise<AuthReturnStatus> {
    return new Promise(async function (resolve, reject) {
        const authCookies = await getAuthCookies(apiState);

        if (authCookies.length === 0) {
            resolve(AuthReturnStatus.AUTH_FAILED);
        }

        const authRequestBody = {
            type: 'auth',
            username: username,
            password: password,
            remember: true,
            language: 'en_US',
        };

        const config = {
            headers: {
                Cookie: authCookies,
                ...getHeaders(apiState),
            },
        };


        Axios.put(
            authStatics.apiEndpoints.authUrl,
            JSON.stringify(authRequestBody),
            config,
        )
            .then(async (response: AxiosResponse<any, any>) => {
                if (response.status === 200) {
                    const responseBody = response.data;
                    const type = responseBody.type;

                    switch (type) {
                        case 'auth':
                            resolve(AuthReturnStatus.WRONG_CREDENTIALS);
                            break;
                        case 'multifactor':
                            const mergedCookies = authCookies.concat(response.headers['set-cookie'] as string[]);
                            multifactorCookies = mergedCookies.toString().split(",").join(";")

                            resolve(AuthReturnStatus.MULTIFACTOR);
                            break;
                        default:
                            const ssid = response.headers['set-cookie']
                                ?.toString()
                                .split('ssid=')[1]
                                .split(';')[0];
                            await updateSessionHeaders(response.data.response.parameters.uri, apiState);
                            //await fetchActivePlayerData();
                            //await addUser(activeUserData.puuid, ssid);
                            resolve(AuthReturnStatus.AUTH_SUCCESS);
                    }
                } else {
                    resolve(AuthReturnStatus.AUTH_FAILED);
                }
            })
            .catch(error => {
                reject(error);
            });
    });
}

export async function multifactorLogin(
    code: string,
    apiState: ApiState,
): Promise<AuthReturnStatus> {
    const multiAuthBody = {
        type: 'multifactor',
        code: code.replace(/\n/g, '').trim(),
        rememberDevice: true,
    };

    const config = {
        headers: {
            Cookie: multifactorCookies, ...getHeaders(apiState)
        }
    };

    return new Promise(function (resolve, reject) {
        Axios.put(authStatics.apiEndpoints.authUrl, JSON.stringify(multiAuthBody), config)
            .then(async (response: AxiosResponse<any, any>) => {
                if (response.status !== 200) {
                    resolve(AuthReturnStatus.INVALID_SESSION);
                } else if (response.data.type === 'multifactor') {
                    resolve(AuthReturnStatus.INVALID_MULTIFACTOR_CODE);
                } else {
                    const ssid = response.headers['set-cookie']
                        ?.toString()
                        .split("ssid=")[1]
                        .split(";")[0];
                    await updateSessionHeaders(response.data.response.parameters.uri, apiState);
                    //await fetchActivePlayerData();
                    //await addUser(activeUserData.puuid, ssid);
                    resolve(AuthReturnStatus.AUTH_SUCCESS);
                }
            })
            .catch(error => {
                reject(error);
            });
    });
}

async function getAuthCookies(apiState: ApiState): Promise<string[]> {
    if (Object.keys(getHeaders(apiState)).length === 0) {
        LogSystem.logError("Failed to get auth cookies. Uninitialized headers");
        return [];
    }

    try {
        const response = await Axios.post(
            authStatics.apiEndpoints.authUrl,
            JSON.stringify(authStatics.authCookiesBody),
            {headers: getHeaders(apiState)},
        );

        if (response.status === 200) {
            return response.headers ? ['set-cookie'] : [];
        } else {
            return [];
        }
    } catch (error) {
        LogSystem.logError("Failed to get auth cookies: " + error + " | Headers: " + JSON.stringify(getHeaders(apiState)));

        return [];
    }
}

async function updateSessionHeaders(uri: string, apiState: ApiState): Promise<void> {
    const accessTokenMatch = uri.toString().match(/access_token=([^&]+)/);

    if (accessTokenMatch === null) {
        LogSystem.logError("Session headers not found.");
        return;
    }

    const accessToken = accessTokenMatch[1];
    addHeaders({
        'Authorization': `Bearer ${accessToken}`,
    }, apiState);

    const config = {
        headers: {
            'Authorization': `Bearer ${accessToken}`,
        },
    };

    return new Promise(function(resolve, reject) {
        Axios.post(authStatics.apiEndpoints.entitlementsUrl, {}, config)
            .then((response: AxiosResponse<any, any>) => {
                if(response.status === 200){
                    const entitlements = response.data['entitlements_token'];
                    addHeaders({ 'X-Riot-Entitlements-JWT': entitlements }, apiState);
                }

                resolve();
            })
            .catch(error => {
                LogSystem.logError("Failed to get session headers: " + JSON.stringify(error));
                reject(error);
            })
    });
}
