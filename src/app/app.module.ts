


import { SocialloginComponent } from './components/sociallogin/sociallogin.component';
import { NgxSpinnerModule } from 'ngx-spinner';

import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';

import { NavbarComponent } from './components/partials/navbar/navbar.component';
import { PageNotFoundComponent } from './components/partials/page-not-found/page-not-found.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';

import { JwtInterceptor } from './services/jwt.interceptor';

import { HomeComponent } from './home/home.component';


import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ArbitreComponent } from './components/arbitre/arbitre.component'

import { SocialLoginModule, SocialAuthServiceConfig } from 'angularx-social-login';
import {
  GoogleLoginProvider,
  FacebookLoginProvider
} from 'angularx-social-login';
import { ChangePassComponent } from './components/change-pass/change-pass.component';
import { FlashMessagesModule } from 'flash-messages-angular';
import { AddArbitreComponent } from './components/add-arbitre/add-arbitre.component';
import { EditAritreComponent } from './components/edit-aritre/edit-aritre.component';
import {NgxPaginationModule} from 'ngx-pagination';
import { CommonModule } from '@angular/common';
import { ListMatchComponent } from './components/list-match/list-match.component';
import { AddMatchComponent } from './components/add-match/add-match.component';
import { EditMatchComponent } from './components/edit-match/edit-match.component';

@NgModule({
  declarations: [
    AppComponent,

    LoginComponent,
    RegisterComponent,

    NavbarComponent,
    PageNotFoundComponent,

    HomeComponent,
     ArbitreComponent,
     SocialloginComponent,
     ChangePassComponent,
     AddArbitreComponent,
     EditAritreComponent,
     ListMatchComponent,
     AddMatchComponent,
     EditMatchComponent,




  ],
  imports: [
    BrowserModule,
    AppRoutingModule,   ReactiveFormsModule,
    HttpClientModule,
    FormsModule, BrowserAnimationsModule,
    ToastrModule.forRoot(),
    NgxSpinnerModule,
    SocialLoginModule,



     FlashMessagesModule.forRoot(),
     NgxPaginationModule,
     CommonModule,



  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
  providers: [{

    provide: HTTP_INTERCEPTORS,
    useClass: JwtInterceptor,
    multi: true
  },

  {
    provide: 'SocialAuthServiceConfig',
    useValue: {
      autoLogin: false,
      providers: [
        {
          id: GoogleLoginProvider.PROVIDER_ID,
          provider: new GoogleLoginProvider(

            '24343793876-1pgnk360q6k0p6un0dpseduq5mdlmep8.apps.googleusercontent.com'
          )
        },
        {
          id: FacebookLoginProvider.PROVIDER_ID,
          provider: new FacebookLoginProvider('clientId')
        }
      ]
    } as SocialAuthServiceConfig,
  }
],
  bootstrap: [AppComponent]
})
export class AppModule { }
