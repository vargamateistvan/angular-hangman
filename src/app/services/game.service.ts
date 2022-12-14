import { Injectable } from '@angular/core';
import * as data from '../../assets/hangman_words.json';

@Injectable({
  providedIn: 'root',
})
export class GameService {
  private words = (data as any).default;
  private selectedWordLength: number = 0;
  private selectedWord: string = '';
  private wordGuesses: string[] = [];
  private guessedLetters: string[] = [];

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

  selectWordByLength(): string {
    if (this.selectedWord) return this.selectedWord;

    const lengthLongWords = this.words.filter(
      (word: string) => word.length === this.selectedWordLength
    );
    const selectedWord =
      lengthLongWords[Math.floor(Math.random() * lengthLongWords.length)];
    this.selectedWord = selectedWord;

    return selectedWord;
  }

  updateGuesses(guesses: string[]): void {
    this.wordGuesses = guesses;
  }

  getGuesses(): string[] {
    if (!this.wordGuesses.length) {
      const wordLetters = this.selectedWord?.split('');
      this.wordGuesses.length = wordLetters?.length || 0;
      this.wordGuesses.fill('');
    }
    return this.wordGuesses;
  }

  updateGuessedLetters(guesses: string): void {
    this.guessedLetters.push(guesses);
  }

  getGuessedLetters(): string[] {
    return this.guessedLetters;
  }

  getMissesLetters(): number {
    let missedLetters = 0;
    this.guessedLetters.forEach((guess: string) => {
      if (!this.selectedWord.includes(guess)) {
        missedLetters++;
      }
    });

    return missedLetters;
  }

  resetGame(): void {
    this.selectedWord = '';
    this.selectedWordLength = 0;
    this.guessedLetters = [];
    this.wordGuesses = [];
  }
}
