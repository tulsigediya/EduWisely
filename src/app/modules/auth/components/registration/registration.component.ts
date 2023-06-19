import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Route, Router } from '@angular/router';
import { Subject, takeUntil } from 'rxjs';
import { MustMatch } from 'src/app/directives/matchPassword.directive';
import { RegistrationService } from './registration.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css'],
})
export class RegistrationComponent implements OnInit {
  registerForm!: FormGroup;
  submitted = false;

  constructor(
    private formBuilder: FormBuilder,
    private _registrationService: RegistrationService,
    private router: Router
  ) {}

  ngOnInit() {
    this.registerForm = this.formBuilder.group(
      {
        mobileNumber: ['', Validators.required],
        userName: ['', Validators.required],
        email: ['', [Validators.required, Validators.email]],
        password: ['', [Validators.required, Validators.minLength(8)]],
        confirmPassword: ['', Validators.required],
      },
      {
         validator: MustMatch('password', 'confirmPassword')
      }
    );
  }
  get f() {
    return this.registerForm.controls;
  }

  destroy$: Subject<boolean> = new Subject<boolean>();

  onSubmit() {
    debugger;
    this.submitted = true;

    if (this.registerForm.invalid) {
      return;
    }
    var details = this.registerForm.value;
    var postdata = {
      ConfirmPassword : details.confirmPassword,
      Email: details.email,
      FullName : details.userName,
      Password : details.password,
      Phoneno : details.mobileNumber
    }
    this._registrationService
      .registrationDetails(postdata)
       .pipe(takeUntil(this.destroy$)).subscribe((data: any) => {
        debugger
        if (data.success) {
          this.router.navigate(['auth/verification'])
        }
        else
        {
        }
      });
  }

  onReset() {
    this.submitted = false;
    this.registerForm.reset();
  }
}
