import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SampleCardListComponent } from './sample-card-list.component';

describe('SampleCardListComponent', () => {
  let component: SampleCardListComponent;
  let fixture: ComponentFixture<SampleCardListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SampleCardListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SampleCardListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
