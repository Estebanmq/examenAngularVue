import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BusquedapelisComponent } from './busquedapelis.component';

describe('BusquedapelisComponent', () => {
  let component: BusquedapelisComponent;
  let fixture: ComponentFixture<BusquedapelisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BusquedapelisComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BusquedapelisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
