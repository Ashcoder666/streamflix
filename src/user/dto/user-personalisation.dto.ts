import { IsNotEmpty, IsString } from "class-validator";

export class UserPersonalizationDto{
    @IsNotEmpty()
    @IsString()
    nickname
}