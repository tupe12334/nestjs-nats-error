import { Injectable } from '@nestjs/common';
import {
  Ctx,
  EventPattern,
  MessagePattern,
  NatsContext,
  Payload,
  Transport,
} from '@nestjs/microservices';

@Injectable()
export class NatsService {
  @MessagePattern('*', Transport.NATS)
  async message(@Payload() data: string, @Ctx() context: NatsContext) {
    console.log(data);
  }
  @EventPattern('*', Transport.NATS)
  async event(@Payload() data: string, @Ctx() context: NatsContext) {
    console.log(data);
  }
}
