import { Module } from '@nestjs/common';
import { TypeOrmModule, TypeOrmModuleAsyncOptions } from '@nestjs/typeorm';
import { PostgresConfigModule } from 'src/config/database/postgres/config.module';
import { PostgresConfigService } from 'src/config/database/postgres/config.service';

@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      imports: [PostgresConfigModule],
      inject: [PostgresConfigService],
      useFactory: (postgresConfigService: PostgresConfigService) =>
        ({
          type: 'postgres',
          host: postgresConfigService.postgres_host,
          port: postgresConfigService.postgres_port,
          username: postgresConfigService.postgres_username,
          password: postgresConfigService.postgres_password,
          database: postgresConfigService.postgres_db,
          entities: [__dirname + '/../**/*.entity{.ts,.js}'],
          synchronize: true,
        } as TypeOrmModuleAsyncOptions),
    }),
  ],
})
export class PostgresDatabaseProviderModule {}
