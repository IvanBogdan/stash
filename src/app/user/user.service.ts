import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable()
export class UserService {
  
  private users;

  public userlist = {
    users: [
      { fullName: 'Ivan', email: 'ivan@mail.ru', gender: 'M', birthdate: new Date(1986, 4, 30) }
    ]
  }
    // new User('Ivan', 'ivan@mail.ru', null, new Date(1986, 4, 30), 'M', 'ivanStreet 23')

  constructor(private _http: HttpClient) {
  }

  private init = (): void => {
  }
  
  public getUsers(): Array<User> {
    return this.users;
  }

  public removeUser(id: string) {
    return this._http.delete('http://test-api.javascript.ru/v1/bogdanovip/users/' + id);
  }

  public getAll() {
    return this._http.get('http://test-api.javascript.ru/v1/bogdanovip/users');
  }

  public addUser() {
    return this._http.post('http://test-api.javascript.ru/v1/bogdanovip', this.userlist);
  }
}

export class User {
  public _id: string;
  public fullName: string;
  public email: string
  public avatarUrl: string
  public birthdate: Date
  public gender: string
  public address: string

  constructor(fullName: string, email: string, avatarUrl: string, birthdate: Date, gender: string, address: string) {
    this.fullName = fullName;
    this.email = email;
    this.avatarUrl = avatarUrl;
    this.birthdate = birthdate;
    this.gender = gender;
    this.address = address;
  }
}