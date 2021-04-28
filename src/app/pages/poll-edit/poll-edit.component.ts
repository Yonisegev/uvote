import {
  AfterViewInit,
  Component,
  ElementRef,
  OnInit,
  ViewChild,
} from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import * as moment from 'moment';
import { Poll } from 'src/app/models/poll';
import { UserService } from 'src/app/services/user.service';
import { cloneDeep } from 'lodash';
import { PollService } from 'src/app/services/poll.service';

@Component({
  selector: 'poll-edit',
  templateUrl: './poll-edit.component.html',
  styleUrls: ['./poll-edit.component.scss'],
})
export class PollEditComponent implements OnInit, AfterViewInit {
  constructor(
    private route: ActivatedRoute,
    private userService: UserService,
    private pollService: PollService,
    private fb: FormBuilder
  ) {}
  pollToEdit: Poll = null;
  pollForm: FormGroup;
  submitted: boolean = false;
  @ViewChild('question') questionInput: ElementRef;

  ngOnInit(): void {
    this.route.data.subscribe((data) => {
      this.pollToEdit = data.poll;
    });
    this.userService.getUserData();
    console.log('The poll to edit is:', this.pollToEdit);
    this.fillForm();
  }

  ngAfterViewInit() {
    if (this.pollToEdit) return; // If editing, don't focus the input to avoid the input showing the end of the question in case the string is long.
    this.questionInput.nativeElement.focus();
  }

  get options(): FormArray {
    return this.pollForm.get('options') as FormArray;
  }

  onAddOption(): void {
    this.options.push(this.fb.control(''));
  }

  onDateCheckbox(ev): void {
    // If user checked deadline, selected a date and then unchecked deadline, reset the dueDate property to ''.
    if (!ev.checked) {
      this.pollForm.controls.dueDate.setValue('');
    }
  }

  onResetForm(): void {
    this.pollForm.reset();
    this.pollForm.controls.comments.setValue(true);
    this.submitted = false;
  }

  onSubmit(): void {
    this.submitted = true;
    if (!this.pollForm.valid) {
      return;
    }
    const formValue = cloneDeep(this.pollForm.value);
    const existingPoll = cloneDeep(this.pollToEdit);
    const pollToSubmit: Poll = {
      _id: existingPoll?._id,
      title: formValue.title,
      description: formValue.description,
      options: formValue.options,
      isPrivate: formValue.isPrivate,
      isComments: formValue.isComments,
      dueDate: formValue.isDeadline
        ? moment(formValue.dueDate).format('x')
        : null,
      comments: existingPoll?.comments,
      createdAt: existingPoll?.createdAt,
      views: existingPoll?.views,
      voters: existingPoll?.voters,
      totalVotes: existingPoll?.totalVotes,
      owner: existingPoll?.owner ? existingPoll.owner : null,
    };
    this.pollService.onPollSubmit(pollToSubmit);

    console.log('form value is', formValue);
    console.log('poll to submit is', pollToSubmit);

    this.submitted = false;
  }

  fillForm(): void {
    const poll = this.pollToEdit;
    const pollIsDeadline = poll?.dueDate ? true : false;
    this.pollForm = this.fb.group({
      title: [poll ? poll.title : '', [Validators.required]],
      description: [poll ? poll.description : ''],
      options: this.fb.array(
        poll
          ? poll.options.map((option, idx) => {
              return this.fb.control(
                option.txt,
                idx <= 1 ? Validators.required : null
              );
            })
          : [
              this.fb.control('', [Validators.required]),
              this.fb.control('', [Validators.required]),
              this.fb.control(''),
            ]
      ),
      isPrivate: [poll ? poll.isPrivate : false],
      isComments: [poll ? poll.isComments : true],
      isDeadline: [poll ? pollIsDeadline : false],
      dueDate: [poll ? poll.dueDate : ''],
    });
  }
}
