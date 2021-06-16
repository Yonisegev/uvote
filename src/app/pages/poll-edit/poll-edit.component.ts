import {
  AfterViewInit,
  Component,
  ElementRef,
  OnInit,
  ViewChild,
} from '@angular/core';
import {
  trigger,
  state,
  style,
  animate,
  transition,
  keyframes,
} from '@angular/animations';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Poll } from 'src/app/models/poll';
import { UserService } from 'src/app/services/user.service';
import { cloneDeep } from 'lodash';
import { PollService } from 'src/app/services/poll.service';
import { Option } from 'src/app/models/option';
import { LoggedUser } from 'src/app/models/logged-user';

@Component({
  selector: 'poll-edit',
  templateUrl: './poll-edit.component.html',
  styleUrls: ['./poll-edit.component.scss'],
  animations: [
    trigger('input', [
      state('in', style({ opacity: 1 })),
      transition(':enter', [
        animate(
          '.3s ease-in',
          keyframes([
            style({ opacity: 0 }),
            style({ opacity: 0.5 }),
            style({ opacity: 1 }),
          ])
        ),
      ]),
    ]),
    trigger(
			"disabled",
			[
				transition( ":enter", [] )
			]
		)
  ],
})
export class PollEditComponent implements OnInit, AfterViewInit {
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private userService: UserService,
    private pollService: PollService,
    private fb: FormBuilder
  ) {}
  pollToEdit: Poll = null;
  pollForm: FormGroup;
  submitted: boolean = false;
  loggedInUser: LoggedUser;
  isAnimationDisabled: boolean = true
  @ViewChild('question') questionInput: ElementRef;

  ngOnInit(): void {
    this.route.data.subscribe((data) => {
      this.pollToEdit = data.poll;
    });
    this.loggedInUser = this.userService.loggedUserValue;
    if (!this.loggedInUser) {
      this.userService.getGuestData();
    }
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
    this.isAnimationDisabled = false
    this.options.push(this.fb.control(''));
  }

  onOptionFocus(idx) {
    console.log('the i is', idx);
    console.log('the options length is', this.pollForm.controls.options.value);
    if (idx + 1 === this.pollForm.controls.options.value.length) {
      this.onAddOption();
    }
  }

  onDateCheckbox(ev): void {
    // If user checked deadline, selected a date and then unchecked deadline, reset the dueDate property to ''.
    if (!ev.checked) {
      this.pollForm.controls.dueDate.setValue('');
    }
  }

  onResetForm(): void {
    this.pollForm.reset();
    console.log(this.pollForm);
    this.pollForm.controls.isComments.setValue(true);
    this.submitted = false;
  }

  onSubmit(): void {
    this.submitted = true;
    if (!this.pollForm.valid) {
      return;
    }
    const formValue = cloneDeep(this.pollForm.value);
    const existingPoll = cloneDeep(this.pollToEdit);
    const options = this.getFormOptions(formValue, existingPoll);
    const pollToSubmit: Poll = {
      _id: existingPoll?._id,
      title: formValue.title,
      description: formValue.description,
      options,
      isPrivate: formValue.isPrivate,
      isComments: formValue.isComments,
      dueDate: formValue.isDeadline ? formValue.dueDate : null,
      allowMultiple: formValue.allowMultiple ?? false,
      comments: existingPoll?.comments || [],
      createdAt: existingPoll?.createdAt || Date.now(),
      voters: existingPoll?.voters || {},
      totalVotes: existingPoll?.totalVotes || 0,
      owner: this.formOwner, // TODO: fill guest/user data as owner
    };
    this.pollService.submitPoll(pollToSubmit).subscribe((poll) => {
      this.router.navigateByUrl(`poll/${poll._id}`);
    });
    console.log('owner', pollToSubmit.owner);
    // console.log('form value is', formValue);
    console.log('poll to submit is', pollToSubmit);

    this.submitted = false;
  }

  fillForm(): void {
    const poll = this.pollToEdit;
    const pollIsDeadline = poll?.dueDate ? true : false;
    this.pollForm = this.fb.group({
      title: [poll?.title || '', [Validators.required]],
      description: [poll?.description || ''],
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
      isPrivate: [poll?.isPrivate || false],
      isComments: [poll?.isComments || true],
      isDeadline: [poll ? pollIsDeadline : false],
      dueDate: [poll ? new Date(poll.dueDate) : ''],
      allowMultiple: [poll?.allowMultiple ?? false],
    });
  }

  getFormOptions(formValue, existingPoll): Option[] {
    const options = [];
    for (let i = 0; i < formValue.options.length; i++) {
      if (!formValue.options[i]) continue;
      console.log('The I is', i);
      const option = {
        txt: formValue.options[i],
        votes: existingPoll?.options[i]?.votes
          ? existingPoll.options[i].votes
          : 0,
        _id: existingPoll?.options[i]?._id
          ? existingPoll.options[i]._id
          : `o${i}`,
      };
      options.push(option);
    }
    return options;
  }

  get formOwner() {
    if (this.pollToEdit) {
      return this.pollToEdit.owner;
    } else if (this.loggedInUser) {
      return this.loggedInUser;
    } else {
      const guestData = cloneDeep(this.userService.guestDataValue);
      const owner = {
        _id: 'guest',
        name: 'Guest',
        email: 'uvoteguest@gmail.com',
        country: guestData.country,
        flag: guestData.flag.svg,
      };
      return owner;
    }
  }
}
