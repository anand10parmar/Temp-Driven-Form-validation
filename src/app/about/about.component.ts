import {Component} from '@angular/core';
import {ViewChild} from '@angular/core';

import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent {

  @ViewChild('f') signUpForm: NgForm;
  defaultQuestion = 'pet';
  answer = '';
  genders = ['male', 'female'];
  user = {
    name: '',
    email: '',
    secretQuestion: '',
    answer: '',
    gender: ''
  }
  submitStatus: Boolean = false;


  suggestUserName() {
    const suggestedName = 'Superuser';
    this.signUpForm.form.patchValue({
      userData: {
        name: suggestedName
      }
    });
  }

  // onSubmit(form: HTMLFontElement) {
  //   console.log(form);
  // }

  onSubmit() {
    this.submitStatus = true;
    this.user.name = this.signUpForm.value.userData.name;
    this.user.email = this.signUpForm.value.userData.email;
    this.user.secretQuestion = this.signUpForm.value.secret;
    this.user.answer = this.signUpForm.value.questionAnswer;
    this.user.gender = this.signUpForm.value.gender;


  }
}
