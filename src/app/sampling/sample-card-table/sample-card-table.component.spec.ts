import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SampleCardTableComponent } from './sample-card-table.component';

describe('SampleCardTableComponent', () => {
  let component: SampleCardTableComponent;
  let fixture: ComponentFixture<SampleCardTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SampleCardTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SampleCardTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
