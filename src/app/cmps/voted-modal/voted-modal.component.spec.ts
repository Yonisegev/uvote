import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VotedModalComponent } from './voted-modal.component';

describe('VotedModalComponent', () => {
  let component: VotedModalComponent;
  let fixture: ComponentFixture<VotedModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VotedModalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VotedModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
