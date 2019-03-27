import { Component, OnInit } from '@angular/core';

import * as firebase from 'firebase/app';
import { Router } from '@angular/router';

import { AuthService } from '../services/auth-service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.page.html',
  styleUrls: ['./sign-up.page.scss'],
})

export class SignUpPage {

  constructor(public authService: AuthService,
              public router: Router) {}

  goBack(): void {
    this.router.navigateByUrl('');
  }

  registerUser(email: string, password: string): void {
    this.authService.registerUser(email, password);
    this.router.navigateByUrl('');
  }
}
