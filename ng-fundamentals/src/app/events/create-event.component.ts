import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'create-event',
  template: `
  <h1>New Event</h1>
  <br>
  <div class="cold-md-6">
  <br>
  <br>
    <button type="submit" class="btn btn-primary">Save</button>
    <button type="submit" class="btn btn" (click)="cancel()">Cancel</button>
  </div>
  `
})

export class CreateEventComponent {
  constructor(private router: Router) { }

  cancel() {
    this.router.navigate(['/events']);
  }
}
