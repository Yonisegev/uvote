import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PollPreviewComponent } from './poll-preview.component';

describe('PollPreviewComponent', () => {
  let component: PollPreviewComponent;
  let fixture: ComponentFixture<PollPreviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PollPreviewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PollPreviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
