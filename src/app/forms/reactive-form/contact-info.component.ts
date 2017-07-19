import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-contact-info',
  template: `
    <ng-container [formGroup]="group">
      <h2>Contact Info</h2>
      <md-input-container class="example-full-width">
        <input mdInput placeholder="Email" formControlName="email">
      </md-input-container>
      <md-input-container class="example-full-width">
        <input mdInput placeholder="Phone" formControlName="phone">
      </md-input-container>
    </ng-container>
  `
})
export class ContactInfoComponent {
  @Input() group;
}
