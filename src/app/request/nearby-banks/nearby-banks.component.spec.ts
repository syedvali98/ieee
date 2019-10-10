import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NearbyBanksComponent } from './nearby-banks.component';

describe('NearbyBanksComponent', () => {
  let component: NearbyBanksComponent;
  let fixture: ComponentFixture<NearbyBanksComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NearbyBanksComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NearbyBanksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
