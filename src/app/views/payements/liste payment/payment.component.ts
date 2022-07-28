import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { PaymentServiceService } from 'src/app/services/payment-service.service';
@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.scss']
})
export class PaymentComponent implements OnInit {
  dataArray: any = []
  messageSuccess = ""
  messageSuccess2 = ""
term=''
page:number = 1;
  count:number = 0
  tableSize: number = 6;
  tableSizes: any = [6, 12, 18, 24];
  dataa={
    payerPseudo:'',
    method:'',
    duration:'',
    amount:'',    
    id:'',
    paymentDate:'01-01-2022',
    checkNumber:0,
    checkDate:'01-01-2022'
  }
  constructor(private payService:PaymentServiceService ) { 
    this.payService.getAllPayement().subscribe((data)=>{this.dataArray = data   
    }
    )      
  }
  liste(): void {
    this.payService.getAllPayement().subscribe((data)=>{
      this.dataArray = data   
      console.log(this.dataArray);
    })
   
  }
  onTableDataChange(event: any) {
    this.page = event;
    this.liste();
  }
  onTableSizeChange(event: any): void {
    this.tableSize = event.target.value;
    this.page = 1;
    this.liste();
  }
  ngOnInit(): void {
  }
  getColor (value:string){
      if(value==='Chéque'){
        return 'green'
      }
      return 'blue'
    }
  


  getDataa( payerPseudo: string, method: string, duration: string, amount: string ,paymentDate:any,checkNumber:number,checkDate:any, id: any) {
    
    this.dataa.payerPseudo = payerPseudo
    this.dataa.method = method
    this.dataa.duration = duration    
    this.dataa.amount = amount    
    this.dataa.paymentDate = paymentDate  
    this.dataa.checkNumber = checkNumber
    this.dataa.checkDate = checkDate
    this.dataa.id = id
  }




delete(id:any,i:any){
  this.payService.deletePay(id).subscribe(data=>{
    this.dataArray.splice(i,1)
  })
}
}
