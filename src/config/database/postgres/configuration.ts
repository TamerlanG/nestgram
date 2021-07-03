import { registerAs } from '@nestjs/config';

export default registerAs('postgres', () => ({
  POSTGRES_HOST: process.env.POSTGRES_HOST,
  POSTGRES_POST: process.env.POSTGRES_PORT,
  POSTGRES_USERNAME: process.env.POSTGRES_USERNAME,
  POSTGRES_PASSWORD: process.env.POSTGRES_PASSWORD,
  POSTGRES_DB: process.env.POSTGRES_DB,
  PORT: process.env.PORT,
}));
