import headersStatics from "./statics/headers-statics";
import Base64 from "react-native-base64";
import * as LogSystem from "./utils/log-system/log-system";
import { ApiState } from "./api-state";


export function getHeaders(apiState: ApiState): {[key: string]: string} {
    return apiState.headers || {};
}

export function addHeaders(headers: {[key: string]: string}, apiState: ApiState){
    apiState.headers = {...(apiState.headers || {}), ...headers};
}

export function removeHeader(header: string, apiState: ApiState) {
    if (apiState.headers && apiState.headers.hasOwnProperty(header)) {
        delete apiState.headers[header];
    }
}

export async function initHeaders(apiState: ApiState): Promise<void> {
    if (!apiState.gameContent) {
        LogSystem.logError("Uninitialized game content.")

        return Promise.reject("Game Content uninitialized");
    }

    let riotClientBuild: string = headersStatics.gameContent.default.version.riotClientBuild;
    let riotClientVersion: string = headersStatics.gameContent.default.version.riotClientVersion;

    if (apiState.gameContent.version !== undefined) {
        riotClientBuild = apiState.gameContent.version.riotClientBuild;
        riotClientVersion = apiState.gameContent.version.riotClientVersion;
    } else {
        LogSystem.logWarning("Failed to get riot client build/version. Using static fallback.");
    }

    apiState.headers = {
        'User-Agent': `RiotClient/${riotClientBuild} (Windows NT 10.0; Win64; x64)`,
        'Content-Type': 'application/json',
        'X-Riot-ClientVersion': riotClientVersion,
        'X-Riot-ClientPlatform': Base64.encode(JSON.stringify(headersStatics.client_platform)),
    };
}
