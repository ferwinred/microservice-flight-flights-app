import { Injectable } from '@nestjs/common';
import { CreateFlightDto } from '../infraestructure/dto/create-flight.dto';
import { UpdateFlightDto } from '../infraestructure/dto/update-flight.dto';

@Injectable()
export class FlightService {
  create(createFlightDto: CreateFlightDto) {
    return 'This action adds a new flight';
  }

  findAll() {
    return `This action returns all flight`;
  }

  findOne(id: number) {
    return `This action returns a #${id} flight`;
  }

  update(id: number, updateFlightDto: UpdateFlightDto) {
    return `This action updates a #${id} flight`;
  }

  remove(id: number) {
    return `This action removes a #${id} flight`;
  }
}
