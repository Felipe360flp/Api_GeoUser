import { UnauthorizedException } from '@nestjs/common';
<<<<<<< HEAD
import { User } from 'src/users/entities/users.entity';


export function isAdmin(user: User) {
  if (user.permission != "ADM") {
    throw new UnauthorizedException('Você não tem permissão de admin');
=======
import { Category } from 'src/Category/entities/category-entity';


export  function isAdmin(Title:string) {
   if (Title != "ADMIN") {
    throw new UnauthorizedException('Você não tem permissão para executar esta tarefa!');
>>>>>>> ed270f1cb46b6336ac77e5791a00ee4208845e0b
  }
}


