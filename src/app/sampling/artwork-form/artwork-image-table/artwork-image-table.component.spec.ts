import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArtworkImageTableComponent } from './artwork-image-table.component';

describe('ArtworkImageTableComponent', () => {
  let component: ArtworkImageTableComponent;
  let fixture: ComponentFixture<ArtworkImageTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArtworkImageTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArtworkImageTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
