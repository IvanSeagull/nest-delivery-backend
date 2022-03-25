import { Controller, Get } from "@nestjs/common";
import { usersService } from "./user.service";

@Controller('users')
export class UserController{
    constructor( private readonly userService: usersService){}

    @Get()
    getUsers(){
        return 123
    }
}