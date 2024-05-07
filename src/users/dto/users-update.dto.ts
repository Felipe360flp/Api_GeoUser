
import { ApiProperty } from '@nestjs/swagger';
import {IsString} from 'class-validator';

export class UpdateUserDto {


    @IsString()
    @ApiProperty({
      example: 'Afonso@123',
    })
    password:string;

    @IsString()
    @ApiProperty({
      example:'Afonso@123',
    })
    confirmPassword:string;


}
