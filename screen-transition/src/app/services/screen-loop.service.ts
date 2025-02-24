import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class ScreenLoopService {
  private screens = ['/screen1', '/screen2'];
  private screenTime = 0;
  private intervalTime = 5000;

  constructor(private router: Router) { }

  startLoop() {
    setInterval(() => {
      this.screenTime = (this.screenTime + 1) % this.screens.length;
      this.router.navigate([this.screens[this.screenTime]]);
    }, this.intervalTime);
  }
}
