import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StruggleTrackerComponent } from './struggle-tracker.component';

describe('StruggleTrackerComponent', () => {
  let component: StruggleTrackerComponent;
  let fixture: ComponentFixture<StruggleTrackerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StruggleTrackerComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(StruggleTrackerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
