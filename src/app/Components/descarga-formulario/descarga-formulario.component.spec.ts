import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DescargaFormularioComponent } from './descarga-formulario.component';

describe('DescargaFormularioComponent', () => {
  let component: DescargaFormularioComponent;
  let fixture: ComponentFixture<DescargaFormularioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DescargaFormularioComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DescargaFormularioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
