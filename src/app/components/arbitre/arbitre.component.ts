import { FlashMessagesService } from 'flash-messages-angular';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Arbitre } from 'src/app/model/Arbitre';
import { ArbitreService } from 'src/app/services/arbitre.service';
import Swal from 'sweetalert2';
import { NgxSpinnerService } from 'ngx-spinner';



@Component({
  selector: 'app-arbitre',
  templateUrl: './arbitre.component.html',
  styleUrls: ['./arbitre.component.css']
})
export class ArbitreComponent implements OnInit {
  totalLengh:any

  page:number = 1;
  arbitres: Arbitre[] =[]
  name: string = "";
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

  constructor(private arbitreService: ArbitreService, private spinner: NgxSpinnerService,private router:Router,private flash:FlashMessagesService) {
    this.spinner.show();

    setTimeout(() => {
      /** spinner ends after 5 seconds */
      this.spinner.hide();
    }, 500);
   }

  ngOnInit(): void {

    this.arbitreService.getAll().subscribe((res:any) =>{
     this.arbitres = res


     this.totalLengh = res.length



    }
    )

  }

  // deletearbitre(id:String){

  //   this.arbitreService.deleteArbitre(id).subscribe(res=> {


  //     console.log(res)
  //   })


  // }

  onsubmit(){
    this.arbitreService.addArbitre(this.arbitre).subscribe ( (res:any) => {

    console.log(res)
    })

     return this.router.navigateByUrl('/')

      }


  deleteArbitre( id:String){

    Swal.fire({

      title: 'Are you sure?',
      text: 'You will not be able to recover this arbitre  file!',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes, delete it!',
      cancelButtonText: 'No, keep it'

    }).then((result) => {
      if (result.isConfirmed) {

        this.arbitreService.deleteArbitre(id).subscribe(res=> {


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
    this.arbitres = this.arbitres.filter((res) => {
      return (res.nom +" "+ res.nationalite).toLocaleLowerCase().match(this.name.toLocaleLowerCase())
    })
  }

}


}
