import { AfterViewChecked, AfterViewInit, Component, ElementRef, HostListener, OnInit, ViewChild } from '@angular/core';

enum SliderStatus {
  Static,
  Moving
}

@Component({
  selector: 'app-comparator',
  templateUrl: './comparator.component.html',
  styleUrls: ['./comparator.component.scss']
})
export class ComparatorComponent {
  @ViewChild('container') container!: ElementRef;

  sliderStatus: SliderStatus = SliderStatus.Static;
  width = 50;
  
  @HostListener('window:dragstart', ['$event'])
  onDragStart(event: MouseEvent){
    event.preventDefault();
  }
  
  @HostListener('window:mousemove', ['$event'])
  onMouseMove(event: MouseEvent){
    if (this.sliderStatus == SliderStatus.Moving && this.checkInBound(event.clientX)) {
      this.width = this.calculatePositionInPercentage(event.clientX);
    }
  }

  get bound(): DOMRect {
    return this.container?.nativeElement?.getBoundingClientRect() ?? {width: 0, right: 0, left: 0};
  }

  drag(): void {
    this.sliderStatus = SliderStatus.Moving;
  }

  leave(): void {
    this.sliderStatus = SliderStatus.Static;
  }

  getSliderMargin(): string {
    return `calc(${this.width}% - 5px)`;
  }

  private checkInBound(xValue: number): boolean {
    return xValue > this.bound.left && xValue < this.bound.right;
  }

  private calculatePositionInPercentage(xValue: number): number {
    const xPosition = xValue - this.bound.left;
    const xPositionPercentage = Math.floor(xPosition / this.bound.width * 100); 
    return xPositionPercentage;
  }
}
