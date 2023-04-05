import {
  Controller,
  Get,
  ParseArrayPipe,
  ParseIntPipe,
  Post,
  Query,
  UseInterceptors,
} from '@nestjs/common';

import { AppService } from './app.service';

import {
  Injectable,
  NestInterceptor,
  ExecutionContext,
  CallHandler,
} from '@nestjs/common';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { LoggingInterceptor } from './logging.interceptor';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('hello')
  getData(@Query('message') message: string) {
    console.log(message, typeof message);
    return this.appService.getData();
  }
}
