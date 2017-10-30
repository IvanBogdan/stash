import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import {User} from '../../../services/user/user.service';

@Component({
  selector: 'app-user-card',
  templateUrl: './user-card.component.html',
  styleUrls: ['./user-card.component.css']
})
export class UserCardComponent implements OnInit {

  @Input() user: User;
  @Output() userSelected: EventEmitter<any> = new EventEmitter();
  @Output() userRemover: EventEmitter<any> = new EventEmitter();

  constructor() {
  }

  ngOnInit() {
  }

  selectUser() {
    this.userSelected.emit();
  }

  removeUser() {
    this.userRemover.emit();
  }

  getAvatar(): string {
    if (this.user.gender === 'M') {
      return 'assets/image/profile/img_avatar_male.png';
    } else {
      return 'assets/image/profile/img_avatar_female.png';
    }
  }
}
