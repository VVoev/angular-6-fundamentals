import { EventService } from './../shared/event.service';
import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, Router } from '@angular/router';

@Injectable()
export class EventRouteActivatorService implements CanActivate {

  constructor(private eventService: EventService, private router: Router) { }

  canActivate(route: ActivatedRouteSnapshot) {
    const isEventExist = !!this.eventService.getEvent(+route.params['id']);
    debugger;
    if (!isEventExist) {
      this.router.navigate(['/404'])
    }

    return isEventExist;
  }
}
