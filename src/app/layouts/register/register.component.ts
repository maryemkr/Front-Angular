import { HttpErrorResponse } from '@angular/common/http';
import { FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthServiceService } from 'src/app/services/auth-service.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  myForm:any
  pseudoError= document.querySelector('.pseudo.error')
  constructor(private auth:AuthServiceService, private route:Router, private formbuilder:FormBuilder) { 
    this.myForm=this.formbuilder.group({
      pseudo:['',[Validators.required,Validators.minLength(3)]],
      password:['',[Validators.required,Validators.minLength(6)]],
      email:['',[Validators.required,Validators.email,Validators.minLength(6)]],
      firstName:['',[Validators.required,Validators.minLength(3)]],
      name:['',[Validators.required,Validators.minLength(3)]],
      telephone:['',[Validators.required,Validators.minLength(8)]],
      entrepriseId:['',[Validators.required,Validators.minLength(3)]],
      deskId:['',[Validators.required,Validators.minLength(3)]],
    })
  }


 
  ngOnInit(): void {
  }
  
  register(f:any){
    let data= f.value
    console.log(data);
    this.auth.register(data).subscribe((rep)=>{
    console.log(rep)
    this.route.navigate([''])
    },(err:HttpErrorResponse)=>{
      this.pseudoError=err.error.pseudo
      
      }
    )
  }
}
