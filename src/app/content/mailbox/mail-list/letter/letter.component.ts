import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {LetterService} from '../../../../services/letter/letter.service';
import {Letter} from '../../../../services/letter/Letter';

@Component({
  selector: 'app-letter',
  templateUrl: './letter.component.html',
  styleUrls: ['./letter.component.css']
})
export class LetterComponent implements OnInit {

  private letter: Letter;

  constructor(private route: ActivatedRoute, private letterService: LetterService) {
  }

  ngOnInit() {
    this.route.params.subscribe(
      params => this.letterService.getLetter(params.letter).subscribe(
        letter => this.letter = letter
      )
    );
  }

  getLetter(): Letter {
    return this.letter;
  }
}
