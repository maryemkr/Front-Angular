import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  constructor(private http:HttpClient) {}
   getAllMessage(){
    return this.http.get('http://localhost:3000/message')
  }
  addMessage(msg:any){
    return this.http.post('http://localhost:3000/message',msg)
  }
  deleteMessage(id:any){
    return this.http.delete('http://localhost:3000/message/'+id)
  }
 
}
