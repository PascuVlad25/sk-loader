import { Component, Input, OnInit } from '@angular/core';
import { Alignment, AlignmentType } from '../enums';

@Component({
  selector: 'sk-loader-paragraph',
  templateUrl: './paragraph.component.html',
  styleUrls: ['./paragraph.component.scss']
})
export class SkParagraphComponent implements OnInit {
  public rows: any[] = [];

  @Input() rowsNumber: number = 3;
  @Input() align: Alignment = AlignmentType.Left;
  @Input() indent: boolean = false;
  @Input() isAnimated: boolean = true;

  ngOnInit(): void {
    this.createRows();
  }

  private createRows(): void {
    for (let index=0; index<this.rowsNumber; index++) {
      const style: any = {
        child: {
          width: `${this.getWidth(index)}%`,
        },
        parent: {
          'justify-content': this.getALignmentStyle()
        }
      };
      if (this.indent && index === 0) {
        style.parent['margin-left'] = '10%';
      }
      this.rows.push({ style });
    }
  }

  private isLastRow(index: number): boolean {
    return this.rowsNumber != 1 && index === this.rowsNumber-1;
  }

  private getWidth(index: number): number {
    if (this.isLastRow(index)) {
      return 30 + Math.floor(Math.random() * 20);
    }
    else if (this.indent && index === 0) {
      return 70 + Math.floor(Math.random() * 20);
    }
    return 80 + Math.floor(Math.random() * 20);
  }

  private getALignmentStyle(): string {
    switch (this.align) {
      case AlignmentType.Left:
        return 'flex-start';
      case AlignmentType.Center:
        return 'center';
      case AlignmentType.Right:
        return 'flex-end';
      default: 
        return 'flex-start';
    }
  }

}
