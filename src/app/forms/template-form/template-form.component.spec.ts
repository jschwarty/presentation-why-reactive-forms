import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TemplateFormComponent } from './template-form.component';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MdButtonModule, MdInputModule, MdSelectModule } from '@angular/material';
import { By } from '@angular/platform-browser';

describe('TemplateFormComponent', () => {
  let component: TemplateFormComponent;
  let fixture: ComponentFixture<TemplateFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        BrowserAnimationsModule,
        FormsModule,
        MdInputModule,
        MdButtonModule,
        MdSelectModule
      ],
      declarations: [ TemplateFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TemplateFormComponent);
    component = fixture.componentInstance;
    component.ngOnInit();
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });

  // describe('first name field', () => {
  //   it('should be valid when set to long enough string', () => {
  //     const firstName = fixture.debugElement.query(By.css('[name=firstName]'));
  //     firstName.nativeElement.value = 'test';
  //     fixture.whenStable().then(() => {
  //       expect(firstName.classes['ng-valid']).toBeTruthy();
  //     });
  //   });
  //
  //   it('should be invalid when set to string that is too short', () => {
  //     const firstName = fixture.debugElement.query(By.css('[name=firstName]'));
  //     firstName.nativeElement.value = 'a';
  //     fixture.whenStable().then(() => {
  //       expect(firstName.classes['ng-valid']).toBeFalsy();
  //     });
  //   });
  // });
});
