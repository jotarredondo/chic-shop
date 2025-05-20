import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FindShopComponent } from './find-shop.component';

describe('FindShopComponent', () => {
  let component: FindShopComponent;
  let fixture: ComponentFixture<FindShopComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FindShopComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FindShopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
