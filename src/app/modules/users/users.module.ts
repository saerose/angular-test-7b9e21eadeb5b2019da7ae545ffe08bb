import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

// Components
import { ReactiveFormsModule } from '@angular/forms';
import { UserComponent } from './components/user/user.component';
import { NewUserComponent } from './pages/new-user/new-user.component';
import { UsersComponent } from './pages/users/users.component';

@NgModule({
  declarations: [
    // Components
    UsersComponent,
    UserComponent,
    NewUserComponent
  ],
  imports: [CommonModule, ReactiveFormsModule],
  providers: []
})
export class UsersModule {}
