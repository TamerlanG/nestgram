import { Module } from '@nestjs/common';
import { AuthModule } from './authentication/auth.module';
import { PostgresConfigModule } from './config/database/postgres/config.module';
import { JwtConfigModule } from './config/jwt/config.module';
import { UsersModule } from './models/users/users.module';
import { PostgresDatabaseProviderModule } from './providers/database/postgres/provider.module';

@Module({
  imports: [
    PostgresConfigModule,
    PostgresDatabaseProviderModule,
    JwtConfigModule,
    UsersModule,
    AuthModule,
  ],
})
export class AppModule {}
