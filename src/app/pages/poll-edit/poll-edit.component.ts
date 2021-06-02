import {
  AfterViewInit,
  Component,
  ElementRef,
  OnInit,
  ViewChild,
} from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Poll } from 'src/app/models/poll';
import { UserService } from 'src/app/services/user.service';
import { cloneDeep } from 'lodash';
import { PollService } from 'src/app/services/poll.service';
import { Option } from 'src/app/models/option';
import { LoggedUser } from 'src/app/models/logged-user';
import { UtilService } from 'src/app/services/util.service';

@Component({
  selector: 'poll-edit',
  templateUrl: './poll-edit.component.html',
  styleUrls: ['./poll-edit.component.scss'],
})
export class PollEditComponent implements OnInit, AfterViewInit {
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private userService: UserService,
    private pollService: PollService,
    private utilService: UtilService,
    private fb: FormBuilder
  ) {}
  pollToEdit: Poll = null;
  pollForm: FormGroup;
  submitted: boolean = false;
  loggedInUser: LoggedUser
  @ViewChild('question') questionInput: ElementRef;

  ngOnInit(): void {
    this.route.data.subscribe((data) => {
      this.pollToEdit = data.poll;
    });
    this.loggedInUser = this.userService.loggedUserValue
    if(!this.loggedInUser) {
      this.userService.getUserData();
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
    const options = this.getFormOptions(formValue, existingPoll);
    const pollToSubmit: Poll = {
      _id: existingPoll?._id,
      title: formValue.title,
      description: formValue.description,
      options,
      isPrivate: formValue.isPrivate,
      isComments: formValue.isComments,
      dueDate: formValue.isDeadline ? formValue.dueDate : null,
      comments: existingPoll?.comments || [],
      createdAt: existingPoll?.createdAt || Date.now(),
      voters: existingPoll?.voters || {},
      totalVotes: existingPoll?.totalVotes || 0,
      owner: this.formOwner // TODO: fill guest/user data as owner
    };
    this.pollService.submitPoll(pollToSubmit).subscribe((poll) => {
      this.router.navigateByUrl(`poll/${poll._id}`)
    });
    console.log('owner', pollToSubmit.owner)
    // console.log('form value is', formValue);
    // console.log('poll to submit is', pollToSubmit);

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
      isComments: [ poll?.isComments || true],
      isDeadline: [poll ? pollIsDeadline : false],
      dueDate: [poll ? new Date(poll.dueDate) : ''],
    });
  }

  getFormOptions(formValue, existingPoll): Option[] {
    const options = []
    for(let i = 0; i < formValue.options.length; i++) {
      if(!formValue.options[i]) continue
      console.log('The I is', i)
      const option = {
        txt: formValue.options[i],
        votes: existingPoll?.options[i]?.votes ? existingPoll.options[i].votes : 0,
        _id: existingPoll?.options[i]?._id ? existingPoll.options[i]._id : `o${i}`
        
      }
      options.push(option)
    }
    return options
  }

  get formOwner() {
    if(this.pollToEdit) {
      return this.pollToEdit.owner
    } else if(this.loggedInUser) {
      return this.loggedInUser
    } else {
      const guestData =  cloneDeep(this.userService.userData)
      const owner = {
        _id: this.utilService.makeid(10),
        name: 'Guest',
        email: 'uvoteguest@gmail.com',
        country: guestData.country,
        flag: guestData.flag.svg,
      }
      return owner
    }
  }
}
