import { Component, OnInit } from '@angular/core';
import { GoogleLoginProvider, SocialAuthService, SocialUser } from 'angularx-social-login';
import { SocialloginService } from 'src/app/services/sociallogin.service';


@Component({
  selector: 'app-sociallogin',
  templateUrl: './sociallogin.component.html',
  styleUrls: ['./sociallogin.component.css']
})
export class SocialloginComponent implements OnInit {
  user!: SocialUser;
  isLogin!: boolean; // false
  constructor(private authService: SocialAuthService,
    private social: SocialloginService, private socialAuthService: SocialAuthService) { }


    ngOnInit(): void {
      this.authService.authState.subscribe(
        data => {
          this.isLogin = (data != null);
        }
      );
    }


    // loginWithGoogle(): void {
    //   this.socialAuthService.signIn(GoogleLoginProvider.PROVIDER_ID);
    // }




}
