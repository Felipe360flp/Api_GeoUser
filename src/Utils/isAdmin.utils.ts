import { UnauthorizedException } from '@nestjs/common';
import { User } from 'src/users/entities/users.entity';


export function isAdmin(user: User) {
  if (user.permission != "ADM") {
    throw new UnauthorizedException('Você não tem permissão de admin');
  }
}




