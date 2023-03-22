import { Injectable } from "@nestjs/common";
import {
  Ctx,
  EventPattern,
  MessagePattern,
  NatsContext,
  Payload,
  Transport,
} from "@nestjs/microservices";
import { Cron } from "@nestjs/schedule";
import { NatsServiceBase } from "./base/nats.service.base";
import { MyMessageBrokerTopics } from "./topics";

@Injectable()
export class NatsService extends NatsServiceBase {
  @Cron("* * * * * *")
  async handleCron() {
    console.log(new Date().getTime());
    await this.natsClient.emit("dsaf", "test");
  }

  @MessagePattern("*", Transport.NATS)
  async getTimeUS(@Payload() data: string, @Ctx() context: NatsContext) {
    console.log("dasf");

    console.log(data);
  }
  @EventPattern("*", Transport.NATS)
  async getTimsdfaeUS(@Payload() data: string, @Ctx() context: NatsContext) {
    console.log("dasf");

    console.log(data);
  }
}
