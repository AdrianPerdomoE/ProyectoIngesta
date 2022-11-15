import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProyectosSubidosComponent } from './proyectos-subidos.component';

describe('ProyectosSubidosComponent', () => {
  let component: ProyectosSubidosComponent;
  let fixture: ComponentFixture<ProyectosSubidosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProyectosSubidosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProyectosSubidosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
