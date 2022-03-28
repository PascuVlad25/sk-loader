import { Component, Input } from '@angular/core';

@Component({
  selector: 'sk-loader-image',
  templateUrl: './image.component.html',
  styleUrls: ['./image.component.scss']
})
export class SkImageComponent {
  @Input() isAnimated: boolean = true;
}
