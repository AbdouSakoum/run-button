import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NextLevelValidComponent } from './next-level-valid.component';

describe('NextLevelValidComponent', () => {
  let component: NextLevelValidComponent;
  let fixture: ComponentFixture<NextLevelValidComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NextLevelValidComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NextLevelValidComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
