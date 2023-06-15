import { Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { Post } from './types';
import { catchError, firstValueFrom } from 'rxjs';
import { AxiosError } from 'axios';

@Injectable()
export class PostsService {
  constructor(private readonly httpService: HttpService) {}

  async findAllPosts(): Promise<Post[]> {
    const { data } = await firstValueFrom(
      this.httpService
        .get<Post[]>('https://jsonplaceholder.typicode.com/posts')
        .pipe(
          catchError((error: AxiosError) => {
            throw 'An error happened!';
          }),
        ),
    );
    return data;
  }

  async findPostById(id: number): Promise<Post> {
    const { data } = await firstValueFrom(
      this.httpService
        .get<Post>(`https://jsonplaceholder.typicode.com/posts/${id}`)
        .pipe(
          catchError((error: AxiosError) => {
            throw 'An error happened!';
          }),
        ),
    );
    return data;
  }

  async addPost(postData: Post): Promise<Post> {
    const { data } = await firstValueFrom(
      this.httpService
        .post<Post>('https://jsonplaceholder.typicode.com/posts', postData)
        .pipe(
          catchError((error: AxiosError) => {
            throw 'An error happened!';
          }),
        ),
    );
    return data;
  }
}
