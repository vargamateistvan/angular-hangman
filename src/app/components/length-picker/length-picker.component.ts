import { Component, OnInit } from '@angular/core';
import { GameService } from 'src/app/services/game.service';

@Component({
  selector: 'app-length-picker',
  templateUrl: './length-picker.component.html',
  styleUrls: ['./length-picker.component.scss'],
})
export class LengthPickerComponent implements OnInit {
  public wordLengths: number[] = [];
  public selectedWordLength: number = 0;

  constructor(private gameService: GameService) {}

  ngOnInit(): void {
    this.wordLengths = this.gameService.getWordLengths();
  }

  public setSelectedWordLength(wordLength: number): void {
    this.gameService.setWordLength(wordLength);
    this.selectedWordLength = wordLength;
  }

  public setRandomSelectedWordLength(): void {
    const randomLength =
      this.wordLengths[Math.floor(Math.random() * this.wordLengths.length)];
    console.log('random', randomLength);
    this.setSelectedWordLength(randomLength);
  }

  public selectWord(): void {
    this.gameService.selectWordByLength();
  }
}
