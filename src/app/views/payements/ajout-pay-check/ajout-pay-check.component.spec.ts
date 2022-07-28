import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AjoutPayCheckComponent } from './ajout-pay-check.component';

describe('AjoutPayCheckComponent', () => {
  let component: AjoutPayCheckComponent;
  let fixture: ComponentFixture<AjoutPayCheckComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AjoutPayCheckComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AjoutPayCheckComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
