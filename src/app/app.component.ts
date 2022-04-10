import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'sk-loader';
  isVisible = false;

  switch(): void {
    this.isVisible = !this.isVisible;
  }
}
