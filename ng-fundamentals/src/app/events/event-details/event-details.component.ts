import { EventService } from './../shared/event.service';
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'event-details',
  templateUrl: 'event-details.component.html'
})

export class EventDetailsComponent {

  event: any
  constructor(private eventService: EventService, private route: ActivatedRoute) {
  }


  ngOnInit() {
    this.event = this.eventService.getEvent(+this.route.snapshot.params['id']);
  }
}
