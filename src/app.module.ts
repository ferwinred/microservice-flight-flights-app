import { Module } from '@nestjs/common';
import { FlightModule } from './flight/flight.module';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: '.env',
      isGlobal: true,
    }), 
    FlightModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
