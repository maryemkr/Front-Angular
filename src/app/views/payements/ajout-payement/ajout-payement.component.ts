import { Router } from '@angular/router';
import { AdherentServiceService } from './../../../services/adherent-service.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { PaymentServiceService } from 'src/app/services/payment-service.service';
import { EntrepriseService } from 'src/app/services/entreprise.service';
@Component({
  selector: 'app-ajout-payement',
  templateUrl: './ajout-payement.component.html',
  styleUrls: ['./ajout-payement.component.scss']
})
export class AjoutPayementComponent implements OnInit {
  dataArray: any = []


  payment:any
  constructor(private fb :FormBuilder , private entreprise:EntrepriseService , private paymentS:PaymentServiceService , private route:Router) {
    this.entreprise.getAllEntreprise().subscribe(data => this.dataArray = data)
    this.payment = this.fb.group({
      entreprise: [''],      
      duration : [],
      amount: [],
      paymentDate :[]
    })
  }
  
 

  ngOnInit(): void {
  }

addCash(f:any){
  let data = f.value
  console.log(data);
  this.paymentS.payCash(data).subscribe((rep)=>{
    console.log(rep)
    this.route.navigate(['/admin/ListPayCash'])
  }
  
  )
}
}
