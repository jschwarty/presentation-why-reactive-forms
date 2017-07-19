import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.scss']
})
export class ReactiveFormComponent implements OnInit {
  decorators = ['Input', 'HostBinding', 'ContentChild'];
  form;

  constructor(private formBuilder: FormBuilder) {
    this.form = this.formBuilder.group({
      firstName: ['', Validators.minLength(2)],
      lastName: '',
      favoriteDecorator: '',
      contactInfo: this.formBuilder.group({
        email: '',
        phone: ''
      })
    });
  }

  ngOnInit() {
  }

  onSubmit(data) {
    console.log(data);
  }

}
