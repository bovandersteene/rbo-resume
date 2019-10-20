import { Controller, Post, Request, UseGuards } from '@nestjs/common';

import { AppService } from './app.service';
import { AuthGuard } from '@nestjs/passport';
import { AuthService } from './auth/auth.service';
import { ApiBearerAuth } from '@nestjs/swagger';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService,
              private readonly authService: AuthService) {}


  @UseGuards(AuthGuard('local'))
  @Post('auth/login')
  @ApiBearerAuth()
  async login(@Request() req) {
    return this.authService.login(req.user);
  }
}
