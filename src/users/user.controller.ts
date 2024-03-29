import { Body, Controller, Get, Param, Post } from "@nestjs/common";
import { usersService } from "./user.service";

@Controller('users')
export class UserController {
    constructor(private readonly userService: usersService) { }

    @Post()
    registerUsers(@Body("username") username: string, @Body("password") password:string, @Body('repeatPassword') repeatPassword:string) {
        if(password === repeatPassword) {   
            const newUserId = this.userService.registerUser(username, password)
            return newUserId;
        }
        else{
            return {msg: "Passwords dont match"}
        }
    }

    @Get(':id')
    getUserData(@Param('id') userId: number){
        return this.userService.getUserData(userId)
    }
}