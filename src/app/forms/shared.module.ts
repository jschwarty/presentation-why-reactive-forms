import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TemplateFormComponent } from './template-form/template-form.component';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';
import { MdButtonModule, MdInputModule, MdSelectModule } from '@angular/material';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ContactInfoComponent } from './reactive-form/contact-info.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MdInputModule,
    MdButtonModule,
    MdSelectModule,
  ],
  declarations: [
    TemplateFormComponent,
    ReactiveFormComponent,
    ContactInfoComponent
  ],
  exports: [
    TemplateFormComponent,
    ReactiveFormComponent,
    ContactInfoComponent
  ]
})
export class SharedModule { }
