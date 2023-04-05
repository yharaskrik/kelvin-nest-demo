import { Injectable } from '@nestjs/common';

@Injectable()
export class GetMessageService {
  getMessage() {
    return { message: 'Hello World' };
  }
}
