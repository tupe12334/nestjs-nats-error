import { Module } from '@nestjs/common';
import { ClientsModule } from '@nestjs/microservices';
import { natsClientModuleFactory } from './nats.module.factory';
import { NatsService } from './nats.service';

@Module({
  imports: [
    ClientsModule.registerAsync([
      {
        name: 'NATS_CLIENT',
        useFactory: natsClientModuleFactory,
      },
    ]),
  ],
  providers: [NatsService],
  exports: [NatsService, ClientsModule],
})
export class NatsModule {}
