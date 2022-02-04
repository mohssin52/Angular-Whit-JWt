import { NgxSpinnerService } from 'ngx-spinner';
import { AuthService } from 'src/app/services/auth.service';
import { GoogleLoginProvider, SocialAuthService, SocialUser } from 'angularx-social-login';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { TokenService } from './../../services/token.service';
import { AcountService } from './../../services/acount.service';
import { SocialloginService } from 'src/app/services/sociallogin.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm = new FormGroup({
    email: new FormControl(null, [Validators.required]),
    password: new FormControl(null, [Validators.required, Validators.minLength(8)])
  });


  user!: SocialUser;
  isLogin!: boolean; // false
  constructor(private authService: SocialAuthService,
    private social: SocialloginService,
    private AuthService:AuthService ,private acountService :AcountService,private  router:Router,private tokenServices:TokenService,private spinner: NgxSpinnerService) { 
      this.spinner.show();

    setTimeout(() => {
      /** spinner ends after 5 seconds */
      this.spinner.hide();
    }, 500);
    }

  ngOnInit(): void {
    this.authService.authState.subscribe(
      data => {
        this.isLogin = (data != null);
      }
    );

  }
  login(){
    this.AuthService.login(this.loginForm.value)
    .subscribe(res =>{
this.handlResponse(res)
    })

  }
  handlResponse(res:any){
    this.tokenServices.handle(res)
    this.acountService.changeAuthStatus(true)
    this.router.navigateByUrl('/arbitre')
  }


  signInWithGoogle(): void {
    this.authService.signIn(GoogleLoginProvider.PROVIDER_ID).then(
      data => {
        this.social.loginWithGoogle(data.idToken).subscribe(
          (res:any) => {
            console.log(res);
          }
        );
        this.router.navigateByUrl('/arbitre')
      }
    );
  }
  goToCompte(){

    this.router.navigateByUrl('/regestre')
  }

}
