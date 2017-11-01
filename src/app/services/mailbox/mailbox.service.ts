import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {MailBox} from './MailBox';
import {Consts} from '../Consts';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class MailboxService {

  private mailBoxObs: Observable<[MailBox]>;

  constructor(private http: HttpClient) {
    this.mailBoxObs = this.http.get<[MailBox]>(Consts.MAILBOXES_URL);
  }

  public getMailBoxes(): Observable<[MailBox]> {
    return this.mailBoxObs;
  }

  public getMailBox(id: string): Observable<MailBox> {
    return this.http.get<MailBox>(Consts.MAILBOXES_URL + '/' + id);
  }

  public removeMailBox(id: string): Observable<string> {
    return this.http.delete(Consts.MAILBOXES_URL + '/' + id, {responseType: 'text'});
  }

  public addMailBox(boxName: string): Observable<[MailBox]> {
    return this.http.post<[MailBox]>(Consts.MAILBOXES_URL, {title: boxName});
  }
}
