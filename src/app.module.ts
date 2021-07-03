import { Module } from '@nestjs/common';
import { PostgresConfigModule } from './config/database/postgres/config.module';
import { PostgresDatabaseProviderModule } from './providers/database/postgres/provider.module';

@Module({
  imports: [PostgresConfigModule, PostgresDatabaseProviderModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
