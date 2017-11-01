import {Component, OnInit} from '@angular/core';
import {Letter} from '../../../../services/letter/Letter';
import {LetterService} from '../../../../services/letter/letter.service';

@Component({
  selector: 'app-letter-set',
  templateUrl: './letter-set.component.html',
  styleUrls: ['./letter-set.component.css']
})
export class LetterSetComponent implements OnInit {

  private letterList: [Letter];

  constructor(private letterService: LetterService) {
  }

  ngOnInit() {
    this.updateLetters();
  }

  updateLetters(): void {
    this.letterService.getLetters().subscribe(letters => this.letterList = letters);
  }

  getLetters(): [Letter] {
    return this.letterList;
  }

  addLetter(mailbox: string, subject: string, body: string, to: string) {
    this.letterService.addLetter(mailbox, subject, body, to)
      .subscribe(_ => this.updateLetters());
  }

  removeLetter(letterId: string) {
    this.letterService.removeLetter(letterId)
      .subscribe(_ => this.updateLetters());
  }
}
