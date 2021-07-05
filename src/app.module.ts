import { Module } from '@nestjs/common';
import { PostgresConfigModule } from './config/database/postgres/config.module';
import { UsersModule } from './models/users/users.module';
import { PostgresDatabaseProviderModule } from './providers/database/postgres/provider.module';

@Module({
  imports: [PostgresConfigModule, PostgresDatabaseProviderModule, UsersModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
