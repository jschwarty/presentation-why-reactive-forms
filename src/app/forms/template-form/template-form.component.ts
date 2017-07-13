import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-template-form',
  templateUrl: './template-form.component.html',
  styleUrls: ['./template-form.component.scss']
})
export class TemplateFormComponent implements OnInit {
  decorators = ['Input', 'HostBinding', 'ContentChild'];

  constructor() { }

  ngOnInit() {
  }

  onSubmit(data) {
    console.log(data);
  }
}
