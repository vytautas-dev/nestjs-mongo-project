import { Module } from '@nestjs/common';
import { HttpModule } from '@nestjs/axios';
import { PostsService } from './posts.service';
import { HttpConfigService } from '../httpConfig/HttpConfig.service';
import { PostsController } from './posts.controller';

@Module({
  imports: [
    HttpModule.registerAsync({
      useClass: HttpConfigService,
    }),
  ],
  providers: [PostsService],
  controllers: [PostsController],
})
export class PostsModule {}
