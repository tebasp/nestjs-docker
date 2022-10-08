import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import {
  FastifyAdapter,
  NestFastifyApplication,
} from '@nestjs/platform-fastify';

async function bootstrap() {
  const app = await NestFactory.create<NestFastifyApplication>(
    AppModule,
    new FastifyAdapter(),
  );

  const PORT = process.env.PORT || 3000;
  await app.listen(PORT, (err, addr) => {
    if (err) {
      console.log(err);
    } else {
      console.log(`App is running in ${addr}`);
    }
  });
}
bootstrap();
