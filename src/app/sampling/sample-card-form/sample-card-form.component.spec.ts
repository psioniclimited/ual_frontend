import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SampleCardFormComponent } from './sample-card-form.component';

describe('SampleCardFormComponent', () => {
  let component: SampleCardFormComponent;
  let fixture: ComponentFixture<SampleCardFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SampleCardFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SampleCardFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
