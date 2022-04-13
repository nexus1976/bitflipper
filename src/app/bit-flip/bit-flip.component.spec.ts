import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BitFlipComponent } from './bit-flip.component';

describe('BitFlipComponent', () => {
  let component: BitFlipComponent;
  let fixture: ComponentFixture<BitFlipComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BitFlipComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BitFlipComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
