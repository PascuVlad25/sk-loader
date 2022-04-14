import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DocumentationComponent } from './components/documentation/documentation.component';
import { PresentationComponent } from './components/presentation/presentation.component';
import { RedirectProxy } from './redirect-proxy.guard';

const routes: Routes = [
  {
    path: '',
    canActivate: [RedirectProxy],
    component: PresentationComponent
  },
  {
    path: 'docs',
    component: DocumentationComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
