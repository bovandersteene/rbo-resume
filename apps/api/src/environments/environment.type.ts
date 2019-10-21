import { MysqlConnectionOptions } from 'typeorm/driver/mysql/MysqlConnectionOptions';
import { TypeOrmModuleOptions } from '@nestjs/typeorm';

export interface EnvironmentType {
  production: boolean,
  db: Partial<TypeOrmModuleOptions>;
  jwtConstants: {
    secret: string,
    expiresIn: string
  },
  fe_path: string
}
