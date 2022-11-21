import { ApiProperty } from "@nestjs/swagger";
import { IsString } from "class-validator";

export class CreateProductDto {

  @IsString()
  @ApiProperty({
    example: 'Limpeza Caixa Dágua',
  })
  title:string;

  @IsString()
  @ApiProperty({
    example: 'Descrever se necessário',
  })
  description:string;
}
