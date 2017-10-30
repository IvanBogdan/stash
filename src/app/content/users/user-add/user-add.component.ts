import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {UserService} from '../../../services/user/user.service';

@Component({
  selector: 'app-user-add',
  templateUrl: './user-add.component.html',
  styleUrls: ['./user-add.component.css']
})
export class UserAddComponent implements OnInit {

  @Output() userAdded: EventEmitter<any> = new EventEmitter();

  constructor(private _userService: UserService) { }

  ngOnInit() {
  }

  addUser(userName: string, userEmail: string, userBirthday: Date, userGender: string) {
    this._userService.addUser(userName, userEmail, userBirthday, userGender)
      .subscribe(
        () => this.userAdded.emit());
  }
}
