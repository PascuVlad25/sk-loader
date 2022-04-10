
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { SkLoaderModule } from 'projects/sk-loader-lib/src/lib';


import { AppComponent } from './app.component';
import { PresentationComponent } from './components/presentation/presentation.component';
import { PresentationLoadingComponent } from './components/presentation-loading/presentation-loading.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HeroComponent } from './components/hero/hero.component';
import { FeaturesComponent } from './components/features/features.component';
import { InstallationComponent } from './components/installation/installation.component';
import { ExamplesComponent } from './components/examples/examples.component';
import { ComparatorComponent } from './components/comparator/comparator.component';

@NgModule({
  declarations: [
    AppComponent,
    PresentationComponent,
    PresentationLoadingComponent,
    NavbarComponent,
    HeroComponent,
    FeaturesComponent,
    InstallationComponent,
    ExamplesComponent,
    ComparatorComponent
  ],
  imports: [
    BrowserModule,
    SkLoaderModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
