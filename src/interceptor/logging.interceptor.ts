import {
  CallHandler,
  ExecutionContext,
  Injectable,
  NestInterceptor,
} from '@nestjs/common';
import { tap } from 'rxjs';

@Injectable()
export class LoggingInterceptor implements NestInterceptor {
  intercept(context: ExecutionContext, next: CallHandler) {
    console.log('BEFORE : ..');

    const now = Date.now();
    return next
      .handle()
      .pipe(tap(() => console.log(`AFTER : ${Date.now() - now} ms`)));
  }
}
