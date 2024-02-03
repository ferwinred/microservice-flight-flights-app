import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { FlightService } from './application/flight.service';
import { FlightController } from './infraestructure/flight.controller';
import { Flight, FlightSchema } from './domain/entities/flight.entity';
import { Passenger, PassengerSchema } from './domain/entities/passenger.entity';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Flight.name, schema: FlightSchema }, { name: Passenger.name, schema: PassengerSchema }])
  ],
  controllers: [FlightController],
  providers: [FlightService],
})
export class FlightModule {}
