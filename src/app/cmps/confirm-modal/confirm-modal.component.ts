import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ConfirmationService } from 'primeng/api';

@Component({
  selector: 'confirm-modal',
  templateUrl: './confirm-modal.component.html',
  styleUrls: ['./confirm-modal.component.scss'],
  providers: [ConfirmationService],
})
export class ConfirmModalComponent implements OnInit {
  constructor(private confirmationService: ConfirmationService) {}
  ngOnInit(): void {
    this.onConfirm()
  }

  @Output() userSelection = new EventEmitter<boolean>()

  onConfirm() {
    this.confirmationService.confirm({
      message: 'Are you sure that you want to delete this poll?',
      accept: () => {
        this.userSelection.emit(true)
      },
      reject: () => {
        this.userSelection.emit(false)
      }
    });
  }
}
