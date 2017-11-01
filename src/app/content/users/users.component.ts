import {Component, OnInit} from '@angular/core';
import {UserService, User} from '../../services/user/user.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  users: Array<User>;

  public selectedUser: User;

  constructor(private _userService: UserService) {
  }

  ngOnInit() {
    this.updateUsers();
  }

  getUserClass(_id: string): string {
    if (this.selectedUser && this.selectedUser._id === _id) {
      return 'selectedUser';
    } else {
      return 'user';
    }
  }

  updateUsers(): void {
    this._userService.getUsers().subscribe(users => this.users = users);
  }

  removeUser(id: string): void {
    this._userService.removeUser(id)
      .subscribe(
        () => this.updateUsers());
  }

  setSelectedUser(user: User): void {
    if (this.selectedUser == null || this.selectedUser.fullName !== user.fullName) {
      this.selectedUser = user;
    } else {
      this.selectedUser = null;
    }
  }
}
