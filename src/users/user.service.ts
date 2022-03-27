import { Injectable } from "@nestjs/common";
import { User } from "./user.model";

@Injectable()
export class usersService{
    private users: User[] = [];

    registerUser(username: string, password: string){
        const id = this.users.length + 1;
        const newUser = new User(id, username, password);
        this.users.push(newUser)
        return id
    }

}