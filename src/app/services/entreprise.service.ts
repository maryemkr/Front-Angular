import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EntrepriseService {

  constructor(private http:HttpClient) { } 
  getAllEntreprise(){
    return this.http.get('http://localhost:3000/entreprises')
  }
  ajoutEntreprise(data:any){
    return this.http.post('http://localhost:3000/entreprises',data)

  }
  modifierEntreprise(id:string,newEntreprise:any){
    return this.http.put('http://localhost:3000/entreprises/'+id,newEntreprise)
  }
  supprimerEntreprise(id:string){
    return this.http.delete('http://localhost:3000/entreprises/'+id)
  }
  getOneEntreprise(id:string){
    return this.http.get('http://localhost:3000/entreprises/'+id)
  }

}
