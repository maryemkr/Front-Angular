import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PaymentServiceService {

  constructor(private http:HttpClient) { }
  getAllPayement(){
    return this.http.get('http://localhost:3000/payment')
  }
  payCash(data:any){
    return this.http.post('http://localhost:3000/payment/cash',data)
  }
  deletePay(id:any){
    return this.http.delete('http://localhost:3000/payment/'+id)
  }
  updatePayCash(id:string,newPay:any){
    return this.http.put('http://localhost:3000/payment/cash/'+id,newPay)
  }
   payCheck(data:any){
    return this.http.post('http://localhost:3000/payment/check',data)
   }
   updatePayCheck(id:string,newPay:any){
     return this.http.put('http://localhost:3000/payment/check/'+id,newPay)
   }
   getAllPayCash(){
     return this.http.get('http://localhost:3000/payment/cash')
  }
  getAllPayCheq(){
    return this.http.get('http://localhost:3000/payment/check')
 }
}
