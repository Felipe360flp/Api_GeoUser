import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';
import { domainToASCII } from 'url';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';

// falta fazer as verificações de nível de permissões e tratativas de erro

@Injectable()
export class ProductService {
  constructor(private readonly prisma:PrismaService){}

  create(dto: CreateProductDto,userID:string) {
   const data: Prisma.ProductCreateInput={
    title:dto.title,
    description:dto.description
   }
   return this.prisma.product.create({
    data,
    select:{
      title:true,
      description:true
    }
   })
  }

  findAll(userID:string) {
    return this.prisma.product.findMany();
  }

  findOne(id: string, userID:string) {
    return this.prisma.product.findUnique({where:{id:id}})
  }

  update(id:string, dto: UpdateProductDto,userID:string) {
    const data: Prisma.ProductUpdateInput = {
      title:dto.title,
      description:dto.description
    }
    return this.prisma.product.update({
      where:{id:id},
      data,
      select:{
        title:true,
        description:true
      }
    })
  }

  remove(id:string, userID:string) {
    return this.prisma.product.delete({where:{id:id}})
  }
}
