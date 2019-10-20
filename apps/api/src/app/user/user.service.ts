import { Injectable } from '@nestjs/common';

@Injectable()
export class UserService {

  findOne(userName: string){
    return {
      userName: 'Bo'
    }
  }
}
