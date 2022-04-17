import { Component } from '@angular/core';

@Component({
  selector: 'app-examples',
  templateUrl: './examples.component.html',
  styleUrls: ['./examples.component.scss']
})
export class ExamplesComponent {
  cards = [1, 2, 3];
  masonryImages = new Array(15);
}
