import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NemuComponent } from './nemu.component';

describe('NemuComponent', () => {
  let component: NemuComponent;
  let fixture: ComponentFixture<NemuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NemuComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NemuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
