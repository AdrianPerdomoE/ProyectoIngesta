import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProyectoPreviewComponent } from './proyecto-preview.component';

describe('ProyectoPreviewComponent', () => {
  let component: ProyectoPreviewComponent;
  let fixture: ComponentFixture<ProyectoPreviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProyectoPreviewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProyectoPreviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
