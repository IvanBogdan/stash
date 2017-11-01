import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {MailBox} from '../../../services/mailbox/MailBox';
import {MailboxService} from '../../../services/mailbox/mailbox.service';
import {LetterService} from "../../../services/letter/letter.service";
import {Letter} from "../../../services/letter/Letter";
import {Observable} from "rxjs/Observable";

@Component({
  selector: 'app-mail-list',
  templateUrl: './mail-list.component.html',
  styleUrls: ['./mail-list.component.css']
})
export class MailListComponent implements OnInit {

  private box: MailBox;
  private letterList: Letter[];

  constructor(private route: ActivatedRoute, private mailboxService: MailboxService, private letterService: LetterService) {
  }

  ngOnInit() {
    this.route.params.subscribe(
      params => this.mailboxService.getMailBox(params.mailbox).subscribe(
        box => {
          this.box = box;
          this.updateLetters();
        }
      )
    );
  }

  getBox(): MailBox {
    return this.box;
  }

  updateLetters(): void {
    this.letterService.getLetters().subscribe(letters => this.letterList = letters.filter(letter => letter.mailbox === this.box._id));
  }

  getLetters(): Letter[] {
    return this.letterList;
  }
}
