(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\yoni1\Desktop\dev\uvote\src\main.ts */"zUnb");


/***/ }),

/***/ "29kc":
/*!********************************************************!*\
  !*** ./src/app/pages/poll-edit/poll-edit.component.ts ***!
  \********************************************************/
/*! exports provided: PollEditComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PollEditComponent", function() { return PollEditComponent; });
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/animations */ "R0Ic");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lodash */ "LvDl");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var src_app_services_user_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/user.service */ "qfBg");
/* harmony import */ var src_app_services_poll_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/poll.service */ "Sh49");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var primeng_checkbox__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! primeng/checkbox */ "Ji6n");
/* harmony import */ var primeng_calendar__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! primeng/calendar */ "eO1q");












const _c0 = ["question"];
function PollEditComponent_span_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "Question is required.");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function PollEditComponent_span_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "Please fill at least 2 options.");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function PollEditComponent_div_16_Template(rf, ctx) { if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "input", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("focus", function PollEditComponent_div_16_Template_input_focus_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r9); const i_r7 = ctx.index; const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return ctx_r8.onOptionFocus(i_r7); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const i_r7 = ctx.index;
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("@.disabled", ctx_r3.isAnimationDisabled);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpropertyInterpolate1"]("placeholder", "Add option ", i_r7 + 1, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("formControlName", i_r7)("@input", "in");
} }
function PollEditComponent_div_24_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1, "p-calendar", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("showTime", true)("monthNavigator", true);
} }
function PollEditComponent_div_31_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, "* As a guest you won't be able to edit/delete your poll");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
const _c1 = function (a0) { return { "has-error": a0 }; };
const _c2 = function (a0) { return { "mb-checkbox": a0 }; };
class PollEditComponent {
    constructor(route, router, userService, pollService, fb, titleService) {
        this.route = route;
        this.router = router;
        this.userService = userService;
        this.pollService = pollService;
        this.fb = fb;
        this.titleService = titleService;
        this.pollToEdit = null;
        this.submitted = false;
        this.isAnimationDisabled = true;
    }
    ngOnInit() {
        this.route.data.subscribe((data) => {
            this.pollToEdit = data.poll;
        });
        this.loggedInUser = this.userService.loggedUserValue;
        if (!this.loggedInUser) {
            this.userService.getGuestData();
        }
        this.fillForm();
        const tabTitle = this.pollToEdit ? 'Edit Poll' : 'Create Poll';
        this.titleService.setTitle(tabTitle);
    }
    ngAfterViewInit() {
        if (this.pollToEdit)
            return; // If editing, don't focus the input to avoid the input showing the end of the question in case the string is long.
        this.questionInput.nativeElement.focus();
    }
    get options() {
        return this.pollForm.get('options');
    }
    onAddOption() {
        this.isAnimationDisabled = false;
        this.options.push(this.fb.control(''));
    }
    onOptionFocus(idx) {
        if (idx + 1 === this.pollForm.controls.options.value.length) {
            this.onAddOption();
        }
    }
    onDateCheckbox(ev) {
        // If user checked deadline, selected a date and then unchecked deadline, reset the dueDate property to ''.
        if (!ev.checked) {
            this.pollForm.controls.dueDate.setValue('');
        }
    }
    onResetForm() {
        this.pollForm.reset();
        this.pollForm.controls.isComments.setValue(true);
        this.submitted = false;
    }
    onSubmit() {
        var _a;
        this.submitted = true;
        if (!this.pollForm.valid) {
            return;
        }
        const formValue = Object(lodash__WEBPACK_IMPORTED_MODULE_2__["cloneDeep"])(this.pollForm.value);
        const existingPoll = Object(lodash__WEBPACK_IMPORTED_MODULE_2__["cloneDeep"])(this.pollToEdit);
        const options = this.getFormOptions(formValue, existingPoll);
        const pollToSubmit = {
            _id: existingPoll === null || existingPoll === void 0 ? void 0 : existingPoll._id,
            title: formValue.title,
            description: formValue.description,
            options,
            isPrivate: formValue.isPrivate,
            isComments: formValue.isComments,
            dueDate: formValue.isDeadline ? formValue.dueDate : null,
            allowMultiple: (_a = formValue.allowMultiple) !== null && _a !== void 0 ? _a : false,
            comments: (existingPoll === null || existingPoll === void 0 ? void 0 : existingPoll.comments) || [],
            createdAt: (existingPoll === null || existingPoll === void 0 ? void 0 : existingPoll.createdAt) || Date.now(),
            voters: (existingPoll === null || existingPoll === void 0 ? void 0 : existingPoll.voters) || {},
            totalVotes: (existingPoll === null || existingPoll === void 0 ? void 0 : existingPoll.totalVotes) || 0,
            owner: this.formOwner,
        };
        this.pollService.submitPoll(pollToSubmit).subscribe((poll) => {
            this.router.navigateByUrl(`poll/${poll._id}`);
        });
        this.submitted = false;
    }
    fillForm() {
        var _a;
        const poll = this.pollToEdit;
        const pollIsDeadline = (poll === null || poll === void 0 ? void 0 : poll.dueDate) ? true : false;
        this.pollForm = this.fb.group({
            title: [(poll === null || poll === void 0 ? void 0 : poll.title) || '', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
            description: [(poll === null || poll === void 0 ? void 0 : poll.description) || ''],
            options: this.fb.array(poll
                ? poll.options.map((option, idx) => {
                    return this.fb.control(option.txt, idx <= 1 ? _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required : null);
                })
                : [
                    this.fb.control('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]),
                    this.fb.control('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]),
                    this.fb.control(''),
                ]),
            isPrivate: [(poll === null || poll === void 0 ? void 0 : poll.isPrivate) || false],
            isComments: [(poll === null || poll === void 0 ? void 0 : poll.isComments) || true],
            isDeadline: [poll ? pollIsDeadline : false],
            dueDate: [poll ? new Date(poll.dueDate) : ''],
            allowMultiple: [(_a = poll === null || poll === void 0 ? void 0 : poll.allowMultiple) !== null && _a !== void 0 ? _a : false],
        });
    }
    getFormOptions(formValue, existingPoll) {
        var _a, _b;
        const options = [];
        for (let i = 0; i < formValue.options.length; i++) {
            if (!formValue.options[i])
                continue;
            const option = {
                txt: formValue.options[i],
                votes: ((_a = existingPoll === null || existingPoll === void 0 ? void 0 : existingPoll.options[i]) === null || _a === void 0 ? void 0 : _a.votes) ? existingPoll.options[i].votes
                    : 0,
                _id: ((_b = existingPoll === null || existingPoll === void 0 ? void 0 : existingPoll.options[i]) === null || _b === void 0 ? void 0 : _b._id) ? existingPoll.options[i]._id
                    : `o${i}`,
            };
            options.push(option);
        }
        return options;
    }
    get formOwner() {
        if (this.pollToEdit) {
            return this.pollToEdit.owner;
        }
        else if (this.loggedInUser) {
            return this.loggedInUser;
        }
        else {
            const guestData = Object(lodash__WEBPACK_IMPORTED_MODULE_2__["cloneDeep"])(this.userService.guestDataValue);
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
PollEditComponent.ɵfac = function PollEditComponent_Factory(t) { return new (t || PollEditComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](src_app_services_user_service__WEBPACK_IMPORTED_MODULE_5__["UserService"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](src_app_services_poll_service__WEBPACK_IMPORTED_MODULE_6__["PollService"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_7__["Title"])); };
PollEditComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: PollEditComponent, selectors: [["poll-edit"]], viewQuery: function PollEditComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵviewQuery"](_c0, 1);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵloadQuery"]()) && (ctx.questionInput = _t.first);
    } }, decls: 32, vars: 24, consts: [[1, "poll-edit", "flex", "align-center"], [1, "flying-rabbit"], [1, "flex", "column", "align-center", "justify-center", "form-container", 3, "formGroup", "ngSubmit"], [1, "form-question"], ["for", "title", 1, "question-label"], ["formControlName", "title", "id", "title", "type", "text", "placeholder", "Enter your question here", "autocomplete", "off", 1, "question"], ["question", ""], [1, "error-p", 3, "ngClass"], [4, "ngIf"], ["formControlName", "description", "cols", "30", "rows", "3", "autocomplete", "false", "spellcheck", "false", "placeholder", "Optional description"], ["formArrayName", "options", 1, "options"], ["class", "form-options", 4, "ngFor", "ngForOf"], ["type", "button", 3, "click"], [1, "checkboxes", 3, "ngClass"], ["label", "Comments", 3, "formControl", "binary"], ["label", "Private Poll", 3, "formControl", "binary"], ["label", "Deadline", 3, "formControl", "binary", "onChange"], ["label", "Allow Multiple Votes", 3, "formControl", "binary"], ["class", "calendar", 4, "ngIf"], [1, "buttons", "flex", "space-between"], ["type", "button", 1, "reset-btn", 3, "click"], [1, "underline"], ["type", "submit", 1, "submit-btn"], ["class", "info", 4, "ngIf"], [1, "form-options"], ["type", "text", 3, "placeholder", "formControlName", "focus"], [1, "calendar"], ["formControlName", "dueDate", "showIcon", "true", "dateFormat", "dd/mm/yy", "showButtonBar", "true", 1, "p-datepicker-monthpicker", 3, "showTime", "monthNavigator"], [1, "info"]], template: function PollEditComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "section", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "form", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngSubmit", function PollEditComponent_Template_form_ngSubmit_2_listener() { return ctx.onSubmit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "label", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](5, "Question");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](6, "input", 5, 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "p", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](9, PollEditComponent_span_9_Template, 2, 0, "span", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](10, "textarea", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](11, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](12, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](13, "Options:");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](14, "p", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](15, PollEditComponent_span_15_Template, 2, 0, "span", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](16, PollEditComponent_div_16_Template, 2, 4, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](17, "button", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function PollEditComponent_Template_button_click_17_listener() { return ctx.onAddOption(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](18, "Add Option");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](19, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](20, "p-checkbox", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](21, "p-checkbox", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](22, "p-checkbox", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("onChange", function PollEditComponent_Template_p_checkbox_onChange_22_listener($event) { return ctx.onDateCheckbox($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](23, "p-checkbox", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](24, PollEditComponent_div_24_Template, 2, 2, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](25, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](26, "button", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function PollEditComponent_Template_button_click_26_listener() { return ctx.onResetForm(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](27, " Reset Form ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](28, "span", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](29, "button", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](30);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](31, PollEditComponent_div_31_Template, 3, 0, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("formGroup", ctx.pollForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction1"](18, _c1, ctx.submitted && ctx.pollForm.get("title").hasError("required")));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.submitted && ctx.pollForm.get("title").hasError("required"));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction1"](20, _c1, ctx.submitted && ctx.options.controls[0].hasError("required") || ctx.submitted && ctx.options.controls[1].hasError("required")));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.submitted && ctx.options.controls[0].hasError("required") || ctx.submitted && ctx.options.controls[1].hasError("required"));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx.options.controls);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction1"](22, _c2, !ctx.pollForm.get("isDeadline").value));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("formControl", ctx.pollForm.controls["isComments"])("binary", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("formControl", ctx.pollForm.controls["isPrivate"])("binary", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("formControl", ctx.pollForm.controls["isDeadline"])("binary", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("formControl", ctx.pollForm.controls["allowMultiple"])("binary", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.pollForm.get("isDeadline").value);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", ctx.pollToEdit ? "Save" : "Create", " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", !ctx.loggedInUser);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgClass"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormArrayName"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgForOf"], primeng_checkbox__WEBPACK_IMPORTED_MODULE_9__["Checkbox"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlDirective"], primeng_calendar__WEBPACK_IMPORTED_MODULE_10__["Calendar"]], styles: [".poll-edit {\n  background-image: url('fluid.svg');\n  background-position: top;\n  background-size: cover;\n  min-height: calc(100vh - 40px);\n  position: relative;\n  z-index: 5;\n}\n.poll-edit form {\n  position: relative;\n  background-color: #fafafa;\n  box-shadow: 0 0.5em 1em 0.5em rgba(10, 10, 10, 0.1), 0 0px 0 1px rgba(10, 10, 10, 0.02);\n  width: 600px;\n  height: clamp(600px, 600px, auto);\n  padding: 30px;\n  border-radius: 3px;\n}\n.poll-edit form > *:not(:last-child) {\n  width: 100%;\n}\n.poll-edit form textarea {\n  resize: none;\n  border: 1px solid #ced4da;\n  border-radius: 3px;\n  padding: 3px 0 0 3px;\n  margin: 10px 0 16px 0;\n}\n.poll-edit form .question-label {\n  font-size: 1.5rem;\n  width: 100%;\n}\n.poll-edit form .question {\n  width: 100%;\n  padding: 10px 0;\n  outline: none;\n  border: none;\n  font-size: 2.2rem;\n  letter-spacing: 0.6px;\n  margin-bottom: 0;\n  font-family: Quicksand-SemiBold, sans-serif;\n}\n.poll-edit form .options {\n  margin-bottom: 0.8rem;\n}\n.poll-edit form .options h3 {\n  letter-spacing: 0.5px;\n}\n.poll-edit form .options .form-options > * {\n  width: 100%;\n  border: 2px solid #ced4da7a;\n  border-radius: 3px;\n  margin-bottom: 8px;\n  padding: 10px;\n  font-size: 1.1rem;\n  outline: none;\n}\n.poll-edit form .options .form-options > *::placeholder {\n  color: #333;\n}\n.poll-edit form .options .form-options:first-of-type {\n  margin-top: 2px;\n}\n.poll-edit form .options button {\n  padding: 4px 20px;\n  font-size: 1.2rem;\n  border-radius: 3px;\n}\n.poll-edit form .checkboxes {\n  margin-bottom: 0.8rem;\n}\n.poll-edit form .checkboxes > *:not(:first-child) {\n  margin-left: 10px;\n}\n.poll-edit form .checkboxes .p-checkbox:not(.p-checkbox-disabled) .p-checkbox-box.p-focus {\n  box-shadow: none !important;\n}\n@media (max-width: 560px) {\n  .poll-edit form .checkboxes {\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: flex-start;\n    margin-left: 4px;\n  }\n  .poll-edit form .checkboxes > *:not(:first-child) {\n    margin-left: unset;\n  }\n  .poll-edit form .checkboxes > *:not(:last-child) {\n    margin-bottom: 5px;\n  }\n}\n.poll-edit form .calendar {\n  margin-bottom: 1.1rem;\n}\n.poll-edit form .buttons {\n  width: 100%;\n  position: relative;\n  margin-bottom: 8px;\n}\n.poll-edit form .buttons .reset-btn {\n  background-color: unset;\n  color: #4d4d4d;\n  transition: 0.2s color;\n}\n.poll-edit form .buttons .reset-btn:hover {\n  color: #333;\n}\n.poll-edit form .buttons .reset-btn:hover:hover + .underline {\n  opacity: 1;\n}\n.poll-edit form .buttons .underline {\n  position: absolute;\n  opacity: 0;\n  height: 1px;\n  bottom: 2px;\n  left: 5px;\n  background-color: #4d4d4d;\n  width: 70px;\n  transition: 0.2s opacity;\n}\n.poll-edit form .buttons .submit-btn {\n  text-transform: capitalize;\n}\n@media (max-width: 640px) {\n  .poll-edit form {\n    width: 100%;\n  }\n}\n.poll-edit .form-container {\n  max-width: 980px;\n  margin: 0 auto;\n}\n@media (max-width: 640px) {\n  .poll-edit .form-container {\n    max-width: unset;\n    width: 90%;\n    margin: 20px auto;\n  }\n  .poll-edit .form-container .question {\n    font-size: 1.65rem;\n  }\n}\n.flying-rabbit {\n  position: absolute;\n  right: 0;\n  top: 0;\n  z-index: -1;\n  background-image: url('dabbing-rabbit.svg');\n  width: 300px;\n  height: 300px;\n  background-position: center;\n  background-size: cover;\n  background-color: transparent;\n  fill: transparent;\n}\n@media (max-width: 1160px) {\n  .flying-rabbit {\n    width: 250px;\n    height: 250px;\n  }\n}\n@media (max-width: 1040px) {\n  .flying-rabbit {\n    display: none;\n  }\n}\n.mb-checkbox {\n  margin-bottom: 1.5rem !important;\n}\n.has-error span {\n  color: #ff3333;\n}\n.error-p {\n  height: 16px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxwb2xsLWVkaXQuY29tcG9uZW50LnNjc3MiLCIuLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFwuLlxcYXNzZXRzXFxzdHlsZXNcXHNldHVwXFxfdmFyaWFibGVzLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUE7RUFDRSxrQ0FBQTtFQUNBLHdCQUFBO0VBQ0Esc0JBQUE7RUFDQSw4QkFBQTtFQUNBLGtCQUFBO0VBQ0EsVUFBQTtBQURGO0FBRUU7RUFDRSxrQkFBQTtFQUNBLHlCQ1JPO0VEU1AsdUZBQUE7RUFDQSxZQUFBO0VBQ0EsaUNBQUE7RUFDQSxhQUFBO0VBQ0Esa0JBQUE7QUFBSjtBQUNJO0VBQ0UsV0FBQTtBQUNOO0FBQ0k7RUFDRSxZQUFBO0VBQ0EseUJBQUE7RUFDQSxrQkFBQTtFQUNBLG9CQUFBO0VBQ0EscUJBQUE7QUFDTjtBQUVJO0VBQ0UsaUJBQUE7RUFDQSxXQUFBO0FBQU47QUFFSTtFQUNFLFdBQUE7RUFDQSxlQUFBO0VBQ0EsYUFBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtFQUNBLHFCQUFBO0VBQ0EsZ0JBQUE7RUFDQSwyQ0FBQTtBQUFOO0FBR0k7RUFDRSxxQkFBQTtBQUROO0FBRU07RUFDRSxxQkFBQTtBQUFSO0FBR1E7RUFDRSxXQUFBO0VBQ0EsMkJBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLGlCQUFBO0VBQ0EsYUFBQTtBQURWO0FBR1U7RUFDRSxXQUFBO0FBRFo7QUFLUTtFQUNFLGVBQUE7QUFIVjtBQU1NO0VBQ0UsaUJBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0FBSlI7QUFRSTtFQUNFLHFCQUFBO0FBTk47QUFRTTtFQUNFLGlCQUFBO0FBTlI7QUFTTTtFQUNFLDJCQUFBO0FBUFI7QUFVTTtFQVhGO0lBWUksYUFBQTtJQUNBLHNCQUFBO0lBQ0EsdUJBQUE7SUFDQSx1QkFBQTtJQUNBLGdCQUFBO0VBUE47RUFTTTtJQUNFLGtCQUFBO0VBUFI7RUFVTTtJQUNFLGtCQUFBO0VBUlI7QUFDRjtBQVlJO0VBQ0UscUJBQUE7QUFWTjtBQWFJO0VBQ0UsV0FBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7QUFYTjtBQVlNO0VBQ0UsdUJBQUE7RUFDQSxjQUFBO0VBRUEsc0JBQUE7QUFYUjtBQWFRO0VBQ0UsV0M5R0o7QURtR047QUFZVTtFQUNFLFVBQUE7QUFWWjtBQWNNO0VBQ0Usa0JBQUE7RUFDQSxVQUFBO0VBQ0EsV0FBQTtFQUNBLFdBQUE7RUFDQSxTQUFBO0VBQ0EseUJBQUE7RUFDQSxXQUFBO0VBRUEsd0JBQUE7QUFiUjtBQWdCTTtFQUNFLDBCQUFBO0FBZFI7QUFrQkk7RUFuSUY7SUFvSUksV0FBQTtFQWZKO0FBQ0Y7QUFrQkU7RUFDRSxnQkFBQTtFQUNBLGNBQUE7QUFoQko7QUFrQkk7RUFKRjtJQUtJLGdCQUFBO0lBQ0EsVUFBQTtJQUNBLGlCQUFBO0VBZko7RUFpQkk7SUFDRSxrQkFBQTtFQWZOO0FBQ0Y7QUFvQkE7RUFDRSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxNQUFBO0VBQ0EsV0FBQTtFQUNBLDJDQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSwyQkFBQTtFQUNBLHNCQUFBO0VBQ0EsNkJBQUE7RUFDQSxpQkFBQTtBQWpCRjtBQW1CRTtFQWJGO0lBY0ksWUFBQTtJQUNBLGFBQUE7RUFoQkY7QUFDRjtBQWtCRTtFQWxCRjtJQW1CSSxhQUFBO0VBZkY7QUFDRjtBQWtCQTtFQUNFLGdDQUFBO0FBZkY7QUFtQkU7RUFDRSxjQ3BMUTtBRG9LWjtBQW9CQTtFQUNFLFlBQUE7QUFqQkYiLCJmaWxlIjoicG9sbC1lZGl0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCBcIi4uLy4uLy4uL2Fzc2V0cy9zdHlsZXMvc2V0dXAvdmFyaWFibGVzXCI7XHJcblxyXG4ucG9sbC1lZGl0IHtcclxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIuLi8uLi8uLi9hc3NldHMvaW1ncy9mbHVpZC5zdmdcIik7XHJcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogdG9wO1xyXG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbiAgbWluLWhlaWdodDogY2FsYygxMDB2aCAtIDQwcHgpO1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICB6LWluZGV4OiA1O1xyXG4gIGZvcm0ge1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogJGJnLWNvbG9yO1xyXG4gICAgYm94LXNoYWRvdzogMCAwLjVlbSAxZW0gMC41ZW0gcmdiYSgxMCwgMTAsIDEwLCAwLjEpLCAwIDBweCAwIDFweCByZ2JhKDEwLCAxMCwgMTAsIDAuMDIpO1xyXG4gICAgd2lkdGg6IDYwMHB4O1xyXG4gICAgaGVpZ2h0OiBjbGFtcCg2MDBweCwgNjAwcHgsIGF1dG8pO1xyXG4gICAgcGFkZGluZzogMzBweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDNweDtcclxuICAgICYgPiAqOm5vdCg6bGFzdC1jaGlsZCkge1xyXG4gICAgICB3aWR0aDogMTAwJTtcclxuICAgIH1cclxuICAgIHRleHRhcmVhIHtcclxuICAgICAgcmVzaXplOiBub25lO1xyXG4gICAgICBib3JkZXI6IDFweCBzb2xpZCAjY2VkNGRhO1xyXG4gICAgICBib3JkZXItcmFkaXVzOiAzcHg7XHJcbiAgICAgIHBhZGRpbmc6IDNweCAwIDAgM3B4O1xyXG4gICAgICBtYXJnaW46IDEwcHggMCAxNnB4IDA7XHJcbiAgICB9XHJcblxyXG4gICAgLnF1ZXN0aW9uLWxhYmVsIHtcclxuICAgICAgZm9udC1zaXplOiAxLjVyZW07XHJcbiAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgfVxyXG4gICAgLnF1ZXN0aW9uIHtcclxuICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgIHBhZGRpbmc6IDEwcHggMDtcclxuICAgICAgb3V0bGluZTogbm9uZTtcclxuICAgICAgYm9yZGVyOiBub25lO1xyXG4gICAgICBmb250LXNpemU6IDIuMnJlbTtcclxuICAgICAgbGV0dGVyLXNwYWNpbmc6IDAuNnB4O1xyXG4gICAgICBtYXJnaW4tYm90dG9tOiAwO1xyXG4gICAgICBmb250LWZhbWlseTogUXVpY2tzYW5kLVNlbWlCb2xkLCBzYW5zLXNlcmlmO1xyXG4gICAgfVxyXG5cclxuICAgIC5vcHRpb25zIHtcclxuICAgICAgbWFyZ2luLWJvdHRvbTogMC44cmVtO1xyXG4gICAgICBoMyB7XHJcbiAgICAgICAgbGV0dGVyLXNwYWNpbmc6IDAuNXB4O1xyXG4gICAgICB9XHJcbiAgICAgIC5mb3JtLW9wdGlvbnMge1xyXG4gICAgICAgICYgPiAqIHtcclxuICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgYm9yZGVyOiAycHggc29saWQgI2NlZDRkYTdhO1xyXG4gICAgICAgICAgYm9yZGVyLXJhZGl1czogM3B4O1xyXG4gICAgICAgICAgbWFyZ2luLWJvdHRvbTogOHB4O1xyXG4gICAgICAgICAgcGFkZGluZzogMTBweDtcclxuICAgICAgICAgIGZvbnQtc2l6ZTogMS4xcmVtO1xyXG4gICAgICAgICAgb3V0bGluZTogbm9uZTtcclxuXHJcbiAgICAgICAgICAmOjpwbGFjZWhvbGRlciB7XHJcbiAgICAgICAgICAgIGNvbG9yOiAjMzMzO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgJjpmaXJzdC1vZi10eXBlIHtcclxuICAgICAgICAgIG1hcmdpbi10b3A6IDJweDtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgICAgYnV0dG9uIHtcclxuICAgICAgICBwYWRkaW5nOiA0cHggMjBweDtcclxuICAgICAgICBmb250LXNpemU6IDEuMnJlbTtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiAzcHg7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAuY2hlY2tib3hlcyB7XHJcbiAgICAgIG1hcmdpbi1ib3R0b206IDAuOHJlbTtcclxuXHJcbiAgICAgICYgPiAqOm5vdCg6Zmlyc3QtY2hpbGQpIHtcclxuICAgICAgICBtYXJnaW4tbGVmdDogMTBweDtcclxuICAgICAgfVxyXG5cclxuICAgICAgLnAtY2hlY2tib3g6bm90KC5wLWNoZWNrYm94LWRpc2FibGVkKSAucC1jaGVja2JveC1ib3gucC1mb2N1cyB7XHJcbiAgICAgICAgYm94LXNoYWRvdzogbm9uZSAhaW1wb3J0YW50O1xyXG4gICAgICB9XHJcblxyXG4gICAgICBAbWVkaWEgKG1heC13aWR0aDogNTYwcHgpIHtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgICAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XHJcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDRweDtcclxuXHJcbiAgICAgICAgJiA+ICo6bm90KDpmaXJzdC1jaGlsZCkge1xyXG4gICAgICAgICAgbWFyZ2luLWxlZnQ6IHVuc2V0O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgJiA+ICo6bm90KDpsYXN0LWNoaWxkKSB7XHJcbiAgICAgICAgICBtYXJnaW4tYm90dG9tOiA1cHg7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLmNhbGVuZGFyIHtcclxuICAgICAgbWFyZ2luLWJvdHRvbTogMS4xcmVtO1xyXG4gICAgfVxyXG5cclxuICAgIC5idXR0b25zIHtcclxuICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgbWFyZ2luLWJvdHRvbTogOHB4O1xyXG4gICAgICAucmVzZXQtYnRuIHtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB1bnNldDtcclxuICAgICAgICBjb2xvcjogbGlnaHRlbigkdHh0LCAxMCUpO1xyXG5cclxuICAgICAgICB0cmFuc2l0aW9uOiAwLjJzIGNvbG9yO1xyXG5cclxuICAgICAgICAmOmhvdmVyIHtcclxuICAgICAgICAgIGNvbG9yOiAkdHh0O1xyXG4gICAgICAgICAgJjpob3ZlciArIC51bmRlcmxpbmUge1xyXG4gICAgICAgICAgICBvcGFjaXR5OiAxO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgICAudW5kZXJsaW5lIHtcclxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgb3BhY2l0eTogMDtcclxuICAgICAgICBoZWlnaHQ6IDFweDtcclxuICAgICAgICBib3R0b206IDJweDtcclxuICAgICAgICBsZWZ0OiA1cHg7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogbGlnaHRlbigkdHh0LCAxMCUpO1xyXG4gICAgICAgIHdpZHRoOiA3MHB4O1xyXG5cclxuICAgICAgICB0cmFuc2l0aW9uOiAwLjJzIG9wYWNpdHk7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC5zdWJtaXQtYnRuIHtcclxuICAgICAgICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIEBtZWRpYSAobWF4LXdpZHRoOiA2NDBweCkge1xyXG4gICAgICB3aWR0aDogMTAwJTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC5mb3JtLWNvbnRhaW5lciB7XHJcbiAgICBtYXgtd2lkdGg6IDk4MHB4O1xyXG4gICAgbWFyZ2luOiAwIGF1dG87XHJcblxyXG4gICAgQG1lZGlhIChtYXgtd2lkdGg6IDY0MHB4KSB7XHJcbiAgICAgIG1heC13aWR0aDogdW5zZXQ7XHJcbiAgICAgIHdpZHRoOiA5MCU7XHJcbiAgICAgIG1hcmdpbjogMjBweCBhdXRvO1xyXG5cclxuICAgICAgLnF1ZXN0aW9uIHtcclxuICAgICAgICBmb250LXNpemU6IDEuNjVyZW07XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbi5mbHlpbmctcmFiYml0IHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgcmlnaHQ6IDA7XHJcbiAgdG9wOiAwO1xyXG4gIHotaW5kZXg6IC0xO1xyXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi4uLy4uLy4uL2Fzc2V0cy9pbWdzL2RhYmJpbmctcmFiYml0LnN2Z1wiKTtcclxuICB3aWR0aDogMzAwcHg7XHJcbiAgaGVpZ2h0OiAzMDBweDtcclxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XHJcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcclxuICBmaWxsOiB0cmFuc3BhcmVudDtcclxuXHJcbiAgQG1lZGlhIChtYXgtd2lkdGg6IDExNjBweCkge1xyXG4gICAgd2lkdGg6IDI1MHB4O1xyXG4gICAgaGVpZ2h0OiAyNTBweDtcclxuICB9XHJcblxyXG4gIEBtZWRpYSAobWF4LXdpZHRoOiAxMDQwcHgpIHtcclxuICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgfVxyXG59XHJcblxyXG4ubWItY2hlY2tib3gge1xyXG4gIG1hcmdpbi1ib3R0b206IDEuNXJlbSAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4uaGFzLWVycm9yIHtcclxuICBzcGFuIHtcclxuICAgIGNvbG9yOiAkZXJyLWNvbG9yO1xyXG4gIH1cclxufVxyXG5cclxuLmVycm9yLXAge1xyXG4gIGhlaWdodDogMTZweDtcclxufVxyXG4iLCIvLyBDb2xvcnNcclxuJHByaW1hcnktY29sb3I6ICMwMDdlZmY7XHJcbiRzZWNvbmRhcnktY29sb3I6ICM0ZmFhZjg7XHJcbiRiZy1jb2xvcjogI2ZhZmFmYTtcclxuJHdoaXRlOiAjZmZmO1xyXG4kbGlnaHQtY29sb3I6ICM5OTliYWM7XHJcbiRkYXJrLWJsdWU6ICMwNTIwNGE7XHJcbiR0eHQ6ICMzMzM7XHJcbiRkYXJrLXR4dDogIzBiMDkwYTtcclxuJGN0YS1jb2xvcjogIzNiZDk3NTtcclxuJGVyci1jb2xvcjogI2ZmMzMzMztcclxuLy8gQnJlYWtwb2ludHNcclxuJG1vYmlsZS1icmVha3BvaW50OiA0ODBweDtcclxuJG5hcnJvdy1icmVha3BvaW50OiA3NjhweDtcclxuJG5vcm1hbC1icmVha3BvaW50OiAxNDAwcHg7XHJcbiJdfQ== */"], encapsulation: 2, data: { animation: [
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["trigger"])('input', [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["state"])('in', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ opacity: 1 })),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])(':enter', [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('.3s ease-in', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["keyframes"])([
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ opacity: 0 }),
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ opacity: 0.5 }),
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ opacity: 1 }),
                    ])),
                ]),
            ]),
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["trigger"])('disabled', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])(':enter', [])]),
        ] } });


/***/ }),

/***/ "2Rin":
/*!******************************************!*\
  !*** ./src/app/services/util.service.ts ***!
  \******************************************/
/*! exports provided: UtilService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UtilService", function() { return UtilService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

class UtilService {
    constructor() {
        this.makeid = (length) => {
            let text = '';
            const possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
            for (let i = 0; i < length; i++) {
                text += possible.charAt(Math.floor(Math.random() * possible.length));
            }
            return text;
        };
        this.getRandomLightColor = () => {
            let color = 'hsl(' + Math.random() * 360 + ', 100%, 40%)';
            return color;
        };
    }
    saveToStorage(key, val) {
        const str = JSON.stringify(val);
        localStorage.setItem(key, str);
    }
    loadFromStorage(key) {
        const str = localStorage.getItem(key);
        return JSON.parse(str);
    }
}
UtilService.ɵfac = function UtilService_Factory(t) { return new (t || UtilService)(); };
UtilService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: UtilService, factory: UtilService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "3MSm":
/*!*****************************************************!*\
  !*** ./src/app/services/resolvers/user.resolver.ts ***!
  \*****************************************************/
/*! exports provided: UserResolver */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserResolver", function() { return UserResolver; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _user_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../user.service */ "qfBg");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");



class UserResolver {
    constructor(userService, router) {
        this.userService = userService;
        this.router = router;
    }
    resolve(route) {
        const { id } = route.params;
        const page = route.queryParams.page || 1;
        if (!id) {
            this.router.navigateByUrl('/404');
            return null;
        }
        return this.userService.getById(id, page);
    }
}
UserResolver.ɵfac = function UserResolver_Factory(t) { return new (t || UserResolver)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_user_service__WEBPACK_IMPORTED_MODULE_1__["UserService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"])); };
UserResolver.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: UserResolver, factory: UserResolver.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "5U9e":
/*!********************************************!*\
  !*** ./src/app/services/socket.service.ts ***!
  \********************************************/
/*! exports provided: SocketService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SocketService", function() { return SocketService; });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var socket_io_client_dist_socket_io__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! socket.io-client/dist/socket.io */ "yd8o");
/* harmony import */ var socket_io_client_dist_socket_io__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(socket_io_client_dist_socket_io__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/environments/environment */ "AytR");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");

// @ts-ignore



class SocketService {
    constructor() {
        this.BASE_URL = src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].socketURL;
        this.socket = socket_io_client_dist_socket_io__WEBPACK_IMPORTED_MODULE_1__(this.BASE_URL);
    }
    on(eventName) {
        return new rxjs__WEBPACK_IMPORTED_MODULE_0__["Observable"]((subscriber) => {
            this.socket.on(eventName, (data) => {
                subscriber.next(data);
            });
        });
    }
    emit(eventName, data) {
        this.socket.emit(eventName, data);
    }
}
SocketService.ɵfac = function SocketService_Factory(t) { return new (t || SocketService)(); };
SocketService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({ token: SocketService, factory: SocketService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "AQiE":
/*!***************************************************************!*\
  !*** ./src/app/cmps/poll-comments/poll-comments.component.ts ***!
  \***************************************************************/
/*! exports provided: PollCommentsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PollCommentsComponent", function() { return PollCommentsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! moment */ "wd/R");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lodash */ "LvDl");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var src_app_services_poll_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/poll.service */ "Sh49");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var ngx_pagination__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-pagination */ "xkgV");








function PollCommentsComponent_p_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Can't post an empty comment");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function PollCommentsComponent_div_9_Template(rf, ctx) { if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "pagination-controls", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("pageChange", function PollCommentsComponent_div_9_Template_pagination_controls_pageChange_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4); const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r3.handlePageChange($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function PollCommentsComponent_div_10_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h5");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "p", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const comment_r6 = ctx.$implicit;
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](comment_r6.author.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" - ", ctx_r5.getCommentDate(comment_r6), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](comment_r6.txt);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("background-color", comment_r6.author.logoColor);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](comment_r6.author.name.charAt(0));
} }
const _c0 = function (a1) { return { itemsPerPage: 3, currentPage: a1 }; };
function PollCommentsComponent_div_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, PollCommentsComponent_div_10_div_1_Template, 11, 6, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "paginate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](2, 1, ctx_r2.poll.comments, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](4, _c0, ctx_r2.page)));
} }
class PollCommentsComponent {
    constructor(pollService) {
        this.pollService = pollService;
        this.error = false;
        this.page = 1;
        this.updatePoll = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"](true);
    }
    ngOnInit() { }
    onCommentPost() {
        if (!this.commentValue)
            this.error = true;
        const pollCopy = Object(lodash__WEBPACK_IMPORTED_MODULE_2__["cloneDeep"])(this.poll);
        this.pollService
            .addComment(this.commentValue, pollCopy)
            .subscribe((updatedPoll) => this.updatePoll.emit(updatedPoll));
        this.error = false;
        this.commentValue = '';
    }
    getCommentDate(comment) {
        const created = moment__WEBPACK_IMPORTED_MODULE_1__(comment.createdAt);
        return created.from(Date.now());
    }
    handlePageChange(ev) {
        this.page = ev;
    }
}
PollCommentsComponent.ɵfac = function PollCommentsComponent_Factory(t) { return new (t || PollCommentsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_poll_service__WEBPACK_IMPORTED_MODULE_3__["PollService"])); };
PollCommentsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PollCommentsComponent, selectors: [["poll-comments"]], inputs: { poll: "poll" }, outputs: { updatePoll: "updatePoll" }, decls: 11, vars: 4, consts: [[1, "comments-section"], ["class", "error", 4, "ngIf"], [1, "container", "flex", "column"], [1, "add-comment", "flex", "column"], [1, "comments-heading"], ["name", "comments", "id", "comments", "placeholder", "Share your thoughts", 3, "ngModel", "ngModelChange"], [3, "click"], ["class", "pagination", 4, "ngIf"], ["class", "comment-list", 4, "ngIf"], [1, "error"], [1, "pagination"], ["previousLabel", "Previous", "nextLabel", "Next", "responsive", "true", 3, "pageChange"], [1, "comment-list"], ["class", "comment-preview", 4, "ngFor", "ngForOf"], [1, "comment-preview"], [1, "comment-heading"], [1, "comment-txt"], [1, "author-logo", "flex", "justify-center", "align-center"]], template: function PollCommentsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, PollCommentsComponent_p_1_Template, 2, 0, "p", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h4", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Add a comment");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "textarea", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function PollCommentsComponent_Template_textarea_ngModelChange_6_listener($event) { return ctx.commentValue = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PollCommentsComponent_Template_button_click_7_listener() { return ctx.onCommentPost(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Post comment");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, PollCommentsComponent_div_9_Template, 2, 0, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, PollCommentsComponent_div_10_Template, 3, 6, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.error);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.commentValue);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.poll.comments.length > 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.poll.comments.length);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgModel"], ngx_pagination__WEBPACK_IMPORTED_MODULE_6__["PaginationControlsComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"]], pipes: [ngx_pagination__WEBPACK_IMPORTED_MODULE_6__["PaginatePipe"]], styles: [".comments-section {\n  margin: 0 auto;\n  width: 550px;\n}\n.comments-section .comments-heading {\n  font-size: 2rem;\n  font-family: Quicksand, sans-serif;\n  font-weight: 400;\n  text-align: center;\n  margin-bottom: 0.5rem;\n}\n.comments-section .add-comment {\n  position: relative;\n  padding: 20px 0;\n  margin-bottom: 1.78325rem;\n  width: 100%;\n  box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;\n}\n.comments-section .add-comment textarea {\n  border: 1px solid #f0f0f0;\n  border-left: 3px solid #3bd975;\n  border-radius: 8px;\n  background-color: #f0f0f0;\n  padding: 5px 8px;\n  transform: translateX(-50%);\n  position: relative;\n  left: 50%;\n  margin-bottom: 8px;\n  width: 370px;\n}\n.comments-section .add-comment textarea::placeholder {\n  color: unset;\n}\n@media (max-width: 460px) {\n  .comments-section .add-comment textarea {\n    width: 90%;\n  }\n}\n.comments-section .add-comment button {\n  align-self: center;\n  color: #fff;\n  padding: 5px 10px;\n  border-radius: 3px;\n  background-color: #1a8bff;\n  font-size: 1rem;\n  transition: background-color, 0.2s;\n}\n.comments-section .add-comment button:hover {\n  background-color: #3398ff;\n}\n.comments-section .error {\n  text-align: center;\n  color: red;\n  margin-bottom: 5px;\n}\n.comments-section .comment-list {\n  align-self: center;\n}\n.comments-section .comment-list .comment-preview {\n  padding: 20px 30px;\n  position: relative;\n  box-shadow: 0 0.5em 1em 0.5em rgba(10, 10, 10, 0.08), 0 0px 0 1px rgba(10, 10, 10, 0.03);\n  background-color: #fff;\n}\n.comments-section .comment-list .comment-preview .comment-heading {\n  margin-bottom: 5px;\n}\n.comments-section .comment-list .comment-preview .comment-heading h5 {\n  display: inline-block;\n  font-size: 1.3rem;\n  font-family: Quicksand-SemiBold, sans-serif;\n  font-weight: 400;\n}\n.comments-section .comment-list .comment-preview .comment-txt {\n  width: 120px;\n  overflow-wrap: break-word;\n  color: #0b090a;\n}\n.comments-section .comment-list .comment-preview p {\n  font-size: 1.1rem;\n  font-weight: 400;\n}\n.comments-section .comment-list .comment-preview .author-logo {\n  position: absolute;\n  width: 35px;\n  height: 35px;\n  border-radius: 50%;\n  background-color: #007eff;\n  color: #fff;\n  font-family: Quicksand-SemiBold, sans-serif;\n  left: -18px;\n  top: 50%;\n  transform: translateY(-50%);\n}\n.comments-section .pagination {\n  margin: 0 auto;\n}\n.comments-section .pagination .ngx-pagination {\n  padding-left: 0 !important;\n}\n.comments-section .pagination .ngx-pagination li span {\n  color: #333;\n}\n.comments-section .pagination .ngx-pagination .current {\n  background: #4faaf8;\n}\n.comments-section .pagination .ngx-pagination .pagination-previous.disabled {\n  color: #717171;\n}\n@media (max-width: 580px) {\n  .comments-section {\n    width: 90%;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxwb2xsLWNvbW1lbnRzLmNvbXBvbmVudC5zY3NzIiwiLi5cXC4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXGFzc2V0c1xcc3R5bGVzXFxzZXR1cFxcX3ZhcmlhYmxlcy5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUdBO0VBQ0ksY0FBQTtFQUNBLFlBQUE7QUFGSjtBQUdJO0VBQ0ksZUFBQTtFQUNBLGtDQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLHFCQUFBO0FBRFI7QUFHSTtFQUNJLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLHlCQUFBO0VBQ0EsV0FBQTtFQUNBLDJDQUFBO0FBRFI7QUFFUTtFQUNJLHlCQUFBO0VBQ0EsOEJBQUE7RUFDQSxrQkFBQTtFQUNBLHlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSwyQkFBQTtFQUNBLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtBQUFaO0FBQ1k7RUFDSSxZQUFBO0FBQ2hCO0FBRVk7RUFmSjtJQWdCUSxVQUFBO0VBQ2Q7QUFDRjtBQUNRO0VBQ0ksa0JBQUE7RUFDQSxXQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLHlCQUFBO0VBQ0EsZUFBQTtFQUVBLGtDQUFBO0FBQVo7QUFDWTtFQUNJLHlCQUFBO0FBQ2hCO0FBR0k7RUFDSSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxrQkFBQTtBQURSO0FBR0k7RUFDSSxrQkFBQTtBQURSO0FBR1E7RUFDSSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0Esd0ZBQUE7RUFDQSxzQkFBQTtBQURaO0FBRVk7RUFDSSxrQkFBQTtBQUFoQjtBQUNnQjtFQUNJLHFCQUFBO0VBQ0EsaUJBQUE7RUFDQSwyQ0FBQTtFQUNBLGdCQUFBO0FBQ3BCO0FBRVk7RUFDSSxZQUFBO0VBQ0EseUJBQUE7RUFDQSxjQ3JFTDtBRHFFWDtBQUVZO0VBQ0ksaUJBQUE7RUFDQSxnQkFBQTtBQUFoQjtBQUVZO0VBQ0ksa0JBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EseUJDdkZBO0VEd0ZBLFdBQUE7RUFDQSwyQ0FBQTtFQUNBLFdBQUE7RUFDQSxRQUFBO0VBQ0EsMkJBQUE7QUFBaEI7QUFJSTtFQUNJLGNBQUE7QUFGUjtBQUdRO0VBQ0ksMEJBQUE7QUFEWjtBQUdnQjtFQUNJLFdDaEdkO0FEK0ZOO0FBSVk7RUFDSSxtQkN6R0U7QUR1R2xCO0FBSVk7RUFDSSxjQUFBO0FBRmhCO0FBT0k7RUFoSEo7SUFpSFEsVUFBQTtFQUpOO0FBQ0YiLCJmaWxlIjoicG9sbC1jb21tZW50cy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgXCIuLi8uLi8uLi9hc3NldHMvc3R5bGVzL3NldHVwL3ZhcmlhYmxlc1wiO1xyXG5AaW1wb3J0IFwiLi4vLi4vLi4vYXNzZXRzL3N0eWxlcy9zZXR1cC9mdW5jdGlvbnNcIjtcclxuXHJcbi5jb21tZW50cy1zZWN0aW9uIHtcclxuICAgIG1hcmdpbjogMCBhdXRvO1xyXG4gICAgd2lkdGg6IDU1MHB4O1xyXG4gICAgLmNvbW1lbnRzLWhlYWRpbmcge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMnJlbTtcclxuICAgICAgICBmb250LWZhbWlseTogUXVpY2tzYW5kLCBzYW5zLXNlcmlmO1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IHJlbSg4cHgpO1xyXG4gICAgfVxyXG4gICAgLmFkZC1jb21tZW50IHtcclxuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgcGFkZGluZzogMjBweCAwO1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IHJlbSgyOC41MzJweCk7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgYm94LXNoYWRvdzogcmdiYSgwLCAwLCAwLCAwLjE2KSAwcHggMXB4IDRweDtcclxuICAgICAgICB0ZXh0YXJlYSB7XHJcbiAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkIGRhcmtlbigkYmctY29sb3IsIDQlKTtcclxuICAgICAgICAgICAgYm9yZGVyLWxlZnQ6IDNweCBzb2xpZCAkY3RhLWNvbG9yO1xyXG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiA4cHg7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IGRhcmtlbigkYmctY29sb3IsIDQlKTtcclxuICAgICAgICAgICAgcGFkZGluZzogNXB4IDhweDtcclxuICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01MCUpO1xyXG4gICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgICAgIGxlZnQ6IDUwJTtcclxuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogOHB4O1xyXG4gICAgICAgICAgICB3aWR0aDogMzcwcHg7XHJcbiAgICAgICAgICAgICY6OnBsYWNlaG9sZGVyIHtcclxuICAgICAgICAgICAgICAgIGNvbG9yOiB1bnNldDtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgQG1lZGlhIChtYXgtd2lkdGg6IDQ2MHB4KSB7XHJcbiAgICAgICAgICAgICAgICB3aWR0aDogOTAlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGJ1dHRvbiB7XHJcbiAgICAgICAgICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcclxuICAgICAgICAgICAgY29sb3I6ICNmZmY7XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDVweCAxMHB4O1xyXG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiAzcHg7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IGxpZ2h0ZW4oJHByaW1hcnktY29sb3IsIDUlKTtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAxcmVtO1xyXG5cclxuICAgICAgICAgICAgdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciwgMC4ycztcclxuICAgICAgICAgICAgJjpob3ZlciB7XHJcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBsaWdodGVuKCRwcmltYXJ5LWNvbG9yLCAxMCUpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgLmVycm9yIHtcclxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgY29sb3I6IHJlZDtcclxuICAgICAgICBtYXJnaW4tYm90dG9tOiA1cHg7XHJcbiAgICB9XHJcbiAgICAuY29tbWVudC1saXN0IHtcclxuICAgICAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XHJcblxyXG4gICAgICAgIC5jb21tZW50LXByZXZpZXcge1xyXG4gICAgICAgICAgICBwYWRkaW5nOiAyMHB4IDMwcHg7XHJcbiAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICAgICAgYm94LXNoYWRvdzogMCAwLjVlbSAxZW0gMC41ZW0gcmdiYSgxMCwgMTAsIDEwLCAwLjA4KSwgMCAwcHggMCAxcHggcmdiYSgxMCwgMTAsIDEwLCAwLjAzKTtcclxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcclxuICAgICAgICAgICAgLmNvbW1lbnQtaGVhZGluZyB7XHJcbiAgICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiA1cHg7XHJcbiAgICAgICAgICAgICAgICBoNSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMS4zcmVtO1xyXG4gICAgICAgICAgICAgICAgICAgIGZvbnQtZmFtaWx5OiBRdWlja3NhbmQtU2VtaUJvbGQsIHNhbnMtc2VyaWY7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAuY29tbWVudC10eHQge1xyXG4gICAgICAgICAgICAgICAgd2lkdGg6IDEyMHB4O1xyXG4gICAgICAgICAgICAgICAgb3ZlcmZsb3ctd3JhcDogYnJlYWstd29yZDtcclxuICAgICAgICAgICAgICAgIGNvbG9yOiAkZGFyay10eHQ7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcCB7XHJcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDEuMXJlbTtcclxuICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLmF1dGhvci1sb2dvIHtcclxuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgICAgICAgIHdpZHRoOiAzNXB4O1xyXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAzNXB4O1xyXG4gICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJHByaW1hcnktY29sb3I7XHJcbiAgICAgICAgICAgICAgICBjb2xvcjogI2ZmZjtcclxuICAgICAgICAgICAgICAgIGZvbnQtZmFtaWx5OiBRdWlja3NhbmQtU2VtaUJvbGQsIHNhbnMtc2VyaWY7XHJcbiAgICAgICAgICAgICAgICBsZWZ0OiAtMThweDtcclxuICAgICAgICAgICAgICAgIHRvcDogNTAlO1xyXG4gICAgICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgLnBhZ2luYXRpb24ge1xyXG4gICAgICAgIG1hcmdpbjogMCBhdXRvO1xyXG4gICAgICAgIC5uZ3gtcGFnaW5hdGlvbiB7XHJcbiAgICAgICAgICAgIHBhZGRpbmctbGVmdDogMCAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgICBsaSB7XHJcbiAgICAgICAgICAgICAgICBzcGFuIHtcclxuICAgICAgICAgICAgICAgICAgICBjb2xvcjogJHR4dDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAuY3VycmVudCB7XHJcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAkc2Vjb25kYXJ5LWNvbG9yO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC5wYWdpbmF0aW9uLXByZXZpb3VzLmRpc2FibGVkIHtcclxuICAgICAgICAgICAgICAgIGNvbG9yOiBkYXJrZW4oI2NhY2FjYSwgMzUlKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBAbWVkaWEgKG1heC13aWR0aDogNTgwcHgpIHtcclxuICAgICAgICB3aWR0aDogOTAlO1xyXG4gICAgfVxyXG59XHJcbiIsIi8vIENvbG9yc1xyXG4kcHJpbWFyeS1jb2xvcjogIzAwN2VmZjtcclxuJHNlY29uZGFyeS1jb2xvcjogIzRmYWFmODtcclxuJGJnLWNvbG9yOiAjZmFmYWZhO1xyXG4kd2hpdGU6ICNmZmY7XHJcbiRsaWdodC1jb2xvcjogIzk5OWJhYztcclxuJGRhcmstYmx1ZTogIzA1MjA0YTtcclxuJHR4dDogIzMzMztcclxuJGRhcmstdHh0OiAjMGIwOTBhO1xyXG4kY3RhLWNvbG9yOiAjM2JkOTc1O1xyXG4kZXJyLWNvbG9yOiAjZmYzMzMzO1xyXG4vLyBCcmVha3BvaW50c1xyXG4kbW9iaWxlLWJyZWFrcG9pbnQ6IDQ4MHB4O1xyXG4kbmFycm93LWJyZWFrcG9pbnQ6IDc2OHB4O1xyXG4kbm9ybWFsLWJyZWFrcG9pbnQ6IDE0MDBweDtcclxuIl19 */"], encapsulation: 2 });


/***/ }),

/***/ "AytR":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false,
    pollURL: 'http://localhost:3030/api/poll',
    authURL: 'http://localhost:3030/api/auth',
    userURL: 'http://localhost:3030/api/user',
    socketURL: 'http://localhost:3030',
    apiKey: 'a73f9c3ddf2a4da6ba8f13d7a88898f4',
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "BnSU":
/*!***************************************************************!*\
  !*** ./src/app/cmps/confirm-modal/confirm-modal.component.ts ***!
  \***************************************************************/
/*! exports provided: ConfirmModalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConfirmModalComponent", function() { return ConfirmModalComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! primeng/api */ "7zfz");
/* harmony import */ var primeng_confirmdialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! primeng/confirmdialog */ "Nf9I");





const _c0 = function () { return { width: "50vw" }; };
class ConfirmModalComponent {
    constructor(confirmationService) {
        this.confirmationService = confirmationService;
        this.userSelection = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    ngOnInit() {
        this.onConfirm();
    }
    onConfirm() {
        this.confirmationService.confirm({
            message: 'Are you sure that you want to delete this poll?',
            accept: () => {
                this.userSelection.emit(true);
            },
            reject: () => {
                this.userSelection.emit(false);
            }
        });
    }
}
ConfirmModalComponent.ɵfac = function ConfirmModalComponent_Factory(t) { return new (t || ConfirmModalComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](primeng_api__WEBPACK_IMPORTED_MODULE_1__["ConfirmationService"])); };
ConfirmModalComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ConfirmModalComponent, selectors: [["confirm-modal"]], outputs: { userSelection: "userSelection" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([primeng_api__WEBPACK_IMPORTED_MODULE_1__["ConfirmationService"]])], decls: 1, vars: 3, consts: [["header", "Confirmation", "icon", "pi pi-exclamation-triangle", "dismissableMask", "true"]], template: function ConfirmModalComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "p-confirmDialog", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleMap"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](2, _c0));
    } }, directives: [primeng_confirmdialog__WEBPACK_IMPORTED_MODULE_2__["ConfirmDialog"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjb25maXJtLW1vZGFsLmNvbXBvbmVudC5zY3NzIn0= */"], changeDetection: 0 });


/***/ }),

/***/ "D8EZ":
/*!************************************************!*\
  !*** ./src/app/pages/login/login.component.ts ***!
  \************************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var angularx_social_login__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! angularx-social-login */ "ahC7");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_services_user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/user.service */ "qfBg");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var primeng_inputtext__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! primeng/inputtext */ "7kUa");









function LoginComponent_span_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "Valid email is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function LoginComponent_span_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "Password is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function LoginComponent_h2_20_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r2.error);
} }
class LoginComponent {
    constructor(userService, fb, socialAuthService, router) {
        this.userService = userService;
        this.fb = fb;
        this.socialAuthService = socialAuthService;
        this.router = router;
        this.showPassword = false;
        this.submitted = false;
        this.error = '';
    }
    ngOnInit() {
        this.loginForm = this.fb.group({
            email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].email]],
            password: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required],
        });
        this.socialAuthService.authState.subscribe((googleUser) => {
            const userToSignIn = {
                email: googleUser.email,
                password: googleUser.idToken,
            };
            this.onLogin(userToSignIn);
        });
    }
    onLogin(socialUser = null) {
        this.submitted = true;
        if (!socialUser && !this.loginForm.valid)
            return;
        this.loginSub = this.userService
            .login(socialUser || this.loginForm.value)
            .subscribe((loggedUser) => {
            this.userService.updateLoggedUser(loggedUser);
            this.router.navigateByUrl('poll');
        }, (err) => {
            if (err.status === 401) {
                this.error = 'Invalid email/password';
            }
            else {
                this.error = 'An error occurred. Please try again.';
            }
            return;
        });
        this.submitted = false;
    }
    onTogglePassword() {
        this.showPassword = !this.showPassword;
    }
    onGoogleSignin() {
        this.socialAuthService.signIn(angularx_social_login__WEBPACK_IMPORTED_MODULE_1__["GoogleLoginProvider"].PROVIDER_ID);
    }
    ngOnDestroy() {
        var _a;
        (_a = this.loginSub) === null || _a === void 0 ? void 0 : _a.unsubscribe();
    }
}
LoginComponent.ɵfac = function LoginComponent_Factory(t) { return new (t || LoginComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_app_services_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](angularx_social_login__WEBPACK_IMPORTED_MODULE_1__["SocialAuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"])); };
LoginComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: LoginComponent, selectors: [["login"]], decls: 29, vars: 7, consts: [[1, "login-container", "flex", "justify-center", "align-center"], [1, "flex", "column", "justify-center", 3, "formGroup", "ngSubmit"], [1, "login-rabbit"], ["for", "email"], ["class", "has-error", 4, "ngIf"], [1, "p-input-icon-left"], [1, "pi", "pi-envelope", "email-icon"], ["id", "email", "type", "email", "pInputText", "", "placeholder", "example@uvote.com", "autocomplete", "off", "formControlName", "email"], ["for", "password"], [1, "password-container"], [1, "pi", "pi-lock", "password-icon"], ["pInputText", "", "placeholder", "\u25CF\u25CF\u25CF\u25CF\u25CF", "autocomplete", "off", "formControlName", "password", 3, "type"], [1, "toggle-password", 3, "click"], [3, "title", "ngClass"], [4, "ngIf"], ["type", "submit", 1, "submit-btn"], ["type", "button", 1, "google-btn", 3, "click"], [1, "login-p"], ["routerLink", "/signup"], [1, "has-error"]], template: function LoginComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "section", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "form", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngSubmit", function LoginComponent_Template_form_ngSubmit_1_listener() { return ctx.onLogin(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4, "Log in to your account");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "label", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6, "Email");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](7, LoginComponent_span_7_Template, 2, 0, "span", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "span", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](9, "i", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](10, "input", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "label", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](12, "Password");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](13, LoginComponent_span_13_Template, 2, 0, "span", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](14, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](15, "span", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](16, "i", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](17, "input", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](18, "span", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function LoginComponent_Template_span_click_18_listener() { return ctx.onTogglePassword(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](19, "i", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](20, LoginComponent_h2_20_Template, 2, 1, "h2", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](21, "button", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](22, "Log in");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](23, "button", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function LoginComponent_Template_button_click_23_listener() { return ctx.onGoogleSignin(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](24, " Sign in with Google ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](25, "p", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](26, " Don't have an account? ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](27, "a", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](28, "Sign up");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("formGroup", ctx.loginForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.submitted && ctx.loginForm.get("email").hasError("required") || ctx.submitted && ctx.loginForm.get("email").invalid);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.submitted && ctx.loginForm.get("password").hasError("required"));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("type", ctx.showPassword ? "text" : "password");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("title", ctx.showPassword ? "Hide Password" : "Show Password")("ngClass", ctx.showPassword ? "pi pi-eye-slash" : "pi pi-eye");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.error);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormGroupDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["DefaultValueAccessor"], primeng_inputtext__WEBPACK_IMPORTED_MODULE_6__["InputText"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControlName"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgClass"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterLinkWithHref"]], styles: [".login-container[_ngcontent-%COMP%] {\n  min-height: calc(100vh - 40px);\n  background-image: url('blob-scene-haikei.svg');\n  background-color: #fff;\n  background-repeat: no-repeat;\n  background-position: center;\n  background-size: cover;\n}\n.login-container[_ngcontent-%COMP%]   form[_ngcontent-%COMP%] {\n  width: 600px;\n  padding: 30px;\n  background-color: #fafafa;\n  height: 450px;\n  box-shadow: 0 0.5em 1em 0.5em rgba(10, 10, 10, 0.1), 0 0px 0 1px rgba(10, 10, 10, 0.02);\n  border-radius: 3px;\n  position: relative;\n}\n.login-container[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-size: 2.2rem;\n  text-align: center;\n  font-weight: 700;\n}\n.login-container[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  margin-bottom: 4px;\n  font-size: 1.2rem;\n  font-family: Quicksand, sans-serif;\n}\n.login-container[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  width: 100%;\n  margin-bottom: 8px;\n}\n.login-container[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .p-inputtext[_ngcontent-%COMP%]:enabled:focus {\n  box-shadow: none;\n}\n.login-container[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .password-container[_ngcontent-%COMP%] {\n  position: relative;\n  width: 100%;\n  margin-bottom: 20px;\n}\n.login-container[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .password-container[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:first-of-type {\n  width: 100%;\n}\n.login-container[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .password-container[_ngcontent-%COMP%]   .toggle-password[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 9px;\n  right: 8px;\n  cursor: pointer;\n}\n.login-container[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .user-icon[_ngcontent-%COMP%] {\n  margin-top: -0.8rem;\n}\n.login-container[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .email-icon[_ngcontent-%COMP%], .login-container[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .password-icon[_ngcontent-%COMP%] {\n  margin-top: -0.6rem;\n}\n.login-container[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .submit-btn[_ngcontent-%COMP%] {\n  text-transform: capitalize;\n  align-self: center;\n  margin-bottom: 8px;\n}\n.login-container[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .google-btn[_ngcontent-%COMP%] {\n  align-self: center;\n  display: flex;\n  align-items: center;\n  padding: 4px 20px;\n  margin-bottom: 8px;\n  border-radius: 3px;\n  transition: background-color, 0.2s;\n}\n.login-container[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .google-btn[_ngcontent-%COMP%]:hover {\n  background-color: #e8e8e8;\n}\n.login-container[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .google-btn[_ngcontent-%COMP%]::before {\n  background-image: url('google-48.svg');\n  background-repeat: no-repeat;\n  background-size: 25px 20px;\n  width: 25px;\n  height: 20px;\n  padding-right: 3px;\n  display: inline-block;\n  content: \"\";\n}\n.login-container[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .has-error[_ngcontent-%COMP%] {\n  margin-bottom: 3px;\n  color: red;\n}\n.login-container[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .login-p[_ngcontent-%COMP%] {\n  align-self: center;\n}\n.login-container[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .login-p[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: #3273dc;\n}\n@media (max-width: 620px) {\n  .login-container[_ngcontent-%COMP%]   form[_ngcontent-%COMP%] {\n    width: 90%;\n  }\n}\n.login-container[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .login-rabbit[_ngcontent-%COMP%] {\n  position: absolute;\n  z-index: 1;\n  background-image: url('signup-rabbit.svg');\n  width: 250px;\n  height: 250px;\n  background-position: center;\n  background-size: cover;\n  background-color: transparent;\n  fill: transparent;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  top: -12%;\n}\n@media (max-width: 540px) {\n  .login-container[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .login-rabbit[_ngcontent-%COMP%] {\n    width: 170px;\n    height: 120px;\n    top: -5%;\n  }\n}\n.login-container[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  align-self: center;\n  color: #ff3333;\n  font-family: Quicksand-light;\n  font-size: 1.3rem;\n  margin-bottom: 5px;\n}\n@media (max-width: 600px) {\n  .login-container[_ngcontent-%COMP%] {\n    background-position: left;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFxhc3NldHNcXHN0eWxlc1xcc2V0dXBcXF9taXhpbnMuc2NzcyIsIi4uXFwuLlxcLi5cXC4uXFxsb2dpbi5jb21wb25lbnQuc2NzcyIsIi4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFxhc3NldHNcXHN0eWxlc1xcc2V0dXBcXF92YXJpYWJsZXMuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxzQkFBQTtBQ0dBO0VBQ0ksOEJBQUE7RUFDQSw4Q0FBQTtFQUNBLHNCQUFBO0VBQ0EsNEJBQUE7RUFDQSwyQkFBQTtFQUNBLHNCQUFBO0FBREo7QUFFSTtFRGlCQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLHlCRTFCTztFRjJCUCxhQUFBO0VBQ0EsdUZBQUE7RUFDQSxrQkFBQTtFQ3BCSSxrQkFBQTtBQUtSO0FEZ0JJO0VBQ0ksaUJBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0FDZFI7QURnQkk7RUFDSSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0Esa0NBQUE7QUNkUjtBRGdCSTtFQUNJLFdBQUE7RUFDQSxrQkFBQTtBQ2RSO0FEZ0JJO0VBQ0ksZ0JBQUE7QUNkUjtBRGdCSTtFQUNJLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLG1CQUFBO0FDZFI7QURnQlE7RUFDSSxXQUFBO0FDZFo7QURpQlE7RUFDSSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxVQUFBO0VBQ0EsZUFBQTtBQ2ZaO0FEbUJJO0VBQ0ksbUJBQUE7QUNqQlI7QURtQkk7O0VBRUksbUJBQUE7QUNqQlI7QURtQkk7RUFDSSwwQkFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7QUNqQlI7QURtQkk7RUFDSSxrQkFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUVBLGtDQUFBO0FDbEJSO0FEb0JRO0VBQ0kseUJBQUE7QUNsQlo7QURxQlE7RUFDSSxzQ0FBQTtFQUNBLDRCQUFBO0VBQ0EsMEJBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EscUJBQUE7RUFDQSxXQUFBO0FDbkJaO0FEc0JJO0VBQ0ksa0JBQUE7RUFDQSxVQUFBO0FDcEJSO0FEc0JJO0VBQ0ksa0JBQUE7QUNwQlI7QURzQlE7RUFDSSxjQUFBO0FDcEJaO0FEd0JJO0VDMUdBO0lEMkdJLFVBQUE7RUNyQk47QUFDRjtBQXBGUTtFRDZHSixrQkFBQTtFQUNBLFVBQUE7RUFDQSwwQ0FBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0EsMkJBQUE7RUFDQSxzQkFBQTtFQUNBLDZCQUFBO0VBQ0EsaUJBQUE7RUFDQSxTQUFBO0VBQ0EsZ0NBQUE7RUFDQSxTQUFBO0FDdEJKO0FEd0JJO0VDMUhJO0lEMkhBLFlBQUE7SUFDQSxhQUFBO0lBQ0EsUUFBQTtFQ3JCTjtBQUNGO0FBdEdRO0VBQ0ksa0JBQUE7RUFDQSxjQ1JBO0VEU0EsNEJBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0FBd0daO0FBckdJO0VBckJKO0lBc0JRLHlCQUFBO0VBd0dOO0FBQ0YiLCJmaWxlIjoibG9naW4uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBCcmVha3BvaW50IG1peGlucyAqL1xyXG5cclxuQG1peGluIGZvci1tb2JpbGUtbGF5b3V0IHtcclxuICAgIEBtZWRpYSAobWF4LXdpZHRoOiAkbW9iaWxlLWJyZWFrcG9pbnQpIHtcclxuICAgICAgICBAY29udGVudDtcclxuICAgIH1cclxufVxyXG5cclxuQG1peGluIGZvci1uYXJyb3ctbGF5b3V0IHtcclxuICAgIEBtZWRpYSAobWluLXdpZHRoOiAkbW9iaWxlLWJyZWFrcG9pbnQpIHtcclxuICAgICAgICBAY29udGVudDtcclxuICAgIH1cclxufVxyXG5cclxuQG1peGluIGZvci1ub3JtYWwtbGF5b3V0IHtcclxuICAgIEBtZWRpYSAobWluLXdpZHRoOiAkbmFycm93LWJyZWFrcG9pbnQpIHtcclxuICAgICAgICBAY29udGVudDtcclxuICAgIH1cclxufVxyXG5cclxuQG1peGluIGZvci13aWRlLWxheW91dCB7XHJcbiAgICBAbWVkaWEgKG1pbi13aWR0aDogJG5vcm1hbC1icmVha3BvaW50KSB7XHJcbiAgICAgICAgQGNvbnRlbnQ7XHJcbiAgICB9XHJcbn1cclxuXHJcbkBtaXhpbiBsb2dpbi1zaWdudXAtY29udGFpbmVyIHtcclxuICAgIHdpZHRoOiA2MDBweDtcclxuICAgIHBhZGRpbmc6IDMwcHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkYmctY29sb3I7XHJcbiAgICBoZWlnaHQ6IDQ1MHB4O1xyXG4gICAgYm94LXNoYWRvdzogMCAwLjVlbSAxZW0gMC41ZW0gcmdiYSgxMCwgMTAsIDEwLCAwLjEpLCAwIDBweCAwIDFweCByZ2JhKDEwLCAxMCwgMTAsIDAuMDIpO1xyXG4gICAgYm9yZGVyLXJhZGl1czogM3B4O1xyXG4gICAgaDMge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMi4ycmVtO1xyXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICBmb250LXdlaWdodDogNzAwO1xyXG4gICAgfVxyXG4gICAgbGFiZWwge1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDRweDtcclxuICAgICAgICBmb250LXNpemU6IDEuMnJlbTtcclxuICAgICAgICBmb250LWZhbWlseTogUXVpY2tzYW5kLCBzYW5zLXNlcmlmO1xyXG4gICAgfVxyXG4gICAgaW5wdXQge1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDhweDtcclxuICAgIH1cclxuICAgIC5wLWlucHV0dGV4dDplbmFibGVkOmZvY3VzIHtcclxuICAgICAgICBib3gtc2hhZG93OiBub25lO1xyXG4gICAgfVxyXG4gICAgLnBhc3N3b3JkLWNvbnRhaW5lciB7XHJcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XHJcblxyXG4gICAgICAgIHNwYW46Zmlyc3Qtb2YtdHlwZSB7XHJcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLnRvZ2dsZS1wYXNzd29yZCB7XHJcbiAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgICAgdG9wOiA5cHg7XHJcbiAgICAgICAgICAgIHJpZ2h0OiA4cHg7XHJcbiAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLnVzZXItaWNvbiB7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogLTAuOHJlbTtcclxuICAgIH1cclxuICAgIC5lbWFpbC1pY29uLFxyXG4gICAgLnBhc3N3b3JkLWljb24ge1xyXG4gICAgICAgIG1hcmdpbi10b3A6IC0wLjZyZW07XHJcbiAgICB9XHJcbiAgICAuc3VibWl0LWJ0biB7XHJcbiAgICAgICAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XHJcbiAgICAgICAgYWxpZ24tc2VsZjogY2VudGVyO1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDhweDtcclxuICAgIH1cclxuICAgIC5nb29nbGUtYnRuIHtcclxuICAgICAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgIHBhZGRpbmc6IDRweCAyMHB4O1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDhweDtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiAzcHg7XHJcblxyXG4gICAgICAgIHRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IsIDAuMnM7XHJcblxyXG4gICAgICAgICY6aG92ZXIge1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBkYXJrZW4oJGJnLWNvbG9yLCA3JSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAmOjpiZWZvcmUge1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIuLi8uLi9pbWdzL2dvb2dsZS00OC5zdmdcIik7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQtc2l6ZTogMjVweCAyMHB4O1xyXG4gICAgICAgICAgICB3aWR0aDogMjVweDtcclxuICAgICAgICAgICAgaGVpZ2h0OiAyMHB4O1xyXG4gICAgICAgICAgICBwYWRkaW5nLXJpZ2h0OiAzcHg7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgICAgICAgICAgY29udGVudDogXCJcIjtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAuaGFzLWVycm9yIHtcclxuICAgICAgICBtYXJnaW4tYm90dG9tOiAzcHg7XHJcbiAgICAgICAgY29sb3I6IHJlZDtcclxuICAgIH1cclxuICAgIC5sb2dpbi1wIHtcclxuICAgICAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XHJcblxyXG4gICAgICAgIGEge1xyXG4gICAgICAgICAgICBjb2xvcjogIzMyNzNkYztcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgQG1lZGlhIChtYXgtd2lkdGg6IDYyMHB4KSB7XHJcbiAgICAgICAgd2lkdGg6IDkwJTtcclxuICAgIH1cclxufVxyXG5cclxuQG1peGluIHdhdmUtcmFiYml0IHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHotaW5kZXg6IDE7XHJcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIuLi8uLi8uLi9hc3NldHMvaW1ncy9zaWdudXAtcmFiYml0LnN2Z1wiKTtcclxuICAgIHdpZHRoOiAyNTBweDtcclxuICAgIGhlaWdodDogMjUwcHg7XHJcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XHJcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbiAgICBmaWxsOiB0cmFuc3BhcmVudDtcclxuICAgIGxlZnQ6IDUwJTtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xyXG4gICAgdG9wOiAtMTIlO1xyXG5cclxuICAgIEBtZWRpYSAobWF4LXdpZHRoOiA1NDBweCkge1xyXG4gICAgICAgIHdpZHRoOiAxNzBweDtcclxuICAgICAgICBoZWlnaHQ6IDEyMHB4O1xyXG4gICAgICAgIHRvcDogLTUlO1xyXG4gICAgfVxyXG59XHJcbiIsIkBpbXBvcnQgXCIuLi8uLi8uLi9hc3NldHMvc3R5bGVzL3NldHVwL3ZhcmlhYmxlc1wiO1xyXG5AaW1wb3J0IFwiLi4vLi4vLi4vYXNzZXRzL3N0eWxlcy9zZXR1cC9taXhpbnNcIjtcclxuXHJcbi5sb2dpbi1jb250YWluZXIge1xyXG4gICAgbWluLWhlaWdodDogY2FsYygxMDB2aCAtIDQwcHgpO1xyXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiLi4vLi4vLi4vYXNzZXRzL2ltZ3MvYmxvYi1zY2VuZS1oYWlrZWkuc3ZnXCIpO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcclxuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XHJcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG4gICAgZm9ybSB7XHJcbiAgICAgICAgQGluY2x1ZGUgbG9naW4tc2lnbnVwLWNvbnRhaW5lcjtcclxuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgLmxvZ2luLXJhYmJpdCB7XHJcbiAgICAgICAgICAgIEBpbmNsdWRlIHdhdmUtcmFiYml0O1xyXG4gICAgICAgIH1cclxuICAgICAgICBoMiB7XHJcbiAgICAgICAgICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcclxuICAgICAgICAgICAgY29sb3I6ICRlcnItY29sb3I7XHJcbiAgICAgICAgICAgIGZvbnQtZmFtaWx5OiBRdWlja3NhbmQtbGlnaHQ7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMS4zcmVtO1xyXG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOiA1cHg7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgQG1lZGlhIChtYXgtd2lkdGg6IDYwMHB4KSB7XHJcbiAgICAgICAgYmFja2dyb3VuZC1wb3NpdGlvbjogbGVmdDtcclxuICAgIH1cclxufVxyXG4iLCIvLyBDb2xvcnNcclxuJHByaW1hcnktY29sb3I6ICMwMDdlZmY7XHJcbiRzZWNvbmRhcnktY29sb3I6ICM0ZmFhZjg7XHJcbiRiZy1jb2xvcjogI2ZhZmFmYTtcclxuJHdoaXRlOiAjZmZmO1xyXG4kbGlnaHQtY29sb3I6ICM5OTliYWM7XHJcbiRkYXJrLWJsdWU6ICMwNTIwNGE7XHJcbiR0eHQ6ICMzMzM7XHJcbiRkYXJrLXR4dDogIzBiMDkwYTtcclxuJGN0YS1jb2xvcjogIzNiZDk3NTtcclxuJGVyci1jb2xvcjogI2ZmMzMzMztcclxuLy8gQnJlYWtwb2ludHNcclxuJG1vYmlsZS1icmVha3BvaW50OiA0ODBweDtcclxuJG5hcnJvdy1icmVha3BvaW50OiA3NjhweDtcclxuJG5vcm1hbC1icmVha3BvaW50OiAxNDAwcHg7XHJcbiJdfQ== */"], changeDetection: 0 });


/***/ }),

/***/ "G9k0":
/*!**************************************************************!*\
  !*** ./src/app/pages/user-profile/user-profile.component.ts ***!
  \**************************************************************/
/*! exports provided: UserProfileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserProfileComponent", function() { return UserProfileComponent; });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var src_app_services_user_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/user.service */ "qfBg");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _cmps_poll_list_poll_list_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../cmps/poll-list/poll-list.component */ "kMIx");








function UserProfileComponent_img_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "img", 14);
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("src", ctx_r0.user.flag, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeUrl"])("alt", ctx_r0.user.country)("title", ctx_r0.user.country);
} }
function UserProfileComponent_img_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "img", 15);
} }
function UserProfileComponent_poll_list_19_Template(rf, ctx) { if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "poll-list", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("onPageChange", function UserProfileComponent_poll_list_19_Template_poll_list_onPageChange_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r5); const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r4.handlePageChange($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("polls", ctx_r2.user.polls)("listTitle", ctx_r2.listTitle)("totalItems", ctx_r2.totalPolls)("currPage", ctx_r2.pageNumber);
} }
function UserProfileComponent_p_20_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "p", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", ctx_r3.user.name, " didn't create any public polls yet ");
} }
class UserProfileComponent {
    constructor(router, titleService, userService) {
        this.router = router;
        this.titleService = titleService;
        this.userService = userService;
        this.pageNumber = 1;
        this.destroy$ = new rxjs__WEBPACK_IMPORTED_MODULE_0__["Subject"]();
    }
    ngOnInit() {
        this.router.queryParams
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["takeUntil"])(this.destroy$))
            .subscribe((params) => {
            this.pageNumber = +params.page || 1;
        });
        this.getUser();
        this.titleService.setTitle(`${this.user.name} | Uvote`);
    }
    getUser() {
        this.router.data.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["takeUntil"])(this.destroy$)).subscribe((data) => {
            this.user = data.user.user;
            this.totalPolls = data.user.total;
        });
    }
    handlePageChange({ ev, sortBy }) {
        this.pageNumber = ev;
        this.userService
            .getById(this.user._id, this.pageNumber, sortBy)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["takeUntil"])(this.destroy$))
            .subscribe((res) => {
            this.user = res.user;
            this.totalPolls = res.total;
        });
    }
    get listTitle() {
        return `Public polls made by ${this.user.name}`;
    }
    ngOnDestroy() {
        this.destroy$.next(true);
        this.destroy$.unsubscribe();
    }
}
UserProfileComponent.ɵfac = function UserProfileComponent_Factory(t) { return new (t || UserProfileComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__["Title"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_app_services_user_service__WEBPACK_IMPORTED_MODULE_5__["UserService"])); };
UserProfileComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: UserProfileComponent, selectors: [["user-profile"]], decls: 21, vars: 9, consts: [[1, "user-profile"], [1, "container", "flex", "column", "align-center", "justify-center"], [1, "heading", "flex", "align-center"], [1, "logo"], [1, "info-container", "flex"], [1, "username", "flex", "column"], [1, "country", "flex"], ["class", "user-country", 3, "src", "alt", "title", 4, "ngIf"], ["src", "../../../assets/imgs/question-mark.svg", "title", "Unknown Country", 4, "ngIf"], [1, "count-container"], [1, "polls-count", "flex", "column", "justify-center"], [1, "user-polls"], ["paginatorSize", "5", 3, "polls", "listTitle", "totalItems", "currPage", "onPageChange", 4, "ngIf"], ["class", "default-msg", 4, "ngIf"], [1, "user-country", 3, "src", "alt", "title"], ["src", "../../../assets/imgs/question-mark.svg", "title", "Unknown Country"], ["paginatorSize", "5", 3, "polls", "listTitle", "totalItems", "currPage", "onPageChange"], [1, "default-msg"]], template: function UserProfileComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "section", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "span", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](10, UserProfileComponent_img_10_Template, 1, 3, "img", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](11, UserProfileComponent_img_11_Template, 1, 0, "img", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](14, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](15);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](16, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](17, "Polls created");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](18, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](19, UserProfileComponent_poll_list_19_Template, 1, 4, "poll-list", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](20, UserProfileComponent_p_20_Template, 2, 1, "p", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵstyleProp"]("background-color", ctx.user.logoColor);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx.user.name.charAt(0));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("", ctx.user.name, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.user.flag);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !ctx.user.flag);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx.totalPolls || 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.user.polls.length);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !ctx.user.polls.length);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], _cmps_poll_list_poll_list_component__WEBPACK_IMPORTED_MODULE_7__["PollListComponent"]], styles: [".user-profile[_ngcontent-%COMP%] {\n  padding-top: 30px;\n}\n@media (max-width: 980px) {\n  .user-profile[_ngcontent-%COMP%] {\n    width: 90%;\n    margin: 0 auto;\n  }\n}\n.user-profile[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%] {\n  width: 980px;\n  margin: 0 auto;\n}\n@media (max-width: 980px) {\n  .user-profile[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n}\n.user-profile[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%] {\n  width: 100%;\n}\n.user-profile[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .heading[_ngcontent-%COMP%] {\n  margin-bottom: 1.875rem;\n  width: 500px;\n}\n@media (max-width: 520px) {\n  .user-profile[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .heading[_ngcontent-%COMP%] {\n    width: 90%;\n  }\n}\n.user-profile[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .heading[_ngcontent-%COMP%]   .logo[_ngcontent-%COMP%] {\n  width: 125px;\n  height: 125px;\n  border-radius: 50%;\n  margin-right: 0.9rem;\n  position: relative;\n  float: left;\n  shape-outside: circle();\n}\n.user-profile[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .heading[_ngcontent-%COMP%]   .logo[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  position: absolute;\n  left: 50%;\n  top: 50%;\n  transform: translate(-50%, -50%);\n  text-transform: capitalize;\n  font-size: 4.5rem;\n  color: #fff;\n}\n@media (max-width: 520px) {\n  .user-profile[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .heading[_ngcontent-%COMP%]   .logo[_ngcontent-%COMP%] {\n    width: 70px;\n    height: 70px;\n  }\n  .user-profile[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .heading[_ngcontent-%COMP%]   .logo[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n    font-size: 3rem;\n  }\n}\n.user-profile[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .heading[_ngcontent-%COMP%]   .info-container[_ngcontent-%COMP%] {\n  flex-basis: 73%;\n}\n.user-profile[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .heading[_ngcontent-%COMP%]   .username[_ngcontent-%COMP%] {\n  font-size: 2rem;\n  font-family: Quicksand-Bold, sans-serif;\n  flex-basis: 75%;\n}\n@media (max-width: 520px) {\n  .user-profile[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .heading[_ngcontent-%COMP%]   .username[_ngcontent-%COMP%] {\n    font-size: 1.8rem;\n  }\n}\n.user-profile[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .heading[_ngcontent-%COMP%]   .country[_ngcontent-%COMP%] {\n  align-self: flex-start;\n}\n.user-profile[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .heading[_ngcontent-%COMP%]   .country[_ngcontent-%COMP%]   .user-country[_ngcontent-%COMP%] {\n  width: 25px;\n  height: 25px;\n  margin-left: 5px;\n  align-self: flex-start;\n}\n.user-profile[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .heading[_ngcontent-%COMP%]   .polls-count[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-size: 2rem;\n  text-align: center;\n}\n.user-profile[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .heading[_ngcontent-%COMP%]   .polls-count[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  text-align: center;\n}\n.user-profile[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .user-polls[_ngcontent-%COMP%]   .default-msg[_ngcontent-%COMP%] {\n  text-align: center;\n  font-size: 2rem;\n  font-family: Quicksand-SemiBold, sans-serif;\n  letter-spacing: 0.8px;\n  line-height: 1.7;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFx1c2VyLXByb2ZpbGUuY29tcG9uZW50LnNjc3MiLCIuLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFwuLlxcYXNzZXRzXFxzdHlsZXNcXHNldHVwXFxfdmFyaWFibGVzLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBR0E7RUFDSSxpQkFBQTtBQUZKO0FBSUk7RUFISjtJQUlRLFVBQUE7SUFDQSxjQUFBO0VBRE47QUFDRjtBQUVJO0VBQ0ksWUFBQTtFQUNBLGNBQUE7QUFBUjtBQUVRO0VBSko7SUFLUSxXQUFBO0VBQ1Y7QUFDRjtBQUNRO0VBQ0ksV0FBQTtBQUNaO0FBQ1E7RUFDSSx1QkFBQTtFQUNBLFlBQUE7QUFDWjtBQUNZO0VBSko7SUFLUSxVQUFBO0VBRWQ7QUFDRjtBQURZO0VBQ0ksWUFBQTtFQUNBLGFBQUE7RUFDQSxrQkFBQTtFQUNBLG9CQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0VBQ0EsdUJBQUE7QUFHaEI7QUFEZ0I7RUFDSSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxRQUFBO0VBQ0EsZ0NBQUE7RUFDQSwwQkFBQTtFQUNBLGlCQUFBO0VBQ0EsV0N4Q1o7QUQyQ1I7QUFBZ0I7RUFuQko7SUFvQlEsV0FBQTtJQUNBLFlBQUE7RUFHbEI7RUFEa0I7SUFDSSxlQUFBO0VBR3RCO0FBQ0Y7QUFBWTtFQUNJLGVBQUE7QUFFaEI7QUFBWTtFQUNJLGVBQUE7RUFDQSx1Q0FBQTtFQUNBLGVBQUE7QUFFaEI7QUFEZ0I7RUFKSjtJQUtRLGlCQUFBO0VBSWxCO0FBQ0Y7QUFGWTtFQUNJLHNCQUFBO0FBSWhCO0FBSGdCO0VBQ0ksV0FBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtFQUNBLHNCQUFBO0FBS3BCO0FBRGdCO0VBQ0ksZUFBQTtFQUNBLGtCQUFBO0FBR3BCO0FBRGdCO0VBQ0ksa0JBQUE7QUFHcEI7QUFFWTtFQUNJLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLDJDQUFBO0VBQ0EscUJBQUE7RUFDQSxnQkFBQTtBQUFoQiIsImZpbGUiOiJ1c2VyLXByb2ZpbGUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IFwiLi4vLi4vLi4vYXNzZXRzL3N0eWxlcy9zZXR1cC92YXJpYWJsZXNcIjtcclxuQGltcG9ydCBcIi4uLy4uLy4uL2Fzc2V0cy9zdHlsZXMvc2V0dXAvZnVuY3Rpb25zXCI7XHJcblxyXG4udXNlci1wcm9maWxlIHtcclxuICAgIHBhZGRpbmctdG9wOiAzMHB4O1xyXG5cclxuICAgIEBtZWRpYSAobWF4LXdpZHRoOiA5ODBweCkge1xyXG4gICAgICAgIHdpZHRoOiA5MCU7XHJcbiAgICAgICAgbWFyZ2luOiAwIGF1dG87XHJcbiAgICB9XHJcbiAgICAuY29udGFpbmVyIHtcclxuICAgICAgICB3aWR0aDogOTgwcHg7XHJcbiAgICAgICAgbWFyZ2luOiAwIGF1dG87XHJcblxyXG4gICAgICAgIEBtZWRpYSAobWF4LXdpZHRoOiA5ODBweCkge1xyXG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgICYgPiAqIHtcclxuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5oZWFkaW5nIHtcclxuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogcmVtKDMwcHgpO1xyXG4gICAgICAgICAgICB3aWR0aDogNTAwcHg7XHJcblxyXG4gICAgICAgICAgICBAbWVkaWEgKG1heC13aWR0aDogNTIwcHgpIHtcclxuICAgICAgICAgICAgICAgIHdpZHRoOiA5MCU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLmxvZ28ge1xyXG4gICAgICAgICAgICAgICAgd2lkdGg6IDEyNXB4O1xyXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAxMjVweDtcclxuICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgICAgICAgICAgICAgIG1hcmdpbi1yaWdodDogMC45cmVtO1xyXG4gICAgICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgICAgICAgICAgZmxvYXQ6IGxlZnQ7XHJcbiAgICAgICAgICAgICAgICBzaGFwZS1vdXRzaWRlOiBjaXJjbGUoKTtcclxuXHJcbiAgICAgICAgICAgICAgICBzcGFuIHtcclxuICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICAgICAgICAgICAgbGVmdDogNTAlO1xyXG4gICAgICAgICAgICAgICAgICAgIHRvcDogNTAlO1xyXG4gICAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xyXG4gICAgICAgICAgICAgICAgICAgIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xyXG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogNC41cmVtO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiAkd2hpdGU7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgQG1lZGlhIChtYXgtd2lkdGg6IDUyMHB4KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDcwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiA3MHB4O1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBzcGFuIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAzcmVtO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAuaW5mby1jb250YWluZXIge1xyXG4gICAgICAgICAgICAgICAgZmxleC1iYXNpczogNzMlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC51c2VybmFtZSB7XHJcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDJyZW07XHJcbiAgICAgICAgICAgICAgICBmb250LWZhbWlseTogUXVpY2tzYW5kLUJvbGQsIHNhbnMtc2VyaWY7XHJcbiAgICAgICAgICAgICAgICBmbGV4LWJhc2lzOiA3NSU7XHJcbiAgICAgICAgICAgICAgICBAbWVkaWEgKG1heC13aWR0aDogNTIwcHgpIHtcclxuICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDEuOHJlbTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAuY291bnRyeSB7XHJcbiAgICAgICAgICAgICAgICBhbGlnbi1zZWxmOiBmbGV4LXN0YXJ0O1xyXG4gICAgICAgICAgICAgICAgLnVzZXItY291bnRyeSB7XHJcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDI1cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAyNXB4O1xyXG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiA1cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgYWxpZ24tc2VsZjogZmxleC1zdGFydDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAucG9sbHMtY291bnQge1xyXG4gICAgICAgICAgICAgICAgaDMge1xyXG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMnJlbTtcclxuICAgICAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBwIHtcclxuICAgICAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgLnVzZXItcG9sbHMge1xyXG4gICAgICAgICAgICAuZGVmYXVsdC1tc2cge1xyXG4gICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAycmVtO1xyXG4gICAgICAgICAgICAgICAgZm9udC1mYW1pbHk6IFF1aWNrc2FuZC1TZW1pQm9sZCwgc2Fucy1zZXJpZjtcclxuICAgICAgICAgICAgICAgIGxldHRlci1zcGFjaW5nOiAwLjhweDtcclxuICAgICAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAxLjc7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuIiwiLy8gQ29sb3JzXHJcbiRwcmltYXJ5LWNvbG9yOiAjMDA3ZWZmO1xyXG4kc2Vjb25kYXJ5LWNvbG9yOiAjNGZhYWY4O1xyXG4kYmctY29sb3I6ICNmYWZhZmE7XHJcbiR3aGl0ZTogI2ZmZjtcclxuJGxpZ2h0LWNvbG9yOiAjOTk5YmFjO1xyXG4kZGFyay1ibHVlOiAjMDUyMDRhO1xyXG4kdHh0OiAjMzMzO1xyXG4kZGFyay10eHQ6ICMwYjA5MGE7XHJcbiRjdGEtY29sb3I6ICMzYmQ5NzU7XHJcbiRlcnItY29sb3I6ICNmZjMzMzM7XHJcbi8vIEJyZWFrcG9pbnRzXHJcbiRtb2JpbGUtYnJlYWtwb2ludDogNDgwcHg7XHJcbiRuYXJyb3ctYnJlYWtwb2ludDogNzY4cHg7XHJcbiRub3JtYWwtYnJlYWtwb2ludDogMTQwMHB4O1xyXG4iXX0= */"] });


/***/ }),

/***/ "Orvl":
/*!**************************************************************!*\
  !*** ./src/app/pages/poll-details/poll-details.component.ts ***!
  \**************************************************************/
/*! exports provided: PollDetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PollDetailsComponent", function() { return PollDetailsComponent; });
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! moment */ "wd/R");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_services_poll_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/poll.service */ "Sh49");
/* harmony import */ var src_app_services_user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/user.service */ "qfBg");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var src_app_services_socket_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/socket.service */ "5U9e");
/* harmony import */ var _cmps_voted_modal_voted_modal_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../cmps/voted-modal/voted-modal.component */ "VgvF");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _cmps_share_share_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../cmps/share/share.component */ "V2ZH");
/* harmony import */ var _cmps_popover_popover_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../cmps/popover/popover.component */ "fMdZ");
/* harmony import */ var _cmps_confirm_modal_confirm_modal_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../cmps/confirm-modal/confirm-modal.component */ "BnSU");
/* harmony import */ var _cmps_poll_comments_poll_comments_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../cmps/poll-comments/poll-comments.component */ "AQiE");














function PollDetailsComponent_div_8_div_2_Template(rf, ctx) { if (rf & 1) {
    const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function PollDetailsComponent_div_8_div_2_Template_div_click_0_listener($event) { return $event.stopPropagation(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "popover", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("actionType", function PollDetailsComponent_div_8_div_2_Template_popover_actionType_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r11); const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); return ctx_r10.onActionClick($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("actionsTexts", ctx_r8.actionsTexts)("actionsIcons", ctx_r8.actionsIcons);
} }
function PollDetailsComponent_div_8_Template(rf, ctx) { if (rf & 1) {
    const _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function PollDetailsComponent_div_8_Template_div_click_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r13); const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r12.onSettingsClick($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "i", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, PollDetailsComponent_div_8_div_2_Template, 2, 2, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r0.isPopoverOpen);
} }
function PollDetailsComponent_p_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "p", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx_r1.poll.description, " ");
} }
function PollDetailsComponent_div_15_Template(rf, ctx) { if (rf & 1) {
    const _r18 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "input", 30, 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function PollDetailsComponent_div_15_Template_input_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r18); const option_r14 = ctx.$implicit; const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r17.onSelectOption(option_r14._id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "label", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "span", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const option_r14 = ctx.$implicit;
    const i_r15 = ctx.index;
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("id", option_r14._id)("name", ctx_r3.getOptionName(i_r15))("value", option_r14._id)("checked", ctx_r3.toggleChecked(option_r14._id));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("for", option_r14._id);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](option_r14.txt);
} }
function PollDetailsComponent_div_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "i", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "p", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("innerHTML", ctx_r4.dueDateString, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeHtml"]);
} }
function PollDetailsComponent_h4_18_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r5.error);
} }
function PollDetailsComponent_confirm_modal_25_Template(rf, ctx) { if (rf & 1) {
    const _r20 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "confirm-modal", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("userSelection", function PollDetailsComponent_confirm_modal_25_Template_confirm_modal_userSelection_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r20); const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r19.onPollDelete($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function PollDetailsComponent_poll_comments_28_Template(rf, ctx) { if (rf & 1) {
    const _r22 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "poll-comments", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("updatePoll", function PollDetailsComponent_poll_comments_28_Template_poll_comments_updatePoll_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r22); const ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r21.updatePoll($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("poll", ctx_r7.poll);
} }
class PollDetailsComponent {
    constructor(pollService, userService, route, router, titleService, socketService) {
        this.pollService = pollService;
        this.userService = userService;
        this.route = route;
        this.router = router;
        this.titleService = titleService;
        this.socketService = socketService;
        this.selectedOptions = [];
        this.isPopoverOpen = false;
        this.isConfirmModalOpen = false;
        this.isVoteModalOpen = false;
        this.isDue = false;
        this.pollSubmitted = false;
        this.actionsTexts = ['Edit Poll', 'Delete Poll'];
        this.actionsIcons = ['pi pi-pencil', 'pi pi-trash'];
    }
    ngOnInit() {
        this.route.data.subscribe((data) => {
            // Get current poll data from poll resolver
            if (!data.poll)
                this.router.navigateByUrl('/404');
            this.poll = data.poll;
            this.titleService.setTitle(`${data.poll.title} | Uvote`);
            this.socketService.on('connection');
            this.socketService.emit('join poll', data.poll._id);
        });
        this.userService.getGuestData();
        this.loggedUser = this.userService.loggedUserValue;
        this.dueDateString; // invoked here to avoid erratic UI behavior after CD runs (NG0100)
    }
    toggleChecked(optionId) {
        const optionIdx = this.selectedOptions.indexOf(optionId);
        if (optionIdx === -1) {
            return false;
        }
        else
            return true;
    }
    getCreatedTime() {
        return moment__WEBPACK_IMPORTED_MODULE_0__(this.poll.createdAt).fromNow();
    }
    getOptionPrecent(optionVotes) {
        const precent = (optionVotes / this.poll.totalVotes) * 100;
        if (!precent)
            return 0;
        return parseFloat('' + precent).toFixed(2);
    }
    onSelectOption(optionId) {
        const optionIdx = this.selectedOptions.indexOf(optionId);
        if (this.poll.allowMultiple) {
            if (optionIdx === -1) {
                this.selectedOptions.push(optionId);
            }
            else {
                this.selectedOptions.splice(optionIdx, 1);
            }
        }
        else {
            this.selectedOptions = [optionId];
        }
    }
    onSubmitVote() {
        this.pollSubmitted = true;
        this.error = '';
        if (!this.selectedOptions.length) {
            this.error = 'Please select at least one option';
            return;
        }
        this.savedPollSub = this.pollService
            .addVote(this.poll, [...this.selectedOptions])
            .subscribe((res) => {
            this.isVoteModalOpen = true;
        }, (err) => {
            this.error = 'You have already voted on this poll.';
        });
        this.pollSubmitted = false;
    }
    onSettingsClick(ev) {
        ev.stopPropagation();
        this.isPopoverOpen = !this.isPopoverOpen;
    }
    onActionClick(actionType) {
        if (actionType === 'Edit Poll') {
            this.router.navigate(['edit'], { relativeTo: this.route });
        }
        else if (actionType === 'Delete Poll') {
            this.isConfirmModalOpen = true;
        }
        else {
            // Do Something...
        }
    }
    onPollDelete(ev) {
        if (ev) {
            this.pollService.remove(this.poll._id).subscribe(() => {
                this.router.navigateByUrl('/poll');
            });
        }
        this.isConfirmModalOpen = false;
    }
    updatePoll(updatedPoll) {
        this.poll = updatedPoll;
    }
    closePopover() {
        if (this.isPopoverOpen)
            this.isPopoverOpen = false;
        if (this.isVoteModalOpen)
            this.isVoteModalOpen = false;
    }
    getOptionName(idx) {
        if (this.poll.allowMultiple) {
            return `option${idx}`;
        }
        else {
            return 'option';
        }
    }
    get resultsLink() {
        return `/poll/${this.poll._id}/results`;
    }
    get userProfileLink() {
        if (this.poll.owner._id === 'guest') {
            return '';
        }
        else {
            return `/#/u/${this.poll.owner._id}`;
        }
    }
    get pollUserHtmlString() {
        if (this.poll.owner._id === 'guest') {
            return `by a guest · <span>${this.getCreatedTime()}</span>`;
        }
        else {
            return `by <a routerLink="${this.userProfileLink}" href="${this.userProfileLink}">${this.poll.owner.name}</a> · <span>${this.getCreatedTime()}</span>`;
        }
    }
    get dueDateString() {
        if (this.poll.dueDate) {
            const dueDate = new Date(this.poll.dueDate);
            const now = new Date(Date.now());
            const formattedDueDate = moment__WEBPACK_IMPORTED_MODULE_0__(this.poll.dueDate).fromNow();
            if (dueDate > now) {
                return `Voting ends ${formattedDueDate}.`;
            }
            else {
                this.isDue = true;
                return `Voting ended ${formattedDueDate}.`;
            }
        }
    }
    ngOnDestroy() {
        if (this.savedPollSub)
            this.savedPollSub.unsubscribe();
    }
}
PollDetailsComponent.ɵfac = function PollDetailsComponent_Factory(t) { return new (t || PollDetailsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_services_poll_service__WEBPACK_IMPORTED_MODULE_2__["PollService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_services_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__["Title"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_services_socket_service__WEBPACK_IMPORTED_MODULE_6__["SocketService"])); };
PollDetailsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: PollDetailsComponent, selectors: [["poll-details"]], decls: 29, vars: 14, consts: [[1, "poll-details", "flex", "column", 3, "click"], [1, "flying-rabbit"], [1, "poll-container"], [3, "poll", "isVoteModalOpen", "onModalClose"], [1, "main-poll-info", "flex", "column", "align-center"], [1, "poll-title", "flex", "column", "justify-center", "align-center"], ["class", "poll-settings flex justify-center align-center", 3, "click", 4, "ngIf"], [1, "by-user", 3, "innerHTML"], ["class", "poll-description", 4, "ngIf"], [1, "votes-count"], [1, "poll-options", 3, "ngSubmit"], ["pollForm", "ngForm"], ["class", "burmanRadio flex align-center", 4, "ngFor", "ngForOf"], ["class", "deadline-txt flex align-center", 4, "ngIf"], [1, "error"], [4, "ngIf"], [1, "actions", "flex", "align-center"], [1, "toggle", "flex", "align-center"], [3, "routerLink"], ["type", "submit", 1, "submit-btn", "vote-btn", 3, "disabled"], [3, "userSelection", 4, "ngIf"], [1, "info"], [3, "poll", "updatePoll", 4, "ngIf"], [1, "poll-settings", "flex", "justify-center", "align-center", 3, "click"], [1, "pi", "pi-ellipsis-h"], ["class", "popover-content flex justify-center align-center", 3, "click", 4, "ngIf"], [1, "popover-content", "flex", "justify-center", "align-center", 3, "click"], [3, "actionsTexts", "actionsIcons", "actionType"], [1, "poll-description"], [1, "burmanRadio", "flex", "align-center"], ["type", "radio", 1, "burmanRadio", "input", 3, "id", "name", "value", "checked", "click"], ["option", ""], [3, "for"], [1, "flex"], [1, "option-txt"], [1, "deadline-txt", "flex", "align-center"], [1, "pi", "pi-clock"], [3, "innerHTML"], [3, "userSelection"], [3, "poll", "updatePoll"]], template: function PollDetailsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function PollDetailsComponent_Template_div_click_0_listener() { return ctx.closePopover(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "voted-modal", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("onModalClose", function PollDetailsComponent_Template_voted_modal_onModalClose_3_listener($event) { return ctx.isVoteModalOpen = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](8, PollDetailsComponent_div_8_Template, 3, 1, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](9, "p", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](10, PollDetailsComponent_p_10_Template, 2, 1, "p", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "span", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "form", 10, 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngSubmit", function PollDetailsComponent_Template_form_ngSubmit_13_listener() { return ctx.onSubmitVote(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](15, PollDetailsComponent_div_15_Template, 7, 6, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](16, PollDetailsComponent_div_16_Template, 3, 1, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](18, PollDetailsComponent_h4_18_Template, 2, 1, "h4", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "a", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](22, "Results");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "button", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](24, " Vote ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](25, PollDetailsComponent_confirm_modal_25_Template, 1, 0, "confirm-modal", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](26, "section", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](27, "share");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](28, PollDetailsComponent_poll_comments_28_Template, 1, 1, "poll-comments", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("poll", ctx.poll)("isVoteModalOpen", ctx.isVoteModalOpen);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.poll.title);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", (ctx.loggedUser == null ? null : ctx.loggedUser._id) === ctx.poll.owner._id);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("innerHTML", ctx.pollUserHtmlString, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeHtml"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.poll.description);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("", ctx.poll.totalVotes ? ctx.poll.totalVotes : 0, " votes");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.poll.options);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.poll.dueDate);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.error);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", ctx.resultsLink);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", ctx.isDue);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.isConfirmModalOpen);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.poll.isComments);
    } }, directives: [_cmps_voted_modal_voted_modal_component__WEBPACK_IMPORTED_MODULE_7__["VotedModalComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["NgForm"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgForOf"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterLinkWithHref"], _cmps_share_share_component__WEBPACK_IMPORTED_MODULE_10__["ShareComponent"], _cmps_popover_popover_component__WEBPACK_IMPORTED_MODULE_11__["PopoverComponent"], _cmps_confirm_modal_confirm_modal_component__WEBPACK_IMPORTED_MODULE_12__["ConfirmModalComponent"], _cmps_poll_comments_poll_comments_component__WEBPACK_IMPORTED_MODULE_13__["PollCommentsComponent"]], styles: ["@charset \"UTF-8\";\n.poll-details {\n  padding-top: 30px;\n  background-image: url('layered-waves-haikei.svg');\n  background-position: center;\n  background-repeat: no-repeat;\n  background-size: cover;\n  min-height: 100vh;\n  position: relative;\n}\n.poll-details .poll-container {\n  height: 100%;\n}\n.poll-details .main-poll-info {\n  margin: 0 auto 1.875rem auto;\n  min-width: 600px;\n  max-width: 768px;\n  min-height: 55vh;\n}\n.poll-details .main-poll-info h2 {\n  font-size: 3.5rem;\n  font-family: Quicksand-Bold, sans-serif;\n  font-weight: 400;\n  text-align: center;\n  word-break: break-word;\n  margin-bottom: 3px;\n}\n@media (max-width: 560px) {\n  .poll-details .main-poll-info h2 {\n    font-size: 2rem;\n  }\n}\n.poll-details .main-poll-info .poll-title {\n  margin-bottom: 3px;\n  position: relative;\n}\n.poll-details .main-poll-info .poll-title .by-user {\n  font-size: 1.1rem;\n}\n.poll-details .main-poll-info .poll-title a,\n.poll-details .main-poll-info .poll-title a:visited {\n  color: #0074d9 !important;\n}\n.poll-details .main-poll-info .error {\n  text-align: center;\n  color: #ff3333;\n  font-family: Quicksand-Medium, sans-serif;\n  margin-bottom: 8px;\n}\n.poll-details .main-poll-info .error h4 {\n  font-size: 1.2rem;\n  font-weight: 400;\n}\n.poll-details .main-poll-info .poll-settings {\n  margin: 4px 0 0 18px;\n  background-color: #e6e6e6;\n  border-radius: 50%;\n  width: 31px;\n  height: 31px;\n  cursor: pointer;\n  position: absolute;\n  right: -45px;\n  transition: background-color 0.2s;\n}\n.poll-details .main-poll-info .poll-settings:hover {\n  background-color: #e1e1e1;\n}\n.poll-details .main-poll-info .poll-settings i {\n  font-size: 1.3rem;\n  position: relative;\n}\n.poll-details .main-poll-info .poll-settings i .popover-content {\n  width: 215px;\n  position: absolute;\n  top: 40px;\n  left: -50%;\n  transform: translateX(-50%);\n  box-shadow: 0 2px 1px -1px rgba(0, 0, 0, 0.2), 0 1px 1px 0 rgba(0, 0, 0, 0.14), 0 1px 3px 0 rgba(0, 0, 0, 0.12);\n  background-color: #fff;\n}\n.poll-details .main-poll-info .poll-description {\n  font-size: 1.1rem;\n}\n.poll-details .main-poll-info .votes-count {\n  margin-bottom: 3px;\n}\n.poll-details .main-poll-info .deadline-txt {\n  margin-bottom: 3px;\n}\n.poll-details .main-poll-info .deadline-txt p {\n  margin-left: 4px;\n  font-size: 1.1rem;\n}\n.poll-details .main-poll-info .deadline-txt i {\n  font-size: 1.1rem;\n}\n.poll-details .main-poll-info .actions {\n  margin-bottom: 4.703125rem;\n  padding-left: 1px;\n}\n.poll-details .main-poll-info .actions .toggle {\n  position: relative;\n  flex-basis: 80%;\n}\n.poll-details .main-poll-info .actions .toggle a {\n  text-underline-offset: 4px;\n  text-decoration: underline;\n  -webkit-text-decoration-color: transparent;\n          text-decoration-color: transparent;\n  transition: all 0.2s;\n}\n.poll-details .main-poll-info .actions .toggle a:hover {\n  -webkit-text-decoration-color: #333;\n          text-decoration-color: #333;\n}\n.poll-details .main-poll-info form {\n  margin-top: 15px;\n  min-width: 370px;\n}\n.poll-details .main-poll-info form .option-txt {\n  flex-grow: 1;\n  font-size: 1.5rem;\n  font-family: Quicksand-SemiBold, sans-serif;\n}\n.poll-details .main-poll-info form .option-percent {\n  color: #333;\n  margin-right: 8px;\n}\n.poll-details .main-poll-info form .option-votes {\n  margin-right: 5px;\n}\n.poll-details .main-poll-info form .burmanRadio {\n  margin-bottom: 10px;\n  border-radius: 3px;\n  padding: 5px 10px;\n  background-color: #eee;\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);\n  width: 400px;\n  height: 60px;\n  transition: background-color 0.2s;\n}\n.poll-details .main-poll-info form .burmanRadio:hover {\n  background-color: #3bd975;\n}\n@media (max-width: 400px) {\n  .poll-details .main-poll-info form .burmanRadio:hover {\n    background-color: #eee;\n  }\n}\n.poll-details .main-poll-info form .burmanRadio.input {\n  display: none;\n}\n.poll-details .main-poll-info form .burmanRadio.input:checked ~ label::after {\n  opacity: 1;\n  transform: scale(1);\n}\n.poll-details .main-poll-info form .burmanRadio label {\n  cursor: pointer;\n  line-height: 30px;\n  position: relative;\n  margin-left: 35px;\n  display: inline-block;\n  width: 100%;\n  font-size: 1.1rem;\n}\n.poll-details .main-poll-info form .burmanRadio label::before, .poll-details .main-poll-info form .burmanRadio label::after {\n  border-radius: 50%;\n  position: absolute;\n  top: 5px;\n  left: -35px;\n  transition: all 0.3s ease-out;\n  z-index: 2;\n}\n.poll-details .main-poll-info form .burmanRadio label::before {\n  content: \"\";\n  border: 1.5px solid #4faaf8;\n  width: 20px;\n  height: 20px;\n}\n.poll-details .main-poll-info form .burmanRadio label::after {\n  content: \"\uF26B\";\n  background: #007eff;\n  border: 1.5px solid #007eff;\n  color: #fff;\n  font-family: \"Material-Design-Iconic-Font\";\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  opacity: 0;\n  width: 20px;\n  height: 20px;\n  transform: scale(0);\n}\n.poll-details .main-poll-info form .burmanRadio label:hover::before {\n  border-color: #007eff;\n}\n@media (max-width: 460px) {\n  .poll-details .main-poll-info form {\n    min-width: unset;\n    width: 100%;\n  }\n  .poll-details .main-poll-info form .burmanRadio {\n    width: unset;\n  }\n}\n@media (max-width: 980px) {\n  .poll-details .main-poll-info {\n    min-width: unset;\n    max-width: unset;\n    width: 90%;\n  }\n  .poll-details .main-poll-info .poll-settings {\n    position: static;\n    margin-bottom: 5px;\n  }\n}\n.poll-details .info {\n  margin: 0 auto 155px auto;\n  background-color: #fafafa;\n  border-top: 1px solid rgba(0, 0, 0, 0.12);\n}\n.poll-details .flying-rabbit {\n  position: absolute;\n  left: 8%;\n  top: 5%;\n  z-index: 1;\n  background-image: url('flying-rabbit.svg');\n  width: 350px;\n  height: 350px;\n  background-position: center;\n  background-size: cover;\n  background-color: transparent;\n  fill: transparent;\n}\n@media (max-width: 1500px) {\n  .poll-details .flying-rabbit {\n    left: 0;\n  }\n}\n@media (max-width: 1100px) {\n  .poll-details .flying-rabbit {\n    width: 250px;\n    height: 250px;\n    top: 10%;\n  }\n}\n@media (max-width: 980px) {\n  .poll-details .flying-rabbit {\n    display: none;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxwb2xsLWRldGFpbHMuY29tcG9uZW50LnNjc3MiLCIuLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFwuLlxcYXNzZXRzXFxzdHlsZXNcXHNldHVwXFxfdmFyaWFibGVzLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsZ0JBQWdCO0FBR2hCO0VBQ0UsaUJBQUE7RUFFQSxpREFBQTtFQUNBLDJCQUFBO0VBQ0EsNEJBQUE7RUFDQSxzQkFBQTtFQUVBLGlCQUFBO0VBQ0Esa0JBQUE7QUFIRjtBQUtFO0VBQ0UsWUFBQTtBQUhKO0FBS0U7RUFDRSw0QkFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtBQUhKO0FBS0k7RUFDRSxpQkFBQTtFQUNBLHVDQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLHNCQUFBO0VBQ0Esa0JBQUE7QUFITjtBQUtNO0VBUkY7SUFTSSxlQUFBO0VBRk47QUFDRjtBQUtJO0VBQ0Usa0JBQUE7RUFDQSxrQkFBQTtBQUhOO0FBS007RUFDRSxpQkFBQTtBQUhSO0FBS007O0VBRUUseUJBQUE7QUFIUjtBQU9JO0VBQ0Usa0JBQUE7RUFDQSxjQ3pDTTtFRDBDTix5Q0FBQTtFQUNBLGtCQUFBO0FBTE47QUFPTTtFQUNFLGlCQUFBO0VBQ0EsZ0JBQUE7QUFMUjtBQVFJO0VBQ0Usb0JBQUE7RUFDQSx5QkFBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0VBRUEsaUNBQUE7QUFQTjtBQVNNO0VBQ0UseUJBQUE7QUFQUjtBQVNNO0VBQ0UsaUJBQUE7RUFDQSxrQkFBQTtBQVBSO0FBU1E7RUFDRSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxTQUFBO0VBQ0EsVUFBQTtFQUNBLDJCQUFBO0VBQ0EsK0dBQUE7RUFFQSxzQkNuRkY7QUQyRVI7QUFZSTtFQUNFLGlCQUFBO0FBVk47QUFZSTtFQUNFLGtCQUFBO0FBVk47QUFhSTtFQUNFLGtCQUFBO0FBWE47QUFZTTtFQUNFLGdCQUFBO0VBQ0EsaUJBQUE7QUFWUjtBQWFNO0VBQ0UsaUJBQUE7QUFYUjtBQWVJO0VBQ0UsMEJBQUE7RUFDQSxpQkFBQTtBQWJOO0FBY007RUFDRSxrQkFBQTtFQUNBLGVBQUE7QUFaUjtBQWNRO0VBQ0UsMEJBQUE7RUFDQSwwQkFBQTtFQUNBLDBDQUFBO1VBQUEsa0NBQUE7RUFFQSxvQkFBQTtBQWJWO0FBY1U7RUFDRSxtQ0NySE47VURxSE0sMkJDckhOO0FEeUdOO0FBa0JJO0VBY0UsZ0JBQUE7RUFDQSxnQkFBQTtBQTdCTjtBQWVNO0VBQ0UsWUFBQTtFQUNBLGlCQUFBO0VBQ0EsMkNBQUE7QUFiUjtBQWVNO0VBQ0UsV0NsSUY7RURtSUUsaUJBQUE7QUFiUjtBQWVNO0VBQ0UsaUJBQUE7QUFiUjtBQWtCTTtFQUNFLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtFQUNBLHNCQUFBO0VBQ0Esd0VBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtFQUVBLGlDQUFBO0FBakJSO0FBbUJRO0VBQ0UseUJDckpFO0FEb0laO0FBa0JVO0VBRkY7SUFHSSxzQkFBQTtFQWZWO0FBQ0Y7QUFpQlE7RUFDRSxhQUFBO0FBZlY7QUFpQlU7RUFDRSxVQUFBO0VBQ0EsbUJBQUE7QUFmWjtBQW1CUTtFQUNFLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSxxQkFBQTtFQUNBLFdBQUE7RUFDQSxpQkFBQTtBQWpCVjtBQW1CVTtFQUVFLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxRQUFBO0VBQ0EsV0FBQTtFQUNBLDZCQUFBO0VBQ0EsVUFBQTtBQWxCWjtBQXFCVTtFQUNFLFdBQUE7RUFDQSwyQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0FBbkJaO0FBc0JVO0VBQ0UsWUFBQTtFQUNBLG1CQ3ZNSTtFRHdNSiwyQkFBQTtFQUNBLFdBQUE7RUFDQSwwQ0FBQTtFQUNBLGFBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0EsVUFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7QUFwQlo7QUF3Qlk7RUFDRSxxQkN0TkU7QURnTWhCO0FBNEJNO0VBM0ZGO0lBNEZJLGdCQUFBO0lBQ0EsV0FBQTtFQXpCTjtFQTJCTTtJQUNFLFlBQUE7RUF6QlI7QUFDRjtBQTZCSTtFQXRORjtJQXVOSSxnQkFBQTtJQUNBLGdCQUFBO0lBQ0EsVUFBQTtFQTFCSjtFQTRCSTtJQUNFLGdCQUFBO0lBQ0Esa0JBQUE7RUExQk47QUFDRjtBQThCRTtFQUNFLHlCQUFBO0VBQ0EseUJDbFBPO0VEbVBQLHlDQUFBO0FBNUJKO0FBK0JFO0VBQ0Usa0JBQUE7RUFDQSxRQUFBO0VBQ0EsT0FBQTtFQUNBLFVBQUE7RUFDQSwwQ0FBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0EsMkJBQUE7RUFDQSxzQkFBQTtFQUNBLDZCQUFBO0VBQ0EsaUJBQUE7QUE3Qko7QUErQkk7RUFiRjtJQWNJLE9BQUE7RUE1Qko7QUFDRjtBQThCSTtFQWpCRjtJQWtCSSxZQUFBO0lBQ0EsYUFBQTtJQUNBLFFBQUE7RUEzQko7QUFDRjtBQTZCSTtFQXZCRjtJQXdCSSxhQUFBO0VBMUJKO0FBQ0YiLCJmaWxlIjoicG9sbC1kZXRhaWxzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGNoYXJzZXQgXCJVVEYtOFwiO1xuLnBvbGwtZGV0YWlscyB7XG4gIHBhZGRpbmctdG9wOiAzMHB4O1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIuLi8uLi8uLi9hc3NldHMvaW1ncy9sYXllcmVkLXdhdmVzLWhhaWtlaS5zdmdcIik7XG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgbWluLWhlaWdodDogMTAwdmg7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cbi5wb2xsLWRldGFpbHMgLnBvbGwtY29udGFpbmVyIHtcbiAgaGVpZ2h0OiAxMDAlO1xufVxuLnBvbGwtZGV0YWlscyAubWFpbi1wb2xsLWluZm8ge1xuICBtYXJnaW46IDAgYXV0byAxLjg3NXJlbSBhdXRvO1xuICBtaW4td2lkdGg6IDYwMHB4O1xuICBtYXgtd2lkdGg6IDc2OHB4O1xuICBtaW4taGVpZ2h0OiA1NXZoO1xufVxuLnBvbGwtZGV0YWlscyAubWFpbi1wb2xsLWluZm8gaDIge1xuICBmb250LXNpemU6IDMuNXJlbTtcbiAgZm9udC1mYW1pbHk6IFF1aWNrc2FuZC1Cb2xkLCBzYW5zLXNlcmlmO1xuICBmb250LXdlaWdodDogNDAwO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHdvcmQtYnJlYWs6IGJyZWFrLXdvcmQ7XG4gIG1hcmdpbi1ib3R0b206IDNweDtcbn1cbkBtZWRpYSAobWF4LXdpZHRoOiA1NjBweCkge1xuICAucG9sbC1kZXRhaWxzIC5tYWluLXBvbGwtaW5mbyBoMiB7XG4gICAgZm9udC1zaXplOiAycmVtO1xuICB9XG59XG4ucG9sbC1kZXRhaWxzIC5tYWluLXBvbGwtaW5mbyAucG9sbC10aXRsZSB7XG4gIG1hcmdpbi1ib3R0b206IDNweDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuLnBvbGwtZGV0YWlscyAubWFpbi1wb2xsLWluZm8gLnBvbGwtdGl0bGUgLmJ5LXVzZXIge1xuICBmb250LXNpemU6IDEuMXJlbTtcbn1cbi5wb2xsLWRldGFpbHMgLm1haW4tcG9sbC1pbmZvIC5wb2xsLXRpdGxlIGEsXG4ucG9sbC1kZXRhaWxzIC5tYWluLXBvbGwtaW5mbyAucG9sbC10aXRsZSBhOnZpc2l0ZWQge1xuICBjb2xvcjogIzAwNzRkOSAhaW1wb3J0YW50O1xufVxuLnBvbGwtZGV0YWlscyAubWFpbi1wb2xsLWluZm8gLmVycm9yIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBjb2xvcjogI2ZmMzMzMztcbiAgZm9udC1mYW1pbHk6IFF1aWNrc2FuZC1NZWRpdW0sIHNhbnMtc2VyaWY7XG4gIG1hcmdpbi1ib3R0b206IDhweDtcbn1cbi5wb2xsLWRldGFpbHMgLm1haW4tcG9sbC1pbmZvIC5lcnJvciBoNCB7XG4gIGZvbnQtc2l6ZTogMS4ycmVtO1xuICBmb250LXdlaWdodDogNDAwO1xufVxuLnBvbGwtZGV0YWlscyAubWFpbi1wb2xsLWluZm8gLnBvbGwtc2V0dGluZ3Mge1xuICBtYXJnaW46IDRweCAwIDAgMThweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2U2ZTZlNjtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICB3aWR0aDogMzFweDtcbiAgaGVpZ2h0OiAzMXB4O1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgcmlnaHQ6IC00NXB4O1xuICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIDAuMnM7XG59XG4ucG9sbC1kZXRhaWxzIC5tYWluLXBvbGwtaW5mbyAucG9sbC1zZXR0aW5nczpob3ZlciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNlMWUxZTE7XG59XG4ucG9sbC1kZXRhaWxzIC5tYWluLXBvbGwtaW5mbyAucG9sbC1zZXR0aW5ncyBpIHtcbiAgZm9udC1zaXplOiAxLjNyZW07XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cbi5wb2xsLWRldGFpbHMgLm1haW4tcG9sbC1pbmZvIC5wb2xsLXNldHRpbmdzIGkgLnBvcG92ZXItY29udGVudCB7XG4gIHdpZHRoOiAyMTVweDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDQwcHg7XG4gIGxlZnQ6IC01MCU7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNTAlKTtcbiAgYm94LXNoYWRvdzogMCAycHggMXB4IC0xcHggcmdiYSgwLCAwLCAwLCAwLjIpLCAwIDFweCAxcHggMCByZ2JhKDAsIDAsIDAsIDAuMTQpLCAwIDFweCAzcHggMCByZ2JhKDAsIDAsIDAsIDAuMTIpO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xufVxuLnBvbGwtZGV0YWlscyAubWFpbi1wb2xsLWluZm8gLnBvbGwtZGVzY3JpcHRpb24ge1xuICBmb250LXNpemU6IDEuMXJlbTtcbn1cbi5wb2xsLWRldGFpbHMgLm1haW4tcG9sbC1pbmZvIC52b3Rlcy1jb3VudCB7XG4gIG1hcmdpbi1ib3R0b206IDNweDtcbn1cbi5wb2xsLWRldGFpbHMgLm1haW4tcG9sbC1pbmZvIC5kZWFkbGluZS10eHQge1xuICBtYXJnaW4tYm90dG9tOiAzcHg7XG59XG4ucG9sbC1kZXRhaWxzIC5tYWluLXBvbGwtaW5mbyAuZGVhZGxpbmUtdHh0IHAge1xuICBtYXJnaW4tbGVmdDogNHB4O1xuICBmb250LXNpemU6IDEuMXJlbTtcbn1cbi5wb2xsLWRldGFpbHMgLm1haW4tcG9sbC1pbmZvIC5kZWFkbGluZS10eHQgaSB7XG4gIGZvbnQtc2l6ZTogMS4xcmVtO1xufVxuLnBvbGwtZGV0YWlscyAubWFpbi1wb2xsLWluZm8gLmFjdGlvbnMge1xuICBtYXJnaW4tYm90dG9tOiA0LjcwMzEyNXJlbTtcbiAgcGFkZGluZy1sZWZ0OiAxcHg7XG59XG4ucG9sbC1kZXRhaWxzIC5tYWluLXBvbGwtaW5mbyAuYWN0aW9ucyAudG9nZ2xlIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBmbGV4LWJhc2lzOiA4MCU7XG59XG4ucG9sbC1kZXRhaWxzIC5tYWluLXBvbGwtaW5mbyAuYWN0aW9ucyAudG9nZ2xlIGEge1xuICB0ZXh0LXVuZGVybGluZS1vZmZzZXQ6IDRweDtcbiAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XG4gIHRleHQtZGVjb3JhdGlvbi1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gIHRyYW5zaXRpb246IGFsbCAwLjJzO1xufVxuLnBvbGwtZGV0YWlscyAubWFpbi1wb2xsLWluZm8gLmFjdGlvbnMgLnRvZ2dsZSBhOmhvdmVyIHtcbiAgdGV4dC1kZWNvcmF0aW9uLWNvbG9yOiAjMzMzO1xufVxuLnBvbGwtZGV0YWlscyAubWFpbi1wb2xsLWluZm8gZm9ybSB7XG4gIG1hcmdpbi10b3A6IDE1cHg7XG4gIG1pbi13aWR0aDogMzcwcHg7XG59XG4ucG9sbC1kZXRhaWxzIC5tYWluLXBvbGwtaW5mbyBmb3JtIC5vcHRpb24tdHh0IHtcbiAgZmxleC1ncm93OiAxO1xuICBmb250LXNpemU6IDEuNXJlbTtcbiAgZm9udC1mYW1pbHk6IFF1aWNrc2FuZC1TZW1pQm9sZCwgc2Fucy1zZXJpZjtcbn1cbi5wb2xsLWRldGFpbHMgLm1haW4tcG9sbC1pbmZvIGZvcm0gLm9wdGlvbi1wZXJjZW50IHtcbiAgY29sb3I6ICMzMzM7XG4gIG1hcmdpbi1yaWdodDogOHB4O1xufVxuLnBvbGwtZGV0YWlscyAubWFpbi1wb2xsLWluZm8gZm9ybSAub3B0aW9uLXZvdGVzIHtcbiAgbWFyZ2luLXJpZ2h0OiA1cHg7XG59XG4ucG9sbC1kZXRhaWxzIC5tYWluLXBvbGwtaW5mbyBmb3JtIC5idXJtYW5SYWRpbyB7XG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDNweDtcbiAgcGFkZGluZzogNXB4IDEwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICNlZWU7XG4gIGJveC1zaGFkb3c6IDAgMXB4IDNweCByZ2JhKDAsIDAsIDAsIDAuMTIpLCAwIDFweCAycHggcmdiYSgwLCAwLCAwLCAwLjI0KTtcbiAgd2lkdGg6IDQwMHB4O1xuICBoZWlnaHQ6IDYwcHg7XG4gIHRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgMC4ycztcbn1cbi5wb2xsLWRldGFpbHMgLm1haW4tcG9sbC1pbmZvIGZvcm0gLmJ1cm1hblJhZGlvOmhvdmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzNiZDk3NTtcbn1cbkBtZWRpYSAobWF4LXdpZHRoOiA0MDBweCkge1xuICAucG9sbC1kZXRhaWxzIC5tYWluLXBvbGwtaW5mbyBmb3JtIC5idXJtYW5SYWRpbzpob3ZlciB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2VlZTtcbiAgfVxufVxuLnBvbGwtZGV0YWlscyAubWFpbi1wb2xsLWluZm8gZm9ybSAuYnVybWFuUmFkaW8uaW5wdXQge1xuICBkaXNwbGF5OiBub25lO1xufVxuLnBvbGwtZGV0YWlscyAubWFpbi1wb2xsLWluZm8gZm9ybSAuYnVybWFuUmFkaW8uaW5wdXQ6Y2hlY2tlZCB+IGxhYmVsOjphZnRlciB7XG4gIG9wYWNpdHk6IDE7XG4gIHRyYW5zZm9ybTogc2NhbGUoMSk7XG59XG4ucG9sbC1kZXRhaWxzIC5tYWluLXBvbGwtaW5mbyBmb3JtIC5idXJtYW5SYWRpbyBsYWJlbCB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgbGluZS1oZWlnaHQ6IDMwcHg7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgbWFyZ2luLWxlZnQ6IDM1cHg7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgd2lkdGg6IDEwMCU7XG4gIGZvbnQtc2l6ZTogMS4xcmVtO1xufVxuLnBvbGwtZGV0YWlscyAubWFpbi1wb2xsLWluZm8gZm9ybSAuYnVybWFuUmFkaW8gbGFiZWw6OmJlZm9yZSwgLnBvbGwtZGV0YWlscyAubWFpbi1wb2xsLWluZm8gZm9ybSAuYnVybWFuUmFkaW8gbGFiZWw6OmFmdGVyIHtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogNXB4O1xuICBsZWZ0OiAtMzVweDtcbiAgdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZS1vdXQ7XG4gIHotaW5kZXg6IDI7XG59XG4ucG9sbC1kZXRhaWxzIC5tYWluLXBvbGwtaW5mbyBmb3JtIC5idXJtYW5SYWRpbyBsYWJlbDo6YmVmb3JlIHtcbiAgY29udGVudDogXCJcIjtcbiAgYm9yZGVyOiAxLjVweCBzb2xpZCAjNGZhYWY4O1xuICB3aWR0aDogMjBweDtcbiAgaGVpZ2h0OiAyMHB4O1xufVxuLnBvbGwtZGV0YWlscyAubWFpbi1wb2xsLWluZm8gZm9ybSAuYnVybWFuUmFkaW8gbGFiZWw6OmFmdGVyIHtcbiAgY29udGVudDogXCLviatcIjtcbiAgYmFja2dyb3VuZDogIzAwN2VmZjtcbiAgYm9yZGVyOiAxLjVweCBzb2xpZCAjMDA3ZWZmO1xuICBjb2xvcjogI2ZmZjtcbiAgZm9udC1mYW1pbHk6IFwiTWF0ZXJpYWwtRGVzaWduLUljb25pYy1Gb250XCI7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBvcGFjaXR5OiAwO1xuICB3aWR0aDogMjBweDtcbiAgaGVpZ2h0OiAyMHB4O1xuICB0cmFuc2Zvcm06IHNjYWxlKDApO1xufVxuLnBvbGwtZGV0YWlscyAubWFpbi1wb2xsLWluZm8gZm9ybSAuYnVybWFuUmFkaW8gbGFiZWw6aG92ZXI6OmJlZm9yZSB7XG4gIGJvcmRlci1jb2xvcjogIzAwN2VmZjtcbn1cbkBtZWRpYSAobWF4LXdpZHRoOiA0NjBweCkge1xuICAucG9sbC1kZXRhaWxzIC5tYWluLXBvbGwtaW5mbyBmb3JtIHtcbiAgICBtaW4td2lkdGg6IHVuc2V0O1xuICAgIHdpZHRoOiAxMDAlO1xuICB9XG4gIC5wb2xsLWRldGFpbHMgLm1haW4tcG9sbC1pbmZvIGZvcm0gLmJ1cm1hblJhZGlvIHtcbiAgICB3aWR0aDogdW5zZXQ7XG4gIH1cbn1cbkBtZWRpYSAobWF4LXdpZHRoOiA5ODBweCkge1xuICAucG9sbC1kZXRhaWxzIC5tYWluLXBvbGwtaW5mbyB7XG4gICAgbWluLXdpZHRoOiB1bnNldDtcbiAgICBtYXgtd2lkdGg6IHVuc2V0O1xuICAgIHdpZHRoOiA5MCU7XG4gIH1cbiAgLnBvbGwtZGV0YWlscyAubWFpbi1wb2xsLWluZm8gLnBvbGwtc2V0dGluZ3Mge1xuICAgIHBvc2l0aW9uOiBzdGF0aWM7XG4gICAgbWFyZ2luLWJvdHRvbTogNXB4O1xuICB9XG59XG4ucG9sbC1kZXRhaWxzIC5pbmZvIHtcbiAgbWFyZ2luOiAwIGF1dG8gMTU1cHggYXV0bztcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZhZmFmYTtcbiAgYm9yZGVyLXRvcDogMXB4IHNvbGlkIHJnYmEoMCwgMCwgMCwgMC4xMik7XG59XG4ucG9sbC1kZXRhaWxzIC5mbHlpbmctcmFiYml0IHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBsZWZ0OiA4JTtcbiAgdG9wOiA1JTtcbiAgei1pbmRleDogMTtcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiLi4vLi4vLi4vYXNzZXRzL2ltZ3MvZmx5aW5nLXJhYmJpdC5zdmdcIik7XG4gIHdpZHRoOiAzNTBweDtcbiAgaGVpZ2h0OiAzNTBweDtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgZmlsbDogdHJhbnNwYXJlbnQ7XG59XG5AbWVkaWEgKG1heC13aWR0aDogMTUwMHB4KSB7XG4gIC5wb2xsLWRldGFpbHMgLmZseWluZy1yYWJiaXQge1xuICAgIGxlZnQ6IDA7XG4gIH1cbn1cbkBtZWRpYSAobWF4LXdpZHRoOiAxMTAwcHgpIHtcbiAgLnBvbGwtZGV0YWlscyAuZmx5aW5nLXJhYmJpdCB7XG4gICAgd2lkdGg6IDI1MHB4O1xuICAgIGhlaWdodDogMjUwcHg7XG4gICAgdG9wOiAxMCU7XG4gIH1cbn1cbkBtZWRpYSAobWF4LXdpZHRoOiA5ODBweCkge1xuICAucG9sbC1kZXRhaWxzIC5mbHlpbmctcmFiYml0IHtcbiAgICBkaXNwbGF5OiBub25lO1xuICB9XG59IiwiLy8gQ29sb3JzXHJcbiRwcmltYXJ5LWNvbG9yOiAjMDA3ZWZmO1xyXG4kc2Vjb25kYXJ5LWNvbG9yOiAjNGZhYWY4O1xyXG4kYmctY29sb3I6ICNmYWZhZmE7XHJcbiR3aGl0ZTogI2ZmZjtcclxuJGxpZ2h0LWNvbG9yOiAjOTk5YmFjO1xyXG4kZGFyay1ibHVlOiAjMDUyMDRhO1xyXG4kdHh0OiAjMzMzO1xyXG4kZGFyay10eHQ6ICMwYjA5MGE7XHJcbiRjdGEtY29sb3I6ICMzYmQ5NzU7XHJcbiRlcnItY29sb3I6ICNmZjMzMzM7XHJcbi8vIEJyZWFrcG9pbnRzXHJcbiRtb2JpbGUtYnJlYWtwb2ludDogNDgwcHg7XHJcbiRuYXJyb3ctYnJlYWtwb2ludDogNzY4cHg7XHJcbiRub3JtYWwtYnJlYWtwb2ludDogMTQwMHB4O1xyXG4iXX0= */"], encapsulation: 2 });


/***/ }),

/***/ "RnhZ":
/*!**************************************************!*\
  !*** ./node_modules/moment/locale sync ^\.\/.*$ ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./af": "K/tc",
	"./af.js": "K/tc",
	"./ar": "jnO4",
	"./ar-dz": "o1bE",
	"./ar-dz.js": "o1bE",
	"./ar-kw": "Qj4J",
	"./ar-kw.js": "Qj4J",
	"./ar-ly": "HP3h",
	"./ar-ly.js": "HP3h",
	"./ar-ma": "CoRJ",
	"./ar-ma.js": "CoRJ",
	"./ar-sa": "gjCT",
	"./ar-sa.js": "gjCT",
	"./ar-tn": "bYM6",
	"./ar-tn.js": "bYM6",
	"./ar.js": "jnO4",
	"./az": "SFxW",
	"./az.js": "SFxW",
	"./be": "H8ED",
	"./be.js": "H8ED",
	"./bg": "hKrs",
	"./bg.js": "hKrs",
	"./bm": "p/rL",
	"./bm.js": "p/rL",
	"./bn": "kEOa",
	"./bn-bd": "loYQ",
	"./bn-bd.js": "loYQ",
	"./bn.js": "kEOa",
	"./bo": "0mo+",
	"./bo.js": "0mo+",
	"./br": "aIdf",
	"./br.js": "aIdf",
	"./bs": "JVSJ",
	"./bs.js": "JVSJ",
	"./ca": "1xZ4",
	"./ca.js": "1xZ4",
	"./cs": "PA2r",
	"./cs.js": "PA2r",
	"./cv": "A+xa",
	"./cv.js": "A+xa",
	"./cy": "l5ep",
	"./cy.js": "l5ep",
	"./da": "DxQv",
	"./da.js": "DxQv",
	"./de": "tGlX",
	"./de-at": "s+uk",
	"./de-at.js": "s+uk",
	"./de-ch": "u3GI",
	"./de-ch.js": "u3GI",
	"./de.js": "tGlX",
	"./dv": "WYrj",
	"./dv.js": "WYrj",
	"./el": "jUeY",
	"./el.js": "jUeY",
	"./en-au": "Dmvi",
	"./en-au.js": "Dmvi",
	"./en-ca": "OIYi",
	"./en-ca.js": "OIYi",
	"./en-gb": "Oaa7",
	"./en-gb.js": "Oaa7",
	"./en-ie": "4dOw",
	"./en-ie.js": "4dOw",
	"./en-il": "czMo",
	"./en-il.js": "czMo",
	"./en-in": "7C5Q",
	"./en-in.js": "7C5Q",
	"./en-nz": "b1Dy",
	"./en-nz.js": "b1Dy",
	"./en-sg": "t+mt",
	"./en-sg.js": "t+mt",
	"./eo": "Zduo",
	"./eo.js": "Zduo",
	"./es": "iYuL",
	"./es-do": "CjzT",
	"./es-do.js": "CjzT",
	"./es-mx": "tbfe",
	"./es-mx.js": "tbfe",
	"./es-us": "Vclq",
	"./es-us.js": "Vclq",
	"./es.js": "iYuL",
	"./et": "7BjC",
	"./et.js": "7BjC",
	"./eu": "D/JM",
	"./eu.js": "D/JM",
	"./fa": "jfSC",
	"./fa.js": "jfSC",
	"./fi": "gekB",
	"./fi.js": "gekB",
	"./fil": "1ppg",
	"./fil.js": "1ppg",
	"./fo": "ByF4",
	"./fo.js": "ByF4",
	"./fr": "nyYc",
	"./fr-ca": "2fjn",
	"./fr-ca.js": "2fjn",
	"./fr-ch": "Dkky",
	"./fr-ch.js": "Dkky",
	"./fr.js": "nyYc",
	"./fy": "cRix",
	"./fy.js": "cRix",
	"./ga": "USCx",
	"./ga.js": "USCx",
	"./gd": "9rRi",
	"./gd.js": "9rRi",
	"./gl": "iEDd",
	"./gl.js": "iEDd",
	"./gom-deva": "qvJo",
	"./gom-deva.js": "qvJo",
	"./gom-latn": "DKr+",
	"./gom-latn.js": "DKr+",
	"./gu": "4MV3",
	"./gu.js": "4MV3",
	"./he": "x6pH",
	"./he.js": "x6pH",
	"./hi": "3E1r",
	"./hi.js": "3E1r",
	"./hr": "S6ln",
	"./hr.js": "S6ln",
	"./hu": "WxRl",
	"./hu.js": "WxRl",
	"./hy-am": "1rYy",
	"./hy-am.js": "1rYy",
	"./id": "UDhR",
	"./id.js": "UDhR",
	"./is": "BVg3",
	"./is.js": "BVg3",
	"./it": "bpih",
	"./it-ch": "bxKX",
	"./it-ch.js": "bxKX",
	"./it.js": "bpih",
	"./ja": "B55N",
	"./ja.js": "B55N",
	"./jv": "tUCv",
	"./jv.js": "tUCv",
	"./ka": "IBtZ",
	"./ka.js": "IBtZ",
	"./kk": "bXm7",
	"./kk.js": "bXm7",
	"./km": "6B0Y",
	"./km.js": "6B0Y",
	"./kn": "PpIw",
	"./kn.js": "PpIw",
	"./ko": "Ivi+",
	"./ko.js": "Ivi+",
	"./ku": "JCF/",
	"./ku.js": "JCF/",
	"./ky": "lgnt",
	"./ky.js": "lgnt",
	"./lb": "RAwQ",
	"./lb.js": "RAwQ",
	"./lo": "sp3z",
	"./lo.js": "sp3z",
	"./lt": "JvlW",
	"./lt.js": "JvlW",
	"./lv": "uXwI",
	"./lv.js": "uXwI",
	"./me": "KTz0",
	"./me.js": "KTz0",
	"./mi": "aIsn",
	"./mi.js": "aIsn",
	"./mk": "aQkU",
	"./mk.js": "aQkU",
	"./ml": "AvvY",
	"./ml.js": "AvvY",
	"./mn": "lYtQ",
	"./mn.js": "lYtQ",
	"./mr": "Ob0Z",
	"./mr.js": "Ob0Z",
	"./ms": "6+QB",
	"./ms-my": "ZAMP",
	"./ms-my.js": "ZAMP",
	"./ms.js": "6+QB",
	"./mt": "G0Uy",
	"./mt.js": "G0Uy",
	"./my": "honF",
	"./my.js": "honF",
	"./nb": "bOMt",
	"./nb.js": "bOMt",
	"./ne": "OjkT",
	"./ne.js": "OjkT",
	"./nl": "+s0g",
	"./nl-be": "2ykv",
	"./nl-be.js": "2ykv",
	"./nl.js": "+s0g",
	"./nn": "uEye",
	"./nn.js": "uEye",
	"./oc-lnc": "Fnuy",
	"./oc-lnc.js": "Fnuy",
	"./pa-in": "8/+R",
	"./pa-in.js": "8/+R",
	"./pl": "jVdC",
	"./pl.js": "jVdC",
	"./pt": "8mBD",
	"./pt-br": "0tRk",
	"./pt-br.js": "0tRk",
	"./pt.js": "8mBD",
	"./ro": "lyxo",
	"./ro.js": "lyxo",
	"./ru": "lXzo",
	"./ru.js": "lXzo",
	"./sd": "Z4QM",
	"./sd.js": "Z4QM",
	"./se": "//9w",
	"./se.js": "//9w",
	"./si": "7aV9",
	"./si.js": "7aV9",
	"./sk": "e+ae",
	"./sk.js": "e+ae",
	"./sl": "gVVK",
	"./sl.js": "gVVK",
	"./sq": "yPMs",
	"./sq.js": "yPMs",
	"./sr": "zx6S",
	"./sr-cyrl": "E+lV",
	"./sr-cyrl.js": "E+lV",
	"./sr.js": "zx6S",
	"./ss": "Ur1D",
	"./ss.js": "Ur1D",
	"./sv": "X709",
	"./sv.js": "X709",
	"./sw": "dNwA",
	"./sw.js": "dNwA",
	"./ta": "PeUW",
	"./ta.js": "PeUW",
	"./te": "XLvN",
	"./te.js": "XLvN",
	"./tet": "V2x9",
	"./tet.js": "V2x9",
	"./tg": "Oxv6",
	"./tg.js": "Oxv6",
	"./th": "EOgW",
	"./th.js": "EOgW",
	"./tk": "Wv91",
	"./tk.js": "Wv91",
	"./tl-ph": "Dzi0",
	"./tl-ph.js": "Dzi0",
	"./tlh": "z3Vd",
	"./tlh.js": "z3Vd",
	"./tr": "DoHr",
	"./tr.js": "DoHr",
	"./tzl": "z1FC",
	"./tzl.js": "z1FC",
	"./tzm": "wQk9",
	"./tzm-latn": "tT3J",
	"./tzm-latn.js": "tT3J",
	"./tzm.js": "wQk9",
	"./ug-cn": "YRex",
	"./ug-cn.js": "YRex",
	"./uk": "raLr",
	"./uk.js": "raLr",
	"./ur": "UpQW",
	"./ur.js": "UpQW",
	"./uz": "Loxo",
	"./uz-latn": "AQ68",
	"./uz-latn.js": "AQ68",
	"./uz.js": "Loxo",
	"./vi": "KSF8",
	"./vi.js": "KSF8",
	"./x-pseudo": "/X5v",
	"./x-pseudo.js": "/X5v",
	"./yo": "fzPg",
	"./yo.js": "fzPg",
	"./zh-cn": "XDpg",
	"./zh-cn.js": "XDpg",
	"./zh-hk": "SatO",
	"./zh-hk.js": "SatO",
	"./zh-mo": "OmwH",
	"./zh-mo.js": "OmwH",
	"./zh-tw": "kOpN",
	"./zh-tw.js": "kOpN"
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "RnhZ";

/***/ }),

/***/ "Sh49":
/*!******************************************!*\
  !*** ./src/app/services/poll.service.ts ***!
  \******************************************/
/*! exports provided: PollService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PollService", function() { return PollService; });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../environments/environment */ "AytR");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _user_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./user.service */ "qfBg");
/* harmony import */ var _util_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./util.service */ "2Rin");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _socket_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./socket.service */ "5U9e");









class PollService {
    constructor(http, userService, utilService, router, socketService) {
        this.http = http;
        this.userService = userService;
        this.utilService = utilService;
        this.router = router;
        this.socketService = socketService;
        this._polls$ = new rxjs__WEBPACK_IMPORTED_MODULE_0__["BehaviorSubject"]([]);
        this.polls$ = this._polls$.asObservable();
        this._totalPollsCount$ = new rxjs__WEBPACK_IMPORTED_MODULE_0__["BehaviorSubject"](100);
        this.totalPollsCount$ = this._totalPollsCount$.asObservable();
    }
    query(pageNumber = 1, sortBy = 'newest') {
        const query = { page: '' + pageNumber, sortBy };
        this.http
            .get(`${_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].pollURL}`, { params: query })
            .subscribe((res) => {
            const polls = res.data.filter((poll) => !poll.isPrivate);
            this._polls$.next(polls);
            this._totalPollsCount$.next(res.total);
        });
    }
    getById(pollId) {
        return this.http.get(`${_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].pollURL}/${pollId}`).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])((errorRes) => {
            this.router.navigateByUrl('/404');
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_0__["throwError"])(`Failed to get poll ${pollId}, ${errorRes}`);
        }));
    }
    addVote(poll, selectedOptions) {
        const guestData = this.userService.guestDataValue;
        const loggedUser = this.userService.loggedUserValue;
        const userIp = guestData === null || guestData === void 0 ? void 0 : guestData.ip_address;
        if (poll.voters[userIp] || poll.voters[loggedUser === null || loggedUser === void 0 ? void 0 : loggedUser._id]) {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_0__["throwError"])((err) => new Error('User already voted'));
        }
        selectedOptions.forEach((selectionId) => {
            const optionToUpdateIdx = poll.options.findIndex((option) => option._id === selectionId);
            poll.options[optionToUpdateIdx].votes += 1;
        });
        poll.totalVotes += selectedOptions.length;
        if (loggedUser) {
            poll.voters[loggedUser._id] = loggedUser.country || 'Unknown Country';
        }
        else if (userIp) {
            poll.voters[userIp] = guestData.country;
        }
        else {
            return;
        }
        this.socketService.emit('update poll', poll);
        return this.update(poll._id, poll);
    }
    submitPoll(poll) {
        if (poll._id) {
            return this.update(poll._id, poll);
        }
        else {
            delete poll._id;
            return this.create(poll);
        }
    }
    addComment(txt, poll) {
        var _a;
        const commentToAdd = {
            txt,
            createdAt: Date.now(),
            author: {},
        };
        let author = this.userService.loggedUserValue;
        if (!author) {
            let guestData = this.userService.guestDataValue;
            author = {
                _id: 'guest',
                name: 'Guest',
                country: (guestData === null || guestData === void 0 ? void 0 : guestData.country) || 'Unknown',
                flag: guestData === null || guestData === void 0 ? void 0 : guestData.flag.svg,
                logoColor: ((_a = this.userService.loggedUserValue) === null || _a === void 0 ? void 0 : _a.logoColor) ||
                    this.utilService.getRandomLightColor(),
            };
        }
        commentToAdd.author = author;
        poll.comments = [commentToAdd, ...poll.comments];
        return this.update(poll._id, poll);
    }
    create(poll) {
        return this.http.post(_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].pollURL, poll);
    }
    update(pollId, poll) {
        return this.http.put(`${_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].pollURL}/${pollId}`, poll, {
            withCredentials: true,
        });
    }
    remove(pollId) {
        return this.http.delete(`${_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].pollURL}/${pollId}`, {
            withCredentials: true,
        });
    }
}
PollService.ɵfac = function PollService_Factory(t) { return new (t || PollService)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_user_service__WEBPACK_IMPORTED_MODULE_5__["UserService"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_util_service__WEBPACK_IMPORTED_MODULE_6__["UtilService"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_socket_service__WEBPACK_IMPORTED_MODULE_8__["SocketService"])); };
PollService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({ token: PollService, factory: PollService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _cmps_app_header_app_header_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./cmps/app-header/app-header.component */ "uOz6");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");





function AppComponent_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "div", 3);
} }
function AppComponent_router_outlet_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "router-outlet");
} }
class AppComponent {
    constructor(router) {
        this.router = router;
        this.title = 'uvote';
        this.loading = false;
    }
    ngOnInit() {
        this.router.events.subscribe((event) => {
            switch (true) {
                case event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_0__["NavigationStart"]: {
                    this.loading = true;
                    break;
                }
                case event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_0__["NavigationEnd"]:
                case event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_0__["NavigationCancel"]:
                case event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_0__["NavigationError"]: {
                    this.loading = false;
                    break;
                }
                default: {
                    break;
                }
            }
        });
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_0__["Router"])); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 4, vars: 2, consts: [[1, "app"], ["class", "loader", 4, "ngIf"], [4, "ngIf"], [1, "loader"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "app-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, AppComponent_div_2_Template, 1, 0, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, AppComponent_router_outlet_3_Template, 1, 0, "router-outlet", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.loading);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.loading);
    } }, directives: [_cmps_app_header_app_header_component__WEBPACK_IMPORTED_MODULE_2__["AppHeaderComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterOutlet"]], styles: [".loader[_ngcontent-%COMP%] {\n  background-image: url('wedges-loader.svg');\n  background-size: cover;\n  background-repeat: no-repeat;\n  position: absolute;\n  left: 50%;\n  top: 50%;\n  transform: translate(-50%, -50%);\n  width: 300px;\n  height: 300px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcYXBwLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksMENBQUE7RUFDQSxzQkFBQTtFQUNBLDRCQUFBO0VBQ0Esa0JBQUE7RUFDQSxTQUFBO0VBQ0EsUUFBQTtFQUNBLGdDQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7QUFDSiIsImZpbGUiOiJhcHAuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubG9hZGVyIHtcclxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnLi4vYXNzZXRzL2ltZ3Mvd2VkZ2VzLWxvYWRlci5zdmcnKTtcclxuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgbGVmdDogNTAlO1xyXG4gICAgdG9wOiA1MCU7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcclxuICAgIHdpZHRoOiAzMDBweDtcclxuICAgIGhlaWdodDogMzAwcHg7XHJcbn0iXX0= */"] });


/***/ }),

/***/ "TcEr":
/*!******************************************************!*\
  !*** ./src/app/pages/poll-app/poll-app.component.ts ***!
  \******************************************************/
/*! exports provided: PollAppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PollAppComponent", function() { return PollAppComponent; });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_services_poll_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/poll.service */ "Sh49");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _cmps_poll_list_poll_list_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../cmps/poll-list/poll-list.component */ "kMIx");








function PollAppComponent_poll_list_1_Template(rf, ctx) { if (rf & 1) {
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "poll-list", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("onPageChange", function PollAppComponent_poll_list_1_Template_poll_list_onPageChange_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r2); const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r1.onPageChange($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](1, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("polls", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](1, 3, ctx_r0.polls$))("totalItems", ctx_r0.totalItems)("currPage", ctx_r0.pageNumber);
} }
class PollAppComponent {
    constructor(pollService, titleService, route) {
        this.pollService = pollService;
        this.titleService = titleService;
        this.route = route;
        this.destroy$ = new rxjs__WEBPACK_IMPORTED_MODULE_0__["Subject"]();
    }
    ngOnInit() {
        this.route.queryParams
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["takeUntil"])(this.destroy$))
            .subscribe((params) => {
            this.pageNumber = +params.page || 1;
        });
        this.pollService.query(this.pageNumber);
        this.getPolls();
        this.pollService.totalPollsCount$
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["takeUntil"])(this.destroy$))
            .subscribe((total) => (this.totalItems = total));
        this.titleService.setTitle('Discover Polls | Uvote');
    }
    onPageChange({ ev, sortBy }) {
        this.pageNumber = ev;
        this.pollService.query(this.pageNumber, sortBy);
    }
    getPolls() {
        this.polls$ = this.pollService.polls$;
    }
    ngOnDestroy() {
        this.destroy$.next(true);
        this.destroy$.unsubscribe();
    }
}
PollAppComponent.ɵfac = function PollAppComponent_Factory(t) { return new (t || PollAppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_app_services_poll_service__WEBPACK_IMPORTED_MODULE_3__["PollService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__["Title"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"])); };
PollAppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: PollAppComponent, selectors: [["poll-app"]], decls: 3, vars: 3, consts: [[1, "poll-app"], ["listTitle", "Discover Community Polls", 3, "polls", "totalItems", "currPage", "onPageChange", 4, "ngIf"], ["listTitle", "Discover Community Polls", 3, "polls", "totalItems", "currPage", "onPageChange"]], template: function PollAppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, PollAppComponent_poll_list_1_Template, 2, 5, "poll-list", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](2, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](2, 1, ctx.polls$).length);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], _cmps_poll_list_poll_list_component__WEBPACK_IMPORTED_MODULE_7__["PollListComponent"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_6__["AsyncPipe"]], styles: ["/* Breakpoint mixins */\n.poll-app {\n  padding-top: 15px;\n}\n.poll-app .pagination {\n  margin-top: 1rem;\n}\n.poll-app .pagination .ngx-pagination {\n  border-radius: 3px;\n  box-shadow: 0 0.5em 1em 0.5em rgba(10, 10, 10, 0.08), 0 0px 0 1px rgba(10, 10, 10, 0.03);\n  padding: 20px !important;\n  background-color: #fff;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFxhc3NldHNcXHN0eWxlc1xcc2V0dXBcXF9taXhpbnMuc2NzcyIsIi4uXFwuLlxcLi5cXC4uXFxwb2xsLWFwcC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxzQkFBQTtBQ0lBO0VBQ0UsaUJBQUE7QUFGRjtBQUlFO0VBQ0UsZ0JBQUE7QUFGSjtBQUdJO0VBQ0Usa0JBQUE7RUFDQSx3RkFBQTtFQUNBLHdCQUFBO0VBQ0Esc0JBQUE7QUFETiIsImZpbGUiOiJwb2xsLWFwcC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIEJyZWFrcG9pbnQgbWl4aW5zICovXHJcblxyXG5AbWl4aW4gZm9yLW1vYmlsZS1sYXlvdXQge1xyXG4gICAgQG1lZGlhIChtYXgtd2lkdGg6ICRtb2JpbGUtYnJlYWtwb2ludCkge1xyXG4gICAgICAgIEBjb250ZW50O1xyXG4gICAgfVxyXG59XHJcblxyXG5AbWl4aW4gZm9yLW5hcnJvdy1sYXlvdXQge1xyXG4gICAgQG1lZGlhIChtaW4td2lkdGg6ICRtb2JpbGUtYnJlYWtwb2ludCkge1xyXG4gICAgICAgIEBjb250ZW50O1xyXG4gICAgfVxyXG59XHJcblxyXG5AbWl4aW4gZm9yLW5vcm1hbC1sYXlvdXQge1xyXG4gICAgQG1lZGlhIChtaW4td2lkdGg6ICRuYXJyb3ctYnJlYWtwb2ludCkge1xyXG4gICAgICAgIEBjb250ZW50O1xyXG4gICAgfVxyXG59XHJcblxyXG5AbWl4aW4gZm9yLXdpZGUtbGF5b3V0IHtcclxuICAgIEBtZWRpYSAobWluLXdpZHRoOiAkbm9ybWFsLWJyZWFrcG9pbnQpIHtcclxuICAgICAgICBAY29udGVudDtcclxuICAgIH1cclxufVxyXG5cclxuQG1peGluIGxvZ2luLXNpZ251cC1jb250YWluZXIge1xyXG4gICAgd2lkdGg6IDYwMHB4O1xyXG4gICAgcGFkZGluZzogMzBweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICRiZy1jb2xvcjtcclxuICAgIGhlaWdodDogNDUwcHg7XHJcbiAgICBib3gtc2hhZG93OiAwIDAuNWVtIDFlbSAwLjVlbSByZ2JhKDEwLCAxMCwgMTAsIDAuMSksIDAgMHB4IDAgMXB4IHJnYmEoMTAsIDEwLCAxMCwgMC4wMik7XHJcbiAgICBib3JkZXItcmFkaXVzOiAzcHg7XHJcbiAgICBoMyB7XHJcbiAgICAgICAgZm9udC1zaXplOiAyLjJyZW07XHJcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgICB9XHJcbiAgICBsYWJlbCB7XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogNHB4O1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xyXG4gICAgICAgIGZvbnQtZmFtaWx5OiBRdWlja3NhbmQsIHNhbnMtc2VyaWY7XHJcbiAgICB9XHJcbiAgICBpbnB1dCB7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogOHB4O1xyXG4gICAgfVxyXG4gICAgLnAtaW5wdXR0ZXh0OmVuYWJsZWQ6Zm9jdXMge1xyXG4gICAgICAgIGJveC1zaGFkb3c6IG5vbmU7XHJcbiAgICB9XHJcbiAgICAucGFzc3dvcmQtY29udGFpbmVyIHtcclxuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMjBweDtcclxuXHJcbiAgICAgICAgc3BhbjpmaXJzdC1vZi10eXBlIHtcclxuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAudG9nZ2xlLXBhc3N3b3JkIHtcclxuICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgICB0b3A6IDlweDtcclxuICAgICAgICAgICAgcmlnaHQ6IDhweDtcclxuICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAudXNlci1pY29uIHtcclxuICAgICAgICBtYXJnaW4tdG9wOiAtMC44cmVtO1xyXG4gICAgfVxyXG4gICAgLmVtYWlsLWljb24sXHJcbiAgICAucGFzc3dvcmQtaWNvbiB7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogLTAuNnJlbTtcclxuICAgIH1cclxuICAgIC5zdWJtaXQtYnRuIHtcclxuICAgICAgICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcclxuICAgICAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogOHB4O1xyXG4gICAgfVxyXG4gICAgLmdvb2dsZS1idG4ge1xyXG4gICAgICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgcGFkZGluZzogNHB4IDIwcHg7XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogOHB4O1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDNweDtcclxuXHJcbiAgICAgICAgdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciwgMC4ycztcclxuXHJcbiAgICAgICAgJjpob3ZlciB7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IGRhcmtlbigkYmctY29sb3IsIDclKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgICY6OmJlZm9yZSB7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi4uLy4uL2ltZ3MvZ29vZ2xlLTQ4LnN2Z1wiKTtcclxuICAgICAgICAgICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuICAgICAgICAgICAgYmFja2dyb3VuZC1zaXplOiAyNXB4IDIwcHg7XHJcbiAgICAgICAgICAgIHdpZHRoOiAyNXB4O1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDIwcHg7XHJcbiAgICAgICAgICAgIHBhZGRpbmctcmlnaHQ6IDNweDtcclxuICAgICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgICAgICAgICBjb250ZW50OiBcIlwiO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIC5oYXMtZXJyb3Ige1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDNweDtcclxuICAgICAgICBjb2xvcjogcmVkO1xyXG4gICAgfVxyXG4gICAgLmxvZ2luLXAge1xyXG4gICAgICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcclxuXHJcbiAgICAgICAgYSB7XHJcbiAgICAgICAgICAgIGNvbG9yOiAjMzI3M2RjO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBAbWVkaWEgKG1heC13aWR0aDogNjIwcHgpIHtcclxuICAgICAgICB3aWR0aDogOTAlO1xyXG4gICAgfVxyXG59XHJcblxyXG5AbWl4aW4gd2F2ZS1yYWJiaXQge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgei1pbmRleDogMTtcclxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi4uLy4uLy4uL2Fzc2V0cy9pbWdzL3NpZ251cC1yYWJiaXQuc3ZnXCIpO1xyXG4gICAgd2lkdGg6IDI1MHB4O1xyXG4gICAgaGVpZ2h0OiAyNTBweDtcclxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcclxuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcclxuICAgIGZpbGw6IHRyYW5zcGFyZW50O1xyXG4gICAgbGVmdDogNTAlO1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XHJcbiAgICB0b3A6IC0xMiU7XHJcblxyXG4gICAgQG1lZGlhIChtYXgtd2lkdGg6IDU0MHB4KSB7XHJcbiAgICAgICAgd2lkdGg6IDE3MHB4O1xyXG4gICAgICAgIGhlaWdodDogMTIwcHg7XHJcbiAgICAgICAgdG9wOiAtNSU7XHJcbiAgICB9XHJcbn1cclxuIiwiQGltcG9ydCBcIi4uLy4uLy4uL2Fzc2V0cy9zdHlsZXMvc2V0dXAvdmFyaWFibGVzXCI7XHJcbkBpbXBvcnQgXCIuLi8uLi8uLi9hc3NldHMvc3R5bGVzL3NldHVwL2Z1bmN0aW9uc1wiO1xyXG5AaW1wb3J0IFwiLi4vLi4vLi4vYXNzZXRzL3N0eWxlcy9zZXR1cC9taXhpbnNcIjtcclxuXHJcbi5wb2xsLWFwcCB7XHJcbiAgcGFkZGluZy10b3A6IDE1cHg7XHJcblxyXG4gIC5wYWdpbmF0aW9uIHtcclxuICAgIG1hcmdpbi10b3A6IDFyZW07XHJcbiAgICAubmd4LXBhZ2luYXRpb24ge1xyXG4gICAgICBib3JkZXItcmFkaXVzOiAzcHg7XHJcbiAgICAgIGJveC1zaGFkb3c6IDAgMC41ZW0gMWVtIDAuNWVtIHJnYmEoMTAsIDEwLCAxMCwgMC4wOCksIDAgMHB4IDAgMXB4IHJnYmEoMTAsIDEwLCAxMCwgMC4wMyk7XHJcbiAgICAgIHBhZGRpbmc6IDIwcHggIWltcG9ydGFudDtcclxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcclxuICAgIH1cclxuICB9XHJcbn1cclxuIl19 */"], encapsulation: 2 });


/***/ }),

/***/ "V2ZH":
/*!***********************************************!*\
  !*** ./src/app/cmps/share/share.component.ts ***!
  \***********************************************/
/*! exports provided: ShareComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShareComponent", function() { return ShareComponent; });
/* harmony import */ var _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @fortawesome/free-brands-svg-icons */ "8tEE");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "wHSu");
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! primeng/api */ "7zfz");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var primeng_toast__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! primeng/toast */ "Gxio");
/* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ "6NWb");







const _c0 = function () { return { width: "90%" }; };
const _c1 = function (a0) { return { "460px": a0 }; };
class ShareComponent {
    constructor(messageService) {
        this.messageService = messageService;
        this.fbIcon = _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_0__["faFacebookF"];
        this.twitterIcon = _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_0__["faTwitter"];
        this.whatsAppIcon = _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_0__["faWhatsapp"];
        this.mailIcon = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__["faEnvelope"];
    }
    ngOnInit() {
        const link = window.location.href;
        const endIndex = link.indexOf('/results');
        if (endIndex > 0) {
            this.link = link.slice(0, endIndex);
        }
        else
            this.link = link;
    }
    getShareLink(type) {
        const link = this.link;
        switch (type) {
            case 'fb':
                return `https://www.facebook.com/sharer/sharer.php?u=${link}`;
            case 'twitter':
                return `https://twitter.com/intent/tweet?url=${link}`;
            case 'whatsapp':
                return `https://api.whatsapp.com/send?text=Check this poll on Uvote!%20-%20${link}`;
            case 'email':
                return `mailto:?subject=Check this poll on Uvote!&body=${link}`;
            default:
                return link;
        }
    }
    onLinkCopy() {
        navigator.clipboard
            .writeText(this.link)
            .then(() => this.showSuccess())
            .catch((e) => console.error(e));
    }
    showSuccess() {
        this.messageService.add({
            severity: 'success',
            summary: 'Link copied',
        });
    }
}
ShareComponent.ɵfac = function ShareComponent_Factory(t) { return new (t || ShareComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](primeng_api__WEBPACK_IMPORTED_MODULE_2__["MessageService"])); };
ShareComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: ShareComponent, selectors: [["share"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵProvidersFeature"]([primeng_api__WEBPACK_IMPORTED_MODULE_2__["MessageService"]])], decls: 17, vars: 12, consts: [[1, "share", "flex", "column", "align-center"], ["position", "top-center", "preventOpenDuplicates", "true", 3, "breakpoints"], [1, "heading"], [1, "social-links", "flex"], [3, "href"], [1, "fb-icon", 3, "icon"], [1, "twitter-icon", 3, "icon"], [1, "whatsapp-icon", 3, "icon"], [1, "mail-icon", 3, "icon"], [1, "copy-btn", "regular-btn", "flex", "align-center", 3, "click"], [1, "pi", "pi-link"]], template: function ShareComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "section", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1, "p-toast", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "p", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3, "Share this poll");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](6, "fa-icon", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](8, "fa-icon", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](10, "fa-icon", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](11, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](12, "fa-icon", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](13, "p", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function ShareComponent_Template_p_click_13_listener() { return ctx.onLinkCopy(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](14, "i", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](15, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](16, "Copy Link");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("breakpoints", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction1"](10, _c1, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction0"](9, _c0)));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("href", ctx.getShareLink("fb"), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("icon", ctx.fbIcon);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("href", ctx.getShareLink("twitter"), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("icon", ctx.twitterIcon);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("href", ctx.getShareLink("whatsapp"), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("icon", ctx.whatsAppIcon);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("href", ctx.getShareLink("email"), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("icon", ctx.mailIcon);
    } }, directives: [primeng_toast__WEBPACK_IMPORTED_MODULE_4__["Toast"], _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_5__["FaIconComponent"]], styles: [".share[_ngcontent-%COMP%] {\n  margin: 25px auto 20px auto;\n  width: 550px;\n  box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;\n  padding: 20px 0;\n}\n.share[_ngcontent-%COMP%]   .heading[_ngcontent-%COMP%] {\n  font-size: 2rem;\n  margin-bottom: 8px;\n}\n.share[_ngcontent-%COMP%]   .copy-btn[_ngcontent-%COMP%] {\n  padding: 8px 20px;\n  background-color: #1a8bff;\n  color: #fff;\n  cursor: pointer;\n  font-size: 1.2rem;\n  transition: background-color 0.2s;\n}\n.share[_ngcontent-%COMP%]   .copy-btn[_ngcontent-%COMP%]:hover {\n  background-color: #3398ff;\n}\n.share[_ngcontent-%COMP%]   .copy-btn[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  margin-left: 5px;\n}\n.share[_ngcontent-%COMP%]   .social-links[_ngcontent-%COMP%] {\n  margin-bottom: 10px;\n}\n.share[_ngcontent-%COMP%]   .social-links[_ngcontent-%COMP%]   fa-icon[_ngcontent-%COMP%] {\n  border-radius: 50%;\n  width: 45px;\n  height: 45px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  color: #fff;\n  font-size: 1.5rem;\n  margin-left: 5px;\n}\n.share[_ngcontent-%COMP%]   .social-links[_ngcontent-%COMP%]   fa-icon.fb-icon[_ngcontent-%COMP%] {\n  background-color: #4267b2;\n}\n.share[_ngcontent-%COMP%]   .social-links[_ngcontent-%COMP%]   fa-icon.twitter-icon[_ngcontent-%COMP%] {\n  background-color: #1da1f2;\n}\n.share[_ngcontent-%COMP%]   .social-links[_ngcontent-%COMP%]   fa-icon.whatsapp-icon[_ngcontent-%COMP%] {\n  background-color: #25d366;\n}\n.share[_ngcontent-%COMP%]   .social-links[_ngcontent-%COMP%]   fa-icon.mail-icon[_ngcontent-%COMP%] {\n  background-color: #333;\n}\n@media (max-width: 580px) {\n  .share[_ngcontent-%COMP%] {\n    width: 90%;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxzaGFyZS5jb21wb25lbnQuc2NzcyIsIi4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFxhc3NldHNcXHN0eWxlc1xcc2V0dXBcXF92YXJpYWJsZXMuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQTtFQUNJLDJCQUFBO0VBQ0EsWUFBQTtFQUNBLDJDQUFBO0VBRUEsZUFBQTtBQUZKO0FBSUk7RUFDSSxlQUFBO0VBQ0Esa0JBQUE7QUFGUjtBQUlJO0VBQ0ksaUJBQUE7RUFDQSx5QkFBQTtFQUNBLFdDWkE7RURhQSxlQUFBO0VBQ0EsaUJBQUE7RUFFQSxpQ0FBQTtBQUhSO0FBSVE7RUFDSSx5QkFBQTtBQUZaO0FBS1E7RUFDSSxnQkFBQTtBQUhaO0FBTUk7RUFDSSxtQkFBQTtBQUpSO0FBS1E7RUFDSSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSxXQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQkFBQTtBQUhaO0FBSVk7RUFDSSx5QkFBQTtBQUZoQjtBQUlZO0VBQ0kseUJBQUE7QUFGaEI7QUFJWTtFQUNJLHlCQUFBO0FBRmhCO0FBSVk7RUFDSSxzQkFBQTtBQUZoQjtBQU9JO0VBdERKO0lBdURRLFVBQUE7RUFKTjtBQUNGIiwiZmlsZSI6InNoYXJlLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCBcIi4uLy4uLy4uL2Fzc2V0cy9zdHlsZXMvc2V0dXAvdmFyaWFibGVzXCI7XHJcbkBpbXBvcnQgXCIuLi8uLi8uLi9hc3NldHMvc3R5bGVzL3NldHVwL2Z1bmN0aW9uc1wiO1xyXG4uc2hhcmUge1xyXG4gICAgbWFyZ2luOiAyNXB4IGF1dG8gMjBweCBhdXRvO1xyXG4gICAgd2lkdGg6IDU1MHB4O1xyXG4gICAgYm94LXNoYWRvdzogcmdiYSgwLCAwLCAwLCAwLjE2KSAwcHggMXB4IDRweDtcclxuXHJcbiAgICBwYWRkaW5nOiAyMHB4IDA7XHJcblxyXG4gICAgLmhlYWRpbmcge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMnJlbTtcclxuICAgICAgICBtYXJnaW4tYm90dG9tOiA4cHg7XHJcbiAgICB9XHJcbiAgICAuY29weS1idG4ge1xyXG4gICAgICAgIHBhZGRpbmc6IDhweCAyMHB4O1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IGxpZ2h0ZW4oJHByaW1hcnktY29sb3IsIDUlKTtcclxuICAgICAgICBjb2xvcjogJHdoaXRlO1xyXG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgICBmb250LXNpemU6IDEuMnJlbTtcclxuXHJcbiAgICAgICAgdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAwLjJzO1xyXG4gICAgICAgICY6aG92ZXIge1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBsaWdodGVuKCRwcmltYXJ5LWNvbG9yLCAxMCUpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgc3BhbiB7XHJcbiAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiA1cHg7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgLnNvY2lhbC1saW5rcyB7XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxuICAgICAgICBmYS1pY29uIHtcclxuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgICAgICAgICB3aWR0aDogNDVweDtcclxuICAgICAgICAgICAgaGVpZ2h0OiA0NXB4O1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICAgICAgY29sb3I6ICNmZmY7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMS41cmVtO1xyXG4gICAgICAgICAgICBtYXJnaW4tbGVmdDogNXB4O1xyXG4gICAgICAgICAgICAmLmZiLWljb24ge1xyXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzQyNjdiMjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAmLnR3aXR0ZXItaWNvbiB7XHJcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMWRhMWYyO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICYud2hhdHNhcHAtaWNvbiB7XHJcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjVkMzY2O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICYubWFpbC1pY29uIHtcclxuICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICMzMzM7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgQG1lZGlhIChtYXgtd2lkdGg6IDU4MHB4KSB7XHJcbiAgICAgICAgd2lkdGg6IDkwJTtcclxuICAgIH1cclxufVxyXG4iLCIvLyBDb2xvcnNcclxuJHByaW1hcnktY29sb3I6ICMwMDdlZmY7XHJcbiRzZWNvbmRhcnktY29sb3I6ICM0ZmFhZjg7XHJcbiRiZy1jb2xvcjogI2ZhZmFmYTtcclxuJHdoaXRlOiAjZmZmO1xyXG4kbGlnaHQtY29sb3I6ICM5OTliYWM7XHJcbiRkYXJrLWJsdWU6ICMwNTIwNGE7XHJcbiR0eHQ6ICMzMzM7XHJcbiRkYXJrLXR4dDogIzBiMDkwYTtcclxuJGN0YS1jb2xvcjogIzNiZDk3NTtcclxuJGVyci1jb2xvcjogI2ZmMzMzMztcclxuLy8gQnJlYWtwb2ludHNcclxuJG1vYmlsZS1icmVha3BvaW50OiA0ODBweDtcclxuJG5hcnJvdy1icmVha3BvaW50OiA3NjhweDtcclxuJG5vcm1hbC1icmVha3BvaW50OiAxNDAwcHg7XHJcbiJdfQ== */"], changeDetection: 0 });


/***/ }),

/***/ "VgvF":
/*!***********************************************************!*\
  !*** ./src/app/cmps/voted-modal/voted-modal.component.ts ***!
  \***********************************************************/
/*! exports provided: VotedModalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VotedModalComponent", function() { return VotedModalComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");




class VotedModalComponent {
    constructor() {
        this.onModalClose = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    ngOnInit() { }
    onModalClick(ev) {
        ev.stopPropagation();
    }
    get resultsLink() {
        return `/poll/${this.poll._id}/results`;
    }
    onCloseModal() {
        this.onModalClose.emit(false);
    }
}
VotedModalComponent.ɵfac = function VotedModalComponent_Factory(t) { return new (t || VotedModalComponent)(); };
VotedModalComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: VotedModalComponent, selectors: [["voted-modal"]], inputs: { poll: "poll", isVoteModalOpen: "isVoteModalOpen" }, outputs: { onModalClose: "onModalClose" }, decls: 12, vars: 2, consts: [[1, "voted-modal", "flex", "column", "align-center", "justify-center", 3, "ngClass", "click"], ["src", "../../../assets/imgs/checked.svg", "alt", ""], [1, "actions", "flex"], [1, "buttons", "flex"], [1, "regular-btn", 3, "click"], [1, "btn-container", "flex"], [1, "results-btn", 3, "routerLink"], [1, "pi", "pi-chart-bar"]], template: function VotedModalComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function VotedModalComponent_Template_div_click_0_listener($event) { return ctx.onModalClick($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Thanks for voting!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function VotedModalComponent_Template_button_click_6_listener() { return ctx.onCloseModal(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Back to poll");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "i", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, " Poll results ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx.isVoteModalOpen ? "" : "hide");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", ctx.resultsLink);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgClass"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkWithHref"]], styles: [".voted-modal[_ngcontent-%COMP%] {\n  height: 300px;\n  width: 700px;\n  background-color: #fafafa;\n  box-shadow: 0 0.5em 1em 0.5em rgba(10, 10, 10, 0.1), 0 0px 0 1px rgba(10, 10, 10, 0.02);\n  border-radius: 3px;\n  position: absolute;\n  top: 40%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  z-index: 10;\n  transition: all 0.3s;\n}\n.voted-modal.hide[_ngcontent-%COMP%] {\n  opacity: 0;\n  visibility: hidden;\n}\n.voted-modal[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  text-align: center;\n  font-family: Quicksand-Bold, sans-serif;\n  font-weight: 400;\n  font-size: 2.2rem;\n  margin: 2px 0 8px 0;\n}\n.voted-modal[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  height: 150px;\n  margin-bottom: 8px;\n}\n.voted-modal[_ngcontent-%COMP%]   .actions[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 0 20px;\n}\n.voted-modal[_ngcontent-%COMP%]   .actions[_ngcontent-%COMP%]   .btn-container[_ngcontent-%COMP%] {\n  flex-basis: 65%;\n  justify-content: flex-end;\n}\n.voted-modal[_ngcontent-%COMP%]   .actions[_ngcontent-%COMP%]   .btn-container[_ngcontent-%COMP%]   .results-btn[_ngcontent-%COMP%] {\n  padding: 8px 15px;\n  border-radius: 3px;\n  background-color: #29d267;\n  color: #fff;\n  font-family: Quicksand-SemiBold, sans-serif;\n  transition: background-color 0.2s;\n}\n.voted-modal[_ngcontent-%COMP%]   .actions[_ngcontent-%COMP%]   .btn-container[_ngcontent-%COMP%]   .results-btn[_ngcontent-%COMP%]:hover {\n  background-color: #44db7b;\n}\n.voted-modal[_ngcontent-%COMP%]   .actions[_ngcontent-%COMP%]   .buttons[_ngcontent-%COMP%] {\n  flex-grow: 2;\n  justify-content: flex-start;\n}\n@media (max-width: 730px) {\n  .voted-modal[_ngcontent-%COMP%] {\n    width: 90%;\n    height: 260px;\n    justify-content: space-around;\n  }\n  .voted-modal[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    height: 100px;\n  }\n  .voted-modal[_ngcontent-%COMP%]   .actions[_ngcontent-%COMP%] {\n    margin-bottom: 8px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFx2b3RlZC1tb2RhbC5jb21wb25lbnQuc2NzcyIsIi4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFxhc3NldHNcXHN0eWxlc1xcc2V0dXBcXF92YXJpYWJsZXMuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFHQTtFQUNJLGFBQUE7RUFDQSxZQUFBO0VBQ0EseUJDSE87RURJUCx1RkFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxRQUFBO0VBQ0EsU0FBQTtFQUNBLGdDQUFBO0VBQ0EsV0FBQTtFQUVBLG9CQUFBO0FBSEo7QUFLSTtFQUNJLFVBQUE7RUFDQSxrQkFBQTtBQUhSO0FBTUk7RUFDSSxrQkFBQTtFQUNBLHVDQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLG1CQUFBO0FBSlI7QUFPSTtFQUNJLGFBQUE7RUFDQSxrQkFBQTtBQUxSO0FBT0k7RUFDSSxXQUFBO0VBQ0EsZUFBQTtBQUxSO0FBTVE7RUFDSSxlQUFBO0VBQ0EseUJBQUE7QUFKWjtBQUtZO0VBQ0ksaUJBQUE7RUFDQSxrQkFBQTtFQUNBLHlCQUFBO0VBQ0EsV0N4Q1I7RUR5Q1EsMkNBQUE7RUFFQSxpQ0FBQTtBQUpoQjtBQUtnQjtFQUNJLHlCQUFBO0FBSHBCO0FBT1E7RUFDSSxZQUFBO0VBQ0EsMkJBQUE7QUFMWjtBQVNJO0VBeERKO0lBeURRLFVBQUE7SUFDQSxhQUFBO0lBQ0EsNkJBQUE7RUFOTjtFQVFNO0lBQ0ksYUFBQTtFQU5WO0VBU007SUFDSSxrQkFBQTtFQVBWO0FBQ0YiLCJmaWxlIjoidm90ZWQtbW9kYWwuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IFwiLi4vLi4vLi4vYXNzZXRzL3N0eWxlcy9zZXR1cC92YXJpYWJsZXNcIjtcclxuQGltcG9ydCBcIi4uLy4uLy4uL2Fzc2V0cy9zdHlsZXMvc2V0dXAvZnVuY3Rpb25zXCI7XHJcblxyXG4udm90ZWQtbW9kYWwge1xyXG4gICAgaGVpZ2h0OiAzMDBweDtcclxuICAgIHdpZHRoOiA3MDBweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICRiZy1jb2xvcjtcclxuICAgIGJveC1zaGFkb3c6IDAgMC41ZW0gMWVtIDAuNWVtIHJnYmEoMTAsIDEwLCAxMCwgMC4xKSwgMCAwcHggMCAxcHggcmdiYSgxMCwgMTAsIDEwLCAwLjAyKTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDNweDtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogNDAlO1xyXG4gICAgbGVmdDogNTAlO1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XHJcbiAgICB6LWluZGV4OiAxMDtcclxuXHJcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC4zcztcclxuXHJcbiAgICAmLmhpZGUge1xyXG4gICAgICAgIG9wYWNpdHk6IDA7XHJcbiAgICAgICAgdmlzaWJpbGl0eTogaGlkZGVuO1xyXG4gICAgfVxyXG5cclxuICAgIGgzIHtcclxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgZm9udC1mYW1pbHk6IFF1aWNrc2FuZC1Cb2xkLCBzYW5zLXNlcmlmO1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgICAgICAgZm9udC1zaXplOiAyLjJyZW07XHJcbiAgICAgICAgbWFyZ2luOiAycHggMCA4cHggMDtcclxuICAgIH1cclxuXHJcbiAgICBpbWcge1xyXG4gICAgICAgIGhlaWdodDogMTUwcHg7XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogOHB4O1xyXG4gICAgfVxyXG4gICAgLmFjdGlvbnMge1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgIHBhZGRpbmc6IDAgMjBweDtcclxuICAgICAgICAuYnRuLWNvbnRhaW5lciB7XHJcbiAgICAgICAgICAgIGZsZXgtYmFzaXM6IDY1JTtcclxuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcclxuICAgICAgICAgICAgLnJlc3VsdHMtYnRuIHtcclxuICAgICAgICAgICAgICAgIHBhZGRpbmc6IDhweCAxNXB4O1xyXG4gICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogM3B4O1xyXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogZGFya2VuKCRjdGEtY29sb3IsIDUlKTtcclxuICAgICAgICAgICAgICAgIGNvbG9yOiAkd2hpdGU7XHJcbiAgICAgICAgICAgICAgICBmb250LWZhbWlseTogUXVpY2tzYW5kLVNlbWlCb2xkLCBzYW5zLXNlcmlmO1xyXG5cclxuICAgICAgICAgICAgICAgIHRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgMC4ycztcclxuICAgICAgICAgICAgICAgICY6aG92ZXIge1xyXG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IGxpZ2h0ZW4oJGN0YS1jb2xvciwgMiUpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5idXR0b25zIHtcclxuICAgICAgICAgICAgZmxleC1ncm93OiAyO1xyXG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIEBtZWRpYSAobWF4LXdpZHRoOiA3MzBweCkge1xyXG4gICAgICAgIHdpZHRoOiA5MCU7XHJcbiAgICAgICAgaGVpZ2h0OiAyNjBweDtcclxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcclxuXHJcbiAgICAgICAgaW1nIHtcclxuICAgICAgICAgICAgaGVpZ2h0OiAxMDBweDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC5hY3Rpb25zIHtcclxuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogOHB4O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG4iLCIvLyBDb2xvcnNcclxuJHByaW1hcnktY29sb3I6ICMwMDdlZmY7XHJcbiRzZWNvbmRhcnktY29sb3I6ICM0ZmFhZjg7XHJcbiRiZy1jb2xvcjogI2ZhZmFmYTtcclxuJHdoaXRlOiAjZmZmO1xyXG4kbGlnaHQtY29sb3I6ICM5OTliYWM7XHJcbiRkYXJrLWJsdWU6ICMwNTIwNGE7XHJcbiR0eHQ6ICMzMzM7XHJcbiRkYXJrLXR4dDogIzBiMDkwYTtcclxuJGN0YS1jb2xvcjogIzNiZDk3NTtcclxuJGVyci1jb2xvcjogI2ZmMzMzMztcclxuLy8gQnJlYWtwb2ludHNcclxuJG1vYmlsZS1icmVha3BvaW50OiA0ODBweDtcclxuJG5hcnJvdy1icmVha3BvaW50OiA3NjhweDtcclxuJG5vcm1hbC1icmVha3BvaW50OiAxNDAwcHg7XHJcbiJdfQ== */"], changeDetection: 0 });


/***/ }),

/***/ "WUJs":
/*!*************************************************************!*\
  !*** ./src/app/services/resolvers/poll-resolver.service.ts ***!
  \*************************************************************/
/*! exports provided: PollResolverService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PollResolverService", function() { return PollResolverService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _poll_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../poll.service */ "Sh49");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");



class PollResolverService {
    constructor(pollService, router) {
        this.pollService = pollService;
        this.router = router;
    }
    resolve(route) {
        const { id } = route.params;
        if (!id) {
            this.router.navigateByUrl('/404');
            return null;
        }
        return this.pollService.getById(id);
    }
}
PollResolverService.ɵfac = function PollResolverService_Factory(t) { return new (t || PollResolverService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_poll_service__WEBPACK_IMPORTED_MODULE_1__["PollService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"])); };
PollResolverService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: PollResolverService, factory: PollResolverService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser/animations */ "R1ws");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app-routing.module */ "vY5A");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var primeng_radiobutton__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! primeng/radiobutton */ "LuMj");
/* harmony import */ var primeng_inputswitch__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! primeng/inputswitch */ "rLzU");
/* harmony import */ var primeng_inputtext__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! primeng/inputtext */ "7kUa");
/* harmony import */ var primeng_checkbox__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! primeng/checkbox */ "Ji6n");
/* harmony import */ var primeng_calendar__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! primeng/calendar */ "eO1q");
/* harmony import */ var primeng_dropdown__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! primeng/dropdown */ "arFO");
/* harmony import */ var primeng_toast__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! primeng/toast */ "Gxio");
/* harmony import */ var primeng_chart__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! primeng/chart */ "I5S5");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var angularx_social_login__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! angularx-social-login */ "ahC7");
/* harmony import */ var primeng_confirmdialog__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! primeng/confirmdialog */ "Nf9I");
/* harmony import */ var primeng_dialog__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! primeng/dialog */ "/RsI");
/* harmony import */ var ngx_pagination__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ngx-pagination */ "xkgV");
/* harmony import */ var _pages_homepage_homepage_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./pages/homepage/homepage.component */ "ojyh");
/* harmony import */ var _pages_poll_app_poll_app_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./pages/poll-app/poll-app.component */ "TcEr");
/* harmony import */ var _pages_poll_details_poll_details_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./pages/poll-details/poll-details.component */ "Orvl");
/* harmony import */ var _cmps_poll_preview_poll_preview_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./cmps/poll-preview/poll-preview.component */ "s2v6");
/* harmony import */ var _cmps_app_header_app_header_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./cmps/app-header/app-header.component */ "uOz6");
/* harmony import */ var _pages_poll_edit_poll_edit_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./pages/poll-edit/poll-edit.component */ "29kc");
/* harmony import */ var _cmps_popover_popover_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./cmps/popover/popover.component */ "fMdZ");
/* harmony import */ var _pages_login_login_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./pages/login/login.component */ "D8EZ");
/* harmony import */ var _pages_signup_signup_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./pages/signup/signup.component */ "o97b");
/* harmony import */ var _pages_error_error_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./pages/error/error.component */ "y+ua");
/* harmony import */ var _cmps_confirm_modal_confirm_modal_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./cmps/confirm-modal/confirm-modal.component */ "BnSU");
/* harmony import */ var _cmps_poll_comments_poll_comments_component__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./cmps/poll-comments/poll-comments.component */ "AQiE");
/* harmony import */ var _pages_poll_results_poll_results_component__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./pages/poll-results/poll-results.component */ "wmkW");
/* harmony import */ var _cmps_voted_modal_voted_modal_component__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./cmps/voted-modal/voted-modal.component */ "VgvF");
/* harmony import */ var _cmps_share_share_component__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ./cmps/share/share.component */ "V2ZH");
/* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ "6NWb");
/* harmony import */ var _pages_user_profile_user_profile_component__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! ./pages/user-profile/user-profile.component */ "G9k0");
/* harmony import */ var _cmps_poll_list_poll_list_component__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! ./cmps/poll-list/poll-list.component */ "kMIx");
/* harmony import */ var _helpers_interceptors_add_header_interceptor__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! ./helpers/interceptors/add-header.interceptor */ "iiSs");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! @angular/core */ "fXoL");







































class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [
        {
            provide: 'SocialAuthServiceConfig',
            useValue: {
                autoLogin: false,
                providers: [
                    {
                        id: angularx_social_login__WEBPACK_IMPORTED_MODULE_15__["GoogleLoginProvider"].PROVIDER_ID,
                        provider: new angularx_social_login__WEBPACK_IMPORTED_MODULE_15__["GoogleLoginProvider"]('1055571878940-4ia31ot06g5svt6h6pvggfc8offps3cq.apps.googleusercontent.com'),
                    },
                ],
            },
        },
        { provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_13__["HTTP_INTERCEPTORS"], useClass: _helpers_interceptors_add_header_interceptor__WEBPACK_IMPORTED_MODULE_37__["AddHeaderInterceptor"], multi: true },
    ], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_1__["BrowserAnimationsModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
            primeng_radiobutton__WEBPACK_IMPORTED_MODULE_4__["RadioButtonModule"],
            primeng_calendar__WEBPACK_IMPORTED_MODULE_8__["CalendarModule"],
            primeng_checkbox__WEBPACK_IMPORTED_MODULE_7__["CheckboxModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_12__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_12__["ReactiveFormsModule"],
            primeng_inputswitch__WEBPACK_IMPORTED_MODULE_5__["InputSwitchModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_13__["HttpClientModule"],
            _angular_common__WEBPACK_IMPORTED_MODULE_14__["CommonModule"],
            angularx_social_login__WEBPACK_IMPORTED_MODULE_15__["SocialLoginModule"],
            primeng_inputtext__WEBPACK_IMPORTED_MODULE_6__["InputTextModule"],
            primeng_confirmdialog__WEBPACK_IMPORTED_MODULE_16__["ConfirmDialogModule"],
            primeng_dialog__WEBPACK_IMPORTED_MODULE_17__["DialogModule"],
            ngx_pagination__WEBPACK_IMPORTED_MODULE_18__["NgxPaginationModule"],
            primeng_dropdown__WEBPACK_IMPORTED_MODULE_9__["DropdownModule"],
            _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_34__["FontAwesomeModule"],
            primeng_toast__WEBPACK_IMPORTED_MODULE_10__["ToastModule"],
            primeng_chart__WEBPACK_IMPORTED_MODULE_11__["ChartModule"],
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
        _pages_homepage_homepage_component__WEBPACK_IMPORTED_MODULE_19__["HomepageComponent"],
        _pages_poll_app_poll_app_component__WEBPACK_IMPORTED_MODULE_20__["PollAppComponent"],
        _pages_poll_details_poll_details_component__WEBPACK_IMPORTED_MODULE_21__["PollDetailsComponent"],
        _cmps_poll_preview_poll_preview_component__WEBPACK_IMPORTED_MODULE_22__["PollPreviewComponent"],
        _cmps_app_header_app_header_component__WEBPACK_IMPORTED_MODULE_23__["AppHeaderComponent"],
        _pages_poll_edit_poll_edit_component__WEBPACK_IMPORTED_MODULE_24__["PollEditComponent"],
        _cmps_popover_popover_component__WEBPACK_IMPORTED_MODULE_25__["PopoverComponent"],
        _pages_login_login_component__WEBPACK_IMPORTED_MODULE_26__["LoginComponent"],
        _pages_signup_signup_component__WEBPACK_IMPORTED_MODULE_27__["SignupComponent"],
        _pages_error_error_component__WEBPACK_IMPORTED_MODULE_28__["ErrorComponent"],
        _cmps_confirm_modal_confirm_modal_component__WEBPACK_IMPORTED_MODULE_29__["ConfirmModalComponent"],
        _cmps_poll_comments_poll_comments_component__WEBPACK_IMPORTED_MODULE_30__["PollCommentsComponent"],
        _pages_poll_results_poll_results_component__WEBPACK_IMPORTED_MODULE_31__["PollResultsComponent"],
        _cmps_voted_modal_voted_modal_component__WEBPACK_IMPORTED_MODULE_32__["VotedModalComponent"],
        _cmps_share_share_component__WEBPACK_IMPORTED_MODULE_33__["ShareComponent"],
        _pages_user_profile_user_profile_component__WEBPACK_IMPORTED_MODULE_35__["UserProfileComponent"],
        _cmps_poll_list_poll_list_component__WEBPACK_IMPORTED_MODULE_36__["PollListComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_1__["BrowserAnimationsModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
        primeng_radiobutton__WEBPACK_IMPORTED_MODULE_4__["RadioButtonModule"],
        primeng_calendar__WEBPACK_IMPORTED_MODULE_8__["CalendarModule"],
        primeng_checkbox__WEBPACK_IMPORTED_MODULE_7__["CheckboxModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_12__["FormsModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_12__["ReactiveFormsModule"],
        primeng_inputswitch__WEBPACK_IMPORTED_MODULE_5__["InputSwitchModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_13__["HttpClientModule"],
        _angular_common__WEBPACK_IMPORTED_MODULE_14__["CommonModule"],
        angularx_social_login__WEBPACK_IMPORTED_MODULE_15__["SocialLoginModule"],
        primeng_inputtext__WEBPACK_IMPORTED_MODULE_6__["InputTextModule"],
        primeng_confirmdialog__WEBPACK_IMPORTED_MODULE_16__["ConfirmDialogModule"],
        primeng_dialog__WEBPACK_IMPORTED_MODULE_17__["DialogModule"],
        ngx_pagination__WEBPACK_IMPORTED_MODULE_18__["NgxPaginationModule"],
        primeng_dropdown__WEBPACK_IMPORTED_MODULE_9__["DropdownModule"],
        _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_34__["FontAwesomeModule"],
        primeng_toast__WEBPACK_IMPORTED_MODULE_10__["ToastModule"],
        primeng_chart__WEBPACK_IMPORTED_MODULE_11__["ChartModule"]] }); })();


/***/ }),

/***/ "fMdZ":
/*!***************************************************!*\
  !*** ./src/app/cmps/popover/popover.component.ts ***!
  \***************************************************/
/*! exports provided: PopoverComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PopoverComponent", function() { return PopoverComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");



function PopoverComponent_h4_1_Template(rf, ctx) { if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h4", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PopoverComponent_h4_1_Template_h4_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4); const txt_r1 = ctx.$implicit; const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r3.onActionClick(txt_r1); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "i");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const txt_r1 = ctx.$implicit;
    const idx_r2 = ctx.index;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](ctx_r0.actionsIcons[idx_r2]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", txt_r1, " ");
} }
class PopoverComponent {
    constructor() {
        this.actionType = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    ngOnInit() { }
    onActionClick(actionType) {
        this.actionType.emit(actionType);
    }
}
PopoverComponent.ɵfac = function PopoverComponent_Factory(t) { return new (t || PopoverComponent)(); };
PopoverComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PopoverComponent, selectors: [["popover"]], inputs: { actionsTexts: "actionsTexts", actionsIcons: "actionsIcons" }, outputs: { actionType: "actionType" }, decls: 2, vars: 1, consts: [[3, "click", 4, "ngFor", "ngForOf"], [3, "click"]], template: function PopoverComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "aside");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, PopoverComponent_h4_1_Template, 3, 4, "h4", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.actionsTexts);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgForOf"]], styles: ["aside[_ngcontent-%COMP%] {\n  font-family: Quicksand, sans-serif;\n  font-size: 1.2rem;\n  padding: 8px 0;\n  -webkit-user-select: none;\n          user-select: none;\n  background-color: white;\n  border-radius: 3px;\n}\naside[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  line-height: 1.5;\n  font-weight: 500;\n  padding: 0 40px;\n  transition: background-color 0.2s;\n}\naside[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  padding-right: 10px;\n}\naside[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%]:hover {\n  background-color: #e6e6e6;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxwb3BvdmVyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBO0VBQ0Usa0NBQUE7RUFDQSxpQkFBQTtFQUNBLGNBQUE7RUFDQSx5QkFBQTtVQUFBLGlCQUFBO0VBQ0EsdUJBQUE7RUFDQSxrQkFBQTtBQURGO0FBR0U7RUFDRSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGlDQUFBO0FBREo7QUFHSTtFQUNFLG1CQUFBO0FBRE47QUFJSTtFQUNFLHlCQUFBO0FBRk4iLCJmaWxlIjoicG9wb3Zlci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgXCIuLi8uLi8uLi9hc3NldHMvc3R5bGVzL3NldHVwL3ZhcmlhYmxlc1wiO1xyXG5cclxuYXNpZGUge1xyXG4gIGZvbnQtZmFtaWx5OiBRdWlja3NhbmQsIHNhbnMtc2VyaWY7XHJcbiAgZm9udC1zaXplOiAxLjJyZW07XHJcbiAgcGFkZGluZzogOHB4IDA7XHJcbiAgdXNlci1zZWxlY3Q6IG5vbmU7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogbGlnaHRlbigkYmctY29sb3IsIDEwJSk7XHJcbiAgYm9yZGVyLXJhZGl1czogM3B4O1xyXG5cclxuICBoNCB7XHJcbiAgICBsaW5lLWhlaWdodDogMS41O1xyXG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgIHBhZGRpbmc6IDAgNDBweDtcclxuICAgIHRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgMC4ycztcclxuXHJcbiAgICBpIHtcclxuICAgICAgcGFkZGluZy1yaWdodDogMTBweDtcclxuICAgIH1cclxuXHJcbiAgICAmOmhvdmVyIHtcclxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogZGFya2VuKCRiZy1jb2xvciwgOCUpO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iXX0= */"], changeDetection: 0 });


/***/ }),

/***/ "iiSs":
/*!****************************************************************!*\
  !*** ./src/app/helpers/interceptors/add-header.interceptor.ts ***!
  \****************************************************************/
/*! exports provided: AddHeaderInterceptor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddHeaderInterceptor", function() { return AddHeaderInterceptor; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

class AddHeaderInterceptor {
    constructor() { }
    intercept(req, next) {
        const clonedRequest = req.clone({ setHeaders: { 'allowed': 'Uvote' } });
        return next.handle(clonedRequest);
    }
}
AddHeaderInterceptor.ɵfac = function AddHeaderInterceptor_Factory(t) { return new (t || AddHeaderInterceptor)(); };
AddHeaderInterceptor.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: AddHeaderInterceptor, factory: AddHeaderInterceptor.ɵfac });


/***/ }),

/***/ "kMIx":
/*!*******************************************************!*\
  !*** ./src/app/cmps/poll-list/poll-list.component.ts ***!
  \*******************************************************/
/*! exports provided: PollListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PollListComponent", function() { return PollListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var primeng_dropdown__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! primeng/dropdown */ "arFO");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var ngx_pagination__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-pagination */ "xkgV");
/* harmony import */ var _poll_preview_poll_preview_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../poll-preview/poll-preview.component */ "s2v6");








const _c0 = function () { return { "width": "100%" }; };
function PollListComponent_div_0_poll_preview_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "poll-preview", 8);
} if (rf & 2) {
    const poll_r2 = ctx.$implicit;
    const i_r3 = ctx.index;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("active", i_r3 == ctx_r1.currentIndex);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](4, _c0))("poll", poll_r2);
} }
const _c1 = function (a0, a1, a2) { return { itemsPerPage: a0, currentPage: a1, totalItems: a2 }; };
function PollListComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p-dropdown", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function PollListComponent_div_0_Template_p_dropdown_ngModelChange_5_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5); const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r4.sortBy = $event; })("onChange", function PollListComponent_div_0_Template_p_dropdown_onChange_5_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5); const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r6.query(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, PollListComponent_div_0_poll_preview_6_Template, 1, 5, "poll-preview", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](7, "paginate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "pagination-controls", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("pageBoundsCorrection", function PollListComponent_div_0_Template_pagination_controls_pageBoundsCorrection_9_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5); const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r7.query($event); })("pageChange", function PollListComponent_div_0_Template_pagination_controls_pageChange_9_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5); const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r8.query($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.listTitle);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("options", ctx_r0.options)("ngModel", ctx_r0.sortBy);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](7, 5, ctx_r0.polls, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction3"](8, _c1, ctx_r0.paginatorSize, ctx_r0.currPage, ctx_r0.totalItems)))("ngForTrackBy", ctx_r0.trackByFunc);
} }
class PollListComponent {
    constructor(router, r) {
        this.router = router;
        this.r = r;
        this.paginatorSize = 5;
        this.currPage = 1;
        this.totalItems = 100;
        this.onPageChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.options = [{ name: 'Newest' }, { name: 'Popularity' }];
        this.sortBy = { name: 'Newest' };
    }
    ngOnInit() {
        this.r.queryParams.subscribe((params) => {
            var _a, _b;
            if (params.sort) {
                this.sortBy.name = ((_a = params === null || params === void 0 ? void 0 : params.sort) === null || _a === void 0 ? void 0 : _a.charAt(0).toUpperCase()) + ((_b = params === null || params === void 0 ? void 0 : params.sort) === null || _b === void 0 ? void 0 : _b.slice(1));
            }
        });
        this.query(this.currPage);
    }
    query(ev = this.currPage) {
        const sortBy = this.sortBy.name.toLowerCase();
        const params = { page: +ev, sort: sortBy };
        this.router.navigate([], { relativeTo: this.r, queryParams: params });
        this.onPageChange.emit({ ev, sortBy });
    }
    trackByFunc(i, poll) {
        return poll._id || i;
    }
}
PollListComponent.ɵfac = function PollListComponent_Factory(t) { return new (t || PollListComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"])); };
PollListComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PollListComponent, selectors: [["poll-list"]], inputs: { polls: "polls", listTitle: "listTitle", paginatorSize: "paginatorSize", currPage: "currPage", totalItems: "totalItems" }, outputs: { onPageChange: "onPageChange" }, decls: 1, vars: 1, consts: [["class", "poll-list flex column justify-center align-center", 4, "ngIf"], [1, "poll-list", "flex", "column", "justify-center", "align-center"], [1, "list-header", "flex", "column", "justify-center", "align-center"], [1, "sort-container"], ["placeholder", "Sort By", "optionLabel", "name", 3, "options", "ngModel", "ngModelChange", "onChange"], ["class", "preview-container", 3, "ngStyle", "active", "poll", 4, "ngFor", "ngForOf", "ngForTrackBy"], [1, "pagination"], ["previousLabel", "Prev", "nextLabel", "Next", "responsive", "true", 3, "pageBoundsCorrection", "pageChange"], [1, "preview-container", 3, "ngStyle", "poll"]], template: function PollListComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, PollListComponent_div_0_Template, 10, 12, "div", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.polls.length);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], primeng_dropdown__WEBPACK_IMPORTED_MODULE_3__["Dropdown"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgModel"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], ngx_pagination__WEBPACK_IMPORTED_MODULE_5__["PaginationControlsComponent"], _poll_preview_poll_preview_component__WEBPACK_IMPORTED_MODULE_6__["PollPreviewComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgStyle"]], pipes: [ngx_pagination__WEBPACK_IMPORTED_MODULE_5__["PaginatePipe"]], styles: [".poll-list {\n  width: 600px;\n  margin: 0 auto;\n}\n@media screen and (max-width: 660px) {\n  .poll-list {\n    width: 90%;\n  }\n}\n.poll-list .list-header {\n  margin-bottom: 0.9375rem;\n}\n.poll-list .list-header h3 {\n  font-family: Quicksand-SemiBold;\n  font-weight: 400;\n  font-size: 2rem;\n  letter-spacing: 0.8px;\n  line-height: 1.7;\n  padding-left: 2px;\n  margin-bottom: 5px;\n}\n@media screen and (max-width: 480px) {\n  .poll-list .list-header h3 {\n    font-size: 1.7rem;\n    text-align: center;\n  }\n}\n.poll-list .list-header .p-dropdown:not(.p-disabled).p-focus {\n  box-shadow: none !important;\n}\n.pagination {\n  margin-bottom: 1rem;\n}\n.pagination .ngx-pagination {\n  padding-left: 0 !important;\n  margin-bottom: 0 !important;\n  text-align: center;\n}\n.pagination .ngx-pagination .current {\n  background: #4faaf8;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxwb2xsLWxpc3QuY29tcG9uZW50LnNjc3MiLCIuLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFwuLlxcYXNzZXRzXFxzdHlsZXNcXHNldHVwXFxfdmFyaWFibGVzLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUE7RUFDSSxZQUFBO0VBQ0EsY0FBQTtBQURKO0FBRUk7RUFISjtJQUlRLFVBQUE7RUFDTjtBQUNGO0FBQUk7RUFDSSx3QkFBQTtBQUVSO0FBRFE7RUFDSSwrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLHFCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0FBR1o7QUFGWTtFQVJKO0lBU1EsaUJBQUE7SUFDQSxrQkFBQTtFQUtkO0FBQ0Y7QUFIUTtFQUNJLDJCQUFBO0FBS1o7QUFBQTtFQUNJLG1CQUFBO0FBR0o7QUFGSTtFQUNJLDBCQUFBO0VBQ0EsMkJBQUE7RUFDQSxrQkFBQTtBQUlSO0FBRlE7RUFDSSxtQkNuQ007QUR1Q2xCIiwiZmlsZSI6InBvbGwtbGlzdC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgXCIuLi8uLi8uLi9hc3NldHMvc3R5bGVzL3NldHVwL2Z1bmN0aW9uc1wiO1xyXG5AaW1wb3J0IFwiLi4vLi4vLi4vYXNzZXRzL3N0eWxlcy9zZXR1cC92YXJpYWJsZXNcIjtcclxuLnBvbGwtbGlzdCB7XHJcbiAgICB3aWR0aDogNjAwcHg7XHJcbiAgICBtYXJnaW46IDAgYXV0bztcclxuICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDY2MHB4KSB7XHJcbiAgICAgICAgd2lkdGg6IDkwJTtcclxuICAgIH1cclxuICAgIC5saXN0LWhlYWRlciB7XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogcmVtKDE1cHgpO1xyXG4gICAgICAgIGgzIHtcclxuICAgICAgICAgICAgZm9udC1mYW1pbHk6IFF1aWNrc2FuZC1TZW1pQm9sZDtcclxuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAycmVtO1xyXG4gICAgICAgICAgICBsZXR0ZXItc3BhY2luZzogMC44cHg7XHJcbiAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAxLjc7XHJcbiAgICAgICAgICAgIHBhZGRpbmctbGVmdDogMnB4O1xyXG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOiA1cHg7XHJcbiAgICAgICAgICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDQ4MHB4KSB7XHJcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDEuN3JlbTtcclxuICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICAucC1kcm9wZG93bjpub3QoLnAtZGlzYWJsZWQpLnAtZm9jdXMge1xyXG4gICAgICAgICAgICBib3gtc2hhZG93OiBub25lICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG4ucGFnaW5hdGlvbiB7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxcmVtO1xyXG4gICAgLm5neC1wYWdpbmF0aW9uIHtcclxuICAgICAgICBwYWRkaW5nLWxlZnQ6IDAgIWltcG9ydGFudDtcclxuICAgICAgICBtYXJnaW4tYm90dG9tOiAwICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG5cclxuICAgICAgICAuY3VycmVudCB7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQ6ICRzZWNvbmRhcnktY29sb3I7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbiIsIi8vIENvbG9yc1xyXG4kcHJpbWFyeS1jb2xvcjogIzAwN2VmZjtcclxuJHNlY29uZGFyeS1jb2xvcjogIzRmYWFmODtcclxuJGJnLWNvbG9yOiAjZmFmYWZhO1xyXG4kd2hpdGU6ICNmZmY7XHJcbiRsaWdodC1jb2xvcjogIzk5OWJhYztcclxuJGRhcmstYmx1ZTogIzA1MjA0YTtcclxuJHR4dDogIzMzMztcclxuJGRhcmstdHh0OiAjMGIwOTBhO1xyXG4kY3RhLWNvbG9yOiAjM2JkOTc1O1xyXG4kZXJyLWNvbG9yOiAjZmYzMzMzO1xyXG4vLyBCcmVha3BvaW50c1xyXG4kbW9iaWxlLWJyZWFrcG9pbnQ6IDQ4MHB4O1xyXG4kbmFycm93LWJyZWFrcG9pbnQ6IDc2OHB4O1xyXG4kbm9ybWFsLWJyZWFrcG9pbnQ6IDE0MDBweDtcclxuIl19 */"], encapsulation: 2, changeDetection: 0 });


/***/ }),

/***/ "o97b":
/*!**************************************************!*\
  !*** ./src/app/pages/signup/signup.component.ts ***!
  \**************************************************/
/*! exports provided: SignupComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignupComponent", function() { return SignupComponent; });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash */ "LvDl");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var angularx_social_login__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! angularx-social-login */ "ahC7");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_services_user_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/user.service */ "qfBg");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var primeng_inputtext__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! primeng/inputtext */ "7kUa");










function SignupComponent_span_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "span", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "Name is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function SignupComponent_span_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "span", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "Valid email is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function SignupComponent_span_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "span", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "This email is already registered");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function SignupComponent_span_20_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "span", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "Password is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
class SignupComponent {
    constructor(fb, userService, router, socialAuthService) {
        this.fb = fb;
        this.userService = userService;
        this.router = router;
        this.socialAuthService = socialAuthService;
        this.submitted = false;
        this.showPassword = false;
    }
    ngOnInit() {
        if (this.userService.loggedUserValue) {
            this.router.navigate(['/poll']);
        }
        this.userService.getGuestData();
        this.signupForm = this.fb.group({
            name: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required]],
            email: [
                '',
                {
                    validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].email],
                    asyncValidators: this.userService.emailValidator(),
                    updateOn: 'blur',
                },
            ],
            password: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required],
        });
        this.socialAuthService.authState.subscribe(googleUser => {
            const userToSignup = {
                name: googleUser.name,
                email: googleUser.email,
                password: googleUser.idToken
            };
            this.onSignup(userToSignup);
        });
    }
    onTogglePassword() {
        this.showPassword = !this.showPassword;
    }
    onSignup(socialUser = null) {
        this.submitted = true;
        if (socialUser) {
            this.userService.socialRegister(socialUser);
        }
        else {
            if (!this.signupForm.valid)
                return;
            const formToSubmit = Object(lodash__WEBPACK_IMPORTED_MODULE_1__["cloneDeep"])(this.signupForm.value);
            this.userService.registerUser(formToSubmit);
        }
        this.submitted = false;
        this.router.navigateByUrl('poll');
    }
    onGoogleSignUp() {
        this.socialAuthService.signIn(angularx_social_login__WEBPACK_IMPORTED_MODULE_2__["GoogleLoginProvider"].PROVIDER_ID);
    }
}
SignupComponent.ɵfac = function SignupComponent_Factory(t) { return new (t || SignupComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](src_app_services_user_service__WEBPACK_IMPORTED_MODULE_4__["UserService"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](angularx_social_login__WEBPACK_IMPORTED_MODULE_2__["SocialAuthService"])); };
SignupComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: SignupComponent, selectors: [["signup"]], decls: 35, vars: 8, consts: [[1, "signup-container", "flex", "column", "justify-center", "align-center"], [1, "flex", "column", "justify-center", 3, "formGroup", "ngSubmit"], [1, "signup-rabbit"], ["for", "name"], ["class", "has-error", 4, "ngIf"], [1, "p-input-icon-left"], [1, "pi", "pi-user", "user-icon"], ["type", "text", "id", "name", "pInputText", "", "placeholder", "Johnny Bravo", "autocomplete", "off", "formControlName", "name"], ["for", "email"], [1, "pi", "pi-envelope", "email-icon"], ["id", "email", "type", "email", "pInputText", "", "placeholder", "example@uvote.com", "autocomplete", "off", "formControlName", "email"], ["for", "password"], [1, "password-container"], [1, "pi", "pi-lock", "password-icon"], ["pInputText", "", "placeholder", "\u25CF\u25CF\u25CF\u25CF\u25CF", "autocomplete", "off", "formControlName", "password", 3, "type"], [1, "toggle-password", 3, "click"], [3, "title", "ngClass"], ["type", "submit", 1, "submit-btn"], ["type", "button", 1, "google-btn", 3, "click"], [1, "login-p"], ["routerLink", "/login"], [1, "has-error"]], template: function SignupComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "section", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "form", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngSubmit", function SignupComponent_Template_form_ngSubmit_1_listener() { return ctx.onSignup(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4, "Create a free account");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "label", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](6, "Your name");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](7, SignupComponent_span_7_Template, 2, 0, "span", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "span", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](9, "i", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](10, "input", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](11, "label", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](12, "Email Address");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](13, SignupComponent_span_13_Template, 2, 0, "span", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](14, SignupComponent_span_14_Template, 2, 0, "span", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](15, "span", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](16, "i", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](17, "input", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](18, "label", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](19, "Choose Password");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](20, SignupComponent_span_20_Template, 2, 0, "span", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](21, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](22, "span", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](23, "i", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](24, "input", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](25, "span", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function SignupComponent_Template_span_click_25_listener() { return ctx.onTogglePassword(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](26, "i", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](27, "button", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](28, "Sign up");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](29, "button", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function SignupComponent_Template_button_click_29_listener() { return ctx.onGoogleSignUp(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](30, " Sign up with Google ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](31, "p", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](32, " Already have an account? ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](33, "a", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](34, "Log In");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("formGroup", ctx.signupForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.submitted && ctx.signupForm.get("name").hasError("required"));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.submitted && ctx.signupForm.get("email").hasError("required") || ctx.submitted && ctx.signupForm.get("email").invalid);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.signupForm.get("email").hasError("emailExists"));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.submitted && ctx.signupForm.get("password").hasError("required"));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("type", ctx.showPassword ? "text" : "password");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("title", ctx.showPassword ? "Hide Password" : "Show Password")("ngClass", ctx.showPassword ? "pi pi-eye-slash" : "pi pi-eye");
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormGroupDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["DefaultValueAccessor"], primeng_inputtext__WEBPACK_IMPORTED_MODULE_7__["InputText"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControlName"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgClass"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterLinkWithHref"]], styles: [".signup-container[_ngcontent-%COMP%] {\n  min-height: calc(100vh - 40px);\n  background-color: #fff;\n  background-image: url('Sea of Clouds-10s-1536px.svg');\n  background-repeat: no-repeat;\n  background-position: center;\n  background-size: cover;\n}\n.signup-container[_ngcontent-%COMP%]   .signup-rabbit[_ngcontent-%COMP%] {\n  position: absolute;\n  z-index: 1;\n  background-image: url('signup-rabbit.svg');\n  width: 250px;\n  height: 250px;\n  background-position: center;\n  background-size: cover;\n  background-color: transparent;\n  fill: transparent;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  top: -12%;\n}\n@media (max-width: 540px) {\n  .signup-container[_ngcontent-%COMP%]   .signup-rabbit[_ngcontent-%COMP%] {\n    width: 170px;\n    height: 120px;\n    top: -5%;\n  }\n}\n.signup-container[_ngcontent-%COMP%]   form[_ngcontent-%COMP%] {\n  width: 600px;\n  padding: 30px;\n  background-color: #fafafa;\n  height: 450px;\n  box-shadow: 0 0.5em 1em 0.5em rgba(10, 10, 10, 0.1), 0 0px 0 1px rgba(10, 10, 10, 0.02);\n  border-radius: 3px;\n  position: relative;\n}\n.signup-container[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-size: 2.2rem;\n  text-align: center;\n  font-weight: 700;\n}\n.signup-container[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  margin-bottom: 4px;\n  font-size: 1.2rem;\n  font-family: Quicksand, sans-serif;\n}\n.signup-container[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  width: 100%;\n  margin-bottom: 8px;\n}\n.signup-container[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .p-inputtext[_ngcontent-%COMP%]:enabled:focus {\n  box-shadow: none;\n}\n.signup-container[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .password-container[_ngcontent-%COMP%] {\n  position: relative;\n  width: 100%;\n  margin-bottom: 20px;\n}\n.signup-container[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .password-container[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:first-of-type {\n  width: 100%;\n}\n.signup-container[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .password-container[_ngcontent-%COMP%]   .toggle-password[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 9px;\n  right: 8px;\n  cursor: pointer;\n}\n.signup-container[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .user-icon[_ngcontent-%COMP%] {\n  margin-top: -0.8rem;\n}\n.signup-container[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .email-icon[_ngcontent-%COMP%], .signup-container[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .password-icon[_ngcontent-%COMP%] {\n  margin-top: -0.6rem;\n}\n.signup-container[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .submit-btn[_ngcontent-%COMP%] {\n  text-transform: capitalize;\n  align-self: center;\n  margin-bottom: 8px;\n}\n.signup-container[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .google-btn[_ngcontent-%COMP%] {\n  align-self: center;\n  display: flex;\n  align-items: center;\n  padding: 4px 20px;\n  margin-bottom: 8px;\n  border-radius: 3px;\n  transition: background-color, 0.2s;\n}\n.signup-container[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .google-btn[_ngcontent-%COMP%]:hover {\n  background-color: #e8e8e8;\n}\n.signup-container[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .google-btn[_ngcontent-%COMP%]::before {\n  background-image: url('google-48.svg');\n  background-repeat: no-repeat;\n  background-size: 25px 20px;\n  width: 25px;\n  height: 20px;\n  padding-right: 3px;\n  display: inline-block;\n  content: \"\";\n}\n.signup-container[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .has-error[_ngcontent-%COMP%] {\n  margin-bottom: 3px;\n  color: red;\n}\n.signup-container[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .login-p[_ngcontent-%COMP%] {\n  align-self: center;\n}\n.signup-container[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .login-p[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: #3273dc;\n}\n@media (max-width: 620px) {\n  .signup-container[_ngcontent-%COMP%]   form[_ngcontent-%COMP%] {\n    width: 90%;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFxhc3NldHNcXHN0eWxlc1xcc2V0dXBcXF9taXhpbnMuc2NzcyIsIi4uXFwuLlxcLi5cXC4uXFxzaWdudXAuY29tcG9uZW50LnNjc3MiLCIuLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFwuLlxcYXNzZXRzXFxzdHlsZXNcXHNldHVwXFxfdmFyaWFibGVzLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsc0JBQUE7QUNHQTtFQUNJLDhCQUFBO0VBQ0Esc0JBQUE7RUFDQSxxREFBQTtFQUNBLDRCQUFBO0VBQ0EsMkJBQUE7RUFDQSxzQkFBQTtBQURKO0FBR0k7RUQrR0Esa0JBQUE7RUFDQSxVQUFBO0VBQ0EsMENBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLDJCQUFBO0VBQ0Esc0JBQUE7RUFDQSw2QkFBQTtFQUNBLGlCQUFBO0VBQ0EsU0FBQTtFQUNBLGdDQUFBO0VBQ0EsU0FBQTtBQy9HSjtBRGlISTtFQzVIQTtJRDZISSxZQUFBO0lBQ0EsYUFBQTtJQUNBLFFBQUE7RUM5R047QUFDRjtBQWZJO0VEYUEsWUFBQTtFQUNBLGFBQUE7RUFDQSx5QkUxQk87RUYyQlAsYUFBQTtFQUNBLHVGQUFBO0VBQ0Esa0JBQUE7RUNoQkksa0JBQUE7QUFzQlI7QURMSTtFQUNJLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtBQ09SO0FETEk7RUFDSSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0Esa0NBQUE7QUNPUjtBRExJO0VBQ0ksV0FBQTtFQUNBLGtCQUFBO0FDT1I7QURMSTtFQUNJLGdCQUFBO0FDT1I7QURMSTtFQUNJLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLG1CQUFBO0FDT1I7QURMUTtFQUNJLFdBQUE7QUNPWjtBREpRO0VBQ0ksa0JBQUE7RUFDQSxRQUFBO0VBQ0EsVUFBQTtFQUNBLGVBQUE7QUNNWjtBREZJO0VBQ0ksbUJBQUE7QUNJUjtBREZJOztFQUVJLG1CQUFBO0FDSVI7QURGSTtFQUNJLDBCQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtBQ0lSO0FERkk7RUFDSSxrQkFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUVBLGtDQUFBO0FDR1I7QUREUTtFQUNJLHlCQUFBO0FDR1o7QURBUTtFQUNJLHNDQUFBO0VBQ0EsNEJBQUE7RUFDQSwwQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxxQkFBQTtFQUNBLFdBQUE7QUNFWjtBRENJO0VBQ0ksa0JBQUE7RUFDQSxVQUFBO0FDQ1I7QURDSTtFQUNJLGtCQUFBO0FDQ1I7QURDUTtFQUNJLGNBQUE7QUNDWjtBREdJO0VDdEdBO0lEdUdJLFVBQUE7RUNBTjtBQUNGIiwiZmlsZSI6InNpZ251cC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIEJyZWFrcG9pbnQgbWl4aW5zICovXHJcblxyXG5AbWl4aW4gZm9yLW1vYmlsZS1sYXlvdXQge1xyXG4gICAgQG1lZGlhIChtYXgtd2lkdGg6ICRtb2JpbGUtYnJlYWtwb2ludCkge1xyXG4gICAgICAgIEBjb250ZW50O1xyXG4gICAgfVxyXG59XHJcblxyXG5AbWl4aW4gZm9yLW5hcnJvdy1sYXlvdXQge1xyXG4gICAgQG1lZGlhIChtaW4td2lkdGg6ICRtb2JpbGUtYnJlYWtwb2ludCkge1xyXG4gICAgICAgIEBjb250ZW50O1xyXG4gICAgfVxyXG59XHJcblxyXG5AbWl4aW4gZm9yLW5vcm1hbC1sYXlvdXQge1xyXG4gICAgQG1lZGlhIChtaW4td2lkdGg6ICRuYXJyb3ctYnJlYWtwb2ludCkge1xyXG4gICAgICAgIEBjb250ZW50O1xyXG4gICAgfVxyXG59XHJcblxyXG5AbWl4aW4gZm9yLXdpZGUtbGF5b3V0IHtcclxuICAgIEBtZWRpYSAobWluLXdpZHRoOiAkbm9ybWFsLWJyZWFrcG9pbnQpIHtcclxuICAgICAgICBAY29udGVudDtcclxuICAgIH1cclxufVxyXG5cclxuQG1peGluIGxvZ2luLXNpZ251cC1jb250YWluZXIge1xyXG4gICAgd2lkdGg6IDYwMHB4O1xyXG4gICAgcGFkZGluZzogMzBweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICRiZy1jb2xvcjtcclxuICAgIGhlaWdodDogNDUwcHg7XHJcbiAgICBib3gtc2hhZG93OiAwIDAuNWVtIDFlbSAwLjVlbSByZ2JhKDEwLCAxMCwgMTAsIDAuMSksIDAgMHB4IDAgMXB4IHJnYmEoMTAsIDEwLCAxMCwgMC4wMik7XHJcbiAgICBib3JkZXItcmFkaXVzOiAzcHg7XHJcbiAgICBoMyB7XHJcbiAgICAgICAgZm9udC1zaXplOiAyLjJyZW07XHJcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgICB9XHJcbiAgICBsYWJlbCB7XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogNHB4O1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xyXG4gICAgICAgIGZvbnQtZmFtaWx5OiBRdWlja3NhbmQsIHNhbnMtc2VyaWY7XHJcbiAgICB9XHJcbiAgICBpbnB1dCB7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogOHB4O1xyXG4gICAgfVxyXG4gICAgLnAtaW5wdXR0ZXh0OmVuYWJsZWQ6Zm9jdXMge1xyXG4gICAgICAgIGJveC1zaGFkb3c6IG5vbmU7XHJcbiAgICB9XHJcbiAgICAucGFzc3dvcmQtY29udGFpbmVyIHtcclxuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMjBweDtcclxuXHJcbiAgICAgICAgc3BhbjpmaXJzdC1vZi10eXBlIHtcclxuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAudG9nZ2xlLXBhc3N3b3JkIHtcclxuICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgICB0b3A6IDlweDtcclxuICAgICAgICAgICAgcmlnaHQ6IDhweDtcclxuICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAudXNlci1pY29uIHtcclxuICAgICAgICBtYXJnaW4tdG9wOiAtMC44cmVtO1xyXG4gICAgfVxyXG4gICAgLmVtYWlsLWljb24sXHJcbiAgICAucGFzc3dvcmQtaWNvbiB7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogLTAuNnJlbTtcclxuICAgIH1cclxuICAgIC5zdWJtaXQtYnRuIHtcclxuICAgICAgICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcclxuICAgICAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogOHB4O1xyXG4gICAgfVxyXG4gICAgLmdvb2dsZS1idG4ge1xyXG4gICAgICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgcGFkZGluZzogNHB4IDIwcHg7XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogOHB4O1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDNweDtcclxuXHJcbiAgICAgICAgdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciwgMC4ycztcclxuXHJcbiAgICAgICAgJjpob3ZlciB7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IGRhcmtlbigkYmctY29sb3IsIDclKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgICY6OmJlZm9yZSB7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi4uLy4uL2ltZ3MvZ29vZ2xlLTQ4LnN2Z1wiKTtcclxuICAgICAgICAgICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuICAgICAgICAgICAgYmFja2dyb3VuZC1zaXplOiAyNXB4IDIwcHg7XHJcbiAgICAgICAgICAgIHdpZHRoOiAyNXB4O1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDIwcHg7XHJcbiAgICAgICAgICAgIHBhZGRpbmctcmlnaHQ6IDNweDtcclxuICAgICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgICAgICAgICBjb250ZW50OiBcIlwiO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIC5oYXMtZXJyb3Ige1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDNweDtcclxuICAgICAgICBjb2xvcjogcmVkO1xyXG4gICAgfVxyXG4gICAgLmxvZ2luLXAge1xyXG4gICAgICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcclxuXHJcbiAgICAgICAgYSB7XHJcbiAgICAgICAgICAgIGNvbG9yOiAjMzI3M2RjO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBAbWVkaWEgKG1heC13aWR0aDogNjIwcHgpIHtcclxuICAgICAgICB3aWR0aDogOTAlO1xyXG4gICAgfVxyXG59XHJcblxyXG5AbWl4aW4gd2F2ZS1yYWJiaXQge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgei1pbmRleDogMTtcclxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi4uLy4uLy4uL2Fzc2V0cy9pbWdzL3NpZ251cC1yYWJiaXQuc3ZnXCIpO1xyXG4gICAgd2lkdGg6IDI1MHB4O1xyXG4gICAgaGVpZ2h0OiAyNTBweDtcclxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcclxuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcclxuICAgIGZpbGw6IHRyYW5zcGFyZW50O1xyXG4gICAgbGVmdDogNTAlO1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XHJcbiAgICB0b3A6IC0xMiU7XHJcblxyXG4gICAgQG1lZGlhIChtYXgtd2lkdGg6IDU0MHB4KSB7XHJcbiAgICAgICAgd2lkdGg6IDE3MHB4O1xyXG4gICAgICAgIGhlaWdodDogMTIwcHg7XHJcbiAgICAgICAgdG9wOiAtNSU7XHJcbiAgICB9XHJcbn1cclxuIiwiQGltcG9ydCBcIi4uLy4uLy4uL2Fzc2V0cy9zdHlsZXMvc2V0dXAvdmFyaWFibGVzXCI7XHJcbkBpbXBvcnQgXCIuLi8uLi8uLi9hc3NldHMvc3R5bGVzL3NldHVwL21peGluc1wiO1xyXG5cclxuLnNpZ251cC1jb250YWluZXIge1xyXG4gICAgbWluLWhlaWdodDogY2FsYygxMDB2aCAtIDQwcHgpO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcclxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi4uLy4uLy4uL2Fzc2V0cy9pbWdzL1NlYVxcIG9mXFwgQ2xvdWRzLTEwcy0xNTM2cHguc3ZnXCIpO1xyXG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcclxuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcblxyXG4gICAgLnNpZ251cC1yYWJiaXQge1xyXG4gICAgICAgIEBpbmNsdWRlIHdhdmUtcmFiYml0O1xyXG4gICAgfVxyXG4gICAgZm9ybSB7XHJcbiAgICAgICAgQGluY2x1ZGUgbG9naW4tc2lnbnVwLWNvbnRhaW5lcjtcclxuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICB9XHJcbn1cclxuIiwiLy8gQ29sb3JzXHJcbiRwcmltYXJ5LWNvbG9yOiAjMDA3ZWZmO1xyXG4kc2Vjb25kYXJ5LWNvbG9yOiAjNGZhYWY4O1xyXG4kYmctY29sb3I6ICNmYWZhZmE7XHJcbiR3aGl0ZTogI2ZmZjtcclxuJGxpZ2h0LWNvbG9yOiAjOTk5YmFjO1xyXG4kZGFyay1ibHVlOiAjMDUyMDRhO1xyXG4kdHh0OiAjMzMzO1xyXG4kZGFyay10eHQ6ICMwYjA5MGE7XHJcbiRjdGEtY29sb3I6ICMzYmQ5NzU7XHJcbiRlcnItY29sb3I6ICNmZjMzMzM7XHJcbi8vIEJyZWFrcG9pbnRzXHJcbiRtb2JpbGUtYnJlYWtwb2ludDogNDgwcHg7XHJcbiRuYXJyb3ctYnJlYWtwb2ludDogNzY4cHg7XHJcbiRub3JtYWwtYnJlYWtwb2ludDogMTQwMHB4O1xyXG4iXX0= */"], changeDetection: 0 });


/***/ }),

/***/ "ojyh":
/*!******************************************************!*\
  !*** ./src/app/pages/homepage/homepage.component.ts ***!
  \******************************************************/
/*! exports provided: HomepageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomepageComponent", function() { return HomepageComponent; });
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "wHSu");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ "6NWb");







class HomepageComponent {
    constructor(router) {
        this.router = router;
        this.pencilIcon = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_0__["faPencilAlt"];
        this.usersIcon = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_0__["faUsers"];
        this.pollIcon = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_0__["faPoll"];
        this.arrowIcon = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_0__["faArrowRight"];
    }
    ngOnInit() { }
}
HomepageComponent.ɵfac = function HomepageComponent_Factory(t) { return new (t || HomepageComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"])); };
HomepageComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: HomepageComponent, selectors: [["homepage"]], decls: 83, vars: 5, consts: [[1, "homepage-heading", "flex", "column", "align-center"], [1, "fold", "flex"], [1, "text", "flex", "column", "align-center"], ["href", "#/create", "routerLink", "/create", 1, "cta-btn"], [1, "vector", "flex", "justify-center", "align-center"], ["src", "../../../assets/imgs/homepage.svg", "alt", ""], [1, "curve"], ["data-name", "Layer 1", "xmlns", "http://www.w3.org/2000/svg", "viewBox", "0 0 1200 120", "preserveAspectRatio", "none", 1, "shape"], ["d", "M600,112.77C268.63,112.77,0,65.52,0,7.23V120H1200V7.23C1200,65.52,931.37,112.77,600,112.77Z", 1, "shape-fill"], [1, "intro"], [1, "container", "flex", "column", "align-center"], [1, "heading"], [1, "cards", "flex"], [1, "card", "card-1"], [1, "pencil-icon", 3, "icon"], [1, "card-heading"], [1, "arrow-icon", 3, "icon"], [1, "card", "card-2"], [1, "users-icon", 3, "icon"], [1, "card", "card-3"], [1, "poll-icon", 3, "icon"], [1, "features"], [1, "cards", "flex", "align-center", "justify-center"], [1, "feature-card", "card-1"], ["src", "../../../assets/imgs/accuracy.png", "alt", ""], [1, "feature-card", "card-2"], ["src", "../../../assets/imgs/calendar.png", "alt", ""], [1, "feature-card", "card-3"], ["src", "../../../assets/imgs/private.png", "alt", ""], [1, "feature-card", "card-4"], ["src", "../../../assets/imgs/chat.png", "alt", ""], ["href", "#/poll?page=1&sort=newest", 1, "regular-btn", "browse-btn"], [1, "flex", "align-center", "justify-center"], ["href", "https://www.linkedin.com/in/yehonathan-segev/"]], template: function HomepageComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "section", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "Got a ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, "question");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, "?");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9, "Create a ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11, "poll");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12, ".");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14, " Easily create an online poll ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](15, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](16, " and share it across any device to collect feedback. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](18, "Start Now ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](20, "img", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "svg", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](23, "path", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "section", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](26, "h3", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](27, "How does it work?");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](28, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](29, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](30, "fa-icon", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](31, "h4", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](32, "Create");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](33, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](34, "Type your question and add answers. No signup is required");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](35, "fa-icon", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](36, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](37, "fa-icon", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](38, "h4", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](39, "Share");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](40, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](41, "Share your poll via social media or by link");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](42, "fa-icon", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](43, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](44, "fa-icon", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](45, "h4", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](46, "Collect");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](47, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](48, "Collect results and see votes in real-time");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](49, "section", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](50, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](51, "h3", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](52, "Uvote Features");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](53, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](54, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](55, "img", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](56, "h4", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](57, "IP Duplication Check");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](58, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](59, "A secure method to ensure vote accuracy.");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](60, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](61, "img", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](62, "h4", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](63, "Deadline");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](64, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](65, "Set a deadline for your poll or let it run forever");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](66, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](67, "img", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](68, "h4", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](69, "Private Polls");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](70, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](71, "Decide if you want your poll to be public or private");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](72, "div", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](73, "img", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](74, "h4", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](75, "Comments");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](76, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](77, "People can comment their thoughts on polls");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](78, "a", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](79, "Browse Public Polls");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](80, "footer", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](81, "a", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](82, "\u00AE 2021 Uvote | Yehonathan Segev");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](30);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("icon", ctx.pencilIcon);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("icon", ctx.arrowIcon);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("icon", ctx.usersIcon);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("icon", ctx.arrowIcon);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("icon", ctx.pollIcon);
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkWithHref"], _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_3__["FaIconComponent"]], styles: [".homepage-heading[_ngcontent-%COMP%] {\n  background: radial-gradient(circle at 50% 50%, #50dd84, #50dc83, #4ed981, #4dd47f, #4bd07c, #4acb7a, #48c878, #48c777);\n  position: relative;\n  min-height: 80vh;\n  margin-bottom: 20px;\n}\n@media screen and (max-width: 530px) {\n  .homepage-heading[_ngcontent-%COMP%] {\n    min-height: 60vh;\n  }\n}\n.homepage-heading[_ngcontent-%COMP%]   .fold[_ngcontent-%COMP%] {\n  position: absolute;\n  z-index: 5;\n  top: 50%;\n  width: 100%;\n  max-width: 1140px;\n  transform: translateY(-50%);\n}\n.homepage-heading[_ngcontent-%COMP%]   .fold[_ngcontent-%COMP%]   .text[_ngcontent-%COMP%] {\n  flex-basis: 50%;\n  color: #fff;\n  height: 100%;\n  width: 100%;\n  padding-left: 15px;\n}\n@media screen and (max-width: 950px) {\n  .homepage-heading[_ngcontent-%COMP%]   .fold[_ngcontent-%COMP%]   .text[_ngcontent-%COMP%] {\n    flex-basis: 100%;\n    padding-right: 15px;\n  }\n}\n.homepage-heading[_ngcontent-%COMP%]   .fold[_ngcontent-%COMP%]   .text[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  font-size: 5rem;\n  font-family: Quicksand-SemiBold, sans-serif;\n  font-weight: 400;\n  text-align: center;\n}\n@media screen and (max-width: 530px) {\n  .homepage-heading[_ngcontent-%COMP%]   .fold[_ngcontent-%COMP%]   .text[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n    font-size: 3.5rem;\n  }\n}\n@media (max-width: 370px) {\n  .homepage-heading[_ngcontent-%COMP%]   .fold[_ngcontent-%COMP%]   .text[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n    font-size: 2.7rem;\n  }\n}\n.homepage-heading[_ngcontent-%COMP%]   .fold[_ngcontent-%COMP%]   .text[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]:first-of-type {\n  margin-bottom: -0.5rem;\n}\n.homepage-heading[_ngcontent-%COMP%]   .fold[_ngcontent-%COMP%]   .text[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]:last-of-type {\n  margin-bottom: 1rem;\n}\n.homepage-heading[_ngcontent-%COMP%]   .fold[_ngcontent-%COMP%]   .text[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  text-decoration: underline;\n  text-underline-offset: 5px;\n}\n.homepage-heading[_ngcontent-%COMP%]   .fold[_ngcontent-%COMP%]   .text[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 2.5rem;\n  text-align: center;\n  margin-bottom: 1.5rem;\n}\n@media screen and (max-width: 530px) {\n  .homepage-heading[_ngcontent-%COMP%]   .fold[_ngcontent-%COMP%]   .text[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    font-size: 1.5rem;\n  }\n}\n.homepage-heading[_ngcontent-%COMP%]   .fold[_ngcontent-%COMP%]   .text[_ngcontent-%COMP%]   .cta-btn[_ngcontent-%COMP%] {\n  font-size: 3rem;\n  font-family: Quicksand-Medium, sans-serif;\n  background-color: #059bff;\n  border-radius: 6px;\n  padding: 10px 30px;\n  position: relative;\n  overflow: hidden;\n  transition: all 0.2s ease;\n}\n@media screen and (max-width: 530px) {\n  .homepage-heading[_ngcontent-%COMP%]   .fold[_ngcontent-%COMP%]   .text[_ngcontent-%COMP%]   .cta-btn[_ngcontent-%COMP%] {\n    font-size: 2.5rem;\n  }\n}\n@media (max-width: 370px) {\n  .homepage-heading[_ngcontent-%COMP%]   .fold[_ngcontent-%COMP%]   .text[_ngcontent-%COMP%]   .cta-btn[_ngcontent-%COMP%] {\n    font-size: 1.5rem;\n  }\n}\n.homepage-heading[_ngcontent-%COMP%]   .fold[_ngcontent-%COMP%]   .text[_ngcontent-%COMP%]   .cta-btn[_ngcontent-%COMP%]:after {\n  content: \"\";\n  position: absolute;\n  top: 0;\n  left: -200%;\n  width: 200%;\n  height: 100%;\n  transform: skewX(-20deg);\n  background-image: linear-gradient(to right, transparent, rgba(255, 255, 255, 0.3), transparent);\n}\n.homepage-heading[_ngcontent-%COMP%]   .fold[_ngcontent-%COMP%]   .text[_ngcontent-%COMP%]   .cta-btn[_ngcontent-%COMP%]:hover:after {\n  animation: shine 1.6s ease;\n}\n.homepage-heading[_ngcontent-%COMP%]   .fold[_ngcontent-%COMP%]   .text[_ngcontent-%COMP%]   .cta-btn[_ngcontent-%COMP%]:active {\n  transform: translateY(1px);\n  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.2);\n}\n.homepage-heading[_ngcontent-%COMP%]   .fold[_ngcontent-%COMP%]   .vector[_ngcontent-%COMP%] {\n  margin-left: 5rem;\n  flex-basis: 50%;\n}\n@media screen and (max-width: 950px) {\n  .homepage-heading[_ngcontent-%COMP%]   .fold[_ngcontent-%COMP%]   .vector[_ngcontent-%COMP%] {\n    display: none;\n  }\n}\n.homepage-heading[_ngcontent-%COMP%]   .fold[_ngcontent-%COMP%]   .vector[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  height: 350px;\n  min-width: 450px;\n}\n.homepage-heading[_ngcontent-%COMP%]   .curve[_ngcontent-%COMP%] {\n  position: absolute;\n  bottom: 0;\n  left: 0;\n  width: 100%;\n  overflow: hidden;\n  line-height: 0;\n}\n.homepage-heading[_ngcontent-%COMP%]   .curve[_ngcontent-%COMP%]   .shape[_ngcontent-%COMP%] {\n  position: relative;\n  display: block;\n  width: calc(100% + 1.3px);\n  height: 150px;\n}\n.homepage-heading[_ngcontent-%COMP%]   .curve[_ngcontent-%COMP%]   .shape-fill[_ngcontent-%COMP%] {\n  fill: #fafafa;\n}\n@keyframes shine {\n  100% {\n    left: 200%;\n  }\n}\n.heading[_ngcontent-%COMP%] {\n  font-family: Quicksand-SemiBold, sans-serif;\n  font-weight: 400;\n  font-size: 3.5rem;\n  margin-bottom: 28px;\n  text-align: center;\n}\n@media screen and (max-width: 530px) {\n  .heading[_ngcontent-%COMP%] {\n    font-size: 3rem;\n  }\n}\n.card-heading[_ngcontent-%COMP%] {\n  font-size: 1.5rem;\n  font-family: Quicksand-SemiBold, sans-serif;\n  font-weight: 400;\n  margin-bottom: 5px;\n}\n.intro[_ngcontent-%COMP%] {\n  margin-bottom: 70px;\n}\n.intro[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .cards[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  word-break: break-word;\n  text-align: center;\n  width: 300px;\n  padding: 10px 20px;\n  box-shadow: rgba(0, 0, 0, 0.28) 0px 1px 4px;\n  border-radius: 3px;\n}\n.intro[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .cards[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   fa-icon[_ngcontent-%COMP%] {\n  margin-bottom: 5px;\n  font-size: 2.5rem;\n}\n.intro[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .cards[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 1.2rem;\n  margin-bottom: 3px;\n}\n@media screen and (max-width: 1060px) {\n  .intro[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .cards[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%] {\n    width: 220px;\n  }\n}\n.intro[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .cards[_ngcontent-%COMP%]   .arrow-icon[_ngcontent-%COMP%] {\n  align-self: center;\n  font-size: 2rem;\n  margin-left: 2rem;\n  margin-right: 2rem;\n}\n@media screen and (max-width: 840px) {\n  .intro[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .cards[_ngcontent-%COMP%] {\n    flex-direction: column;\n  }\n  .intro[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .cards[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%] {\n    width: 320px;\n  }\n  .intro[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .cards[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]:not(:last-of-type) {\n    margin-bottom: 25px;\n  }\n  .intro[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .cards[_ngcontent-%COMP%]   .arrow-icon[_ngcontent-%COMP%] {\n    display: none;\n  }\n}\n.features[_ngcontent-%COMP%] {\n  margin-bottom: 20px;\n}\n.features[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .cards[_ngcontent-%COMP%] {\n  margin-bottom: 15px;\n  flex-wrap: wrap;\n  width: 700px;\n}\n.features[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .cards[_ngcontent-%COMP%]   .feature-card[_ngcontent-%COMP%] {\n  height: 201px;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  text-align: center;\n  flex-basis: 47%;\n  margin-bottom: 15px;\n  box-shadow: rgba(0, 0, 0, 0.28) 0px 1px 4px;\n  border-radius: 3px;\n  padding: 10px 20px;\n  margin-left: 10px;\n}\n@media screen and (max-width: 720px) {\n  .features[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .cards[_ngcontent-%COMP%]   .feature-card[_ngcontent-%COMP%] {\n    flex-basis: unset;\n    width: 320px;\n    margin: 0 15px 15px;\n    flex-grow: 1;\n    height: 177px;\n    margin-left: 0;\n  }\n}\n.features[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .cards[_ngcontent-%COMP%]   .feature-card[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 100px;\n  height: 100px;\n  margin-bottom: 5px;\n}\n@media screen and (max-width: 720px) {\n  .features[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .cards[_ngcontent-%COMP%]   .feature-card[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    width: 70px;\n    height: 70px;\n  }\n}\n.features[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .cards[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 1.2rem;\n  margin-bottom: 3px;\n}\n@media screen and (max-width: 720px) {\n  .features[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .cards[_ngcontent-%COMP%] {\n    width: 100%;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    flex-wrap: nowrap;\n  }\n}\n.features[_ngcontent-%COMP%]   .browse-btn[_ngcontent-%COMP%] {\n  background-color: #3bd975;\n  color: #fff;\n  font-size: 1.3rem;\n}\nfooter[_ngcontent-%COMP%] {\n  background-color: #333;\n  color: #eee;\n  padding: 20px 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxob21lcGFnZS5jb21wb25lbnQuc2NzcyIsIi4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFxhc3NldHNcXHN0eWxlc1xcc2V0dXBcXF92YXJpYWJsZXMuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQTtFQUNJLHNIQUFBO0VBV0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0FBVko7QUFXSTtFQWZKO0lBZ0JRLGdCQUFBO0VBUk47QUFDRjtBQVVJO0VBQ0ksa0JBQUE7RUFDQSxVQUFBO0VBQ0EsUUFBQTtFQUNBLFdBQUE7RUFDQSxpQkFBQTtFQUNBLDJCQUFBO0FBUlI7QUFTUTtFQUNJLGVBQUE7RUFDQSxXQ3pCSjtFRDBCSSxZQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0FBUFo7QUFRWTtFQU5KO0lBT1EsZ0JBQUE7SUFDQSxtQkFBQTtFQUxkO0FBQ0Y7QUFNWTtFQUNJLGVBQUE7RUFDQSwyQ0FBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7QUFKaEI7QUFLZ0I7RUFMSjtJQU1RLGlCQUFBO0VBRmxCO0FBQ0Y7QUFHZ0I7RUFSSjtJQVNRLGlCQUFBO0VBQWxCO0FBQ0Y7QUFFZ0I7RUFDSSxzQkFBQTtBQUFwQjtBQUdnQjtFQUNJLG1CQUFBO0FBRHBCO0FBSWdCO0VBQ0ksMEJBQUE7RUFDQSwwQkFBQTtBQUZwQjtBQU1ZO0VBQ0ksaUJBQUE7RUFDQSxrQkFBQTtFQUNBLHFCQUFBO0FBSmhCO0FBS2dCO0VBSko7SUFLUSxpQkFBQTtFQUZsQjtBQUNGO0FBS1k7RUFDSSxlQUFBO0VBQ0EseUNBQUE7RUFDQSx5QkFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBRUEseUJBQUE7QUFKaEI7QUFNZ0I7RUFYSjtJQVlRLGlCQUFBO0VBSGxCO0FBQ0Y7QUFJZ0I7RUFkSjtJQWVRLGlCQUFBO0VBRGxCO0FBQ0Y7QUFFZ0I7RUFDSSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxNQUFBO0VBQ0EsV0FBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0Esd0JBQUE7RUFDQSwrRkFBQTtBQUFwQjtBQUdnQjtFQUNJLDBCQUFBO0FBRHBCO0FBSWdCO0VBQ0ksMEJBQUE7RUFDQSx5Q0FBQTtBQUZwQjtBQU9RO0VBQ0ksaUJBQUE7RUFDQSxlQUFBO0FBTFo7QUFNWTtFQUhKO0lBSVEsYUFBQTtFQUhkO0FBQ0Y7QUFJWTtFQUNJLGFBQUE7RUFDQSxnQkFBQTtBQUZoQjtBQU9JO0VBQ0ksa0JBQUE7RUFDQSxTQUFBO0VBQ0EsT0FBQTtFQUNBLFdBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7QUFMUjtBQVFJO0VBQ0ksa0JBQUE7RUFDQSxjQUFBO0VBQ0EseUJBQUE7RUFDQSxhQUFBO0FBTlI7QUFTSTtFQUNJLGFDMUlHO0FEbUlYO0FBV0E7RUFDSTtJQUNJLFVBQUE7RUFSTjtBQUNGO0FBV0E7RUFDSSwyQ0FBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0FBVEo7QUFXSTtFQVBKO0lBUVEsZUFBQTtFQVJOO0FBQ0Y7QUFXQTtFQUNJLGlCQUFBO0VBQ0EsMkNBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0FBUko7QUFVQTtFQUNJLG1CQUFBO0FBUEo7QUFVWTtFQUNJLGFBQUE7RUFDQSxzQkFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSxzQkFBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsMkNBQUE7RUFDQSxrQkFBQTtBQVJoQjtBQVVnQjtFQUNJLGtCQUFBO0VBQ0EsaUJBQUE7QUFScEI7QUFVZ0I7RUFDSSxpQkFBQTtFQUNBLGtCQUFBO0FBUnBCO0FBV2dCO0VBckJKO0lBc0JRLFlBQUE7RUFSbEI7QUFDRjtBQVVZO0VBQ0ksa0JBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtBQVJoQjtBQVVZO0VBaENKO0lBaUNRLHNCQUFBO0VBUGQ7RUFRYztJQUNJLFlBQUE7RUFObEI7RUFRYztJQUNJLG1CQUFBO0VBTmxCO0VBUWM7SUFDSSxhQUFBO0VBTmxCO0FBQ0Y7QUFZQTtFQUNJLG1CQUFBO0FBVEo7QUFXUTtFQUNJLG1CQUFBO0VBQ0EsZUFBQTtFQUNBLFlBQUE7QUFUWjtBQVdZO0VBQ0ksYUFBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxtQkFBQTtFQUNBLDJDQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0FBVGhCO0FBV2dCO0VBZEo7SUFlUSxpQkFBQTtJQUNBLFlBQUE7SUFDQSxtQkFBQTtJQUNBLFlBQUE7SUFDQSxhQUFBO0lBQ0EsY0FBQTtFQVJsQjtBQUNGO0FBU2dCO0VBQ0ksWUFBQTtFQUNBLGFBQUE7RUFDQSxrQkFBQTtBQVBwQjtBQVNvQjtFQUxKO0lBTVEsV0FBQTtJQUNBLFlBQUE7RUFOdEI7QUFDRjtBQVNZO0VBQ0ksaUJBQUE7RUFDQSxrQkFBQTtBQVBoQjtBQVVZO0VBM0NKO0lBNENRLFdBQUE7SUFDQSxzQkFBQTtJQUNBLHVCQUFBO0lBQ0EsbUJBQUE7SUFDQSxpQkFBQTtFQVBkO0FBQ0Y7QUFVSTtFQUNJLHlCQzNRSTtFRDRRSixXQ2pSQTtFRGtSQSxpQkFBQTtBQVJSO0FBWUE7RUFDSSxzQkFBQTtFQUNBLFdBQUE7RUFDQSxlQUFBO0FBVEoiLCJmaWxlIjoiaG9tZXBhZ2UuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IFwiLi4vLi4vLi4vYXNzZXRzL3N0eWxlcy9zZXR1cC92YXJpYWJsZXNcIjtcclxuLmhvbWVwYWdlLWhlYWRpbmcge1xyXG4gICAgYmFja2dyb3VuZDogcmFkaWFsLWdyYWRpZW50KFxyXG4gICAgICAgIGNpcmNsZSBhdCA1MCUgNTAlLFxyXG4gICAgICAgICM1MGRkODQsXHJcbiAgICAgICAgIzUwZGM4MyxcclxuICAgICAgICAjNGVkOTgxLFxyXG4gICAgICAgICM0ZGQ0N2YsXHJcbiAgICAgICAgIzRiZDA3YyxcclxuICAgICAgICAjNGFjYjdhLFxyXG4gICAgICAgICM0OGM4NzgsXHJcbiAgICAgICAgIzQ4Yzc3N1xyXG4gICAgKTtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIG1pbi1oZWlnaHQ6IDgwdmg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xyXG4gICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNTMwcHgpIHtcclxuICAgICAgICBtaW4taGVpZ2h0OiA2MHZoO1xyXG4gICAgfVxyXG5cclxuICAgIC5mb2xkIHtcclxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgei1pbmRleDogNTtcclxuICAgICAgICB0b3A6IDUwJTtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICBtYXgtd2lkdGg6IDExNDBweDtcclxuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XHJcbiAgICAgICAgLnRleHQge1xyXG4gICAgICAgICAgICBmbGV4LWJhc2lzOiA1MCU7XHJcbiAgICAgICAgICAgIGNvbG9yOiAkd2hpdGU7XHJcbiAgICAgICAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgIHBhZGRpbmctbGVmdDogMTVweDtcclxuICAgICAgICAgICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogOTUwcHgpIHtcclxuICAgICAgICAgICAgICAgIGZsZXgtYmFzaXM6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICBwYWRkaW5nLXJpZ2h0OiAxNXB4O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGgxIHtcclxuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogNXJlbTtcclxuICAgICAgICAgICAgICAgIGZvbnQtZmFtaWx5OiBRdWlja3NhbmQtU2VtaUJvbGQsIHNhbnMtc2VyaWY7XHJcbiAgICAgICAgICAgICAgICBmb250LXdlaWdodDogNDAwO1xyXG4gICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgICAgICAgICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNTMwcHgpIHtcclxuICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDMuNXJlbTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIEBtZWRpYSAobWF4LXdpZHRoOiAzNzBweCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMi43cmVtO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICY6Zmlyc3Qtb2YtdHlwZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogLTAuNXJlbTtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAmOmxhc3Qtb2YtdHlwZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMXJlbTtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICBzcGFuIHtcclxuICAgICAgICAgICAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcclxuICAgICAgICAgICAgICAgICAgICB0ZXh0LXVuZGVybGluZS1vZmZzZXQ6IDVweDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgcCB7XHJcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDIuNXJlbTtcclxuICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDEuNXJlbTtcclxuICAgICAgICAgICAgICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDUzMHB4KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxLjVyZW07XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIC5jdGEtYnRuIHtcclxuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogM3JlbTtcclxuICAgICAgICAgICAgICAgIGZvbnQtZmFtaWx5OiBRdWlja3NhbmQtTWVkaXVtLCBzYW5zLXNlcmlmO1xyXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzA1OWJmZjtcclxuICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDZweDtcclxuICAgICAgICAgICAgICAgIHBhZGRpbmc6IDEwcHggMzBweDtcclxuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICAgICAgICAgIG92ZXJmbG93OiBoaWRkZW47XHJcblxyXG4gICAgICAgICAgICAgICAgdHJhbnNpdGlvbjogYWxsIDAuMnMgZWFzZTtcclxuXHJcbiAgICAgICAgICAgICAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA1MzBweCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMi41cmVtO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgQG1lZGlhIChtYXgtd2lkdGg6IDM3MHB4KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxLjVyZW07XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAmOmFmdGVyIHtcclxuICAgICAgICAgICAgICAgICAgICBjb250ZW50OiBcIlwiO1xyXG4gICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgICAgICAgICAgICB0b3A6IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgbGVmdDogLTIwMCU7XHJcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDIwMCU7XHJcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogc2tld1goLTIwZGVnKTtcclxuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsIHRyYW5zcGFyZW50LCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMyksIHRyYW5zcGFyZW50KTtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAmOmhvdmVyOmFmdGVyIHtcclxuICAgICAgICAgICAgICAgICAgICBhbmltYXRpb246IHNoaW5lIDEuNnMgZWFzZTtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAmOmFjdGl2ZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDFweCk7XHJcbiAgICAgICAgICAgICAgICAgICAgYm94LXNoYWRvdzogMCA0cHggMTZweCByZ2JhKDAsIDAsIDAsIDAuMik7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC52ZWN0b3Ige1xyXG4gICAgICAgICAgICBtYXJnaW4tbGVmdDogNXJlbTtcclxuICAgICAgICAgICAgZmxleC1iYXNpczogNTAlO1xyXG4gICAgICAgICAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA5NTBweCkge1xyXG4gICAgICAgICAgICAgICAgZGlzcGxheTogbm9uZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpbWcge1xyXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAzNTBweDtcclxuICAgICAgICAgICAgICAgIG1pbi13aWR0aDogNDUwcHg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLmN1cnZlIHtcclxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgYm90dG9tOiAwO1xyXG4gICAgICAgIGxlZnQ6IDA7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgICAgICBsaW5lLWhlaWdodDogMDtcclxuICAgIH1cclxuXHJcbiAgICAuY3VydmUgLnNoYXBlIHtcclxuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgd2lkdGg6IGNhbGMoMTAwJSArIDEuM3B4KTtcclxuICAgICAgICBoZWlnaHQ6IDE1MHB4O1xyXG4gICAgfVxyXG5cclxuICAgIC5jdXJ2ZSAuc2hhcGUtZmlsbCB7XHJcbiAgICAgICAgZmlsbDogJGJnLWNvbG9yO1xyXG4gICAgfVxyXG59XHJcblxyXG5Aa2V5ZnJhbWVzIHNoaW5lIHtcclxuICAgIDEwMCUge1xyXG4gICAgICAgIGxlZnQ6IDIwMCU7XHJcbiAgICB9XHJcbn1cclxuXHJcbi5oZWFkaW5nIHtcclxuICAgIGZvbnQtZmFtaWx5OiBRdWlja3NhbmQtU2VtaUJvbGQsIHNhbnMtc2VyaWY7XHJcbiAgICBmb250LXdlaWdodDogNDAwO1xyXG4gICAgZm9udC1zaXplOiAzLjVyZW07XHJcbiAgICBtYXJnaW4tYm90dG9tOiAyOHB4O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG5cclxuICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDUzMHB4KSB7XHJcbiAgICAgICAgZm9udC1zaXplOiAzcmVtO1xyXG4gICAgfVxyXG59XHJcblxyXG4uY2FyZC1oZWFkaW5nIHtcclxuICAgIGZvbnQtc2l6ZTogMS41cmVtO1xyXG4gICAgZm9udC1mYW1pbHk6IFF1aWNrc2FuZC1TZW1pQm9sZCwgc2Fucy1zZXJpZjtcclxuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgICBtYXJnaW4tYm90dG9tOiA1cHg7XHJcbn1cclxuLmludHJvIHtcclxuICAgIG1hcmdpbi1ib3R0b206IDcwcHg7XHJcbiAgICAuY29udGFpbmVyIHtcclxuICAgICAgICAuY2FyZHMge1xyXG4gICAgICAgICAgICAuY2FyZCB7XHJcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICAgICAgICAgIHdvcmQtYnJlYWs6IGJyZWFrLXdvcmQ7XHJcbiAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICB3aWR0aDogMzAwcHg7XHJcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiAxMHB4IDIwcHg7XHJcbiAgICAgICAgICAgICAgICBib3gtc2hhZG93OiByZ2JhKDAsIDAsIDAsIDAuMjgpIDBweCAxcHggNHB4O1xyXG4gICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogM3B4O1xyXG5cclxuICAgICAgICAgICAgICAgIGZhLWljb24ge1xyXG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDVweDtcclxuICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDIuNXJlbTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHAge1xyXG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xyXG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDNweDtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMDYwcHgpIHtcclxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogMjIwcHg7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLmFycm93LWljb24ge1xyXG4gICAgICAgICAgICAgICAgYWxpZ24tc2VsZjogY2VudGVyO1xyXG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAycmVtO1xyXG4gICAgICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDJyZW07XHJcbiAgICAgICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDJyZW07XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogODQwcHgpIHtcclxuICAgICAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAgICAgICAgICAgICAuY2FyZCB7XHJcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDMyMHB4O1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgLmNhcmQ6bm90KDpsYXN0LW9mLXR5cGUpIHtcclxuICAgICAgICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAyNXB4O1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgLmFycm93LWljb24ge1xyXG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbi5mZWF0dXJlcyB7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xyXG4gICAgLmNvbnRhaW5lciB7XHJcbiAgICAgICAgLmNhcmRzIHtcclxuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMTVweDtcclxuICAgICAgICAgICAgZmxleC13cmFwOiB3cmFwO1xyXG4gICAgICAgICAgICB3aWR0aDogNzAwcHg7XHJcblxyXG4gICAgICAgICAgICAuZmVhdHVyZS1jYXJkIHtcclxuICAgICAgICAgICAgICAgIGhlaWdodDogMjAxcHg7XHJcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICAgICAgICAgIGZsZXgtYmFzaXM6IDQ3JTtcclxuICAgICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDE1cHg7XHJcbiAgICAgICAgICAgICAgICBib3gtc2hhZG93OiByZ2JhKDAsIDAsIDAsIDAuMjgpIDBweCAxcHggNHB4O1xyXG4gICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogM3B4O1xyXG4gICAgICAgICAgICAgICAgcGFkZGluZzogMTBweCAyMHB4O1xyXG4gICAgICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDEwcHg7XHJcblxyXG4gICAgICAgICAgICAgICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzIwcHgpIHtcclxuICAgICAgICAgICAgICAgICAgICBmbGV4LWJhc2lzOiB1bnNldDtcclxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogMzIwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiAwIDE1cHggMTVweDtcclxuICAgICAgICAgICAgICAgICAgICBmbGV4LWdyb3c6IDE7XHJcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAxNzdweDtcclxuICAgICAgICAgICAgICAgICAgICBtYXJnaW4tbGVmdDogMDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGltZyB7XHJcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDEwMHB4O1xyXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogMTAwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogNXB4O1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3MjBweCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogNzBweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiA3MHB4O1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBwIHtcclxuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xyXG4gICAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogM3B4O1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3MjBweCkge1xyXG4gICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgICAgICAgICAgZmxleC13cmFwOiBub3dyYXA7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAuYnJvd3NlLWJ0biB7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJGN0YS1jb2xvcjtcclxuICAgICAgICBjb2xvcjogJHdoaXRlO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMS4zcmVtO1xyXG4gICAgfVxyXG59XHJcblxyXG5mb290ZXIge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzMzMztcclxuICAgIGNvbG9yOiAjZWVlO1xyXG4gICAgcGFkZGluZzogMjBweCAwO1xyXG59XHJcbiIsIi8vIENvbG9yc1xyXG4kcHJpbWFyeS1jb2xvcjogIzAwN2VmZjtcclxuJHNlY29uZGFyeS1jb2xvcjogIzRmYWFmODtcclxuJGJnLWNvbG9yOiAjZmFmYWZhO1xyXG4kd2hpdGU6ICNmZmY7XHJcbiRsaWdodC1jb2xvcjogIzk5OWJhYztcclxuJGRhcmstYmx1ZTogIzA1MjA0YTtcclxuJHR4dDogIzMzMztcclxuJGRhcmstdHh0OiAjMGIwOTBhO1xyXG4kY3RhLWNvbG9yOiAjM2JkOTc1O1xyXG4kZXJyLWNvbG9yOiAjZmYzMzMzO1xyXG4vLyBCcmVha3BvaW50c1xyXG4kbW9iaWxlLWJyZWFrcG9pbnQ6IDQ4MHB4O1xyXG4kbmFycm93LWJyZWFrcG9pbnQ6IDc2OHB4O1xyXG4kbm9ybWFsLWJyZWFrcG9pbnQ6IDE0MDBweDtcclxuIl19 */"] });


/***/ }),

/***/ "qfBg":
/*!******************************************!*\
  !*** ./src/app/services/user.service.ts ***!
  \******************************************/
/*! exports provided: UserService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserService", function() { return UserService; });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../environments/environment */ "AytR");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _util_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./util.service */ "2Rin");






class UserService {
    constructor(http, utilService) {
        this.http = http;
        this.utilService = utilService;
        this._guestData$ = new rxjs__WEBPACK_IMPORTED_MODULE_0__["BehaviorSubject"](null);
        this.guestData$ = this._guestData$.asObservable();
        this._loggedInUser$ = new rxjs__WEBPACK_IMPORTED_MODULE_0__["BehaviorSubject"](this.utilService.loadFromStorage('user'));
        this.loggedInUser$ = this._loggedInUser$.asObservable();
    }
    getGuestData() {
        const cachedUserInfo = this.utilService.loadFromStorage('user-info');
        if (cachedUserInfo) {
            this._guestData$.next(cachedUserInfo);
            return;
        }
        this.http
            .get(`https://ipgeolocation.abstractapi.com/v1/?api_key=${_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiKey}`, {
            headers: null,
        })
            .subscribe((guestData) => {
            this.utilService.saveToStorage('user-info', guestData);
            this._guestData$.next(guestData);
        });
    }
    get loggedUserValue() {
        return this._loggedInUser$.value;
    }
    get guestDataValue() {
        return this._guestData$.value;
    }
    login(credentials) {
        return this.http
            .post(`${_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].authURL}/login`, credentials, {
            withCredentials: true,
        })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])((err) => Object(rxjs__WEBPACK_IMPORTED_MODULE_0__["throwError"])(err)));
    }
    getById(userId, pageNumber = 1, sortBy = 'newest') {
        const query = { page: '' + pageNumber, sortBy };
        return this.http.get(`${_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].userURL}/${userId}`, {
            params: query,
        });
    }
    registerUser(userInfo) {
        userInfo.name = userInfo.name.trim();
        userInfo.email = userInfo.email.toLowerCase();
        userInfo.logoColor = this.utilService.getRandomLightColor();
        if (this._guestData$) {
            const guestData = this.guestDataValue;
            userInfo.country = guestData.country;
            userInfo.flag = guestData.flag.svg;
        }
        return this.http
            .post(`${_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].authURL}/signup`, userInfo, {
            withCredentials: true,
        })
            .subscribe((loggedInUser) => {
            this.utilService.saveToStorage('user', loggedInUser);
            this._loggedInUser$.next(loggedInUser);
        });
    }
    socialRegister(socialUser) {
        this.checkifEmailExists(socialUser.email).subscribe((isRegistred) => {
            this.login(socialUser).subscribe((loggedInUser) => this._loggedInUser$.next(loggedInUser));
        }, (err) => {
            if (err.status === 500) {
                this.registerUser(socialUser);
            }
        });
    }
    logout() {
        localStorage.removeItem('user');
        this._loggedInUser$.next(null);
        this.http
            .post(`${_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].authURL}/logout`, {}, { withCredentials: true })
            .subscribe();
    }
    updateLoggedUser(user) {
        this._loggedInUser$.next(user);
        this.utilService.saveToStorage('user', user);
    }
    checkifEmailExists(email) {
        return this.http.get(`http://localhost:3030/api/user/email/${email}`);
    }
    emailValidator() {
        return (control) => {
            return this.checkifEmailExists(control.value.toLowerCase()).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])((err) => Object(rxjs__WEBPACK_IMPORTED_MODULE_0__["of"])('')), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])((res) => {
                return res ? { emailExists: true } : null;
            }));
        };
    }
}
UserService.ɵfac = function UserService_Factory(t) { return new (t || UserService)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_util_service__WEBPACK_IMPORTED_MODULE_5__["UtilService"])); };
UserService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({ token: UserService, factory: UserService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "s2v6":
/*!*************************************************************!*\
  !*** ./src/app/cmps/poll-preview/poll-preview.component.ts ***!
  \*************************************************************/
/*! exports provided: PollPreviewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PollPreviewComponent", function() { return PollPreviewComponent; });
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! moment */ "wd/R");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");




function PollPreviewComponent_a_0_p_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r1.poll.description);
} }
function PollPreviewComponent_a_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "a", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](6, PollPreviewComponent_a_0_p_6_Template, 2, 1, "p", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "small");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", ctx_r0.pollLink)("href", ctx_r0.pollLink, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("", ctx_r0.pollVotesToShow(), " votes");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r0.poll.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r0.poll.description);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r0.getCreatedTime());
} }
class PollPreviewComponent {
    constructor() { }
    ngOnInit() { }
    getCreatedTime() {
        return moment__WEBPACK_IMPORTED_MODULE_0__(this.poll.createdAt).fromNow();
    }
    pollVotesToShow() {
        const pollVotes = this.poll.totalVotes;
        if (!pollVotes)
            return 0;
        else if (pollVotes > 1000)
            return '1k+';
        else if (pollVotes > 99)
            return '99+';
        else
            return pollVotes;
    }
    get pollLink() {
        return `/poll/${this.poll._id}`;
    }
}
PollPreviewComponent.ɵfac = function PollPreviewComponent_Factory(t) { return new (t || PollPreviewComponent)(); };
PollPreviewComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: PollPreviewComponent, selectors: [["poll-preview"]], inputs: { poll: "poll" }, decls: 1, vars: 1, consts: [["class", "poll-preview flex column", 3, "routerLink", "href", 4, "ngIf"], [1, "poll-preview", "flex", "column", 3, "routerLink", "href"], [1, "votes"], [4, "ngIf"]], template: function PollPreviewComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, PollPreviewComponent_a_0_Template, 9, 6, "a", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.poll.isPrivate);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLinkWithHref"]], styles: [".poll-preview[_ngcontent-%COMP%] {\n  margin: 0 auto 1.875rem auto;\n  width: 100%;\n  min-height: 130px;\n  background-color: #fff;\n  padding: 30px;\n  border-radius: 3px;\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);\n  position: relative;\n  cursor: pointer;\n  transition: box-shadow 0.2s;\n}\n.poll-preview[_ngcontent-%COMP%]:hover {\n  box-shadow: 0 0.5em 1em 0.5em rgba(10, 10, 10, 0.08), 0 0px 0 1px rgba(10, 10, 10, 0.03);\n}\n.poll-preview[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-family: Quicksand-SemiBold, sans-serif;\n  font-weight: 400;\n  font-size: 1.875rem;\n  margin-bottom: 2px;\n  letter-spacing: 0.1px;\n}\n@media (max-width: 480px) {\n  .poll-preview[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n    font-size: 1.5rem;\n  }\n}\n.poll-preview[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 1.1rem;\n  font-family: Quicksand-Medium, sans-serif;\n}\n@media screen and (max-width: 480px) {\n  .poll-preview[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    font-size: 1.05rem;\n  }\n}\n.poll-preview[_ngcontent-%COMP%]   small[_ngcontent-%COMP%] {\n  margin-top: 2px;\n}\n.poll-preview[_ngcontent-%COMP%]   .votes[_ngcontent-%COMP%] {\n  border: 2px solid #3bd975;\n  border-radius: 2em;\n  padding: 5px 8px;\n  position: absolute;\n  right: -5px;\n  top: -13px;\n  min-width: 81px;\n  text-align: center;\n  background-color: #fff;\n  font-family: Quicksand-SemiBold, sans-serif;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxwb2xsLXByZXZpZXcuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBR0E7RUFDRSw0QkFBQTtFQUNBLFdBQUE7RUFDQSxpQkFBQTtFQUVBLHNCQUFBO0VBQ0EsYUFBQTtFQUNBLGtCQUFBO0VBQ0Esd0VBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7RUFFQSwyQkFBQTtBQUpGO0FBS0U7RUFDRSx3RkFBQTtBQUhKO0FBTUU7RUFDRSwyQ0FBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLHFCQUFBO0FBSko7QUFLSTtFQU5GO0lBT0ksaUJBQUE7RUFGSjtBQUNGO0FBS0U7RUFDRSxpQkFBQTtFQUNBLHlDQUFBO0FBSEo7QUFJSTtFQUhGO0lBSUksa0JBQUE7RUFESjtBQUNGO0FBSUU7RUFDRSxlQUFBO0FBRko7QUFJRTtFQUNFLHlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFVBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxzQkFBQTtFQUNBLDJDQUFBO0FBRkoiLCJmaWxlIjoicG9sbC1wcmV2aWV3LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCBcIi4uLy4uLy4uL2Fzc2V0cy9zdHlsZXMvc2V0dXAvdmFyaWFibGVzXCI7XHJcbkBpbXBvcnQgXCIuLi8uLi8uLi9hc3NldHMvc3R5bGVzL3NldHVwL2Z1bmN0aW9uc1wiO1xyXG5cclxuLnBvbGwtcHJldmlldyB7XHJcbiAgbWFyZ2luOiAwIGF1dG8gMS44NzVyZW0gYXV0bztcclxuICB3aWR0aDogMTAwJTtcclxuICBtaW4taGVpZ2h0OiAxMzBweDtcclxuICAvLyBtYXJnaW4tYm90dG9tOiAxLjg3NXJlbTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xyXG4gIHBhZGRpbmc6IDMwcHg7XHJcbiAgYm9yZGVyLXJhZGl1czogM3B4O1xyXG4gIGJveC1zaGFkb3c6IDAgMXB4IDNweCByZ2JhKDAsIDAsIDAsIDAuMTIpLCAwIDFweCAycHggcmdiYSgwLCAwLCAwLCAwLjI0KTtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG5cclxuICB0cmFuc2l0aW9uOiBib3gtc2hhZG93IDAuMnM7XHJcbiAgJjpob3ZlciB7XHJcbiAgICBib3gtc2hhZG93OiAwIDAuNWVtIDFlbSAwLjVlbSByZ2JhKDEwLCAxMCwgMTAsIDAuMDgpLCAwIDBweCAwIDFweCByZ2JhKDEwLCAxMCwgMTAsIDAuMDMpO1xyXG4gIH1cclxuXHJcbiAgaDIge1xyXG4gICAgZm9udC1mYW1pbHk6IFF1aWNrc2FuZC1TZW1pQm9sZCwgc2Fucy1zZXJpZjtcclxuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgICBmb250LXNpemU6IHJlbSgzMHB4KTtcclxuICAgIG1hcmdpbi1ib3R0b206IDJweDtcclxuICAgIGxldHRlci1zcGFjaW5nOiAwLjFweDtcclxuICAgIEBtZWRpYSAobWF4LXdpZHRoOiA0ODBweCkge1xyXG4gICAgICBmb250LXNpemU6IDEuNXJlbTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHAge1xyXG4gICAgZm9udC1zaXplOiAxLjFyZW07XHJcbiAgICBmb250LWZhbWlseTogUXVpY2tzYW5kLU1lZGl1bSwgc2Fucy1zZXJpZjtcclxuICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDQ4MHB4KSB7XHJcbiAgICAgIGZvbnQtc2l6ZTogMS4wNXJlbTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHNtYWxsIHtcclxuICAgIG1hcmdpbi10b3A6IDJweDtcclxuICB9XHJcbiAgLnZvdGVzIHtcclxuICAgIGJvcmRlcjogMnB4IHNvbGlkICRjdGEtY29sb3I7XHJcbiAgICBib3JkZXItcmFkaXVzOiAyZW07XHJcbiAgICBwYWRkaW5nOiA1cHggOHB4O1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgcmlnaHQ6IC01cHg7XHJcbiAgICB0b3A6IC0xM3B4O1xyXG4gICAgbWluLXdpZHRoOiA4MXB4O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcclxuICAgIGZvbnQtZmFtaWx5OiBRdWlja3NhbmQtU2VtaUJvbGQsIHNhbnMtc2VyaWY7XHJcbiAgfVxyXG59XHJcbiJdfQ== */"], changeDetection: 0 });


/***/ }),

/***/ "uOz6":
/*!*********************************************************!*\
  !*** ./src/app/cmps/app-header/app-header.component.ts ***!
  \*********************************************************/
/*! exports provided: AppHeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppHeaderComponent", function() { return AppHeaderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_services_user_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/user.service */ "qfBg");
/* harmony import */ var angularx_social_login__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! angularx-social-login */ "ahC7");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");





const _c0 = function (a1) { return ["/u", a1]; };
function AppHeaderComponent_li_17_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Profile");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](2, _c0, ctx_r0.loggedInUser._id));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("href", ctx_r0.profileLink, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
function AppHeaderComponent_li_18_Template(rf, ctx) { if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppHeaderComponent_li_18_Template_li_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5); const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r4.onLogout(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Logout");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function AppHeaderComponent_li_19_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Login");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function AppHeaderComponent_li_20_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Sign up");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class AppHeaderComponent {
    constructor(userService, socialAuthService, router) {
        this.userService = userService;
        this.socialAuthService = socialAuthService;
        this.router = router;
        this.isMenuOpen = false;
    }
    ngOnInit() {
        this.userSub = this.userService.loggedInUser$.subscribe((user) => {
            this.loggedInUser = user;
        });
    }
    ngOnDestroy() {
        this.userSub.unsubscribe();
    }
    onLogout() {
        this.userService.logout();
        this.socialAuthService.signOut();
    }
    discoverNavigate() {
        this.router.navigateByUrl('/poll?page=1&sort=newest');
    }
    toggleMenu() {
        this.isMenuOpen = !this.isMenuOpen;
    }
    closeMenu() {
        this.isMenuOpen = false;
    }
    get profileLink() {
        return `#/u/${this.loggedInUser._id}`;
    }
}
AppHeaderComponent.ɵfac = function AppHeaderComponent_Factory(t) { return new (t || AppHeaderComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_user_service__WEBPACK_IMPORTED_MODULE_1__["UserService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](angularx_social_login__WEBPACK_IMPORTED_MODULE_2__["SocialAuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"])); };
AppHeaderComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppHeaderComponent, selectors: [["app-header"]], decls: 21, vars: 6, consts: [[1, "app-header", "main-container", "flex", "align-center"], [1, "screen", 3, "click"], [1, "logo"], ["routerLink", "/"], ["href", "#/"], ["routerLink", "/create", 1, "create-btn"], ["href", "#/create"], [1, "hamburger-menu", 3, "click"], [1, "line", "line-1"], [1, "line", "line-2"], [1, "line", "line-3"], [1, "flex", "align-center", 3, "click"], [3, "click"], ["href", "#/poll?page=1&sort=newest"], [3, "routerLink", 4, "ngIf"], [3, "click", 4, "ngIf"], ["routerLink", "/login", 4, "ngIf"], ["routerLink", "/signup", 4, "ngIf"], [3, "routerLink"], [3, "href"], ["routerLink", "/login"], ["href", "#/login"], ["routerLink", "/signup"], ["href", "#/signup"]], template: function AppHeaderComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "header", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppHeaderComponent_Template_div_click_1_listener() { return ctx.closeMenu(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h1", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Uvote");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Create Poll");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "button", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppHeaderComponent_Template_button_click_9_listener() { return ctx.toggleMenu(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "span", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "span", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "span", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "ul", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppHeaderComponent_Template_ul_click_13_listener() { return ctx.closeMenu(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "li", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppHeaderComponent_Template_li_click_14_listener() { return ctx.discoverNavigate(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "a", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Discover");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](17, AppHeaderComponent_li_17_Template, 3, 4, "li", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](18, AppHeaderComponent_li_18_Template, 2, 0, "li", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](19, AppHeaderComponent_li_19_Template, 3, 0, "li", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](20, AppHeaderComponent_li_20_Template, 3, 0, "li", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("open", ctx.isMenuOpen);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.loggedInUser);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.loggedInUser);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.loggedInUser);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.loggedInUser);
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLink"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"]], styles: [".app-header[_ngcontent-%COMP%] {\n  background-color: #fff;\n  height: 40px;\n}\n.app-header[_ngcontent-%COMP%]   .logo[_ngcontent-%COMP%] {\n  flex-grow: 1;\n  font-family: Quicksand-SemiBold;\n}\n.app-header[_ngcontent-%COMP%]   .logo[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  width: -webkit-max-content;\n  width: max-content;\n  cursor: pointer;\n  letter-spacing: 0.8px;\n  font-size: 1.875rem;\n}\n.app-header[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n.app-header[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:not(:first-of-type) {\n  margin-left: 10px;\n}\n@media (max-width: 500px) {\n  .app-header[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n    visibility: hidden;\n    opacity: 0;\n    flex-direction: column;\n    align-items: flex-start;\n    position: fixed;\n    left: 50%;\n    top: 50%;\n    transform: translate(-50%, -50%);\n    z-index: 10;\n    font-size: 4rem;\n    transition: opacity 0.3s;\n  }\n  .app-header[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n    margin-left: 0 !important;\n    color: #fff;\n    text-transform: uppercase;\n  }\n  .app-header[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:not(:last-child) {\n    margin-bottom: 10px;\n  }\n}\n.app-header[_ngcontent-%COMP%]   .screen[_ngcontent-%COMP%] {\n  position: fixed;\n  top: 0;\n  left: 0;\n  bottom: 0;\n  right: 0;\n  background-color: rgba(0, 0, 0, 0.7);\n  opacity: 0;\n  z-index: 9;\n  visibility: hidden;\n  transition: opacity 0.3s;\n}\n@media (min-width: 500px) {\n  .app-header[_ngcontent-%COMP%]   .screen[_ngcontent-%COMP%] {\n    visibility: hidden !important;\n    opacity: 0 !important;\n  }\n}\n@media (max-width: 500px) {\n  .app-header[_ngcontent-%COMP%]   .hamburger-menu[_ngcontent-%COMP%] {\n    width: 40px;\n    height: 30px;\n    position: relative;\n    z-index: 15;\n    border: none;\n    cursor: pointer;\n    background-color: transparent;\n  }\n  .app-header[_ngcontent-%COMP%]   .hamburger-menu[_ngcontent-%COMP%]   .line[_ngcontent-%COMP%] {\n    display: block;\n    width: 100%;\n    height: 3px;\n    border-radius: 4px;\n    background-color: #333;\n    transition: transform 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275), opacity 0.1s ease-out;\n  }\n  .app-header[_ngcontent-%COMP%]   .hamburger-menu[_ngcontent-%COMP%]   .line[_ngcontent-%COMP%]:not(:first-of-type) {\n    margin-top: 5px;\n  }\n}\n.app-header.open[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n  visibility: visible;\n  opacity: 1;\n}\n.app-header.open[_ngcontent-%COMP%]   .screen[_ngcontent-%COMP%] {\n  visibility: visible;\n  opacity: 1;\n}\n.app-header.open[_ngcontent-%COMP%]   .line[_ngcontent-%COMP%] {\n  background-color: #fff !important;\n}\n.app-header.open[_ngcontent-%COMP%]   .line-1[_ngcontent-%COMP%] {\n  transform: translateY(8px) rotate(-135deg);\n}\n.app-header.open[_ngcontent-%COMP%]   .line-2[_ngcontent-%COMP%] {\n  opacity: 0;\n  transform: translateX(-50%);\n}\n.app-header.open[_ngcontent-%COMP%]   .line-3[_ngcontent-%COMP%] {\n  transform: translateY(-8px) rotate(-225deg);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxhcHAtaGVhZGVyLmNvbXBvbmVudC5zY3NzIiwiLi5cXC4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXGFzc2V0c1xcc3R5bGVzXFxzZXR1cFxcX3ZhcmlhYmxlcy5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUdBO0VBQ0Usc0JBQUE7RUFDQSxZQUFBO0FBRkY7QUFHRTtFQUNFLFlBQUE7RUFDQSwrQkFBQTtBQURKO0FBR0k7RUFDRSwwQkFBQTtFQUFBLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLHFCQUFBO0VBQ0EsbUJBQUE7QUFETjtBQU1JO0VBQ0UsZUFBQTtBQUpOO0FBT0k7RUFDRSxpQkFBQTtBQUxOO0FBUUk7RUFURjtJQVVJLGtCQUFBO0lBQ0EsVUFBQTtJQUNBLHNCQUFBO0lBQ0EsdUJBQUE7SUFDQSxlQUFBO0lBQ0EsU0FBQTtJQUNBLFFBQUE7SUFDQSxnQ0FBQTtJQUNBLFdBQUE7SUFDQSxlQUFBO0lBRUEsd0JBQUE7RUFOSjtFQU9JO0lBQ0UseUJBQUE7SUFDQSxXQUFBO0lBQ0EseUJBQUE7RUFMTjtFQU9NO0lBQ0UsbUJBQUE7RUFMUjtBQUNGO0FBU0U7RUFDRSxlQUFBO0VBQ0EsTUFBQTtFQUNBLE9BQUE7RUFDQSxTQUFBO0VBQ0EsUUFBQTtFQUNBLG9DQUFBO0VBQ0EsVUFBQTtFQUNBLFVBQUE7RUFDQSxrQkFBQTtFQUNBLHdCQUFBO0FBUEo7QUFRSTtFQVhGO0lBWUksNkJBQUE7SUFDQSxxQkFBQTtFQUxKO0FBQ0Y7QUFTSTtFQURGO0lBRUksV0FBQTtJQUNBLFlBQUE7SUFDQSxrQkFBQTtJQUNBLFdBQUE7SUFDQSxZQUFBO0lBQ0EsZUFBQTtJQUNBLDZCQUFBO0VBTko7RUFRSTtJQUNFLGNBQUE7SUFDQSxXQUFBO0lBQ0EsV0FBQTtJQUNBLGtCQUFBO0lBQ0Esc0JDNUVGO0lENkVFLHlGQUFBO0VBTk47RUFRTTtJQUNFLGVBQUE7RUFOUjtBQUNGO0FBWUk7RUFDRSxtQkFBQTtFQUNBLFVBQUE7QUFWTjtBQVlJO0VBQ0UsbUJBQUE7RUFDQSxVQUFBO0FBVk47QUFZSTtFQUNFLGlDQUFBO0FBVk47QUFZSTtFQUNFLDBDQUFBO0FBVk47QUFZSTtFQUNFLFVBQUE7RUFDQSwyQkFBQTtBQVZOO0FBWUk7RUFDRSwyQ0FBQTtBQVZOIiwiZmlsZSI6ImFwcC1oZWFkZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IFwiLi4vLi4vLi4vYXNzZXRzL3N0eWxlcy9zZXR1cC9mdW5jdGlvbnNcIjtcclxuQGltcG9ydCBcIi4uLy4uLy4uL2Fzc2V0cy9zdHlsZXMvc2V0dXAvdmFyaWFibGVzXCI7XHJcblxyXG4uYXBwLWhlYWRlciB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcclxuICBoZWlnaHQ6IDQwcHg7XHJcbiAgLmxvZ28ge1xyXG4gICAgZmxleC1ncm93OiAxO1xyXG4gICAgZm9udC1mYW1pbHk6IFF1aWNrc2FuZC1TZW1pQm9sZDtcclxuXHJcbiAgICBoMSB7XHJcbiAgICAgIHdpZHRoOiBtYXgtY29udGVudDtcclxuICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICBsZXR0ZXItc3BhY2luZzogMC44cHg7XHJcbiAgICAgIGZvbnQtc2l6ZTogcmVtKDMwcHgpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgdWwge1xyXG4gICAgbGkge1xyXG4gICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICB9XHJcblxyXG4gICAgbGk6bm90KDpmaXJzdC1vZi10eXBlKSB7XHJcbiAgICAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xyXG4gICAgfVxyXG5cclxuICAgIEBtZWRpYSAobWF4LXdpZHRoOiA1MDBweCkge1xyXG4gICAgICB2aXNpYmlsaXR5OiBoaWRkZW47XHJcbiAgICAgIG9wYWNpdHk6IDA7XHJcbiAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAgIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xyXG4gICAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICAgIGxlZnQ6IDUwJTtcclxuICAgICAgdG9wOiA1MCU7XHJcbiAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xyXG4gICAgICB6LWluZGV4OiAxMDtcclxuICAgICAgZm9udC1zaXplOiA0cmVtO1xyXG5cclxuICAgICAgdHJhbnNpdGlvbjogb3BhY2l0eSAwLjNzO1xyXG4gICAgICBsaSB7XHJcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDAgIWltcG9ydGFudDtcclxuICAgICAgICBjb2xvcjogI2ZmZjtcclxuICAgICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG5cclxuICAgICAgICAmOm5vdCg6bGFzdC1jaGlsZCkge1xyXG4gICAgICAgICAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbiAgLnNjcmVlbiB7XHJcbiAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICB0b3A6IDA7XHJcbiAgICBsZWZ0OiAwO1xyXG4gICAgYm90dG9tOiAwO1xyXG4gICAgcmlnaHQ6IDA7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMCAwIDAgLyA3MCUpO1xyXG4gICAgb3BhY2l0eTogMDtcclxuICAgIHotaW5kZXg6IDk7XHJcbiAgICB2aXNpYmlsaXR5OiBoaWRkZW47XHJcbiAgICB0cmFuc2l0aW9uOiBvcGFjaXR5IDAuM3M7XHJcbiAgICBAbWVkaWEgKG1pbi13aWR0aDogNTAwcHgpIHtcclxuICAgICAgdmlzaWJpbGl0eTogaGlkZGVuICFpbXBvcnRhbnQ7XHJcbiAgICAgIG9wYWNpdHk6IDAgIWltcG9ydGFudDtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC5oYW1idXJnZXItbWVudSB7XHJcbiAgICBAbWVkaWEgKG1heC13aWR0aDogNTAwcHgpIHtcclxuICAgICAgd2lkdGg6IDQwcHg7XHJcbiAgICAgIGhlaWdodDogMzBweDtcclxuICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICB6LWluZGV4OiAxNTtcclxuICAgICAgYm9yZGVyOiBub25lO1xyXG4gICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xyXG5cclxuICAgICAgLmxpbmUge1xyXG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgIGhlaWdodDogM3B4O1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDRweDtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkdHh0O1xyXG4gICAgICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjNzIGN1YmljLWJlemllcigwLjE3NSwgMC44ODUsIDAuMzIsIDEuMjc1KSwgb3BhY2l0eSAwLjFzIGVhc2Utb3V0O1xyXG5cclxuICAgICAgICAmOm5vdCg6Zmlyc3Qtb2YtdHlwZSkge1xyXG4gICAgICAgICAgbWFyZ2luLXRvcDogNXB4O1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgJi5vcGVuIHtcclxuICAgIHVsIHtcclxuICAgICAgdmlzaWJpbGl0eTogdmlzaWJsZTtcclxuICAgICAgb3BhY2l0eTogMTtcclxuICAgIH1cclxuICAgIC5zY3JlZW4ge1xyXG4gICAgICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xyXG4gICAgICBvcGFjaXR5OiAxO1xyXG4gICAgfVxyXG4gICAgLmxpbmUge1xyXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkd2hpdGUgIWltcG9ydGFudDtcclxuICAgIH1cclxuICAgIC5saW5lLTEge1xyXG4gICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoOHB4KSByb3RhdGUoLTEzNWRlZyk7XHJcbiAgICB9XHJcbiAgICAubGluZS0yIHtcclxuICAgICAgb3BhY2l0eTogMDtcclxuICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01MCUpO1xyXG4gICAgfVxyXG4gICAgLmxpbmUtMyB7XHJcbiAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtOHB4KSByb3RhdGUoLTIyNWRlZyk7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiIsIi8vIENvbG9yc1xyXG4kcHJpbWFyeS1jb2xvcjogIzAwN2VmZjtcclxuJHNlY29uZGFyeS1jb2xvcjogIzRmYWFmODtcclxuJGJnLWNvbG9yOiAjZmFmYWZhO1xyXG4kd2hpdGU6ICNmZmY7XHJcbiRsaWdodC1jb2xvcjogIzk5OWJhYztcclxuJGRhcmstYmx1ZTogIzA1MjA0YTtcclxuJHR4dDogIzMzMztcclxuJGRhcmstdHh0OiAjMGIwOTBhO1xyXG4kY3RhLWNvbG9yOiAjM2JkOTc1O1xyXG4kZXJyLWNvbG9yOiAjZmYzMzMzO1xyXG4vLyBCcmVha3BvaW50c1xyXG4kbW9iaWxlLWJyZWFrcG9pbnQ6IDQ4MHB4O1xyXG4kbmFycm93LWJyZWFrcG9pbnQ6IDc2OHB4O1xyXG4kbm9ybWFsLWJyZWFrcG9pbnQ6IDE0MDBweDtcclxuIl19 */"] });


/***/ }),

/***/ "vY5A":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _pages_error_error_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pages/error/error.component */ "y+ua");
/* harmony import */ var _pages_homepage_homepage_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pages/homepage/homepage.component */ "ojyh");
/* harmony import */ var _pages_login_login_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pages/login/login.component */ "D8EZ");
/* harmony import */ var _pages_poll_app_poll_app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./pages/poll-app/poll-app.component */ "TcEr");
/* harmony import */ var _pages_poll_details_poll_details_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./pages/poll-details/poll-details.component */ "Orvl");
/* harmony import */ var _pages_poll_edit_poll_edit_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./pages/poll-edit/poll-edit.component */ "29kc");
/* harmony import */ var _pages_poll_results_poll_results_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./pages/poll-results/poll-results.component */ "wmkW");
/* harmony import */ var _pages_signup_signup_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./pages/signup/signup.component */ "o97b");
/* harmony import */ var _pages_user_profile_user_profile_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./pages/user-profile/user-profile.component */ "G9k0");
/* harmony import */ var _services_resolvers_poll_resolver_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./services/resolvers/poll-resolver.service */ "WUJs");
/* harmony import */ var _services_resolvers_user_resolver__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./services/resolvers/user.resolver */ "3MSm");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/core */ "fXoL");














const routes = [
    {
        path: 'poll/:id/results',
        component: _pages_poll_results_poll_results_component__WEBPACK_IMPORTED_MODULE_7__["PollResultsComponent"],
        resolve: { poll: _services_resolvers_poll_resolver_service__WEBPACK_IMPORTED_MODULE_10__["PollResolverService"] },
        runGuardsAndResolvers: 'paramsChange',
        pathMatch: 'full',
    },
    {
        path: 'poll/:id/edit',
        component: _pages_poll_edit_poll_edit_component__WEBPACK_IMPORTED_MODULE_6__["PollEditComponent"],
        resolve: { poll: _services_resolvers_poll_resolver_service__WEBPACK_IMPORTED_MODULE_10__["PollResolverService"] },
        runGuardsAndResolvers: 'paramsChange',
    },
    {
        path: 'poll/:id',
        component: _pages_poll_details_poll_details_component__WEBPACK_IMPORTED_MODULE_5__["PollDetailsComponent"],
        resolve: { poll: _services_resolvers_poll_resolver_service__WEBPACK_IMPORTED_MODULE_10__["PollResolverService"] },
        runGuardsAndResolvers: 'paramsChange',
    },
    {
        path: 'u/:id',
        component: _pages_user_profile_user_profile_component__WEBPACK_IMPORTED_MODULE_9__["UserProfileComponent"],
        resolve: { user: _services_resolvers_user_resolver__WEBPACK_IMPORTED_MODULE_11__["UserResolver"] },
        runGuardsAndResolvers: 'paramsChange',
    },
    {
        path: 'poll',
        component: _pages_poll_app_poll_app_component__WEBPACK_IMPORTED_MODULE_4__["PollAppComponent"],
    },
    {
        path: 'create',
        component: _pages_poll_edit_poll_edit_component__WEBPACK_IMPORTED_MODULE_6__["PollEditComponent"],
    },
    {
        path: 'login',
        component: _pages_login_login_component__WEBPACK_IMPORTED_MODULE_3__["LoginComponent"],
    },
    {
        path: 'signup',
        component: _pages_signup_signup_component__WEBPACK_IMPORTED_MODULE_8__["SignupComponent"],
    },
    {
        path: '',
        pathMatch: 'full',
        component: _pages_homepage_homepage_component__WEBPACK_IMPORTED_MODULE_2__["HomepageComponent"],
    },
    {
        path: '**',
        component: _pages_error_error_component__WEBPACK_IMPORTED_MODULE_1__["ErrorComponent"],
    },
];
class AppRoutingModule {
}
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdefineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forRoot(routes, { useHash: true, scrollPositionRestoration: 'enabled' })], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] }); })();


/***/ }),

/***/ "wmkW":
/*!**************************************************************!*\
  !*** ./src/app/pages/poll-results/poll-results.component.ts ***!
  \**************************************************************/
/*! exports provided: PollResultsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PollResultsComponent", function() { return PollResultsComponent; });
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash */ "LvDl");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var src_app_services_socket_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/socket.service */ "5U9e");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var primeng_chart__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! primeng/chart */ "I5S5");
/* harmony import */ var _cmps_share_share_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../cmps/share/share.component */ "V2ZH");
/* harmony import */ var _cmps_poll_comments_poll_comments_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../cmps/poll-comments/poll-comments.component */ "AQiE");








function PollResultsComponent_div_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "span", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "span", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](7, "span", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const option_r2 = ctx.$implicit;
    const i_r3 = ctx.index;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("", option_r2.txt, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate2"]("", ctx_r0.getOptionPrecent(option_r2.votes) + "%", "", " (" + option_r2.votes + " votes)", "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵstyleProp"]("background-color", ctx_r0.colors[i_r3])("width", ctx_r0.getOptionPrecent(option_r2.votes) + "%");
} }
function PollResultsComponent_poll_comments_19_Template(rf, ctx) { if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "poll-comments", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("updatePoll", function PollResultsComponent_poll_comments_19_Template_poll_comments_updatePoll_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r5); const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r4.onUpdatePoll($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("poll", ctx_r1.poll);
} }
const _c0 = function (a1) { return ["/poll/", a1]; };
class PollResultsComponent {
    constructor(route, router, socketService) {
        this.route = route;
        this.router = router;
        this.socketService = socketService;
    }
    ngOnInit() {
        this.route.data.subscribe((data) => {
            if (!data.poll)
                this.router.navigateByUrl('/404');
            this.poll = data.poll;
            this.socketService.on('connection');
            this.socketService.emit('join poll', data.poll._id);
            this.socketService.on('poll updated').subscribe((updatedPoll) => {
                this.poll = updatedPoll;
                this.populateResultsChart();
            });
        });
        this.getCountriesData();
        this.populateColors();
        this.populateResultsChart();
        this.populateCountriesChart();
    }
    getScreenSize() {
        this.scrWidth = window.innerWidth;
    }
    populateResultsChart() {
        const dataToShow = this.voteCount;
        this.data = {
            labels: dataToShow ? this.optionsLabelNames : ['No data yet!'],
            datasets: [
                {
                    data: dataToShow || ['100'],
                    backgroundColor: this.colors,
                },
            ],
        };
        this.options = {
            legend: {
                display: false,
            },
            title: {
                text: 'Votes',
                display: true,
            },
            responsive: true,
            maintainAspectRatio: true,
        };
    }
    populateCountriesChart() {
        const dataToShow = this.countriesCount;
        this.countriesChartData = {
            labels: dataToShow ? this.countriesLabels : ['No data yet!'],
            datasets: [
                {
                    data: dataToShow || ['Unknown'],
                    backgroundColor: this.colors,
                },
            ],
        };
        this.countriesOptions = {
            legend: {
                display: false,
            },
            title: {
                text: 'Voters by country',
                display: true,
            },
        };
    }
    getOptionPrecent(optionVotes) {
        const precent = (optionVotes / this.poll.totalVotes) * 100;
        if (!precent)
            return 0;
        return parseFloat('' + precent).toFixed(2);
    }
    onUpdatePoll(updatedPoll) {
        this.poll = updatedPoll;
    }
    getCountriesData() {
        const voters = this.sortedPollByOptionsDescending.voters;
        const countries = [];
        for (const key in voters) {
            countries.push(voters[key]);
        }
        const countriesCountMap = {};
        countries.forEach((country) => {
            countriesCountMap[country]
                ? (countriesCountMap[country] += 1)
                : (countriesCountMap[country] = 1);
        });
        const labels = [];
        const count = [];
        for (const country in countriesCountMap) {
            labels.push(country);
            count.push(countriesCountMap[country]);
        }
        this.countriesLabels = labels;
        this.countriesCount = count;
    }
    get sortedPollByOptionsDescending() {
        const pollCopy = Object(lodash__WEBPACK_IMPORTED_MODULE_0__["cloneDeep"])(this.poll);
        pollCopy.options.sort((a, b) => {
            return b.votes - a.votes;
        });
        return pollCopy;
    }
    get optionsLabelNames() {
        const labelNames = this.sortedPollByOptionsDescending.options.map((option) => option.txt);
        return labelNames;
    }
    get voteCount() {
        let voteCount = this.sortedPollByOptionsDescending.options.map((option) => {
            return option.votes;
        });
        if (voteCount.every((item) => item === 0)) {
            return false;
        }
        return voteCount;
    }
    get chartSize() {
        if ('' + this.scrWidth > '1080') {
            return '285px';
        }
        else {
            return '90vw';
        }
    }
    populateColors() {
        this.colors = [
            '#FFCE56',
            '#36A2EB',
            '#aed987',
            '#ef8250',
            '#2196f3',
            '#009688',
            '#ff9800',
            '#d45087',
            '#2f4b7c',
            '#63b179',
            '#ffa600',
            '#e4604e',
            '#3f51b5',
            '#665191',
            '#03a9f4',
            '#ffff9d',
            '#ff5722',
            '#00876c',
            '#fee17e',
            '#003f5c',
            '#d43d51',
            '#f7a258',
            '#e91e63',
            '#673ab7',
            '#fcc267',
            '#ff7c43',
            '#f44336',
            '#9c27b0',
            '#00bcd4',
            '#88c580',
            '#795548',
            '#f95d6a',
            '#ffeb3b',
            '#4caf50',
            '#3d9c73',
            '607d8b',
            '#a05195',
            '#d6ec91',
        ];
    }
}
PollResultsComponent.ɵfac = function PollResultsComponent_Factory(t) { return new (t || PollResultsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_services_socket_service__WEBPACK_IMPORTED_MODULE_3__["SocketService"])); };
PollResultsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: PollResultsComponent, selectors: [["poll-results"]], hostBindings: function PollResultsComponent_HostBindings(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("resize", function PollResultsComponent_resize_HostBindingHandler($event) { return ctx.getScreenSize($event); }, false, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresolveWindow"]);
    } }, decls: 20, vars: 13, consts: [[1, "results", "flex", "column", "align-center"], [1, "heading", "flex", "column", "align-center"], [1, "votes-count"], [1, "graphical-info", "flex", "justify-center"], [1, "text-info", "flex", "column", "justify-center", "align-center"], ["class", "container", 4, "ngFor", "ngForOf"], [1, "charts", "flex"], [1, "votes-chart"], ["type", "pie", "height", "30vh", 3, "data", "width", "options"], [1, "countries-chart"], ["type", "doughnut", "height", "30vh", 3, "data", "width", "options"], [1, "go-back"], [1, "back-btn", "regular-btn", 3, "routerLink"], [1, "info"], [3, "poll", "updatePoll", 4, "ngIf"], [1, "container"], [1, "option-heading", "flex", "space-between"], [1, "option-txt"], [1, "option-percent"], [1, "progress-bar", "flex", "align-center"], [1, "progress-percent"], [3, "poll", "updatePoll"]], template: function PollResultsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "section", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "span", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "section", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](8, PollResultsComponent_div_8_Template, 8, 7, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](11, "p-chart", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](13, "p-chart", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](14, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "button", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](16, "Go back to poll");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "section", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](18, "share");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](19, PollResultsComponent_poll_comments_19_Template, 1, 1, "poll-comments", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.poll.title);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("", ctx.poll.totalVotes ? ctx.poll.totalVotes : 0, " votes");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.sortedPollByOptionsDescending.options);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("data", ctx.data)("width", ctx.chartSize)("options", ctx.options);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("data", ctx.countriesChartData)("width", ctx.chartSize)("options", ctx.countriesOptions);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](11, _c0, ctx.poll._id));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.poll.isComments);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], primeng_chart__WEBPACK_IMPORTED_MODULE_5__["UIChart"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLink"], _cmps_share_share_component__WEBPACK_IMPORTED_MODULE_6__["ShareComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _cmps_poll_comments_poll_comments_component__WEBPACK_IMPORTED_MODULE_7__["PollCommentsComponent"]], styles: [".results[_ngcontent-%COMP%] {\n  width: 1140px;\n  min-height: 50vh;\n  margin: 0 auto;\n  padding-top: 30px;\n}\n.results[_ngcontent-%COMP%]   .heading[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-size: 4rem;\n  font-family: Quicksand-Bold, sans-serif;\n  font-weight: 400;\n  margin-bottom: 3px;\n  text-align: center;\n}\n@media (max-width: 1080px) {\n  .results[_ngcontent-%COMP%]   .heading[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n    font-size: 3rem;\n    margin-bottom: 8px;\n  }\n}\n.results[_ngcontent-%COMP%]   .heading[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-size: 1.3rem;\n}\n.results[_ngcontent-%COMP%]   .graphical-info[_ngcontent-%COMP%] {\n  width: 100%;\n  margin-bottom: 15vh;\n}\n.results[_ngcontent-%COMP%]   .graphical-info[_ngcontent-%COMP%]   .text-info[_ngcontent-%COMP%] {\n  width: 50%;\n  margin-bottom: 20px;\n}\n.results[_ngcontent-%COMP%]   .graphical-info[_ngcontent-%COMP%]   .text-info[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%] {\n  width: 100%;\n}\n.results[_ngcontent-%COMP%]   .graphical-info[_ngcontent-%COMP%]   .text-info[_ngcontent-%COMP%]   .option-heading[_ngcontent-%COMP%] {\n  margin-bottom: 4px;\n}\n.results[_ngcontent-%COMP%]   .graphical-info[_ngcontent-%COMP%]   .text-info[_ngcontent-%COMP%]   .option-heading[_ngcontent-%COMP%]   .option-txt[_ngcontent-%COMP%] {\n  align-self: flex-start;\n  font-family: Quicksand-SemiBold, sans-serif;\n  font-size: 1.2rem;\n}\n.results[_ngcontent-%COMP%]   .graphical-info[_ngcontent-%COMP%]   .text-info[_ngcontent-%COMP%]   .option-heading[_ngcontent-%COMP%]   .option-percent[_ngcontent-%COMP%] {\n  align-self: flex-end;\n}\n.results[_ngcontent-%COMP%]   .graphical-info[_ngcontent-%COMP%]   .text-info[_ngcontent-%COMP%]   .progress-bar[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 15px;\n  background-color: #ededed;\n  border: 1px solid #ccc;\n  margin-bottom: 3px;\n}\n.results[_ngcontent-%COMP%]   .graphical-info[_ngcontent-%COMP%]   .text-info[_ngcontent-%COMP%]   .progress-bar[_ngcontent-%COMP%]   .progress-percent[_ngcontent-%COMP%] {\n  display: inline-block;\n  height: 100%;\n}\n.results[_ngcontent-%COMP%]   .graphical-info[_ngcontent-%COMP%]   .charts[_ngcontent-%COMP%] {\n  margin-left: 15px;\n}\n.results[_ngcontent-%COMP%]   .graphical-info[_ngcontent-%COMP%]   .charts[_ngcontent-%COMP%]   .votes-chart[_ngcontent-%COMP%] {\n  margin-bottom: 15px;\n}\n@media (max-width: 1080px) {\n  .results[_ngcontent-%COMP%]   .graphical-info[_ngcontent-%COMP%] {\n    flex-direction: column;\n    align-items: center;\n    margin-bottom: 20px;\n  }\n  .results[_ngcontent-%COMP%]   .graphical-info[_ngcontent-%COMP%]   .text-info[_ngcontent-%COMP%] {\n    width: 80%;\n  }\n  .results[_ngcontent-%COMP%]   .graphical-info[_ngcontent-%COMP%]   .charts[_ngcontent-%COMP%] {\n    flex-direction: column;\n    align-items: center;\n    margin-left: 0;\n  }\n}\n.results[_ngcontent-%COMP%]   .back-btn[_ngcontent-%COMP%] {\n  font-size: 1.1rem;\n  margin-bottom: 8px;\n}\n@media (max-width: 1200px) {\n  .results[_ngcontent-%COMP%] {\n    width: 90%;\n  }\n}\n.info[_ngcontent-%COMP%] {\n  width: 100%;\n  border-top: 1px solid rgba(0, 0, 0, 0.12);\n  padding-bottom: 160px;\n  background-image: url('layered-waves-haikei.svg');\n  background-position: bottom;\n  background-repeat: no-repeat;\n  background-size: cover;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxwb2xsLXJlc3VsdHMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUE7RUFDSSxhQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0VBQ0EsaUJBQUE7QUFESjtBQUdRO0VBQ0ksZUFBQTtFQUNBLHVDQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0FBRFo7QUFHWTtFQVBKO0lBUVEsZUFBQTtJQUNBLGtCQUFBO0VBQWQ7QUFDRjtBQUVRO0VBQ0ksaUJBQUE7QUFBWjtBQUlJO0VBQ0ksV0FBQTtFQUNBLG1CQUFBO0FBRlI7QUFHUTtFQUNJLFVBQUE7RUFDQSxtQkFBQTtBQURaO0FBRVk7RUFDSSxXQUFBO0FBQWhCO0FBRVk7RUFDSSxrQkFBQTtBQUFoQjtBQUNnQjtFQUNJLHNCQUFBO0VBQ0EsMkNBQUE7RUFDQSxpQkFBQTtBQUNwQjtBQUNnQjtFQUNJLG9CQUFBO0FBQ3BCO0FBRVk7RUFDSSxXQUFBO0VBQ0EsWUFBQTtFQUNBLHlCQUFBO0VBQ0Esc0JBQUE7RUFDQSxrQkFBQTtBQUFoQjtBQUNnQjtFQUNJLHFCQUFBO0VBQ0EsWUFBQTtBQUNwQjtBQUdRO0VBQ0ksaUJBQUE7QUFEWjtBQUVZO0VBQ0ksbUJBQUE7QUFBaEI7QUFJUTtFQXZDSjtJQXdDUSxzQkFBQTtJQUNBLG1CQUFBO0lBQ0EsbUJBQUE7RUFEVjtFQUVVO0lBQ0ksVUFBQTtFQUFkO0VBRVU7SUFDSSxzQkFBQTtJQUNBLG1CQUFBO0lBQ0EsY0FBQTtFQUFkO0FBQ0Y7QUFJSTtFQUNJLGlCQUFBO0VBQ0Esa0JBQUE7QUFGUjtBQU1JO0VBbkZKO0lBb0ZRLFVBQUE7RUFITjtBQUNGO0FBS0E7RUFDSSxXQUFBO0VBQ0EseUNBQUE7RUFDQSxxQkFBQTtFQUNBLGlEQUFBO0VBQ0EsMkJBQUE7RUFDQSw0QkFBQTtFQUNBLHNCQUFBO0FBRkoiLCJmaWxlIjoicG9sbC1yZXN1bHRzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCBcIi4uLy4uLy4uL2Fzc2V0cy9zdHlsZXMvc2V0dXAvdmFyaWFibGVzXCI7XHJcbkBpbXBvcnQgXCIuLi8uLi8uLi9hc3NldHMvc3R5bGVzL3NldHVwL2Z1bmN0aW9uc1wiO1xyXG4ucmVzdWx0cyB7XHJcbiAgICB3aWR0aDogMTE0MHB4O1xyXG4gICAgbWluLWhlaWdodDogNTB2aDtcclxuICAgIG1hcmdpbjogMCBhdXRvO1xyXG4gICAgcGFkZGluZy10b3A6IDMwcHg7XHJcbiAgICAuaGVhZGluZyB7XHJcbiAgICAgICAgaDIge1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDRyZW07XHJcbiAgICAgICAgICAgIGZvbnQtZmFtaWx5OiBRdWlja3NhbmQtQm9sZCwgc2Fucy1zZXJpZjtcclxuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogM3B4O1xyXG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcblxyXG4gICAgICAgICAgICBAbWVkaWEgKG1heC13aWR0aDogMTA4MHB4KSB7XHJcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDNyZW07XHJcbiAgICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiA4cHg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgc3BhbiB7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMS4zcmVtO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAuZ3JhcGhpY2FsLWluZm8ge1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDE1dmg7XHJcbiAgICAgICAgLnRleHQtaW5mbyB7XHJcbiAgICAgICAgICAgIHdpZHRoOiA1MCU7XHJcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XHJcbiAgICAgICAgICAgIC5jb250YWluZXIge1xyXG4gICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLm9wdGlvbi1oZWFkaW5nIHtcclxuICAgICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDRweDtcclxuICAgICAgICAgICAgICAgIC5vcHRpb24tdHh0IHtcclxuICAgICAgICAgICAgICAgICAgICBhbGlnbi1zZWxmOiBmbGV4LXN0YXJ0O1xyXG4gICAgICAgICAgICAgICAgICAgIGZvbnQtZmFtaWx5OiBRdWlja3NhbmQtU2VtaUJvbGQsIHNhbnMtc2VyaWY7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxLjJyZW07XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAub3B0aW9uLXBlcmNlbnQge1xyXG4gICAgICAgICAgICAgICAgICAgIGFsaWduLXNlbGY6IGZsZXgtZW5kO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC5wcm9ncmVzcy1iYXIge1xyXG4gICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDE1cHg7XHJcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBkYXJrZW4oJGJnLWNvbG9yLCA1JSk7XHJcbiAgICAgICAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjY2NjO1xyXG4gICAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogM3B4O1xyXG4gICAgICAgICAgICAgICAgLnByb2dyZXNzLXBlcmNlbnQge1xyXG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgLmNoYXJ0cyB7XHJcbiAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiAxNXB4O1xyXG4gICAgICAgICAgICAudm90ZXMtY2hhcnQge1xyXG4gICAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMTVweDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgQG1lZGlhIChtYXgtd2lkdGg6IDEwODBweCkge1xyXG4gICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xyXG4gICAgICAgICAgICAudGV4dC1pbmZvIHtcclxuICAgICAgICAgICAgICAgIHdpZHRoOiA4MCU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLmNoYXJ0cyB7XHJcbiAgICAgICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiAwO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC5iYWNrLWJ0biB7XHJcbiAgICAgICAgZm9udC1zaXplOiAxLjFyZW07XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogOHB4O1xyXG5cclxuICAgIH1cclxuXHJcbiAgICBAbWVkaWEgKG1heC13aWR0aDogMTIwMHB4KSB7XHJcbiAgICAgICAgd2lkdGg6IDkwJTtcclxuICAgIH1cclxufVxyXG4uaW5mbyB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGJvcmRlci10b3A6IDFweCBzb2xpZCByZ2JhKDAsIDAsIDAsIDAuMTIpO1xyXG4gICAgcGFkZGluZy1ib3R0b206IDE2MHB4O1xyXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiLi4vLi4vLi4vYXNzZXRzL2ltZ3MvbGF5ZXJlZC13YXZlcy1oYWlrZWkuc3ZnXCIpO1xyXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogYm90dG9tO1xyXG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbn1cclxuIl19 */"] });


/***/ }),

/***/ "y+ua":
/*!************************************************!*\
  !*** ./src/app/pages/error/error.component.ts ***!
  \************************************************/
/*! exports provided: ErrorComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ErrorComponent", function() { return ErrorComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");


class ErrorComponent {
    constructor() { }
    ngOnInit() {
    }
}
ErrorComponent.ɵfac = function ErrorComponent_Factory(t) { return new (t || ErrorComponent)(); };
ErrorComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ErrorComponent, selectors: [["error"]], decls: 12, vars: 0, consts: [[1, "error"], [1, "astronaut"], [1, "numbers"], [1, "first-number"], [1, "last-number"], [1, "text", "flex", "column", "justify-center", "align-center"], ["routerLink", "/poll", 1, "submit-btn"]], template: function ErrorComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "main", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "span", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Oops! Looks like you are lost!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Take me back");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLink"]], styles: [".error[_ngcontent-%COMP%] {\n  height: 100vh;\n  background-image: url('Sea of Clouds-10s-1536px.svg');\n  background-size: cover;\n  background-position: center;\n  background-repeat: no-repeat;\n  position: relative;\n  z-index: 4;\n}\n.error[_ngcontent-%COMP%]   .astronaut[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 45%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  background-image: url('astronaut.svg');\n  background-position: center;\n  background-size: cover;\n  height: 300px;\n  width: 300px;\n  z-index: 5;\n}\n.error[_ngcontent-%COMP%]   .astronaut[_ngcontent-%COMP%]   .numbers[_ngcontent-%COMP%] {\n  position: relative;\n  z-index: 3;\n  color: #dd4040;\n  font-family: Dosis-ExtraBold, sans-serif;\n  text-shadow: -2px 4px 0 rgba(0, 0, 0, 0.3);\n  transform: rotate(350deg);\n}\n.error[_ngcontent-%COMP%]   .astronaut[_ngcontent-%COMP%]   .numbers[_ngcontent-%COMP%]   .first-number[_ngcontent-%COMP%], .error[_ngcontent-%COMP%]   .astronaut[_ngcontent-%COMP%]   .numbers[_ngcontent-%COMP%]   .last-number[_ngcontent-%COMP%] {\n  position: relative;\n  font-size: 10rem;\n  top: -8%;\n}\n.error[_ngcontent-%COMP%]   .astronaut[_ngcontent-%COMP%]   .numbers[_ngcontent-%COMP%]   .last-number[_ngcontent-%COMP%] {\n  left: 57%;\n}\n@media (max-width: 460px) {\n  .error[_ngcontent-%COMP%]   .astronaut[_ngcontent-%COMP%] {\n    top: 55%;\n  }\n}\n.error[_ngcontent-%COMP%]   .text[_ngcontent-%COMP%] {\n  height: 35vh;\n}\n.error[_ngcontent-%COMP%]   .text[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-size: 5rem;\n  margin-bottom: 1rem;\n  font-size: Quicksand-Bold, sans-serif;\n  text-shadow: -0.0375em 0 0 rgba(48, 48, 48, 0.1);\n  color: #dd4040;\n}\n@media (max-width: 980px) {\n  .error[_ngcontent-%COMP%]   .text[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n    font-size: 4rem;\n    text-align: center;\n  }\n}\n@media (max-width: 460px) {\n  .error[_ngcontent-%COMP%]   .text[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n    font-size: 3.5rem;\n    text-align: center;\n  }\n}\n.error[_ngcontent-%COMP%]   .text[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  font-size: 2rem;\n  padding: 10px 20px;\n}\n@media (max-width: 980px) {\n  .error[_ngcontent-%COMP%]   .text[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n    font-size: 1.8rem;\n  }\n}\n@media (max-width: 460px) {\n  .error[_ngcontent-%COMP%]   .text[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n    font-size: 1.5rem;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxlcnJvci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGFBQUE7RUFDQSxxREFBQTtFQUNBLHNCQUFBO0VBQ0EsMkJBQUE7RUFDQSw0QkFBQTtFQUNBLGtCQUFBO0VBQ0EsVUFBQTtBQUNKO0FBQ0k7RUFDSSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxTQUFBO0VBQ0EsZ0NBQUE7RUFDQSxzQ0FBQTtFQUNBLDJCQUFBO0VBQ0Esc0JBQUE7RUFDQSxhQUFBO0VBQ0EsWUFBQTtFQUNBLFVBQUE7QUFDUjtBQUFRO0VBQ0ksa0JBQUE7RUFDQSxVQUFBO0VBQ0EsY0FBQTtFQUNBLHdDQUFBO0VBQ0EsMENBQUE7RUFDQSx5QkFBQTtBQUVaO0FBRFk7O0VBRUksa0JBQUE7RUFDQSxnQkFBQTtFQUNBLFFBQUE7QUFHaEI7QUFBWTtFQUNJLFNBQUE7QUFFaEI7QUFFUTtFQTlCSjtJQStCUSxRQUFBO0VBQ1Y7QUFDRjtBQUNJO0VBQ0ksWUFBQTtBQUNSO0FBQVE7RUFDSSxlQUFBO0VBQ0EsbUJBQUE7RUFDQSxxQ0FBQTtFQUNBLGdEQUFBO0VBQ0EsY0FBQTtBQUVaO0FBQVk7RUFQSjtJQVFRLGVBQUE7SUFDQSxrQkFBQTtFQUdkO0FBQ0Y7QUFEWTtFQVpKO0lBYVEsaUJBQUE7SUFDQSxrQkFBQTtFQUlkO0FBQ0Y7QUFGUTtFQUNJLGVBQUE7RUFDQSxrQkFBQTtBQUlaO0FBRlk7RUFKSjtJQUtRLGlCQUFBO0VBS2Q7QUFDRjtBQUpZO0VBUEo7SUFRUSxpQkFBQTtFQU9kO0FBQ0YiLCJmaWxlIjoiZXJyb3IuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZXJyb3Ige1xyXG4gICAgaGVpZ2h0OiAxMDB2aDtcclxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi4uLy4uLy4uL2Fzc2V0cy9pbWdzL1NlYVxcIG9mXFwgQ2xvdWRzLTEwcy0xNTM2cHguc3ZnXCIpO1xyXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcclxuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICB6LWluZGV4OiA0O1xyXG5cclxuICAgIC5hc3Ryb25hdXQge1xyXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICB0b3A6IDQ1JTtcclxuICAgICAgICBsZWZ0OiA1MCU7XHJcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XHJcbiAgICAgICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiLi4vLi4vLi4vYXNzZXRzL2ltZ3MvYXN0cm9uYXV0LnN2Z1wiKTtcclxuICAgICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XHJcbiAgICAgICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuICAgICAgICBoZWlnaHQ6IDMwMHB4O1xyXG4gICAgICAgIHdpZHRoOiAzMDBweDtcclxuICAgICAgICB6LWluZGV4OiA1O1xyXG4gICAgICAgIC5udW1iZXJzIHtcclxuICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgICAgICB6LWluZGV4OiAzO1xyXG4gICAgICAgICAgICBjb2xvcjogI2RkNDA0MDtcclxuICAgICAgICAgICAgZm9udC1mYW1pbHk6IERvc2lzLUV4dHJhQm9sZCwgc2Fucy1zZXJpZjtcclxuICAgICAgICAgICAgdGV4dC1zaGFkb3c6IC0ycHggNHB4IDAgcmdiYSgwLCAwLCAwLCAwLjMpO1xyXG4gICAgICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgzNTBkZWcpO1xyXG4gICAgICAgICAgICAuZmlyc3QtbnVtYmVyLFxyXG4gICAgICAgICAgICAubGFzdC1udW1iZXIge1xyXG4gICAgICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxMHJlbTtcclxuICAgICAgICAgICAgICAgIHRvcDogLTglO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAubGFzdC1udW1iZXIge1xyXG4gICAgICAgICAgICAgICAgbGVmdDogNTclO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBAbWVkaWEgKG1heC13aWR0aDogNDYwcHgpIHtcclxuICAgICAgICAgICAgdG9wOiA1NSU7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgLnRleHQge1xyXG4gICAgICAgIGhlaWdodDogMzV2aDtcclxuICAgICAgICBoMyB7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogNXJlbTtcclxuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMXJlbTtcclxuICAgICAgICAgICAgZm9udC1zaXplOiBRdWlja3NhbmQtQm9sZCwgc2Fucy1zZXJpZjtcclxuICAgICAgICAgICAgdGV4dC1zaGFkb3c6IC0wLjAzNzVlbSAwIDAgcmdiYSg0OCwgNDgsIDQ4LCAwLjEpO1xyXG4gICAgICAgICAgICBjb2xvcjogI2RkNDA0MDtcclxuXHJcbiAgICAgICAgICAgIEBtZWRpYSAobWF4LXdpZHRoOiA5ODBweCkge1xyXG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiA0cmVtO1xyXG4gICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBAbWVkaWEgKG1heC13aWR0aDogNDYwcHgpIHtcclxuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMy41cmVtO1xyXG4gICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGJ1dHRvbiB7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMnJlbTtcclxuICAgICAgICAgICAgcGFkZGluZzogMTBweCAyMHB4O1xyXG5cclxuICAgICAgICAgICAgQG1lZGlhIChtYXgtd2lkdGg6IDk4MHB4KSB7XHJcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDEuOHJlbTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBAbWVkaWEgKG1heC13aWR0aDogNDYwcHgpIHtcclxuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMS41cmVtO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbiJdfQ== */"], changeDetection: 0 });


/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "AytR");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["platformBrowser"]()
    .bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch((err) => console.error(err));


/***/ }),

/***/ "zn8P":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "zn8P";

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map