import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
/**
 * Service dealing with JWT config based operations.
 *
 * @class
 */
@Injectable()
export class JwtConfigService {
  constructor(private configService: ConfigService) {}

  get jwt_secret(): string {
    return this.configService.get<string>('jwt.JWT_SECRET');
  }

  get jwt_expires_in(): number {
    return Number(this.configService.get<number>('jwt.JWT_EXPIRES_IN'));
  }
}
