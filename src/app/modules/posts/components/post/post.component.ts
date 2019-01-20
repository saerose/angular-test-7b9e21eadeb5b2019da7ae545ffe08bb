import { Component, Input, OnInit } from '@angular/core';
import { IPost as Post, IResponse as Response } from '../../../../types';
import { ModulesService } from '../../../modules.service';

const NOT_FOUND = 404;

@Component({
  selector: 'post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {
  posts: Post[];

  constructor(
    private modulesService: ModulesService
  ) {}

  ngOnInit(): void {
    this.getPosts();
  }

  getPosts(): void {
    this.modulesService.getPostsFromApi()
      .subscribe((response: Response) => {
        this.posts = response.body as Post[];
        if ( Number(status) === NOT_FOUND) {
          window.location.pathname = '/error';
        }
      });
  }
}
