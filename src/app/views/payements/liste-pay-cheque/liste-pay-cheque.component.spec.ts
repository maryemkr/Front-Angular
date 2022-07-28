import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListePayChequeComponent } from './liste-pay-cheque.component';

describe('ListePayChequeComponent', () => {
  let component: ListePayChequeComponent;
  let fixture: ComponentFixture<ListePayChequeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListePayChequeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListePayChequeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
