import { HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { BureauxService } from 'src/app/services/bureaux.service';

@Component({
  selector: 'app-ajout-bureau',
  templateUrl: './ajout-bureau.component.html',
  styleUrls: ['./ajout-bureau.component.scss']
})
export class AjoutBureauComponent implements OnInit {
  myForm:any
  constructor(private bureau:BureauxService , private formBuilder:FormBuilder,private route:Router) { 

    this.myForm=this.formBuilder.group({
      deskNumber:['',[Validators.required]],      
      telephone:['',[Validators.required]],
      city:['',[Validators.required]],
      address:['',[Validators.required]],
      postalCode: ['',[Validators.required]],   
    })

  }

  ngOnInit(): void {
  }
  add(f:any){
    let data =f.value
    console.log(data)

    this.bureau.addDesk(data).subscribe((data)=>{
      this.route.navigate(['/admin/bureaux'])
     
    }
    
    )
  }
}
