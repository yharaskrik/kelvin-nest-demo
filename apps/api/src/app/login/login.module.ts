import { Module } from '@nestjs/common';
import { LoginController } from './login.controller';
import { LoginService } from './login.service';
import { MongooseModule } from '@nestjs/mongoose';
import { UserSchema, userSchema } from '../models/user.document';

@Module({
  controllers: [LoginController],
  providers: [LoginService],
  imports: [
    MongooseModule.forFeature([{ name: UserSchema.name, schema: userSchema }]),
  ],
})
export class LoginModule {}
