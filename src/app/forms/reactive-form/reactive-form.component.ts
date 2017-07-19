import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/do';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.scss']
})
export class ReactiveFormComponent implements OnInit, OnDestroy {
  subscription: any;
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

    this.subscription = this.form.get('firstName').valueChanges
      .subscribe(value => {
        if (value === 'Justin') {
          this.form.get('favoriteDecorator').setValue('ContentChild')
        }
      });
  }

  ngOnInit() {
  }

  onSubmit(data) {
    console.log(data);
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
