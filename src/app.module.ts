import { Module } from '@nestjs/common';
import { PostModule } from './posts/posts.module';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';

@Module({
  imports: [PostModule, AuthModule, UsersModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
