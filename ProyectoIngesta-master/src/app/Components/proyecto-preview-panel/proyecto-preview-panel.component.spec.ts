import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProyectoPreviewPanelComponent } from './proyecto-preview-panel.component';

describe('ProyectoPreviewPanelComponent', () => {
  let component: ProyectoPreviewPanelComponent;
  let fixture: ComponentFixture<ProyectoPreviewPanelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProyectoPreviewPanelComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProyectoPreviewPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
