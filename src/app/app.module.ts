import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GameComponent } from './components/game/game.component';
import { HangmanSvgComponent } from './components/hangman-svg/hangman-svg.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { LengthPickerComponent } from './components/length-picker/length-picker.component';
import { InstructionsComponent } from './components/instructions/instructions.component';

@NgModule({
  declarations: [
    AppComponent,
    GameComponent,
    HangmanSvgComponent,
    NavBarComponent,
    LengthPickerComponent,
    InstructionsComponent,
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
