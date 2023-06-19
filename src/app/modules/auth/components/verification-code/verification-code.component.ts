import { Component, OnDestroy, OnInit } from '@angular/core';
import { strict } from 'assert';
import { Subscription, take, timer } from 'rxjs';

@Component({
  selector: 'app-verification-code',
  templateUrl: './verification-code.component.html',
  styleUrls: ['./verification-code.component.css']
})
export class VerificationCodeComponent implements OnInit {

  countDown: any | Subscription;
  counter = 60;
  tick = 1000;
  constructor() {
    this.countDown = ''
  }

  ngOnInit(): void {
    this.countDown = timer(0, this.tick)
    .pipe(take(this.counter))
    .subscribe(() => {
      --this.counter;
      // console.log(this.counter);
      if (this.counter == 0) {
        this.countDown.unsubscribe();
      }
    });
  }

  transform(value: number): string {
    const minutes: number = Math.floor(value / 60);
    return (
      ('00' + minutes).slice(-2) +
      ':' +
      ('00' + Math.floor(value - minutes * 60)).slice(-2)
    );
  }


}
