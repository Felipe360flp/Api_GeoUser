import { ApiProperty } from '@nestjs/swagger';
<<<<<<< HEAD
import {IsNumber, IsOptional, IsString, IsUUID } from 'class-validator';
=======
import { Category } from '@prisma/client';
import {IsEmail, IsNumber, IsString, IsUUID } from 'class-validator';
>>>>>>> ed270f1cb46b6336ac77e5791a00ee4208845e0b


export class CreateUserDto {
@IsString()
@ApiProperty({
  example:'Afonso de campos nunes',
})
name:string;

<<<<<<< HEAD
@IsString()
@ApiProperty({
  example: '058654856985',
})
cpf_cnpj:string;
=======
@IsEmail()
@ApiProperty({
  example: 'Acamposn@gmail.com',
})
email:string;
>>>>>>> ed270f1cb46b6336ac77e5791a00ee4208845e0b

@IsString()
@ApiProperty({
  example: 'Afonso@123',
})
<<<<<<< HEAD
email:string;

@IsString()
@ApiProperty({
  example: 'J@nior#2214',
})
password:string;

@IsString()
@ApiProperty({
  example: 'COMMON | SHOPKEEPER',
})
permission:string;
=======
password:string;

@IsString()
@ApiProperty({
  example:'Afonso@123',
})
confirmPassword:string;

@ApiProperty({
  example:'05865489956'
})
cpf_cnpj:string;

>>>>>>> ed270f1cb46b6336ac77e5791a00ee4208845e0b
}




