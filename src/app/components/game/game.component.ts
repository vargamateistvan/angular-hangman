import { Component, OnInit } from '@angular/core';
import { GameService } from 'src/app/services/game.service';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss'],
})
export class GameComponent implements OnInit {
  public word: string = '';
  public wordLetters: string[] = [];
  public wordGuesses: string[] = [];
  public letters: string[] = [
    'a',
    'b',
    'c',
    'd',
    'e',
    'f',
    'g',
    'h',
    'i',
    'j',
    'k',
    'l',
    'm',
    'n',
    'o',
    'p',
    'q',
    'r',
    's',
    't',
    'u',
    'v',
    'w',
    'x',
    'y',
    'z',
  ];
  public guessedLetters: string[] = [];
  public missedLetters: number = 0;

  constructor(private gameService: GameService) {}

  ngOnInit(): void {
    this.word = this.gameService.selectWordByLength();
    this.wordLetters = this.word?.split('');
    this.wordGuesses.length = this.wordLetters?.length || 0;
    this.wordGuesses.fill('');
  }

  public guessLetter(letter: string): void {
    if (this.guessedLetters.includes(letter) || this.missedLetters === 6)
      return;

    this.guessedLetters.push(letter);

    if (this.word.includes(letter)) {
      const indexes = this.getIndexOfLetter(letter);
      this.setLetterOnIndex(indexes, letter);
    } else {
      this.missedLetters++;
    }
  }

  getIndexOfLetter(letter: string): number[] {
    const indexes = [];
    let idx = this.word.indexOf(letter);
    while (idx !== -1) {
      indexes.push(idx);
      idx = this.word.indexOf(letter, idx + 1);
    }

    return indexes;
  }

  setLetterOnIndex(indexes: number[], letter: string) {
    indexes.forEach((index: number) => {
      this.wordGuesses[index] = letter;
    });
  }
}
