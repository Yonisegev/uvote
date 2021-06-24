import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Poll } from 'src/app/models/poll';

@Component({
  selector: 'voted-modal',
  templateUrl: './voted-modal.component.html',
  styleUrls: ['./voted-modal.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class VotedModalComponent implements OnInit {
  constructor() {}
  @Input() poll: Poll;
  @Input() isVoteModalOpen: boolean;
  @Output() onModalClose = new EventEmitter<boolean>();
  ngOnInit(): void {}

  onModalClick(ev) {
    ev.stopPropagation();
  }

  get resultsLink() {
    return `/poll/${this.poll._id}/results`;
  }

  onCloseModal() {
    this.onModalClose.emit(false)
  }
}
