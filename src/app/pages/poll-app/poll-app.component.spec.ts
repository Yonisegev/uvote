import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PollAppComponent } from './poll-app.component';

describe('PollAppComponent', () => {
  let component: PollAppComponent;
  let fixture: ComponentFixture<PollAppComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PollAppComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PollAppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
