import { Router } from '@angular/router';
import { Users } from './../../model/users';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';
import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-change-pass',
  templateUrl: './change-pass.component.html',
  styleUrls: ['./change-pass.component.css']
})
export class ChangePassComponent implements OnInit {




  user!: Users;


  userUpd = {
    id: 0,
    userId : "",
    firstname: "",
    lastname: "",
    admin: false,

    email: "",
    password:"",
  };

  confirmPass="";

  changepass = {
    currentPass: "",
    newPass: ""
  }

  clearInputs(){
    this.confirmPass = "",
    this.user = {

      userId : "",
      firstname: "",
      lastname: "",
      admin: false,

      email: "",
      password:"",
    }
    };

  constructor(private userService: UserService, private toastr: ToastrService, private spinner: NgxSpinnerService) {
     this.spinner.show();

      setTimeout(() => {
        /** spinner ends after 5 seconds */
        this.spinner.hide();
      }, 500);
   }

  ngOnInit(): void {
    this.getUser();
  }

  getUser(){
    this.userService.getUser().subscribe((res : Users) =>{
      this.user = res;

    })
  }

  edit(user : any){
    this.user= user;
}

updateUser(user: any){
  this.userService.updateUser(user).subscribe((res: Users) => {
    this.getUser();
    this.clearInputs()
    this.toastr.success('opération réussie', 'Message', {
      timeOut: 3000, closeButton : true, positionClass: 'toast-top-right'
    })
  }
  ,(error) => {
    this.getUser();
    this.toastr.error('email existe déjà', 'Message', {
     timeOut: 3000, closeButton : true, positionClass: 'toast-top-right'
   })
   console.log(error);
 }
  );
}

  updateUserPass(){
    this.userService.updateUserPass(this.changepass).subscribe((res: any) => {

      this.toastr.success('opération réussie', 'Message', {
        timeOut: 3000, closeButton : true, positionClass: 'toast-top-right'
      })
    }
    ,(error) => {
      this.toastr.error('Erreur!', 'Message', {
       timeOut: 3000, closeButton : true, positionClass: 'toast-top-right'
     })
     console.log(error);
   }
    );
  }

  // user!: Users;


  // userUpd = {

  //   userId : "",
  //   firstname: "",
  //   lastname: "",
  //   admin: false,

  //   email: "",
  //   password:"",
  // };

  // confirmPass="";

  // changepass = {
  //   currentPass: "",
  //   newPass: ""
  // }

  // clearInputs(){
  //   this.confirmPass = "",
  //   this.user = {

  //     userId : "",
  //     firstname: "",
  //     lastname: "",
  //     admin: false,

  //     email: "",
  //     password:"",
  //   }
  //   };

  // constructor(private userService: UserService, private toastr: ToastrService, private spinner: NgxSpinnerService,private router:Router) {

  //  }

  // ngOnInit(): void {

  // }




  // updateUserPass(){
  //   this.userService.updateUserPass(this.changepass).subscribe((res: any) => {

  //     this.toastr.success('opération réussie', 'Message', {
  //       timeOut: 3000, closeButton : true, positionClass: 'toast-top-right'
  //     })
  //   }
  //   ,(error) => {
  //     this.toastr.error('Erreur!', 'Message', {
  //      timeOut: 3000, closeButton : true, positionClass: 'toast-top-right'
  //    })
  //    console.log(error);
  //  }
  //   );
  //   this.router.navigateByUrl('/arbitre')
  // }



}
