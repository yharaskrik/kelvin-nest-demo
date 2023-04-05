import { Injectable } from '@nestjs/common';
import { GetMessageService } from './get-message.service';

@Injectable()
export class AppService {
  constructor(private getMessageService: GetMessageService) {}

  getData(): { message: string } {
    return this.getMessageService.getMessage();
  }
}
