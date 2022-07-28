import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { PaymentServiceService } from 'src/app/services/payment-service.service';

@Component({
  selector: 'app-liste-pay-cheque',
  templateUrl: './liste-pay-cheque.component.html',
  styleUrls: ['./liste-pay-cheque.component.scss']
})
export class ListePayChequeComponent implements OnInit {
  dataArray: any = []
term=''
page:number = 1;
  count:number = 0
  tableSize: number = 6;
  tableSizes: any = [6, 12, 18, 24];
  messageSuccess2 = ""
  dataa={
    payerPseudo:'',
    method:'',
    duration:'',
    amount:'',    
    id:'',
    paymentDate:'01-01-2022',
    checkNumber:0,
    checkDate:'01-01-2022',
  }


  constructor(private payment:PaymentServiceService) { 
    this.payment.getAllPayCheq().subscribe(data=>{
      this.dataArray = data   
    
    })

  }

  ngOnInit(): void {
  }
  liste(): void {
    this.payment.getAllPayCheq().subscribe((data)=>{
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
    this.payment.deletePay(id).subscribe(data=>{
      this.dataArray.splice(i,1)
    })
  }

  updatee(f: any) {
    let payy = f.value;
    payy.id = this.dataa.id;
    console.log(payy)
    this.payment.updatePayCheck(this.dataa.id,payy).subscribe(rps=>{
      console.log(rps)
      let indexId = this.dataArray.findIndex((obj:any)=>obj._id==this.dataa.id)
      this.dataArray[indexId].payyerPseudo=payy.payerPseudo
      this.dataArray[indexId].method='Chéque'
      this.dataArray[indexId].duration=payy.duration
      this.dataArray[indexId].amount=payy.amount
      this.dataArray[indexId].paymentDate=payy.paymentDate
      this.dataArray[indexId].checkNumber=payy.checkNumber
      this.dataArray[indexId].checkDate=payy.checkDate
      this.messageSuccess2=`le paiement est modifié`
    },(err:HttpErrorResponse)=>console.log(err)) 
  }
}
