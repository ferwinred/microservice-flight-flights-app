import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { PassengerState } from "src/common/infraestructure/enum";

@Schema()
export class Passenger {

    @Prop({
        required: true,
    })
    firstName: string;

    @Prop({
        required: true,
    })
    lastName: string;

    @Prop({
        required: true,
    })
    document: string;

    @Prop({
        required: true,
    })
    phone: string;

    @Prop({
        required: true,
    })
    email: string;

    @Prop({
        required: true,
        default: PassengerState.INACTIVE,
    })
    state: string;
    
}


export const PassengerSchema = SchemaFactory.createForClass(Passenger);