import { Component, HostBinding, Input, OnInit } from '@angular/core';
import { Alignment, AlignmentType, LoaderType } from './enums';

@Component({
  selector: 'sk-loader',
  templateUrl: './sk-loader.component.html',
  styleUrls: ['./sk-loader.component.scss']
})
export class SkLoaderComponent implements OnInit {
  @HostBinding('class.sk-loader-image') get isImage(): boolean { return this.loaderType === LoaderType.Image; }
  @Input() loaderType: 'image' | 'paragraph' = LoaderType.Paragraph;

  @Input() rowsNumber: number = 1;
  @Input() align: Alignment = AlignmentType.Left;
  @Input() indent: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  public getParagraphLoaderType(): LoaderType {
    return LoaderType.Paragraph;
  }

  public getImageLoaderType(): LoaderType {
    return LoaderType.Image;
  }

}
