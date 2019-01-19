import { Component, Input, OnInit } from '@angular/core';
import { IPost as Post } from '../../../../types';
import { ModulesService } from '../../../modules.service';

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
      .subscribe((response: Post[]) => {
        this.posts = response;
      });
  }
}
