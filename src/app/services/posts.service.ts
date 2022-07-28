import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  constructor(private http:HttpClient) {  }
  getAllPosts(){
    return this.http.get('http://localhost:3000/posts')
  }
  addPosts(data:any){
    return this.http.post('http://localhost:3000/posts',data)
  }
  updatePost(id:string,newPost:any){
    return this.http.put('http://localhost:3000/posts/'+id,newPost)
  }
  deletePost(id:string){
    return this.http.delete('http://localhost:3000/posts/'+id)
  }

  getOne(id:string){
    return this.http.get(`http://localhost:3000/posts/${id}`)  }
  ajoutCommentaire(id:string,text:any){
    return this.http.put('http://localhost:3000/posts/comment-post/'+id,text)
  }
  modifierCommentaire(id:string,text:any){
    return this.http.put(`http://localhost:3000/posts/edit-comment-post/${id}`,text)
  }
  deleteCommentaire(id:string){
    return this.http.delete('http://localhost:3000/posts/delete-comment-post/'+id)
  }
}
