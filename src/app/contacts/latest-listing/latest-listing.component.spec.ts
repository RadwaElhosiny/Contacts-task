import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LatestListingComponent } from './latest-listing.component';

describe('LatestListingComponent', () => {
  let component: LatestListingComponent;
  let fixture: ComponentFixture<LatestListingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LatestListingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LatestListingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
