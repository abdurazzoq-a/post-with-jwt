import { Injectable } from '@nestjs/common';
import { CreatePostDto } from './dto/create-post.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class PostService {
  constructor(private readonly prismaService: PrismaService) {}

  create(data: CreatePostDto) {
    return this.prismaService.post.create({ data: { ...data, user_id: 1 } });
  }
}
