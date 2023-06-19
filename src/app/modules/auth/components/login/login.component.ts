import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Subject, takeUntil } from 'rxjs';
import { LoginService } from './login.service';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup;
  submitted = false;
  constructor(
    private formBuilder: FormBuilder,
    private _loginService: LoginService,
    private router : Router
  ) {}

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      email: ['', Validators.required],
      password: ['', [Validators.required, Validators.minLength(8)]],
    });
  }
  get f() {
    return this.loginForm.controls;
  }

  destroy$: Subject<boolean> = new Subject<boolean>();
  onSubmit() {
    this.submitted = true;

    if (this.loginForm.invalid) {
      return;
    }
    var details = this.loginForm.value;
    var postdata = {
      Email: details.email,
      Password: details.password,
    };
    debugger;
    this._loginService.loginDetails(postdata).pipe(takeUntil(this.destroy$)).subscribe((data: any) => {
      debugger;
      if (data.success) {
        // this.router.navigate(['auth/verification'])
      }
    });
  }
}
