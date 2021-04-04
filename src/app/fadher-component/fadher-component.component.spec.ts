import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FadherComponentComponent } from './fadher-component.component';

describe('FadherComponentComponent', () => {
  let component: FadherComponentComponent;
  let fixture: ComponentFixture<FadherComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FadherComponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FadherComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
