import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';

ConfigModule.forRoot({
	isGlobal: true,
})

export const CONFIG_DATABASE = () => 
    MongooseModule.forRoot(process.env.DB_URL)
	