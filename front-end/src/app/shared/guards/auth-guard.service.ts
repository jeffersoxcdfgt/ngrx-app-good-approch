import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';

@Injectable()
export class AuthGuardService implements CanActivate {
  constructor(
    public router: Router
  ) { }
  canActivate(): boolean {
    const value = localStorage.getItem('tokendata') ?? ''
    const resp = JSON.parse(value)  

    if(resp?.responsedata?.todos?.length === 0){
      return false
    }
    return true;

  }
}
