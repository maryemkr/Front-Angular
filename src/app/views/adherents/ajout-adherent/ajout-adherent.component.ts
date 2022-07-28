import { HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';
import { AdherentServiceService } from './../../../services/adherent-service.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { EntrepriseService } from 'src/app/services/entreprise.service';
import { BureauxService } from 'src/app/services/bureaux.service';

@Component({
  selector: 'app-ajout-adherent',
  templateUrl: './ajout-adherent.component.html',
  styleUrls: ['./ajout-adherent.component.scss']
})
export class AjoutAdherentComponent implements OnInit {
  msgError=""
  pseudoError= document.querySelector('.pseudo.error')
  myForm:any
  dataArray: any = []
  dataArray2: any = []
  constructor(private adherent:AdherentServiceService , private route:Router , private formBuilder:FormBuilder, private entreprise:EntrepriseService, private desk:BureauxService) {
    this.entreprise.getAllEntreprise().subscribe(data => this.dataArray = data)
    this.desk.getAllDesks().subscribe(data=> this.dataArray2 = data)
    this.myForm=this.formBuilder.group({
      pseudo:['',[Validators.required,Validators.minLength(3)]],      
      password:['',[Validators.required,Validators.minLength(6)]],
      email:['',[Validators.required,Validators.email,Validators.minLength(6)]],
      firstName:['',[Validators.required,Validators.minLength(3)]],
      name:['',[Validators.required,Validators.minLength(3)]],
      telephone:['',[Validators.required,Validators.minLength(8)]],
      entrepriseId:['',[Validators.required]],
      deskId:['',[Validators.required]],
      activation:['true']
    })



   }
  ngOnInit(): void {
  }


  add(f:any){
    let data =f.value
    console.log(data)

    this.adherent.ajoutAdherent(data).subscribe((data)=>{
      this.route.navigate(['/admin/adherents'])
     
    },(err:HttpErrorResponse)=>{
      this.msgError= err.error
      this.pseudoError=err.error.pseudo   
      
    }
    
    )
  }

 
}
