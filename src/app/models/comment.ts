import { LoggedUser } from "./logged-user";

export interface Comment {
    txt: string,
    createdAt: Date | number,
    author: LoggedUser | any
}
