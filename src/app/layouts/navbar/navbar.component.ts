import { ContactService } from 'src/app/services/contact.service';
import { HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { AuthServiceService } from 'src/app/services/auth-service.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  prenom: any
  role: any
  term: string = ''
  dataArray: any = []
  verif: boolean = false
  constructor(private auth: AuthServiceService, private route: Router, private msg: ContactService) {
    if(this.auth.chefBureau()==true || this.auth.membreBureau()==true || this.auth.org()==true){
      this.verif=true
    }

    this.role = this.auth.getRole()
    this.prenom = this.auth.getPrenom()
    this.msg.getAllMessage().subscribe((rep) => {
      this.dataArray = rep
    })
  }
  ngOnInit(): void {
  }

  logout() {
    localStorage.removeItem('token')
    this.route.navigate([''])
  }

}

