import { Inject, Injectable } from '@nestjs/common';
import {
  ClientNats,
  Ctx,
  EventPattern,
  MessagePattern,
  NatsContext,
  Payload,
  Transport,
} from '@nestjs/microservices';
import { Cron } from '@nestjs/schedule';

@Injectable()
export class NatsService {
  constructor(
    @Inject('NATS_CLIENT') protected readonly natsClient: ClientNats,
  ) {}

  @Cron('* * * * * *')
  async handleCron() {
    console.log(new Date().getTime());
    await this.natsClient.emit('test', 'data');
  }

  @MessagePattern('*', Transport.NATS)
  async message(@Payload() data: string, @Ctx() context: NatsContext) {
    console.log(data);
  }
  @EventPattern('*', Transport.NATS)
  async event(@Payload() data: string, @Ctx() context: NatsContext) {
    console.log(data);
  }
}
