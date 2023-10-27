import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable()
export class AuthGuardService  {
  constructor(
    public router: Router
  ) { }
  canActivate(): boolean {
    return !!localStorage.getItem('tokendata')? true: false
  }
}
