import { Injectable } from '@nestjs/common';
import { Prisma, User } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateClientDto } from './dto/create-client.dto';
import { UpdateClientDto } from './dto/update-client.dto';

// falta fazer as verificações de nível de permissões e tratativas de erro

@Injectable()
export class ClientService {
  constructor(private readonly prisma: PrismaService){}

  create(dto: CreateClientDto,UserID:string) {

    const data: Prisma.ClientCreateInput  = {
      name:dto.name,
      dn:dto.dn,
      email:dto.email,
      cpf_cnpj:dto.cpf_cnpj,
      ddd:dto.ddd,
      contact:dto.contact,
      end:dto.end,
      number:dto.number,
      city:dto.city,
      marketing:dto.marketing
    }

    return this.prisma.client.create({
      data,
      select:{
        name:true,
        dn:true,
        email:true,
        cpf_cnpj:true,
        ddd:true,
        contact:true,
        end:true,
        number:true,
        city:true,
        marketing:true
      }
    })
  }

  findAll(UserID:string) {
    return this.prisma.client.findMany();
  }

  findOne(id: string,UserID:string) {
    return this.prisma.client.findUnique({where:{id:id}})
  }

  update(id:string, dto: UpdateClientDto,userID:string) {
    const data: Prisma.ClientUpdateInput={
      name:dto.name,
      dn:dto.dn,
      email:dto.email,
      cpf_cnpj:dto.cpf_cnpj,
      ddd:dto.ddd,
      contact:dto.contact,
      end:dto.end,
      number:dto.number,
      city:dto.city,
      marketing:dto.marketing
  }

  return this.prisma.client.update({
    where:{id:id},
    data,
    select:{
      name:true,
      dn:true,
      email:true,
      cpf_cnpj:true,
      ddd:true,
      contact:true,
      end:true,
      number:true,
      city:true,
      marketing:true
    }
  })
}

  remove(id:string,userID:string) {
    return this.prisma.client.delete({where:{id:id}})
  }
}
