import { BadRequestException, Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/users-create.dto';
import {UpdateUserDto} from './dto/users-update.dto';
import { PrismaService } from '../prisma/prisma.service';
import { handleError } from 'src/Utils/handle-error.util';
import * as bcrypt from 'bcrypt';
<<<<<<< HEAD
import { Prisma, User } from '@prisma/client';
=======
import { Prisma} from '@prisma/client';
import { User } from './entities/users.entity';
>>>>>>> ed270f1cb46b6336ac77e5791a00ee4208845e0b

@Injectable()
export class UserService {
  constructor(private readonly prisma: PrismaService){}

  async findAll(){
    return await this.prisma.user.findMany({
      select:{
        name:true,
        email:true,
<<<<<<< HEAD
        permission:true
=======
        cpf_cnpj:true,
        wallet:true
>>>>>>> ed270f1cb46b6336ac77e5791a00ee4208845e0b
      }
    });
  }

  findById(id: string){
    const record = this.prisma.user.findUnique({
      where: { id },
    });

    if (!record) {
<<<<<<< HEAD
      throw new NotFoundException(`Registro com o ID '${id}' não encontrado.`);
=======
      throw new BadRequestException('As senhas informadas não são iguais.');
>>>>>>> ed270f1cb46b6336ac77e5791a00ee4208845e0b
    }
    return record;
  }

<<<<<<< HEAD
  async create(dto: CreateUserDto) {
=======
  findOne(id: string) {
    return this.findById(id);
  }

  async createADM(dto: CreateUserDto) {

    if (dto.password != dto.confirmPassword) {
      throw new BadRequestException('As senhas informadas não são iguais.');
    }

    delete dto.confirmPassword;

>>>>>>> ed270f1cb46b6336ac77e5791a00ee4208845e0b
    const data: Prisma.UserCreateInput = {
      name:dto.name,
      cpf_cnpj:dto.cpf_cnpj,
      email:dto.email,
      password:await bcrypt.hash(dto.password, 10),
<<<<<<< HEAD
      permission:"COMMON",
    }
      return this.prisma.user
      .create({
          data,
          select: {
            id:true,
            name:true,
            email:true,
        }
      }).catch(handleError);
  }

  async update(id: string,dto: UpdateUserDto){
    await this.findById(id);

    const data: Prisma.UserUpdateInput = {
      name:dto.name,
      cpf_cnpj:dto.cpf_cnpj,
      email:dto.email,
      password:await bcrypt.hash(dto.password, 10),
      permission:dto.permission,
    }
    return this.prisma.user
      .update({
      where: {id},
      data,
      select: {
        id:true,
        name:true,
        email:true,
        password:false,
=======
      category:{
        connect:{
          Title:'ADMIN',
        }
      }
    }

    return this.prisma.user
    .create({
      data,
      select:{
        name:true,
        cpf_cnpj:true,
        email:true,
        password:false,
        category:{
          select:{
            id:true,
          }
        }
>>>>>>> ed270f1cb46b6336ac77e5791a00ee4208845e0b
      }
    });
  }


  async create(dto: CreateUserDto) {

    if (dto.password != dto.confirmPassword) {
      throw new BadRequestException('As senhas informadas não são iguais.');
    }

    delete dto.confirmPassword;

    const data: Prisma.UserCreateInput = {
      name:dto.name,
      cpf_cnpj:dto.cpf_cnpj,
      email:dto.email,
      password:await bcrypt.hash(dto.password, 10),
      category:{
        connect:{
          Title:'COMMON',
        }
      }
    }

    return this.prisma.user
    .create({
      data,
      select:{
        name:true,
        cpf_cnpj:true,
        email:true,
        password:false,
        category:{
          select:{
            Title:true,
          }
        }
      }
    });
  }

  async update(dto: UpdateUserDto,user:Partial<User>){
    await this.findById(user.id);

    if (dto.password != dto.confirmPassword) {
      throw new BadRequestException('As senhas informadas não são iguais.');
    }

    delete dto.confirmPassword;

    const data: Prisma.UserUpdateInput = {
      name:dto.name,
      email:dto.email,
      password:await bcrypt.hash(dto.password, 10),
    }
    return this.prisma.user
      .update({
      where: {id:user.id},
      data,
      select: {
        id:true,
        name:true,
        email:true,
        password:false,
      }
    }).catch(handleError);
  }

<<<<<<< HEAD
=======

>>>>>>> ed270f1cb46b6336ac77e5791a00ee4208845e0b
  async delete(id: string) {
    await this.findById(id);
    await this.prisma.user.delete({ where: { id } });
  }

}
