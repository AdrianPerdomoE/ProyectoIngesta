import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RealizarIngestaComponent } from './realizar-ingesta.component';

describe('RealizarIngestaComponent', () => {
  let component: RealizarIngestaComponent;
  let fixture: ComponentFixture<RealizarIngestaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RealizarIngestaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RealizarIngestaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
