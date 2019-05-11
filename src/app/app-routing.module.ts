import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BioPageLayoutComponent } from './BioPage/bio-page-layout/bio-page-layout.component';

const routes: Routes = [
  { path: '', redirectTo: '/bioPage', pathMatch: 'full' },
  { path: 'bioPage', component: BioPageLayoutComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
