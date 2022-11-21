import { ApiProperty } from "@nestjs/swagger";
import { IsBoolean, IsNumber, IsString } from "class-validator";

export class CreateLocalDto {
  @IsString()
  @ApiProperty({
  example: 'São Paulo',
  })
  city:string;

  @IsString()
  @ApiProperty({
  example: 'Rua arapuã',
  })
  end:string;

  @IsNumber()
  @ApiProperty({
  example: '2500',
  })
  number:number;

  @IsNumber()
  @ApiProperty({
  example: '11',
  })
  ddd:number;

  @IsNumber()
  @ApiProperty({
  example: '996524353',
  })
  contact:number;

  @IsString()
  @ApiProperty({
  example: 'Próximo a tal lugar',
  })
  reference:string;
}
