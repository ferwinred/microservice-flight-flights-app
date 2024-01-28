import { Module } from '@nestjs/common';
import { FlightService } from './application/flight.service';
import { FlightController } from './infraestructure/flight.controller';

@Module({
  controllers: [FlightController],
  providers: [FlightService],
})
export class FlightModule {}
