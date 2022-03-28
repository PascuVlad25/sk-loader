import { NgModule } from '@angular/core';
import { SkLoaderComponent } from './sk-loader.component';
import { SkParagraphComponent } from './paragraph/paragraph.component';
import { CommonModule } from '@angular/common';
import { SkImageComponent } from './image/image.component';



@NgModule({
  declarations: [
    SkLoaderComponent,
    SkParagraphComponent,
    SkImageComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    SkLoaderComponent,
  ]
})
export class SkLoaderModule { }
