import { join } from 'path';

import { Module } from '@nestjs/common';
import { ServeStaticModule } from '@nestjs/serve-static';

import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [
    // Configuración del ServeStaticModule
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '../../frontend', 'dist/frontend/browser'),
      exclude: ['v1/api*'],
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
