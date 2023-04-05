import { Injectable } from '@nestjs/common';

@Injectable()
export class TrackApiTimeService {
  trackTime(time: number) {
    console.log(`We tracked a total of: ${time}ms`);
  }
}
