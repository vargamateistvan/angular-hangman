import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GameComponent } from './components/game/game.component';
import { InstructionsComponent } from './components/instructions/instructions.component';
import { LengthPickerComponent } from './components/length-picker/length-picker.component';

const routes: Routes = [
  {
    path: 'instructions',
    component: InstructionsComponent,
  },
  {
    path: 'length-picker',
    component: LengthPickerComponent,
  },
  {
    path: 'hangman',
    component: GameComponent,
  },
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'instructions',
  },
  {
    path: '**',
    redirectTo: '',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
