import { Module } from "@nestjs/common";
import { UserController } from "./user.controller";
import { usersService } from "./user.service";

@Module({
    controllers: [UserController],
    providers: [usersService]
})
export class UserModule{}