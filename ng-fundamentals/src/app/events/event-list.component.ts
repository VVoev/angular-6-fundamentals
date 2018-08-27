import { ToastrService } from './../common/toastr.service';
import { EventService } from './shared/event.service';
import { Component, OnInit } from '@angular/core';


@Component({
  template: `
  <div>
  <br/>
  <div class="row">
    <div *ngFor="let event of events" class="cold-md-5">
      <event-thumbnail (click)="handleClick(event.name)"   [event]="event"></event-thumbnail>
    </div>
  </div>
  </div>
  `
})

export class EventsListComponent implements OnInit {
  events: any[];
  constructor(private eventService: EventService, private toastrService: ToastrService) {

  }

  ngOnInit() {
    this.events = this.eventService.getEvents();
  }

  handleClick(name) {
    this.toastrService.sucess(name);
  }


}

