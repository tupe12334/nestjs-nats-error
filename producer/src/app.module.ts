import { Module } from '@nestjs/common';
import { ScheduleModule } from '@nestjs/schedule';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { NatsModule } from './nats/nats.module';

@Module({
  imports: [NatsModule, ScheduleModule.forRoot()],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
