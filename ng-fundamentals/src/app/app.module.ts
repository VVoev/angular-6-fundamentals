import { CreateEventComponent } from './events/create-event.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { EventThumbNail } from './events/event-thumbnail.component';
import { EventsListComponent } from './events/event-list.component';
import { EventsApp } from './events-app.component';
import { NavBarComponent } from './nav/navbar.component';
import { EventDetailsComponent } from './events/event-details/event-details.component';

import { EventService } from './events/shared/event.service';
import { ToastrService } from './common/toastr.service';
import { EventRouteActivatorService } from './events/event-details/event-route-activator.service';


import { RouterModule } from '@angular/router';
import { appRoutes } from './../routes';
import { Error404Component } from './events/404.component';





@NgModule({
  declarations: [
    EventsApp,
    EventsListComponent,
    EventThumbNail,
    NavBarComponent,
    EventDetailsComponent,
    CreateEventComponent,
    Error404Component
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [EventService, ToastrService, EventRouteActivatorService],
  bootstrap: [EventsApp]
})
export class AppModule { }
