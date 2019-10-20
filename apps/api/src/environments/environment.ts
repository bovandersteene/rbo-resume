import { EnvironmentType } from './environment.type';

export const environment: EnvironmentType = {
  production: false,
  db: { type: 'mysql',
    host: 'localhost',
    port: 3307,
    username: 'root',
    password: 'demo',
    database: 'resume',
    entityPrefix: 'resume_',}
};
