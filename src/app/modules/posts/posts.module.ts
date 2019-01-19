import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { PostComponent } from './components/post/post.component';
import { PostsComponent } from './pages/posts/posts.component';

@NgModule({
  declarations: [PostsComponent, PostComponent],
  imports: [CommonModule],
  providers: []
})
export class PostsModule {}
