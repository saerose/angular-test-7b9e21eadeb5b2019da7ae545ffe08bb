import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// Components
import { AppRoutingModule } from './app-routing.module';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { MainComponent } from './modules/main/pages/main.component';
import { PostsComponent } from './modules/posts/pages/posts/posts.component';
import { UsersComponent } from './modules/users/pages/users/users.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    MainComponent,
    PostsComponent,
    UsersComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
