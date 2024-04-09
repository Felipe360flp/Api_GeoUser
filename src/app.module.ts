import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './users/Module.users';
import { PrismaModule } from './prisma/prisma.module';
import { AuthModule } from './auth/Module.auth';
import { ClientModule } from './client_/client.module';
import { ProductModule } from './product/product.module';
import { AgendaModule } from './agenda/agenda.module';
import { LocalModule } from './local/local.module';

@Module({
  imports:[
  UserModule,
  AuthModule,
  PrismaModule,
  ClientModule,
  ProductModule,
  AgendaModule,
  LocalModule
],

  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
