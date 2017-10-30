import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {RouterModule} from '@angular/router';
import {LoginComponent} from './login/login.component';
import {ContentComponent} from './content/content.component';
import {MailboxComponent} from './content/mailbox/mailbox.component';
import {SidePanelComponent} from './content/mailbox/side-panel/side-panel.component';

const routes = [
  {path: '', component: LoginComponent},
  {path: 'mail', component: ContentComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ContentComponent,
    MailboxComponent,
    SidePanelComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
