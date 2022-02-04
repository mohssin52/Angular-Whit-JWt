import { NgxSpinnerService } from 'ngx-spinner';
import { Match } from 'src/app/model/match';
import { Router } from '@angular/router';
import { FlashMessagesService } from 'flash-messages-angular';
import { ListMatchService } from './../../services/list-match.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-match',
  templateUrl: './add-match.component.html',
  styleUrls: ['./add-match.component.css']
})
export class AddMatchComponent implements OnInit {
  matchs!:Match[]

  match:Match = {

matchId:""
,
    date: "",
  heur: ""



  }
  constructor(private  listMatchService:ListMatchService,private flashMessag:FlashMessagesService,private router:Router
    ,private spinner: NgxSpinnerService) {
      this.spinner.show();

      setTimeout(() => {
        /** spinner ends after 5 seconds */
        this.spinner.hide();
      }, 500);
     }

  ngOnInit(): void {
  }


  onsubmit(){
    this.listMatchService.addMatch(this.match).subscribe ( (res:any) => {

    console.log(res)
    })

     return this.router.navigateByUrl('/')

      }
}
