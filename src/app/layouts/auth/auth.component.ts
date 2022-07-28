import { AuthServiceService } from './../../services/auth-service.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit {
  dataReceived: any
  msgError = ""
  constructor(private auth: AuthServiceService, private route: Router) {
    
   }



  ngOnInit(): void {
  }
  login(f: any) {
    let data = f.value
    this.auth.login(data).subscribe((rps) => {
     
      this.dataReceived = rps
      localStorage.setItem('token',  this.dataReceived.token )
      this.auth.saveDataProfil(this.dataReceived.token)
      if (this.auth.LoggedIn() == true) {
        this.route.navigate(['/admin'])
      }
    }, (err: HttpErrorResponse) => {
      this.msgError = err.error
      console.log(this.msgError)
    })
  }
}
