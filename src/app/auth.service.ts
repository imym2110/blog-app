import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  Authenticate(arg0: () => void) {
    throw new Error('Method not implemented.');
  }
  isAuthenticate: boolean = false;

  login(email: string, password: string): Observable<boolean> {
    if (email === 'abc@gmail.com' && password === 'abc') {
      this.isAuthenticate = true;
      return of(true);
    }
    else{
      this.isAuthenticate = false;
    return of(false);
    }
  }
}                                                           