import { User } from "../entities/User";

export interface IAuthContext {
    currentUser: User;
    setCurrentUser: React.Dispatch<React.SetStateAction<User>>;
}