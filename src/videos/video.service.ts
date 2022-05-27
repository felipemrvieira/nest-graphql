import { Injectable } from '@nestjs/common';
import { Video, User } from 'src/graphql';
import { VideoDTO } from './dto/video.dto';

@Injectable()
export class VideoService {
  private readonly videos: Video[] = [];

  findAll(): Video[] {
    return this.videos;
  }

  create(videoDTO: VideoDTO): Video {
    const author: User = new User();
    author.id = '1';
    author.name = 'John Doe';

    const videoID = this.videos.length + 1;
    const video: Video = new Video();

    video.id = videoID.toString();
    video.title = videoDTO.title;
    video.url = videoDTO.url;
    video.author = author;

    this.videos.push(video);
    return video;
  }
}
