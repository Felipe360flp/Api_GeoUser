import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';
import { Product } from 'src/product/entities/product.entity';
import { domainToASCII } from 'url';
import { CreateAgendaDto } from './dto/create-agenda.dto';
import { UpdateAgendaDto } from './dto/update-agenda.dto';

@Injectable()
export class AgendaService {
  constructor(private readonly prisma:PrismaService){}

  create(dto: CreateAgendaDto,userID:string) {

    const data: Prisma.AgendaCreateInput={
      user:{
        connect:{
          id:userID
        }
      },
      date:dto.date,
      time:dto.time,
      client:{
        connect:{
          id:dto.clientID
        }
      },
      local:{
        connect:{
          id:dto.localID
        }
      },
      product:{
        connect:{
          id:dto.productID
        }
      },
      description:dto.description
      }

     return this.prisma.agenda.create({
       data,
       select:{
        user:{
          select:{
            id:true
          }
        },
        date:true,
        time:true,
        client:{
          select:{
            id:true
          }
        },
        product:{
          select:{
            id:true
          }
        },
        local:{
          select:{
            id:true
          }
        },
        description:true
       }
     });
  }

  findAll(userID:string) {
    return this.prisma.agenda.findMany()
  }

  findOne(id:string,userID:string) {
    return this.prisma.agenda.findUnique({where:{id:id}})
  }

  update(id: string, dto: UpdateAgendaDto,userID:string) {
    const data: Prisma.AgendaUpdateInput={
      user:{
        connect:{
          id:userID
        }
      },
      date:dto.date,
      time:dto.time,
      client:{
        connect:{
          id:dto.clientID
        }
      },
      local:{
        connect:{
          id:dto.localID
        }
      },
      product:{
        connect:{
          id:dto.productID
        }
      },
      description:dto.description
      }

     return this.prisma.agenda.update({
      where:{id:id},
       data,
       select:{
        user:{
          select:{
            id:true
          }
        },
        date:true,
        time:true,
        client:{
          select:{
            id:true
          }
        },
        product:{
          select:{
            id:true
          }
        },
        local:{
          select:{
            id:true
          }
        },
        description:true
       }
     });
  }

  remove(id: string, userID:string) {
    return this.prisma.agenda.delete({where:{id:id}})
  }
}
