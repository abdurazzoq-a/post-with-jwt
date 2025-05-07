import { Body, Controller, Post, Req, UseGuards } from '@nestjs/common';
import { PostService } from './posts.service';
import { CreatePostDto } from './dto/create-post.dto';
import { JwtGuard } from 'src/common/guard/jwt.guard';
import { CurrentUser } from 'src/common/decorators/users.decorator';

@Controller('posts')
export class PostController {
  constructor(private readonly postService: PostService) {}

  @Post()
  @UseGuards(JwtGuard)
  async create(@Body() data: CreatePostDto, @CurrentUser() user) {
    console.log(user);

    return await this.postService.create(data);
  }
}
