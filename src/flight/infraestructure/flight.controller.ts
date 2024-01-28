import { Controller } from '@nestjs/common';
import { MessagePattern, Payload } from '@nestjs/microservices';
import { FlightService } from '../application/flight.service';
import { CreateFlightDto } from './dto/create-flight.dto';
import { UpdateFlightDto } from './dto/update-flight.dto';

@Controller()
export class FlightController {
  constructor(private readonly flightService: FlightService) {}

  @MessagePattern('createFlight')
  create(@Payload() createFlightDto: CreateFlightDto) {
    return this.flightService.create(createFlightDto);
  }

  @MessagePattern('findAllFlight')
  findAll() {
    return this.flightService.findAll();
  }

  @MessagePattern('findOneFlight')
  findOne(@Payload() id: number) {
    return this.flightService.findOne(id);
  }

  @MessagePattern('updateFlight')
  update(@Payload() updateFlightDto: UpdateFlightDto) {
    return this.flightService.update(updateFlightDto.id, updateFlightDto);
  }

  @MessagePattern('removeFlight')
  remove(@Payload() id: number) {
    return this.flightService.remove(id);
  }
}
