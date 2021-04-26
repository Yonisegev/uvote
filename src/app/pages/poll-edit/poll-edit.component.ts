import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import * as moment from 'moment';
import { Poll } from 'src/app/models/poll';

@Component({
  selector: 'poll-edit',
  templateUrl: './poll-edit.component.html',
  styleUrls: ['./poll-edit.component.scss'],
})
export class PollEditComponent implements OnInit {
  constructor(private route: ActivatedRoute, private fb: FormBuilder) {}
  pollToEdit: Poll = null;
  pollForm: FormGroup;
  submitted: boolean = false;
  @ViewChild('question') questionInput: ElementRef;

  ngOnInit(): void {
    this.route.data.subscribe((data) => {
      this.pollToEdit = data.poll;
    });
    console.log('The poll to edit is:', this.pollToEdit);

    this.pollForm = this.fb.group({
      title: ['', [Validators.required]],
      description: [''],
      options: this.fb.array([
        this.fb.control('', [Validators.required]),
        this.fb.control('', [Validators.required]),
        this.fb.control(''),
      ]),
      isPrivate: [false],
      comments: [true],
      isDeadline: [false],
      dueDate: [''],
    });
  }

  ngAfterViewInit() {
    this.questionInput.nativeElement.focus();
  }

  get options(): FormArray {
    return this.pollForm.get('options') as FormArray;
  }

  onAddOption(): void {
    this.options.push(this.fb.control(''));
    console.log(this.options, 'poll options');
    console.log(this.pollForm, 'poll form');
  }

  printForm() {
    console.log(this.pollForm);
    console.log(moment('Fri Apr 23 2021 22:40:35').format('x'));
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
      console.log('INVALID FORM!');
      return;
    }
    console.log(this.pollForm.value);

    this.submitted = false;
  }
}
