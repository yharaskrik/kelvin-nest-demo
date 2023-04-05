import { Injectable, UnauthorizedException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { UserSchema } from '../models/user.document';
import { Model } from 'mongoose';
import { User } from '../models/user';

@Injectable()
export class LoginService {
  constructor(@InjectModel(UserSchema.name) private userModel: Model<User>) {}

  async login(email: string, password: string) {
    const user = await this.userModel.findOne({
      email,
    });

    if (!user) {
      throw new UnauthorizedException();
    }

    console.log(user);

    if (user.password === password) {
      return { message: 'You are logged in!' };
    }

    throw new UnauthorizedException();
  }
}
