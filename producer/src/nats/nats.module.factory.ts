import { ClientProvider, Transport } from '@nestjs/microservices';

export const natsClientModuleFactory = (): ClientProvider => {
  return {
    transport: Transport.NATS,
    options: {
      servers: 'localhost:4222',
      name: 'Producer',
    },
  };
};
