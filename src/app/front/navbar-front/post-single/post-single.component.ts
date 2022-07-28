import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthServiceService } from 'src/app/services/auth-service.service';
import { PostsService } from 'src/app/services/posts.service';

@Component({
  selector: 'app-post-single',
  templateUrl: './post-single.component.html',
  styleUrls: ['./post-single.component.scss']
})
export class PostSingleComponent implements OnInit {
  dataArray: any = []
  comments: any = []
  id: any
  commeterId = ''
  myForm: any
  posts:any=[]
  constructor(private post: PostsService, private route: ActivatedRoute, private formBuilder: FormBuilder, private auth: AuthServiceService, private router: Router) {
    this.commeterId = this.auth.getId()
    this.route.params.subscribe(data => {
      console.log(data['id']);
      this.id = data['id'];
      console.log("id", this.id)
    })
    this.post.getOne(this.id).subscribe((rep) => {
      console.log("tgdrd", rep);

      this.dataArray = rep
      console.log(this.dataArray.comments);
      this.comments = this.dataArray.comments
      console.log('comments', this.comments);
      

    })
    this.myForm = this.formBuilder.group({
      text: [''],
      commenterId: ['']
    })
    this.post.getAllPosts().subscribe((rep)=>{
      this.posts = rep
    })
  }

  ngOnInit(): void {
  }
  data = {
    id: '',
    text: '',
    commenterName: '',
    idCom: ''
  }
  add(f: any) {
    let data = f.value
    data.commenterId = this.commeterId
    console.log(data);

    this.post.ajoutCommentaire(this.id, data).subscribe((rep) => {
      window.location.reload()
      this.router.navigate(['/single', this.id])
    })
  }
  user(val: any) {
    if (val === this.auth.getId()) {
      return true
    } return false
  }

  getData(id: any, text: string, commenterName: string, idCom: string) {
    this.data.id = id
    this.data.text = text
    this.data.commenterName = commenterName
    this.data.idCom = idCom
    console.log('idcom',id);
  }
  update(f: any) {  
    let commentaire = f.value
    console.log('com',commentaire.text);
    console.log('id',this.id);
    
   
    this.post.modifierCommentaire(this.id, commentaire.text).subscribe(rps => {
      console.log(rps);

      let indexId = this.dataArray.findIndex((obj: any) => obj._id == this.data.id)
      this.dataArray[indexId].text = commentaire.text
    }
      , (err: HttpErrorResponse) => console.log(err))
  }
  delete(id: any, i: any) {
    this.post.deleteCommentaire(id).subscribe(data => {
      this.dataArray.comments.splice(i,1)
      window.location.reload()
    })
  }
}

