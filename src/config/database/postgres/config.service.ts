import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
/**
 * Service dealing with postgres config based operations.
 *
 * @class
 */
@Injectable()
export class PostgresConfigService {
  constructor(private configService: ConfigService) {}

  get postgres_host(): string {
    return this.configService.get<string>('postgres.POSTGRES_HOST');
  }
  get postgres_port(): number {
    return Number(this.configService.get<number>('postgres.POSTGRES_PORT'));
  }
  get postgres_username(): string {
    return this.configService.get<string>('postgres.POSTGRES_USERNAME');
  }
  get postgres_password(): string {
    return this.configService.get<string>('postgres.POSTGRES_PASSWORD');
  }
  get postgres_db(): string {
    return this.configService.get<string>('postgres.POSTGRES_DB');
  }
  get port(): number {
    return Number(this.configService.get<number>('postgres.PORT'));
  }
}
