import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { PaymentServiceService } from 'src/app/services/payment-service.service';

@Component({
  selector: 'app-liste-pay-cash',
  templateUrl: './liste-pay-cash.component.html',
  styleUrls: ['./liste-pay-cash.component.scss']
})
export class ListePayCashComponent implements OnInit {
  dataArray: any = [] 
  messageSuccess = ""
  term = ""
  page:number = 1;
  count:number = 0
  tableSize: number = 6;
  tableSizes: any = [6, 12, 18, 24];
  data={
    payerPseudo:'',
    method:'',
    duration:'',
    amount:'',    
    id:'',
    paymentDate:'01-01-2022',
  }
  constructor(private payment:PaymentServiceService) { 
    this.payment.getAllPayCash().subscribe(data=>this.dataArray = data)
  }

  ngOnInit(): void {
  }
  liste(): void {
    this.payment.getAllPayCash().subscribe((data)=>{
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
  
  getData( payerPseudo: string, method: string, duration: string, amount: string ,paymentDate:any, id: any) {
    
    this.data.payerPseudo = payerPseudo
    this.data.method = method
    this.data.duration = duration    
    this.data.amount = amount    
    this.data.paymentDate = paymentDate  
    this.data.id = id
  }
  update(f: any) {
    let pay = f.value;
    pay.id = this.data.id;
    console.log(pay)
    this.payment.updatePayCash(this.data.id,pay).subscribe(rps=>{
      console.log(rps)
      let indexId = this.dataArray.findIndex((obj:any)=>obj._id==this.data.id)
      this.dataArray[indexId].payerPseudo=pay.payerPseudo
      this.dataArray[indexId].method='Espèce'
      this.dataArray[indexId].duration=pay.duration
      this.dataArray[indexId].amount=pay.amount
      this.dataArray[indexId].paymentDate=pay.paymentDate
      this.messageSuccess=`le paiement est modifié`
    },(err:HttpErrorResponse)=>console.log(err)) 
  }
  delete(id:any,i:any){
    this.payment.deletePay(id).subscribe(data=>{
      this.dataArray.splice(i,1)
    })
  }

}
