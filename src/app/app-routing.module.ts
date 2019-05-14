import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BioPageLayoutComponent } from './BioPage/bio-page-layout/bio-page-layout.component';
import { SearchLayoutComponent } from './Search/search-layout/search-layout.component';
import { VoiceComponent } from './Voice/voice/voice.component';
import { WelcomeComponent } from './Shared/welcome/welcome.component';

const routes: Routes = [
  { path: '', component: WelcomeComponent, pathMatch: 'full' },
  { path: 'bio/name/:name', component: BioPageLayoutComponent },
  { path: 'bio/number/:id', component: BioPageLayoutComponent },
  { path: 'search', component: SearchLayoutComponent },
  { path: 'voice', component: VoiceComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
