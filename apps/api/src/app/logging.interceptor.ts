import {
  CallHandler,
  ExecutionContext,
  Injectable,
  NestInterceptor,
} from '@nestjs/common';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { TrackApiTimeService } from './track-api-time.service';

@Injectable()
export class LoggingInterceptor implements NestInterceptor {
  constructor(private trackApiTimeService: TrackApiTimeService) {}

  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    console.log('Before...');

    const now = Date.now();
    return next.handle().pipe(
      tap(() => console.log(`After... ${Date.now() - now}ms`)),
      tap(() => this.trackApiTimeService.trackTime(Date.now() - now))
    );
  }
}
