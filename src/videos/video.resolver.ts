import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { Video } from '../../src/graphql';
import { VideoDTO } from './dto/video.dto';
import { VideoService } from './video.service';

@Resolver('Video')
export class VideoResolver {
  constructor(private readonly videoService: VideoService) {}

  @Query()
  async videos(): Promise<any> {
    return this.videoService.findAll();
  }

  @Mutation('createVideo')
  async create(@Args('input') videoDTO: VideoDTO): Promise<Video> {
    return this.videoService.create(videoDTO);
  }
}
