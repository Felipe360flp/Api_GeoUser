import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { CreateUserDto } from './dto/users-create.dto';
import {UpdateUserDto} from './dto/users-update.dto';
import { PrismaService } from '../prisma/prisma.service';
import { handleError } from 'src/Utils/handle-error.util';
import * as bcrypt from 'bcrypt';
import { Prisma} from '@prisma/client';
import { User } from './entities/users.entity';

@Injectable()
export class UserService {
  constructor(private readonly prisma: PrismaService){}

  async findAll(){
    return await this.prisma.user.findMany({
      select:{
        id:true,
        name:true,
        cpf_cnpj:true,
        email:true,
        permission:true
      }
    });
  }

  findById(id: string){
    const record = this.prisma.user.findUnique({
      where: { id },
      select:{
        id:true,
        name:true,
        cpf_cnpj:true,
        email:true,
        permission:true,
      }
    });

    if (!record) {
      throw new NotFoundException(`Registro com o ID '${id}' não encontrado.`);
    }
    return record;
  }


  async create(dto: CreateUserDto) {
    const data: Prisma.UserCreateInput = {
      name:dto.name,
      cpf_cnpj:dto.cpf_cnpj,
      email:dto.email,
      password:await bcrypt.hash(dto.password, 10),
      permission:"COMMON",
    }
      return this.prisma.user
      .create({
          data,
          select: {
            id:true,
            name:true,
        }
      }).catch(handleError);
  }

  async update(dto: UpdateUserDto,user:User){
    await this.findById(user.id);

    if (dto.password != dto.confirmPassword) {
      throw new BadRequestException('As senhas informadas não são iguais.');
    }

    delete dto.confirmPassword;

    const data: Prisma.UserUpdateInput = {
      password:await bcrypt.hash(dto.password, 10),
    }
    return this.prisma.user
      .update({
      where: {id:user.id},
      data,
      select: {
        name:true,
        email:true,
        password:false,
      }
    }).catch(handleError);
  }

  async delete(id: string) {
    await this.prisma.user.delete({ where: { id } });
  }

}
