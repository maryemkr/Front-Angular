import { PostsService } from './../../../services/posts.service';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { AuthServiceService } from 'src/app/services/auth-service.service';

@Component({
  selector: 'app-ajout-posts',
  templateUrl: './ajout-posts.component.html',
  styleUrls: ['./ajout-posts.component.scss']
})
export class AjoutPostsComponent implements OnInit {
  images: any;
  id=''
  selectedFile: any = null;
  form: any
  url = '';
  constructor( private formBuilder: FormBuilder, private route: Router, private http: HttpClient, private post:PostsService, private auth:AuthServiceService ) {
    this.id=this.auth.getId()
    this.form = this.formBuilder.group({
      title: ['',Validators.required],
      message: ['', Validators.required],
      image: [''],
      type:[''],
      posterId:['']
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
  ajoutPub(f: any) {
    let data = f.value
    console.log("data",data);
    data.image = this.url;
    data.posterId = this.id;
    console.log('data.image', data.image);

    this.post.addPosts(data).subscribe((rep) => {
      console.log(rep)
      this.route.navigate(['/admin/posts'])
    }

    )
  }
}
