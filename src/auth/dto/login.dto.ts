import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';

export class LoginDto {
  @IsString()
  @IsNotEmpty()
  @ApiProperty({
    description: 'Email do usuário',
<<<<<<< HEAD
    example: "junin.oliveira@gmail.com",
=======
    example: 'Acamposn@gmail.com',
>>>>>>> ed270f1cb46b6336ac77e5791a00ee4208845e0b
  })
  email:string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty({
    description: 'Senha do usuário',
<<<<<<< HEAD
    example: "J@nior#2214",
=======
    example: 'Afonso@123',
>>>>>>> ed270f1cb46b6336ac77e5791a00ee4208845e0b
  })
  password:string;
}
