import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {HttpClientModule} from '@angular/common/http';

import {AppComponent} from './app.component';
import {ContentComponent} from './content/content.component';
import {UsersComponent} from './content/users/users.component';
import {UserCardComponent} from './content/users/user-card/user-card.component';
import {UserService} from './user/user.service';

@NgModule({
  declarations: [
    AppComponent,
    ContentComponent,
    UsersComponent,
    UserCardComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
