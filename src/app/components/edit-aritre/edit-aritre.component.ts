import { Arbitre } from './../../model/Arbitre';

import { FlashMessagesService } from 'flash-messages-angular';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { ArbitreService } from 'src/app/services/arbitre.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-edit-aritre',
  templateUrl: './edit-aritre.component.html',
  styleUrls: ['./edit-aritre.component.css']
})
export class EditAritreComponent implements OnInit {
  id: any;

  arbitre:Arbitre = {
arbitreId:"",

    nom:"",
  nationalite:"",
  match : [
    {

    date: "",
  heur: ""
    }
  ]



  }

  constructor(private arbitr:ArbitreService, private router:Router ,private route:ActivatedRoute,private Nrouter: Router, private flash:FlashMessagesService) { }

  ngOnInit(): void {
  this.id = this.route.snapshot.params.arbitreId;
  this.arbitr.getOneArbitre(this.id).subscribe((res:any) => {
     this.arbitre = res
     console.log(res);

  }

  )




  }


  // onsubmit(){

  //   Swal.fire({
  //     title: 'Do you want to save the changes?',
  //     showDenyButton: true,
  //     showCancelButton: true,
  //     confirmButtonText: `Save`,
  //     denyButtonText: `Don't save`,
  //   }).then((result) => {
  //     this.arbitre.arbitreId= this.id
  //     this.arbitr.updateArbitre(this.arbitre).subscribe((res :Arbitre) => {
  //     })
  //       this.router.navigate(['/arbitre'])

  //       if (result.isConfirmed) {
  //         Swal.fire('Saved!', '', 'success')
  //       } else if (result.isDenied) {
  //         Swal.fire(
  //           'Changes are not saved', '', 'info'
  //           )
  //       }



  //     })



  //     }


      onsubmit(){

        Swal.fire({

          title: 'Do you want to save the changes?',
          showDenyButton: true,
          showCancelButton: true,
          confirmButtonText: `Save`,
          denyButtonText: `Don't save`,
        }).then((result) => {
          if (result.isConfirmed) {

            this.arbitr.updateArbitre(this.arbitre).subscribe((res :Arbitre) => {
            })



            this.router.navigate(['/'])
            // this.flash.show("client delete succesful")
            // this.flash.show('client delet succesful',{cssClass:'alert-primary',timeout:5000})
            if (result.isConfirmed) {
              Swal.fire('Saved!', '', 'success')
            } else if (result.isDenied) {
              Swal.fire(
                'Changes are not saved', '', 'info'
                )
            }


          }
        })

      }


}
