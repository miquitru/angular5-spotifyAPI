import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { NavbarComponent} from './components/navbar/navbar.component';
import { SearchComponent} from './components/search/search.component';
import { AboutComponent} from './components/about/about.component';
import { ArtistComponent} from './components/artist/artist.component';
import { AlbumComponent} from './components/album/album.component';

import { HttpClientModule} from '@angular/common/http';

const appRoutes: Routes = [
  {path:'', component:SearchComponent},
  {path:'about', component:AboutComponent},
  {path:'artist/:id', component:ArtistComponent}
  {path:'album/:id', component:AlbumComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SearchComponent,
    AboutComponent,
    ArtistComponent,
    AlbumComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
