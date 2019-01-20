import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

// Components
import { ReactiveFormsModule } from '@angular/forms';
import { UserComponent } from './components/user/user.component';
import { UsersComponent } from './pages/users/users.component';

@NgModule({
  declarations: [
    // Components
    UsersComponent,
    UserComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    ReactiveFormsModule
  ],
  providers: []
})
export class UsersModule {}
