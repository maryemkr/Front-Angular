import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AjoutAdherentComponent } from './ajout-adherent.component';

describe('AjoutAdherentComponent', () => {
  let component: AjoutAdherentComponent;
  let fixture: ComponentFixture<AjoutAdherentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AjoutAdherentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AjoutAdherentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
