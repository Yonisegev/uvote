import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'popover',
  templateUrl: './popover.component.html',
  styleUrls: ['./popover.component.scss'],
})
export class PopoverComponent implements OnInit {
  constructor() {}
  @Input() actionsTexts;
  @Input() actionsIcons;
  @Output() actionType = new EventEmitter<string>();

  ngOnInit(): void {}

  onActionClick(actionType) {
    this.actionType.emit(actionType);
  }
}
