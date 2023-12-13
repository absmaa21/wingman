import { Users } from "../interfaces/user-manager/UserManager";
import GameContent from "../interfaces/GameContent";


export class ApiState {
    users?: Users;
    headers?: {[key: string]: string};
    gameContent?: GameContent;
}
