import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sign-up-form',
  template: `
    <h1>Sign Up</h1>
    <form class="example-form">
      <md-input-container class="example-full-width">

        <input mdInput placeholder="First name">

      </md-input-container>
      <md-input-container class="example-full-width">

        <input mdInput placeholder="Last Name">

      </md-input-container>
      <div class="example-full-width space">

        <md-select placeholder="Favorite decorator">
          <md-option *ngFor="let decorator of decorators" [value]="decorator">
            {{ decorator }}
          </md-option>
        </md-select>

      </div>
      <button md-raised-button>Submit</button>
    </form>
  `,
  styles: [`
    .example-form { width: 500px; }
    .example-full-width { width: 100%; }
    .space { padding: 1em 0; }
  `]
})
export class SignUpFormComponent implements OnInit {
  decorators = ['Input', 'HostBinding', 'ContentChild'];

  constructor() { }

  ngOnInit() {
  }

}
