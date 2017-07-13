import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TemplateFormComponent } from './template-form/template-form.component';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';
import { MdButtonModule, MdInputModule, MdSelectModule } from '@angular/material';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

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
    ReactiveFormComponent
  ],
  exports: [
    TemplateFormComponent,
    ReactiveFormComponent
  ]
})
export class SharedModule { }
