import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './modules/main/pages/main.component';
import { PostsComponent } from './modules/posts/pages/posts/posts.component';
import { NewUserComponent } from './modules/users/pages/new-user/new-user.component';
import { UsersComponent } from './modules/users/pages/users/users.component';

const routes: Routes = [
  { path: '',
    redirectTo: 'main',
    pathMatch: 'full'
  },
  {
    path: 'main',
    component: MainComponent
  },
  {
    path: 'posts',
    component: PostsComponent
  },
  {
    path: 'users',
    component: UsersComponent
  },
  {
    path: 'new',
    component: NewUserComponent
  }
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
    ],
  exports: [RouterModule]
})

export class AppRoutingModule {
}
