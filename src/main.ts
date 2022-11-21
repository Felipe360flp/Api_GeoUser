import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.useGlobalPipes(new ValidationPipe());

  const config = new DocumentBuilder()

    .setTitle('API-GEO-USERS')
    .setDescription('Aplicação para gestão de clientes')
    .setVersion('1.0.0')
    .addTag('Api')
    .addTag('Auth')
    .addTag('User')
    .addTag('Client')
    .addTag('Agenda')
    .addTag('Product')
    .addTag('Local')
    .addBearerAuth()
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);

  await app.listen(process.env.PORT || 3333);
}
bootstrap();


