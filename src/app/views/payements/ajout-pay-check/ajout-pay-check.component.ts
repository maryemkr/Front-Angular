import { Router } from '@angular/router';
import { FormBuilder } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { PaymentServiceService } from 'src/app/services/payment-service.service';
import { EntrepriseService } from 'src/app/services/entreprise.service';

@Component({
  selector: 'app-ajout-pay-check',
  templateUrl: './ajout-pay-check.component.html',
  styleUrls: ['./ajout-pay-check.component.scss']
})
export class AjoutPayCheckComponent implements OnInit {
  dataArray: any = []
  payment:any
  constructor(private entreprise:EntrepriseService ,private fb :FormBuilder, private paymentS:PaymentServiceService , private route:Router) { 
    this.entreprise.getAllEntreprise().subscribe(data => this.dataArray = data)
    this.payment = this.fb.group({
      entreprise: [''],      
      duration : [''],
      amount: [],
      paymentDate :[],
      checkNumber:[],
      checkDate:[]
    })
  }
  addCheck(f:any){
    let data = f.value
    console.log(data);
    this.paymentS.payCheck(data).subscribe((rep)=>{
      console.log(rep)
      this.route.navigate(['/admin/ListPayCheck'])
    }
    
    )
  }
  ngOnInit(): void {
  }

}
