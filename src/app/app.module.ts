import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { MarkdownModule } from 'ngx-markdown';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatButtonModule, MatCheckboxModule, MatFormFieldModule, MatInputModule, MatSelectModule } from '@angular/material';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faCoffee, faSearch } from '@fortawesome/free-solid-svg-icons';

import { FilterPipeModule } from 'ngx-filter-pipe';

import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { HomeComponent } from './home/home.component';
import { SpellComponent } from './spell/spell.component';
import { ClassComponent } from './class/class.component';
import { MonsterComponent } from './monsters/monster.component';
import { MagicItemComponent } from './magicItem/magicItem.component';
import { RaceComponent } from './race/race.component';
import { BackgroundComponent } from './background/background.component';
import { PlaneComponent } from './plane/plane.component';
import { FeatComponent } from './feat/feat.component';
import { ConditionComponent } from './condition/condition.component';
import { SearchComponent } from './search/search.component';

@NgModule({
  declarations: [
    AppComponent,
    NavMenuComponent,
    HomeComponent,
    SpellComponent,
    ClassComponent,
    MonsterComponent,
    MagicItemComponent,
    RaceComponent,
    BackgroundComponent,
    PlaneComponent,
    FeatComponent,
    ConditionComponent,
    SearchComponent
  ],

  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    MatButtonModule,
    MatCheckboxModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot([
      { path: '', component: HomeComponent, pathMatch: 'full' },
      { path: 'spells', component: SpellComponent },
      { path: 'classes', component: ClassComponent },
      { path: 'monsters', component: MonsterComponent },
      { path: 'magicitems', component: MagicItemComponent },
      { path: 'races', component: RaceComponent },
      { path: 'backgrounds', component: BackgroundComponent },
      { path: 'planes', component: PlaneComponent },
      { path: 'feats', component: FeatComponent },
      { path: 'conditions', component: ConditionComponent },
    ]),
    NgbModule,
    MarkdownModule.forRoot(),
    FontAwesomeModule,
    BrowserAnimationsModule,
    FilterPipeModule
  ],
  exports: [
    MatButtonModule,
    MatCheckboxModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    FilterPipeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor() {
    library.add(faCoffee);
    library.add(faSearch);
  }
}
