export default {
    apiEndpoints: {
        authUrl: 'https://auth.riotgames.com/api/v1/authorization',
        entitlementsUrl: 'https://entitlements.auth.riotgames.com/api/token/v1',
    },

    authCookiesBody: {
        'client_id': 'play-valorant-web-prod',
        'nonce': '1',
        'redirect_uri': 'https://playvalorant.com/opt_in',
        'response_type': 'token id_token',
        'scope': 'account openid'
    },
};
