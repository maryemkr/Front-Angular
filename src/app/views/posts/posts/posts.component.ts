import { HttpErrorResponse, HttpClient } from '@angular/common/http';
import { PostsService } from './../../../services/posts.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent implements OnInit {
  term = ""
  dataArray: any = []
  images: any;
  selectedFile: any = null;
  url = '';
  messageSuccess = ''
  page: number = 1;
  count: number = 0
  tableSize: number = 7;
  tableSizes: any = [7, 14, 21, 28];
  constructor(private post: PostsService) {
    this.post.getAllPosts().subscribe(
      (data) => {
        this.dataArray = data
        console.log('hh', data)
      }
    )
  };
  data = {
    image: '',
    message: '',
    id: ''
  }
  ngOnInit(): void {
    this.liste()
  }

  liste(): void {
    this.post.getAllPosts().subscribe(
      (data) => {
        this.dataArray = data
        console.log(data);
      },
      (error) => {
        console.log(error);
      }
    );
  }
  onTableDataChange(event: any) {
    this.page = event;
    this.liste();
  }
  onTableSizeChange(event: any): void {
    this.tableSize = event.target.value;
    this.page = 1;
    this.liste();
  }
  getData(image: string, message: string, id: string) {
    this.data.image = image
    this.data.message = message
    this.data.id = id
  }

  update(f: any) {
    let pub = f.value;
    pub.id = this.data.id;


    console.log("pub", pub);

    this.post.updatePost(this.data.id, pub).subscribe(rps => {
      console.log(rps);
      let indexId = this.dataArray.findIndex((obj: any) => obj._id == this.data.id)

      this.dataArray[indexId].message = pub.message

      this.messageSuccess = `la publication  est modifié`

    }, (err: HttpErrorResponse) => console.log(err))
  }
  delete(id: string, i: any) {

    this.post.deletePost(id).subscribe(data => {
      this.dataArray.splice(i, 1)
    })
  }

}
