import { ApiProperty } from "@nestjs/swagger";
import { IsDate, IsNumber, IsString } from "class-validator";


export class CreateClientDto {
  @IsString()
  @ApiProperty({
  example: 'Felipe dos Santos Azevedo',
  })
  name:string

  @IsDate()
  @ApiProperty({
    example: '03/09/1990',
  })
  dn:number;

  @IsNumber()
  @ApiProperty({
    example: '05886267751',
  })
  cpf_cnpj?:number;

  @IsString()
  @ApiProperty({
    example: 'felipe.migthur@gmail.com',
  })
  email?:string;

  @IsNumber()
  @ApiProperty({
    example: '11',
  })
  ddd:number;

  @IsNumber()
  @ApiProperty({
    example: '994340312',
  })
  contact:number;

  @IsString()
  @ApiProperty({
    example: 'Rua Arapuã',
  })
  end:string;

  @IsNumber()
  @ApiProperty({
    example: '2500',
  })
  number:number;

  @IsString()
  @ApiProperty({
    example: 'São Paulo',
  })
  city:string;

  @IsString()
  @ApiProperty({
    example: 'google',
  })
  marketing:string;
}
