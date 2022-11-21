import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateLocalDto } from './dto/create-local.dto';
import { UpdateLocalDto } from './dto/update-local.dto';

// falta fazer as verificações de nível de permissões e tratativas de erro

@Injectable()
export class LocalService {
  constructor(private readonly prisma: PrismaService){}

  create(dto: CreateLocalDto,userID:string) {

    const data: Prisma.LocalCreateInput={
     end:dto.end,
     number:dto.number,
     city:dto.city,
     reference:dto.reference,
     ddd:dto.ddd,
     contact:dto.contact
    }
    return this.prisma.local.create({
      data,
      select:{
        end:true,
        number:true,
        city:true,
        reference:true,
        ddd:true,
        contact:true
      }
    });
  }

  findAll(userID:string) {
    return this.prisma.local.findMany()
  }

  findOne(id:string,userID:string) {
    return this.prisma.local.findUnique({where:{id:id}})
  }

  update(id: string, dto: UpdateLocalDto,userID:string) {
    const data: Prisma.LocalUpdateInput= {
      end:dto.end,
      number:dto.number,
      city:dto.city,
      reference:dto.reference,
      ddd:dto.ddd,
     contact:dto.contact
    }
    return this.prisma.local.update({
      where:{id:id},
      data,
      select:{
        end:true,
        number:true,
        city:true,
        reference:true,
        ddd:true,
        contact:true
      }
    })
  }

  remove(id: string,userID:string) {
    return this.prisma.local.delete({where:{id:id}})
  }
}
