import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'popover',
  templateUrl: './popover.component.html',
  styleUrls: ['./popover.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PopoverComponent implements OnInit {
  constructor() {}
  @Input() actionsTexts: any[];
  @Input() actionsIcons: any[];
  @Output() actionType = new EventEmitter<string>();

  ngOnInit(): void {}

  onActionClick(actionType: string) {
    this.actionType.emit(actionType);
  }
}
