import { ApiProperty } from "@nestjs/swagger";
import { IsBoolean, IsDate, IsNumber, IsString } from "class-validator";

export class CreateAgendaDto {

  @IsString()
  @ApiProperty({
  example: 'husjishusjisksjiskosjs',
  })
  clientID:string;

  @IsBoolean()
  @ApiProperty({
  example: 'O cliente pagou?',
  })
  pay:boolean;

  @IsDate()
  @ApiProperty({
  example: '15/02/2023',
  })
  date:number;

  @IsNumber()
  @ApiProperty({
  example: '15:00',
  })
  time:number;

  @IsString()
  @ApiProperty({
  example: 'hsuhusjisskodsjids',
  })
  productID:string;

  @IsString()
  @ApiProperty({
  example: 'Descrever apenas se necessário',
  })
  description:string

  @IsString()
  @ApiProperty({
  example: 'hjudsajdiasodhasuidha',
  })
  localID:string;
}


