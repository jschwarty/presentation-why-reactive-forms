import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReactiveFormComponent } from './reactive-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MdButtonModule, MdInputModule, MdSelectModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

describe('ReactiveFormComponent', () => {
  let component: ReactiveFormComponent;
  let fixture: ComponentFixture<ReactiveFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        BrowserAnimationsModule,
        ReactiveFormsModule,
        MdInputModule,
        MdButtonModule,
        MdSelectModule
      ],
      declarations: [ReactiveFormComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReactiveFormComponent);
    component = fixture.componentInstance;
    component.ngOnInit();
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });

  describe('first name field', () => {
    it('should be valid when set to long enough string', () => {
      const firstName = component.form.get('firstName');
      firstName.setValue('test');
      expect(firstName.valid).toBeTruthy();
    });

    it('should be invalid when set to string that is too short', () => {
      const firstName = component.form.get('firstName');
      firstName.setValue('a');
      expect(firstName.invalid).toBeTruthy();
    });
  });
});
