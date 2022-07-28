import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CaracBookComponent } from './carac-book.component';

describe('CaracBookComponent', () => {
  let component: CaracBookComponent;
  let fixture: ComponentFixture<CaracBookComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CaracBookComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CaracBookComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
