import { Injectable, UnauthorizedException } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { Strategy } from 'passport';

@Injectable()
export class AuthService {
  async validateUser(username: string, password: string) {
    return null;
  }
}
