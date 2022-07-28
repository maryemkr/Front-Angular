import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { FormBuilder, Validators } from '@angular/forms';
import { EntrepriseService } from 'src/app/services/entreprise.service';
import { Component, OnInit } from '@angular/core';
import { EventsService } from 'src/app/services/events.service';

@Component({
  selector: 'app-ajout-event',
  templateUrl: './ajout-event.component.html',
  styleUrls: ['./ajout-event.component.scss']
})
export class AjoutEventComponent implements OnInit {
dataArray1:any=[];
form:any;
images:any;
url=''
  constructor(private entreprise:EntrepriseService, private formBuilder:FormBuilder, private http: HttpClient, private event:EventsService,private route:Router) { 
    this.entreprise.getAllEntreprise().subscribe(data => this.dataArray1 = data)
    this.form = this.formBuilder.group({
      name: ['',Validators.required],
      city: ['', Validators.required],
      address:['', Validators.required],
      entrepriseId:['',[Validators.required]],
      date:['', Validators.required],
      image: [''],
      description:[''],      
    })
  }

  ngOnInit(): void {
  }
  selectImage(event: any) {
    if (event.target.files.length > 0) {
      const file = event.target.files[0];
      this.images = file;
      const formData = new FormData();
      formData.append('file', this.images);

      this.http.post<any>('http://localhost:3000/file', formData).subscribe(
        (res) => { console.log('res', res); this.url = res.image },
        (err) => console.log(err)
      );
    }
  }
  ajoutEvent(f:any){
    let data = f.value
    console.log("data",data);
    data.image = this.url;      

    this.event.postEvent(data).subscribe((rep) => {
      console.log(rep)
      this.route.navigate(['/admin/events']);
    })
  }

}
