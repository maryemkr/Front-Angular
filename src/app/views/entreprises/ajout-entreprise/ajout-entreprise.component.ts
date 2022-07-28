import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { EntrepriseService } from 'src/app/services/entreprise.service';

@Component({
  selector: 'app-ajout-entreprise',
  templateUrl: './ajout-entreprise.component.html',
  styleUrls: ['./ajout-entreprise.component.scss']
})
export class AjoutEntrepriseComponent implements OnInit {
  form: any
  images: any;
  selectedFile: any = null;
  constructor(private formBuilder: FormBuilder, private entreprise: EntrepriseService, private route: Router, private http: HttpClient) {
    this.form = this.formBuilder.group({
      name: ['', Validators.required],
      commercialName: ['', Validators.required],
      image: [''],
      telephone: ['', Validators.required],
      fax: [''],
      webSite: [''],     
      city: ['', Validators.required],
      address: ['', Validators.required],
      type: ['', Validators.required],
      category: ['', Validators.required],
      subCategory: ['', Validators.required],
      description: ['']
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


  url = '';
  ajoutEntreprise(f: any) {
    let data = f.value
    console.log(data);
    data.image = this.url
    console.log('data.image', data.image);

    this.entreprise.ajoutEntreprise(data).subscribe((rep) => {
      console.log(rep)
      this.route.navigate(['/admin/entreprises'])
    }

    )
  }

}
