import { Module } from '@nestjs/common';
import { FlightModule } from './flight/flight.module';
import { ConfigModule } from '@nestjs/config';
import { CONFIG_DATABASE } from './common/infraestructure/database.config';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: '.env',
      isGlobal: true,
    }), 
    CONFIG_DATABASE(),
    FlightModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
