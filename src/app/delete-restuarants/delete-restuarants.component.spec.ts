import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteRestuarantsComponent } from './delete-restuarants.component';

describe('DeleteRestuarantsComponent', () => {
  let component: DeleteRestuarantsComponent;
  let fixture: ComponentFixture<DeleteRestuarantsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeleteRestuarantsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DeleteRestuarantsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
