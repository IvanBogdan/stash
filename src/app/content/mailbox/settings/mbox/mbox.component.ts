import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {MailboxService} from '../../../../services/mailbox/mailbox.service';
import {MailBox} from '../../../../services/mailbox/MailBox';

@Component({
  selector: 'app-mbox',
  templateUrl: './mbox.component.html',
  styleUrls: ['./mbox.component.css']
})
export class MboxComponent implements OnInit {

  private boxList: [MailBox];
  @Output() boxEdited: EventEmitter<any> = new EventEmitter();

  constructor(private mailboxService: MailboxService) {
  }

  ngOnInit() {
    this.updateBoxes();
  }

  updateBoxes(): void {
    this.mailboxService.getMailBoxes().subscribe(boxes => this.boxList = boxes);
  }

  getBoxes(): [MailBox] {
    return this.boxList;
  }

  addMailbox(boxName: string) {
    this.mailboxService.addMailBox(boxName)
      .subscribe(_ => this.updateBoxes());
  }

  removeMailbox(boxId: string) {
    this.mailboxService.removeMailBox(boxId)
      .subscribe(_ => this.updateBoxes());
  }
}
