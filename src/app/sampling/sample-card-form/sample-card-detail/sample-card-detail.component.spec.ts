import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SampleCardDetailComponent } from './sample-card-detail.component';

describe('SampleCardDetailComponent', () => {
  let component: SampleCardDetailComponent;
  let fixture: ComponentFixture<SampleCardDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SampleCardDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SampleCardDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
