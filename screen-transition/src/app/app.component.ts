import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ScreenLoopService } from './services/screen-loop.service';


@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  constructor(private screenRotationService: ScreenLoopService) {
    this.screenRotationService.startLoop();
  }
}
