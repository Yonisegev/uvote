import { Poll } from "./poll";

export class User {
    constructor(
        public name: string,
        public email: string,
        public password: string | number,
        public country: string,
        public flag: string,
        public polls?: Poll[],
        public _id?:string
    ) {}
}
