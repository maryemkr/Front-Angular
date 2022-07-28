import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AjoutMembresComponent } from './ajout-membres.component';

describe('AjoutMembresComponent', () => {
  let component: AjoutMembresComponent;
  let fixture: ComponentFixture<AjoutMembresComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AjoutMembresComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AjoutMembresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
