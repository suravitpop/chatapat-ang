import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from '../app.component';
import { EventsComponent } from '../events/events.component';
import { VideosComponent } from '../videos/videos.component';
import { HomesComponent } from '../homes/homes.component';

 const routes: Routes = [
    {
        path: '',
        component: HomesComponent
    },{
        path: 'events',
        component: EventsComponent
    },{
        path: 'video',
        component: VideosComponent
    },
    
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
   exports: [
  	RouterModule
  ],
  declarations: []
})
export class RoutingModule { }
