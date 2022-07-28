import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListePayCashComponent } from './liste-pay-cash.component';

describe('ListePayCashComponent', () => {
  let component: ListePayCashComponent;
  let fixture: ComponentFixture<ListePayCashComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListePayCashComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListePayCashComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
