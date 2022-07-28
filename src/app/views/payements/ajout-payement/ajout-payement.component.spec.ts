import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AjoutPayementComponent } from './ajout-payement.component';

describe('AjoutPayementComponent', () => {
  let component: AjoutPayementComponent;
  let fixture: ComponentFixture<AjoutPayementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AjoutPayementComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AjoutPayementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
