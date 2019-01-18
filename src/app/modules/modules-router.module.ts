import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainComponent } from './main/pages/main.component';
import { ModulesComponent } from './modules.component';
import { PostsComponent } from './posts/pages/posts/posts.component';
import { UserComponent } from './users/components/user/user.component';

const routes: Routes = [
  {
    path: '',
    component: ModulesComponent,
    children: [
      {
        path: '',
        redirectTo: 'modules',
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
        component: UserComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  declarations: [ModulesComponent]
})

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})
export class ModulesRouterModule { }
