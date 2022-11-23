import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddRestuarantsComponent } from './add-restuarants.component';

describe('AddRestuarantsComponent', () => {
  let component: AddRestuarantsComponent;
  let fixture: ComponentFixture<AddRestuarantsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddRestuarantsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddRestuarantsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
