import { ApiProperty } from '@nestjs/swagger';
import { User } from 'src/users/entities/users.entity';

export class LoginResponseDto {
  @ApiProperty({
    description: 'JWT gerado pelo login',
    example: 'TOKEN_GERADO_AUTOMATICAMENTE',
  })
  token: string;

  @ApiProperty({
    description: 'Dados do usuário autenticado',
  })
  userID:string;
}
