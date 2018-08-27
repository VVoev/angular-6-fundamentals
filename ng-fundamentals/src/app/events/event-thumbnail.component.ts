import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'event-thumbnail',
  template:
    `
  <div [routerLink]="['/events',event.id]" class="well hoverwell thumnail">
  <h1>Upcoming Angular Events</h1>
  <br/>
  <h2>{{event?.name}}</h2>
  <div>Date:{{event?.date}}</div>
  <div [ngStyle]="getStartTimeClass()">Time:{{event?.time}}</div>
  <div [ngSwitch]="event?.time">
    <span *ngSwitchCase="'8:00 am'">Early Start</span>
    <span *ngSwitchCase="'10:00 am'">Late Start</span>
    <span *ngSwitchDefault>Normal Start</span>
  </div>
  <div>Price:{{event?.price}}</div>
  <div *ngIf="event?.location">
    <span>Adress:{{event?.location.address}}</span>
    <span class="pad-left">City:{{event?.location.city}}</span>
    <span>Country:{{event?.location.country}}</span>
  </div>
</div>
  `,
  styles: [`
  .pad-left {margin-left:10px;}
  .well div {color: red;}
  .thumbnail {min-height:210px;}
  .green{color:#003300 !important;}
  .bold{font-weight:bold;}
  `
  ]
})

export class EventThumbNail {
  @Input() event: any;


  getStartTimeClass(): any {
    const isEarlyStart = this.event && this.event.time === '8:00 am';
    return isEarlyStart === true ? { color: '#003300', 'font-weight': 'bold' } : {}
  }

}
