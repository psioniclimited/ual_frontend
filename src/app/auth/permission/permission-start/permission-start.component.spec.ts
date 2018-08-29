import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PermissionStartComponent } from './permission-start.component';

describe('PermissionStartComponent', () => {
  let component: PermissionStartComponent;
  let fixture: ComponentFixture<PermissionStartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PermissionStartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PermissionStartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
