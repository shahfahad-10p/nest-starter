import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';
import { Observable } from 'rxjs';

@Injectable()
export class AuthGuard implements CanActivate {
  userName = 'shah.fahad@10pearls.com';
  password = '10pearls1+';
  authBase64: string;
  canActivate(
    context: ExecutionContext,
  ): boolean | Promise<boolean> | Observable<boolean> {
    this.authBase64 = Buffer.from(`${this.userName}:${this.password}`).toString(
      'base64',
    );

    const request = context.switchToHttp().getRequest();
    const authHeaders =
      (request.headers.authorization || '').split(' ')[1] || '';

    if (authHeaders) {
      const authenticated = authHeaders === this.authBase64;
      return authenticated;
    }
    return false;
    // throw new Error("Method not implemented.");
  }
}
