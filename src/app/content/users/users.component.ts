import { Component, OnInit } from '@angular/core';
import { UserService, User } from '../../user/user.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  users: Array<User>;

  public selectedUser: User;

  constructor(private _userService: UserService) { }

  ngOnInit() {
    this.updateUsers();
  }

  updateUsers(): void {
    this.users = this._userService.getUsers();
  }

  removeUser(name: string): void {
    this._userService.removeUser(name);
    this.updateUsers();
  }

  getUserClass(userId: number) {
    if (this.selectedUser && this.selectedUser.getId() === userId) {
      return 'selectedUser';
    } else {
      return 'user';
    }
  }
}
