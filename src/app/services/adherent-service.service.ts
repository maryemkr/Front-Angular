import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';

@Injectable({
  providedIn: 'root'
})
export class AdherentServiceService {
  helper = new JwtHelperService();
  token: any = localStorage.getItem('token')
  decodeToken = this.helper.decodeToken(this.token)
  role = this.decodeToken.role


  header2 = new HttpHeaders()
    .set('authorization', '')
    .set('authorization', this.token)
    .set('role', this.role)

  constructor(private http: HttpClient) { }
  getAllAdherent() {
    return this.http.get('http://localhost:3000/user/adherents')
  }
  updataAdherent(id: string, newProfile: any) {
    return this.http.put('http://localhost:3000/user/' + id, newProfile)
  }
  deleteAdherent(id: any) {
    return this.http.delete('http://localhost:3000/user/' + id)
  }
  ajoutAdherent(profile: any) {
    return this.http.post('http://localhost:3000/user/adherent', profile)
  }
  ajoutAdmin(profile: any) {
    return this.http.post('http://localhost:3000/user/admin', profile)
  }
  getAllMembres() {
    return this.http.get('http://localhost:3000/user/admins')
  }
}
