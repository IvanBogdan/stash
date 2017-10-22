export class UserService {
  
  private users: Array<User>

  constructor() {
    this.init();
  }

  private init = (): void => {
    this.users = [
      new User('Ivan', 31, 'male'),
      new User('John', 23, 'male'),
      new User('Alice', 19, 'female')
    ];
  }
  
  public getUsers(): Array<User> {
    return this.users;
  }

  public removeUser(name: string) {
    return this.users = this.users.filter(user => user.getName() !== name);
  }
}

export class User {

  private static _nextId: number = 0;
  private _id: number;
  private _name: string;
  private _age: number;
  private _gender: string;

  constructor(name: string, age: number, gender: string) {
    this._id = User._nextId++;
    this._name = name;
    this._age = age;
    this._gender = gender;
  }

  public getId = (): number => this._id;

  public getName = (): string => this._name;

  public getAge = (): number => this._age;
  
    public getGender = (): string => this._gender;
}