import { ConfigService } from '@nestjs/config';
import { ClientProvider, Transport } from '@nestjs/microservices';

export const natsClientModuleFactory = (): ClientProvider => {
  const natsServersString = 'localhost:4222';
  if (!natsServersString) {
    throw new Error('NASTS_SERVERS environment variable must be defined');
  }

  return {
    transport: Transport.NATS,
    options: {
      servers: [...natsServersString.split(',')],
      name: 'Brodcaster',
    },
  };
};
