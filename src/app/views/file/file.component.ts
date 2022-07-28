import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-file',
  templateUrl: './file.component.html',
  styleUrls: ['./file.component.scss']
})
export class FileComponent implements OnInit {
  images:any;
  // url="http://localhost:3000/uploads/"
  uri=''
  constructor( private http:HttpClient , private form:FormBuilder) { }

  ngOnInit(): void {
  }
  selectImage(event:any) {
    if (event.target.files.length > 0) {
      const file = event.target.files[0];
      this.images = file;
      console.log(this.images.name);
      
    }
  }

  
  onSubmit(){
    const formData = new FormData();
    formData.append('file', this.images);

    this.http.post<any>('http://localhost:3000/file', formData).subscribe(
      (res) =>{this.uri = res.image; console.log('uri',this.uri);console.log('res',res)} ,
      (err) => console.log(err)
    );
  }
}
