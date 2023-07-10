import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import * as AOS from 'aos';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  contactForm: FormGroup;
  constructor(public formBuilder: FormBuilder) {
    this.contactForm = this.formBuilder.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      message: ['', [Validators.required, Validators.maxLength(250)]],
    });
  }
  ngOnInit(): void {
    console.log(this.contactForm.value);
    AOS.init();
    AOS.refresh();
  }
  Send() {
    console.log(this.contactForm.value);
  }
  calculate_age(dob: Date) {
    var diff_ms = Date.now() - dob.getTime();
    var age_dt = new Date(diff_ms);
    return Math.abs(age_dt.getUTCFullYear() - 1970);
  }
  age = this.calculate_age(new Date(1999, 2, 19));
}
