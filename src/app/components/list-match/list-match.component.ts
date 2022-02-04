import { NgxSpinnerService } from 'ngx-spinner';
import { Router } from '@angular/router';
import { ListMatchService } from './../../services/list-match.service';
import { Component, OnInit } from '@angular/core';
import { Match } from 'src/app/model/match';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-list-match',
  templateUrl: './list-match.component.html',
  styleUrls: ['./list-match.component.css']
})
export class ListMatchComponent implements OnInit {
matchs:Match[] = []
name: string = "";
  constructor(private listMatchService:ListMatchService, private router:Router,private spinner: NgxSpinnerService) { 
    this.spinner.show();

    setTimeout(() => {
      /** spinner ends after 5 seconds */
      this.spinner.hide();
    }, 500);
  }

  ngOnInit(): void {

    this.listMatchService.getAll().subscribe((res:any) =>{

      this.matchs = res
console.log(this.matchs)

     })
  }

  deleteMatch( id:String){

    Swal.fire({

      title: 'Are you sure?',
      text: 'You will not be able to recover this arbitre  file!',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes, delete it!',
      cancelButtonText: 'No, keep it'

    }).then((result) => {
      if (result.isConfirmed) {

        this.listMatchService.deleteMatch(id).subscribe(res=> {


          console.log(res)
        })



        this.router.navigate(['/'])
        // this.flash.show("client delete succesful")
        // this.flash.show('client delet succesful',{cssClass:'alert-primary',timeout:5000})
        Swal.fire({

          title:'Deleted!',
          text:'Your arbitre file has been deleted.',
          icon:'success',
          timer: 3000
        }
        )

      }
    })

  }

  Search(){
    if(this.name == ""){
      this.ngOnInit();
    }else{
      this.matchs = this.matchs.filter((res) => {
        return (res.date +" "+ res.heur).toLocaleLowerCase().match(this.name.toLocaleLowerCase())
      })
    }

  }
}
