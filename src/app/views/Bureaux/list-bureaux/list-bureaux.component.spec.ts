import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListBureauxComponent } from './list-bureaux.component';

describe('ListBureauxComponent', () => {
  let component: ListBureauxComponent;
  let fixture: ComponentFixture<ListBureauxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListBureauxComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListBureauxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
