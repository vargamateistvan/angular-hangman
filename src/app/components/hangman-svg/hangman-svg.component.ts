import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-hangman-svg',
  templateUrl: './hangman-svg.component.svg',
  styleUrls: ['./hangman-svg.component.scss'],
})
export class HangmanSvgComponent {
  @Input() missedLetters = 0;
  @Input() showHangman = false;
}
