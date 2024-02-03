import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Passenger } from "./passenger.entity";
import mongoose from "mongoose";
import { FlightState } from "src/common/infraestructure/enum";

@Schema()
export class Flight {

    @Prop({
        required: true,
    })
    pilot: string;

    @Prop({
        required: true,
    })
    airplane: string;

    @Prop({
        required: true,
    })
    destinationCity: string;

    @Prop({
        required: true,
    })
    flightDate: string;

    @Prop({
        required: true,
        default: FlightState.PENDING,
    })
    state: string;

    @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'Passenger' })
    passengers: Passenger[];

}


export const FlightSchema = SchemaFactory.createForClass(Flight);