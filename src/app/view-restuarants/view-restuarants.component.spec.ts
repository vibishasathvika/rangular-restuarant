import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewRestuarantsComponent } from './view-restuarants.component';

describe('ViewRestuarantsComponent', () => {
  let component: ViewRestuarantsComponent;
  let fixture: ComponentFixture<ViewRestuarantsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewRestuarantsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewRestuarantsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
