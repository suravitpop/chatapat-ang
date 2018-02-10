import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from '../app.component';
import { EventsComponent } from '../events/events.component';
import { VideoComponent } from '../video/video.component';
import { HomeComponent } from '../home/home.component';


    const routes: Routes = [
    {
        path: '',
        component: HomeComponent
    },{
        path: 'events',
        component: EventsComponent
    },{
        path: 'video',
        component: VideoComponent
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
export class AppRoutingModule { }
