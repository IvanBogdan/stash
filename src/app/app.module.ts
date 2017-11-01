import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {HttpClientModule} from '@angular/common/http';

import {AppComponent} from './app.component';
import {RouterModule} from '@angular/router';
import {LoginComponent} from './login/login.component';
import {ContentComponent} from './content/content.component';
import {MailboxComponent} from './content/mailbox/mailbox.component';
import {SidePanelComponent} from './content/mailbox/side-panel/side-panel.component';
import {MailListComponent} from './content/mailbox/mail-list/mail-list.component';
import {SettingsComponent} from './content/mailbox/settings/settings.component';
import {MboxComponent} from './content/mailbox/settings/mbox/mbox.component';
import {LetterSetComponent} from './content/mailbox/settings/letter-set/letter-set.component';
import {LetterComponent} from './content/mailbox/mail-list/letter/letter.component';
import {UsersComponent} from './content/users/users.component';
import {UserCardComponent} from './content/users/user-card/user-card.component';
import {UserAddComponent} from './content/users/user-add/user-add.component';

import {MailboxService} from './services/mailbox/mailbox.service';
import {LetterService} from './services/letter/letter.service';
import {UserService} from './services/user/user.service';

const routes = [
  {path: '', pathMatch: 'full', component: LoginComponent},
  {
    path: 'imail', component: ContentComponent, children: [
    {
      path: 'mail', component: MailboxComponent, children: [
      {path: 'settings', component: SettingsComponent},
      {
        path: ':mailbox', component: MailListComponent, children: [
        {path: ':letter', component: LetterComponent},
      ]
      }
    ]
    },
    {path: 'users', component: UsersComponent}
  ]
  }
];

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ContentComponent,
    MailboxComponent,
    SidePanelComponent,
    MailListComponent,
    SettingsComponent,
    MboxComponent,
    LetterSetComponent,
    LetterComponent,
    UsersComponent,
    UserCardComponent,
    UserAddComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    HttpClientModule
  ],
  providers: [MailboxService,
    LetterService,
    UserService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
