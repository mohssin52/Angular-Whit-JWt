import { NgxSpinnerService } from 'ngx-spinner';



import { FlashMessagesService } from 'flash-messages-angular';
import { Router, ActivatedRoute } from '@angular/router';
import { ListMatchService } from './../../services/list-match.service';
import { Component, OnInit } from '@angular/core';
import { Match } from 'src/app/model/match';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-edit-match',
  templateUrl: './edit-match.component.html',
  styleUrls: ['./edit-match.component.css']
})
export class EditMatchComponent implements OnInit {

  id: any;

match:Match = {
  matchId:"",


    date: "",
  heur: ""




  }

  constructor(private listMatchService:ListMatchService, private router:Router ,private route:ActivatedRoute,private Nrouter: Router, private flash:FlashMessagesService,private spinner: NgxSpinnerService) {

    this.spinner.show();

    setTimeout(() => {
      /** spinner ends after 5 seconds */
      this.spinner.hide();
    }, 500);

  }

  ngOnInit(): void {
  this.id= this.route.snapshot.params.matchId;
  this.listMatchService.getOneMatch(this.id).subscribe((res:any) => {
     this.match = res
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

        this.listMatchService.updateMatch(this.match).subscribe((res :Match) => {
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
