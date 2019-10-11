/**
 * This is not a production server yet!
 * This is only a minimal backend to get started.
 **/

import { NestFactory } from '@nestjs/core';

import { AppModule } from './app/app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { environment } from './environments/environment';
import { ValidationPipe } from '@nestjs/common';
import * as rateLimit from 'express-rate-limit';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.useGlobalPipes(new ValidationPipe());

  const globalPrefix = 'api';
  app.setGlobalPrefix(globalPrefix);

  if (!environment.production) {
    const options = new DocumentBuilder()
      .setTitle('Resume api')
      .setDescription('The resume API description')
      .setVersion('1.0')
      .setBasePath('api')
      .addTag('resume')
      .build();

    const document = SwaggerModule.createDocument(app, options);
    SwaggerModule.setup('swagger', app, document);

    app.enableCors();
  }

  if(environment.production){
    app.enableCors({
      origin: 'www.reibo.io',
      methods: ['POST', 'GET']
    });
  }

  app.use(
    rateLimit({
      windowMs: 15 * 60 * 1000, // 15 minutes
      max: 100 // limit each IP to 100 requests per windowMs
    })
  );

  const port = process.env.port || 3333;
  await app.listen(port, () => {
    console.log('Listening at http://localhost:' + port + '/' + globalPrefix);
  });
}

bootstrap();
