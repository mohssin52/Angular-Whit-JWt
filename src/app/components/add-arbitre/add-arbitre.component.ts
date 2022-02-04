import { NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';
import { Router } from '@angular/router';
import { FlashMessagesService } from 'flash-messages-angular';
import { Arbitre } from 'src/app/model/Arbitre';
import { Component, OnInit, ViewChild, ViewChildren } from '@angular/core';
import { ArbitreService } from 'src/app/services/arbitre.service';




@Component({
  selector: 'app-add-arbitre',
  templateUrl: './add-arbitre.component.html',
  styleUrls: ['./add-arbitre.component.css']
})


export class AddArbitreComponent implements OnInit {

// @ViewChildren('NgbdDatepicker') d: NgbDateStruct;
  arbitres!:Arbitre[]
  model!: NgbDateStruct;
   arbitre:Arbitre = {


    nom:"",
  nationalite:"",
  match : [
    {

    date: "",
  heur: ""
    }
  ]



  }
  constructor(private  arbitreService:ArbitreService,private flashMessag:FlashMessagesService,private router:Router) { }

  ngOnInit(): void {
  }


  onsubmit(){
    this.arbitreService.addArbitre(this.arbitre).subscribe ( (res:any) => {

    console.log(res)
    })

     return this.router.navigateByUrl('/')

      }

}
