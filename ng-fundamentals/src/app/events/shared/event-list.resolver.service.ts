

import { EventService } from './event.service';
import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { map } from 'rxjs/operators';

@Injectable()
export class EventListResolverService implements Resolve<any> {

  constructor(private eventService: EventService) {

  }

  resolve() {
    const result = this.eventService.getEvents().pipe(map(events => events));
    return result;
  }
}
