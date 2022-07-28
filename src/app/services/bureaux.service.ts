import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BureauxService {

  constructor(private http:HttpClient) { }
  getAllDesks(){
   return this.http.get('http://localhost:3000/desk')
  }
  deleteDesk(id:any){
    return this.http.delete('http://localhost:3000/desk/'+id)
  }
  updateDesk(id:string,newDesk:any){
    return this.http.put('http://localhost:3000/desk/'+id,newDesk)
  }
  addDesk(desk:any){
    return this.http.post('http://localhost:3000/desk',desk)
  }
}
