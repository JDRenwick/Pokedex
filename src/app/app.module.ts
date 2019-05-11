import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BioPageLayoutComponent } from './BioPage/bio-page-layout/bio-page-layout.component';
import { BioPageComponent } from './BioPage/bio-page/bio-page.component';
import { LoadingComponent } from './Shared/loading/loading.component';
import { LightsComponent } from './Shared/lights/lights.component';
import { CoverComponent } from './Shared/cover/cover.component';
import { ControlsComponent } from './Shared/controls/controls.component';
import { TitleComponent } from './BioPage/title/title.component';
import { SpritesComponent } from './BioPage/sprites/sprites.component';
import { InformationComponent } from './BioPage/information/information.component';
import { SpriteComponent } from './BioPage/sprite/sprite.component';
import { AbilitiesComponent } from './BioPage/Information/abilities/abilities.component';

@NgModule({
  declarations: [
    AppComponent,
    BioPageLayoutComponent,
    BioPageComponent,
    LoadingComponent,
    LightsComponent,
    CoverComponent,
    ControlsComponent,
    TitleComponent,
    SpritesComponent,
    InformationComponent,
    SpriteComponent,
    AbilitiesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
