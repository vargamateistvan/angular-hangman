import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LandingComponent } from './components/landing/landing.component';
import { GameComponent } from './components/game/game.component';
import { HangmanSvgComponent } from './components/hangman-svg/hangman-svg.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { LengthPickerComponent } from './components/length-picker/length-picker.component';

@NgModule({
  declarations: [
    AppComponent,
    LandingComponent,
    GameComponent,
    HangmanSvgComponent,
    NavBarComponent,
    LengthPickerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
