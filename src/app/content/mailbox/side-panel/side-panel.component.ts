import {Component, OnInit} from '@angular/core';
import {MailBox} from '../../../services/mailbox/MailBox';
import {MailboxService} from '../../../services/mailbox/mailbox.service';

@Component({
  selector: 'app-side-panel',
  templateUrl: './side-panel.component.html',
  styleUrls: ['./side-panel.component.css']
})
export class SidePanelComponent implements OnInit {

  private boxList: [MailBox];

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
}
