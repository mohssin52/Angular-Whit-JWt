import { NgxSpinnerService } from 'ngx-spinner';
import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AcountService } from 'src/app/services/acount.service';
import { AuthService } from 'src/app/services/auth.service';
import { SignupService } from 'src/app/services/signup.service';
import { TokenService } from 'src/app/services/token.service';
import { UserService } from 'src/app/services/user.service';
import { Users } from './../../model/users';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  confirmPass="";

  users: Users[] = [];


  user = {

    firstname: "",
    lastname: "",

    email: "",

    password:"",
    admin:false
  };



  constructor(private signupService: SignupService, private toastr: ToastrService,
     private router: Router, private userService: UserService,private spinner: NgxSpinnerService) {
      this.spinner.show();

      setTimeout(() => {
        /** spinner ends after 5 seconds */
        this.spinner.hide();
      }, 500);
   }

  ngOnInit(): void {

  }

  createAccount(){
    this.signupService.newAccount(this.user).subscribe((res) => {
      this.router.navigateByUrl('/login')
      this.toastr.success('opération réussie', 'Message', {
        timeOut: 3000, closeButton : true, positionClass: 'toast-top-right'

      }



      )

  },(error) => {
    this.toastr.error('email existe déjà', 'Message', {
     timeOut: 3000, closeButton : true, positionClass: 'toast-top-right'
   })
   console.log(error);
 });
  }

  backToLogin(){

    this.router.navigateByUrl('/login')
  }


}

