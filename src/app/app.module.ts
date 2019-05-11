import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BioPageLayoutComponent } from './BioPage/bio-page-layout/bio-page-layout.component';
import { LoadingComponent } from './Shared/loading/loading.component';
import { LightsComponent } from './Shared/lights/lights.component';
import { CoverComponent } from './Shared/cover/cover.component';
import { ControlsComponent } from './Shared/controls/controls.component';
import { TitleComponent } from './BioPage/title/title.component';
import { SpritesComponent } from './BioPage/sprites/sprites.component';
import { InformationComponent } from './BioPage/information/information.component';
import { SpriteComponent } from './BioPage/sprite/sprite.component';
import { AbilitiesComponent } from './BioPage/Information/abilities/abilities.component';
import { StatsComponent } from './BioPage/Information/stats/stats.component';
import { EvolutionComponent } from './BioPage/Information/evolution/evolution.component';
import { FormsComponent } from './BioPage/Information/forms/forms.component';
import { ControlsLayoutComponent } from './Shared/controls-layout/controls-layout.component';
import { WelcomeComponent } from './Shared/welcome/welcome.component';
import { SearchLayoutComponent } from './Search/search-layout/search-layout.component';
import { SearchComponent } from './Search/search/search.component';

@NgModule({
  declarations: [
    AppComponent,
    BioPageLayoutComponent,
    LoadingComponent,
    LightsComponent,
    CoverComponent,
    ControlsComponent,
    TitleComponent,
    SpritesComponent,
    InformationComponent,
    SpriteComponent,
    AbilitiesComponent,
    StatsComponent,
    EvolutionComponent,
    FormsComponent,
    ControlsLayoutComponent,
    WelcomeComponent,
    SearchLayoutComponent,
    SearchComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
