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

import {MailboxService} from './services/mailbox/mailbox.service';
import {LetterService} from './services/letter/letter.service';

const routes = [
  {path: '', component: LoginComponent},
  {
    path: 'mail', component: ContentComponent, children: [
    {path: 'settings', component: SettingsComponent},
    {path: ':mailbox', component: MailListComponent, children: [
      {path: ':letter', component: LetterComponent},
    ]}
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
    LetterComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    HttpClientModule
  ],
  providers: [MailboxService,
    LetterService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
