export interface User {
    ssid: string;
    puuid: string;
    name: string;
    profilePictureURL?: string;
}

export interface Users {
    users: User[];
    active: User;
}
