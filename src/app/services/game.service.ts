import { Injectable } from '@angular/core';
import * as data from '../../assets/hangman_words.json';

@Injectable({
  providedIn: 'root',
})
export class GameService {
  private words = (data as any).default;
  private selectedWordLength: number = 0;

  constructor() {}

  getWordLengths(): number[] {
    const allWordLength: number[] = this.words.map(
      (word: string) => word.length
    );
    return [...new Set(allWordLength)];
  }

  setWordLength(wordLength: number): void {
    this.selectedWordLength = wordLength;
  }
}
