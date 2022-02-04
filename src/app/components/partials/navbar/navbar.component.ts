import { NgxSpinnerService } from 'ngx-spinner';
import { Component, OnInit } from '@angular/core';
import { AcountService } from 'src/app/services/acount.service';
import { TokenService } from 'src/app/services/token.service';
import { Router } from '@angular/router';

@Component({
  selector: 'navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  public loggedIn: boolean = false;
   CurrentUser!: null ;

  constructor(
    private account: AcountService,
    private Token: TokenService,
    private router:Router,private spinner: NgxSpinnerService

  ) {this.spinner.show();

    setTimeout(() => {
      /** spinner ends after 5 seconds */
      this.spinner.hide();
    }, 500); }

  ngOnInit() {
    this.account.authStatus.subscribe(value=> {
      this.loggedIn = value
      this.CurrentUser = this.Token.getInfos();
    });
  }

  logOut(){
    this.Token.remove()
    this.router.navigateByUrl('/login')
  }
}
