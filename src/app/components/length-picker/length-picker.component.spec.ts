import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LengthPickerComponent } from './length-picker.component';

describe('LengthPickerComponent', () => {
  let component: LengthPickerComponent;
  let fixture: ComponentFixture<LengthPickerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LengthPickerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LengthPickerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
