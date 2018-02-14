import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RoutingModule } from './routing/routing.module';


import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { FooterComponent } from './footer/footer.component';
import { EventsComponent } from './events/events.component';
import { VideosComponent } from './videos/videos.component';
import { HomesComponent } from './homes/homes.component';


@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    FooterComponent,
    EventsComponent,
    VideosComponent,
    HomesComponent
  ],
  imports: [
    BrowserModule,
    RoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
