import { Module } from '@nestjs/common';
import { HealthcheckController } from './healthcheck/healthcheck.controller';
import { PostsModule } from './posts/posts.module';
import { UsersModule } from './users/users.module';
import { AuthModule } from './auth/auth.module';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    PostsModule,
    UsersModule,
    AuthModule,
    MongooseModule.forRoot('mongodb://localhost/nest', {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }),
  ],
  controllers: [HealthcheckController],
  providers: [],
})
export class AppModule {}
