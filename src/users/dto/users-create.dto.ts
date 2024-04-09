import { ApiProperty } from '@nestjs/swagger';
import {IsEmail, IsNumber, IsOptional, IsString, IsUUID } from 'class-validator';

export class CreateUserDto {
@IsString()
@ApiProperty({
  example:'Afonso de campos nunes',
})
name:string;

@IsString()
@ApiProperty({
  example: '058654856985',
})
cpf_cnpj:string;

@IsEmail()
@ApiProperty({
  example: 'Acamposn@gmail.com',
})
email:string;

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




