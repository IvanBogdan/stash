import { Component, OnInit } from '@angular/core';
import { UserService, User } from '../../user/user.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  users;

  public selectedUser: User;

  constructor(private _userService: UserService) { }

  ngOnInit() {
    this.updateUsers();
  }

  updateUsers(): void {
    this._userService.getAll().subscribe(users => this.users = users);
  }

  removeUser(_id: string): void {
    this._userService.removeUser(_id).subscribe();
    this.updateUsers();
  }

  getUserClass(_id: string): string {
    if (this.selectedUser && this.selectedUser._id === _id) {
      return 'selectedUser';
    } else {
      return 'user';
    }
  }

  setSelectedUser(user: User): void {
    if (this.selectedUser == null || this.selectedUser.fullName !== user.fullName) {
      this.selectedUser = user;
    } else {
      this.selectedUser = null;
    }
  }

  addUser() {
    this._userService.addUser().subscribe();
    this.updateUsers();
  }
}
