import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AjoutPostsComponent } from './ajout-posts.component';

describe('AjoutPostsComponent', () => {
  let component: AjoutPostsComponent;
  let fixture: ComponentFixture<AjoutPostsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AjoutPostsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AjoutPostsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
