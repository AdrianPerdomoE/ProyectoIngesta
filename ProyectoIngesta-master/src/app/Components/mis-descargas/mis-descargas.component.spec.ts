import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MisDescargasComponent } from './mis-descargas.component';

describe('MisDescargasComponent', () => {
  let component: MisDescargasComponent;
  let fixture: ComponentFixture<MisDescargasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MisDescargasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MisDescargasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
