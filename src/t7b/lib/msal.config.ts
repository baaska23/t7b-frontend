import { PublicClientApplication, PopupRequest } from "@azure/msal-browser";

export const msalConfig = {
    auth: {
        clientId: 'thesis-hub',
        tenantId: 'specific-tenant-id',
        redirectUri: window.location.origin
    },
    cache: {
        cacheLocation: "localStorage",
        storeAuthStateInCookie: false
    }
}

export const msalInstance = new PublicClientApplication(msalConfig)

export const loginRequest: PopupRequest = {
    scopes: ["User.Read"],
    prompt: "select_account"
};