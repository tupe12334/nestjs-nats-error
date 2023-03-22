import { Controller } from '@nestjs/common';
import {
  Ctx,
  EventPattern,
  MessagePattern,
  NatsContext,
  Payload,
  Transport,
} from '@nestjs/microservices';

@Controller('nats')
export class NatsController {
  @MessagePattern('test', Transport.NATS)
  async message(@Payload() data: string, @Ctx() context: NatsContext) {
    console.log(data);
  }
  @EventPattern('test', Transport.NATS)
  async event(@Payload() data: string, @Ctx() context: NatsContext) {
    console.log(data);
  }

  @MessagePattern('test', Transport.NATS)
  async messageEmpty(data: any) {
    console.log(data);
  }
  @EventPattern('test', Transport.NATS)
  async eventEmpty(data: any) {
    console.log(data);
  }
}
