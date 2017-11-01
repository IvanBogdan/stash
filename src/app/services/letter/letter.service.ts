import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import {Letter} from './Letter';
import {Consts} from '../Consts';

@Injectable()
export class LetterService {

  private letterObs: Observable<[Letter]>;

  constructor(private http: HttpClient) {
    this.letterObs = this.http.get<[Letter]>(Consts.LETTERS_URL);
  }

  public getLetters(): Observable<[Letter]> {
    return this.letterObs;
  }

  public getLetter(id: string): Observable<Letter> {
    return this.http.get<Letter>(Consts.LETTERS_URL + '/' + id);
  }

  public removeLetter(id: string): Observable<string> {
    return this.http.delete(Consts.LETTERS_URL + '/' + id, {responseType: 'text'});
  }

  public addLetter(mailbox: string, subject: string, body: string, to: string): Observable<[Letter]> {
    return this.http.post<[Letter]>(Consts.LETTERS_URL, {mailbox: mailbox, subject: subject, body: body, to: to});
  }
}
