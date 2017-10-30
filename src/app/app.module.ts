import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {HttpClientModule} from '@angular/common/http';

import {AppComponent} from './app.component';
import {ContentComponent} from './content/content.component';
import {UsersComponent} from './content/users/users.component';
import {UserCardComponent} from './content/users/user-card/user-card.component';
import {UserService} from './services/user/user.service';
import {UserAddComponent} from './content/users/user-add/user-add.component';
import {LoginComponent} from './login/login.component';
import {RouterModule} from '@angular/router';

const routes = [
  {path: '', component: LoginComponent},
  {path: 'users', component: UsersComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    ContentComponent,
    UsersComponent,
    UserCardComponent,
    UserAddComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(routes)
  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
