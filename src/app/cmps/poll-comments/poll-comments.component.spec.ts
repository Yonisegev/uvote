import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PollCommentsComponent } from './poll-comments.component';

describe('PollCommentsComponent', () => {
  let component: PollCommentsComponent;
  let fixture: ComponentFixture<PollCommentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PollCommentsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PollCommentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
