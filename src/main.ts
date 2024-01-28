import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Transport } from '@nestjs/microservices';
import { MailQueue } from './flight/infraestructure/enum';

async function bootstrap() {
  const app = await NestFactory.createMicroservice(AppModule, {
    transport: Transport.RMQ,
    options:{
      urls: [process.env.AMQP_URL],
      queue: MailQueue.FlightQueue
    }
  });
  await app.listen();
}
bootstrap();
