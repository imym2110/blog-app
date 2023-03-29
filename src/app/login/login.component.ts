// import { Component, Input } from '@angular/core';
// import { FormControl, FormGroup, Validators } from '@angular/forms';
// import { Router } from '@angular/router';
// import { ToastrService } from 'ngx-toastr';



// @Component({
//   selector: 'app-login',
//   templateUrl: './login.component.html',
//   styleUrls: ['./login.component.scss'],

// })
// export class LoginComponent {
//   profileForm = new FormGroup({
//     email: new FormControl('', Validators.required),
//     password: new FormControl('', Validators.required),
//   });
//   constructor(
//     private router: Router, private toastr: ToastrService) {}
//   onSubmit(){  
//     console.warn(this.profileForm.value);
//     if (this.profileForm.value.email == "abc@gmail.com" && this.profileForm.value.password == "abc")
//     {
//       this.router.navigate(['/add']);
//     }
//     else{
//       this.toastr.error("Wrong Email or Password!");
//     }
//   }
// }
import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  Validators,
  FormControl,
} from '@angular/forms';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  isSubmitted: boolean = false;
  isValidUser: boolean = false;
  isLogOutFlag: boolean = false;

  isLoggedInFlag:boolean = false;
  form: FormGroup = new FormGroup({});
  
  constructor(
    private fb: FormBuilder,
    private router: Router,
    private authService: AuthService,
    private toast : ToastrService,
    private cookie : CookieService
  ) { }

  ngOnInit() {
    console.log('Authflag',this.authService?.isAuthenticate )

    if(this.authService.isAuthenticate === true)
    {
      this.isLoggedInFlag = true;
    }
    else
    {
      this.isLoggedInFlag = false
    }
    this.form = this.fb.group({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required]),
    });
  }
  
  logOut(){
    this.authService.isAuthenticate = false;
    this.isLogOutFlag = false;
    this.toast.success("Logged Out Successfully")
    this.router.navigate(['']);
    localStorage.removeItem('email')
    localStorage.removeItem('password')
  }

  onSubmit() {
    this.authService
      .login(this.form.value.email, this.form.value.password)
      .subscribe((data) => {
        if (data) {
          this.toast.success("Logged In Successfully")
          this.router.navigate(['/home']); 
        }
        
        this.isSubmitted = true;
        this.isValidUser = data; 
        this.isLogOutFlag = true;

        localStorage.setItem('email','abc@gmail.com')
        localStorage.setItem('password','abc')
      });
  }
}