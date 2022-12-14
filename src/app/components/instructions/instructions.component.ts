import { Component, OnInit } from '@angular/core';
import { RouterService } from 'src/app/services/router.service';

@Component({
  selector: 'app-instructions',
  templateUrl: './instructions.component.html',
  styleUrls: ['./instructions.component.scss'],
})
export class InstructionsComponent implements OnInit {
  public isLastRouteHangman: boolean = false;

  constructor(private routerService: RouterService) {}

  ngOnInit(): void {
    this.isLastRouteHangman =
      this.routerService.getPreviousUrl() === '/hangman';
  }
}
