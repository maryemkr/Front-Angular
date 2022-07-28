import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { JwtHelperService } from "@auth0/angular-jwt";
@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {
  helper = new JwtHelperService();



  constructor(private http: HttpClient) { }

  login(data: any) {
    return this.http.post('http://localhost:3000/login', data)
  }
  register(data: any) {
    return this.http.post<any>('http://localhost:3000/user', data)
  }
  forget(link: any) {
    return this.http.post('http://localhost:3000/forgetPassword', link)
  }
  saveDataProfil(token: any) {   
    localStorage.setItem('token', token)
  }
  logout() {
    return this.http.get('http://localhost:3000/logout')
  }


  getPrenom() {
    let token: any = localStorage.getItem('token')
    let decodeToken = this.helper.decodeToken(token)
    return decodeToken.firstName
  }
  getId(){
    let token: any = localStorage.getItem('token')
    let decodeToken = this.helper.decodeToken(token)
    return decodeToken._id
  }
  getRole() {
    let token: any = localStorage.getItem('token')
    let decodeToken = this.helper.decodeToken(token)
    return decodeToken.role
  }

  LoggedIn(){
    let token:any=localStorage.getItem('token')
    if(!token){return false}
    let decodeToken = this.helper.decodeToken(token)
    let role = decodeToken.role
    if(role!=='ADMCB' && role!=='ADMMB' && role!=='ADMORG' && role!=='adherent'){
      return false
    }
    if(this.helper.isTokenExpired(token)){
      return false
    }
    return true
  }
isAdherent(){
  let token:any=localStorage.getItem('token')
  if(!token){return false}
  let decodeToken = this.helper.decodeToken(token)
  let role = decodeToken.role
  if(role!=='adherent'){
    return false
  }if(this.helper.isTokenExpired(token)){
    return false
  }
  return true
}

  chefBureau(){
    let token:any=localStorage.getItem('token')
    if(!token){return false}
    let decodeToken = this.helper.decodeToken(token)
    let role = decodeToken.role
    if(role!=='ADMCB'){
      return false
    }
    if(this.helper.isTokenExpired(token)){
      return false
    }
    return true
  }
  membreBureau(){
    let token:any=localStorage.getItem('token')
    let decodeToken = this.helper.decodeToken(token)
    let role = decodeToken.role
    if(role!=='ADMMB'){
      return false
    }
    if(this.helper.isTokenExpired(token)){
      return false
    }
    return true
  }
  
  org(){
    let token:any=localStorage.getItem('token')
    if(!token){return false}
    let decodeToken = this.helper.decodeToken(token)
    let role = decodeToken.role
    if(role!=='ADMORG'){
      return false
    }
    if(this.helper.isTokenExpired(token)){
      return false
    }
    return true
  }
  


}
