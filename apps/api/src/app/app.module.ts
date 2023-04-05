import { Module } from '@nestjs/common';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { GetMessageService } from './get-message.service';
import { TrackApiTimeService } from './track-api-time.service';
import { LoginModule } from './login/login.module';
import { MongooseModule } from '@nestjs/mongoose';
import { userSchema } from './models/user.document';

@Module({
  imports: [LoginModule, MongooseModule.forRoot('mongodb://localhost/nest')],
  controllers: [AppController],
  providers: [AppService, GetMessageService, TrackApiTimeService],
})
export class AppModule {}
