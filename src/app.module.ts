import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './user/user.module';
import { PrismaModule } from './prisma/prisma.module';
import { UserPrismaRepository } from './user/infraestructure/prisma-user.repository';
import { AuthModule } from './auth/auth.module';
import { PublicationModule } from './publication/publication.module';
import { CommentModule } from './comment/comment.module';
import { LikeModule } from './like/like.module';
import { LikeModule } from './like/like.module';

@Module({
  imports: [
    UsersModule,
    PrismaModule,
    AuthModule,
    PublicationModule,
    CommentModule,
    LikeModule,
  ],
  controllers: [AppController],
  providers: [AppService, UserPrismaRepository],
})
export class AppModule {}
