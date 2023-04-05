import {
  Body,
  Controller,
  Post,
  Query,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { LoginService } from './login.service';
import { IsEmail, IsInt, IsNotEmpty } from 'class-validator';

interface AuthBody {
  email: string;
  password: string;
}

class AuthBodyDto implements AuthBody {
  @IsNotEmpty()
  @IsEmail()
  email: string;

  @IsNotEmpty()
  password: string;
}

@Controller('login')
export class LoginController {
  constructor(private loginService: LoginService) {}

  @Post()
  loginUser(@Body() body: AuthBodyDto) {
    console.log(body);
    return this.loginService.login(body.email, body.password);
  }
}
