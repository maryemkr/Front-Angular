import { HttpErrorResponse } from '@angular/common/http';
import { BureauxService } from './../../../services/bureaux.service';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AdherentServiceService } from 'src/app/services/adherent-service.service';
import { Component, OnInit } from '@angular/core';
import { EntrepriseService } from 'src/app/services/entreprise.service';

@Component({
  selector: 'app-ajout-membres',
  templateUrl: './ajout-membres.component.html',
  styleUrls: ['./ajout-membres.component.scss']
})
export class AjoutMembresComponent implements OnInit {
  msgError=""
  pseudoError= document.querySelector('.pseudo.error')
  myForm:any
  dataArray: any = []
  dataArray2: any = []
  constructor(private adherent:AdherentServiceService , private route:Router , private formBuilder:FormBuilder,  private desk:BureauxService, private entreprise:EntrepriseService) {
    this.entreprise.getAllEntreprise().subscribe(data => this.dataArray = data)
    this.desk.getAllDesks().subscribe(data=> this.dataArray2 = data)
    this.myForm=this.formBuilder.group({
      pseudo:['',[Validators.required,Validators.minLength(3)]],      
      password:['',[Validators.required,Validators.minLength(6)]],
      email:['',[Validators.required,Validators.email,Validators.minLength(6)]],
      firstName:['',[Validators.required,Validators.minLength(3)]],
      name:['',[Validators.required,Validators.minLength(3)]],
      role:[''],
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

    this.adherent.ajoutAdmin(data).subscribe((data)=>{
      this.route.navigate(['/admin/membres'])
     
    },(err:HttpErrorResponse)=>{
      this.msgError= err.error
      this.pseudoError=err.error.pseudo   
      
    }
    
    )
  }

}
