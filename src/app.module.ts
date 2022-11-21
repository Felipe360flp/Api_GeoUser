import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './users/Module.users';
import { PrismaModule } from './prisma/prisma.module';
<<<<<<< HEAD
import { AuthModule } from './auth/Module.auth';
import { MulterModule } from '@nestjs/platform-express';
import { ClientModule } from './client_/client.module';
import { ProductModule } from './product/product.module';
import { AgendaModule } from './agenda/agenda.module';
import { LocalModule } from './local/local.module';

@Module({
  imports:[
  UserModule,
  AuthModule,
  PrismaModule,
  MulterModule.register({dest:'./upload',}),
  ClientModule,
  ProductModule,
  AgendaModule,
  LocalModule
],
=======
import { AuthModule } from './Auth/Module.auth';
import { TransactionModule } from './Transaction/Module.transaction';

@Module({
  imports: [UserModule,CategoryModule,AuthModule,TransactionModule,PrismaModule],
>>>>>>> ed270f1cb46b6336ac77e5791a00ee4208845e0b
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
