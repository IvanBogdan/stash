import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable()
export class UserService {

  private userlist;
  private getUser;

  constructor(private _http: HttpClient) {
    this.getUser = this._http.get<User>('http://test-api.javascript.ru/v1/bogdanovip/users');
  }

  public removeUser(id: string) {
    return this._http.delete('http://test-api.javascript.ru/v1/bogdanovip/users/' + id, {responseType: 'text'});
  }

  public getUsers() {
    return this.getUser;
  }

  public addUser(userName: string, userEmail: string, userBirthday: Date, userGender: string) {
    this.userlist = {
      users: [
        {fullName: userName, email: userEmail, gender: userGender, birthdate: userBirthday}
      ]
    };
    return this._http.post('http://test-api.javascript.ru/v1/bogdanovip', this.userlist);
  }
}

export class User {
  _id: string;
  fullName: string;
  email: string;
  avatarUrl: string;
  birthdate: Date;
  gender: string;
  address: string;
}
