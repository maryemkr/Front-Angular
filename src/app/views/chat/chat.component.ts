import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

import Pusher from 'pusher-js';
import { AuthServiceService } from 'src/app/services/auth-service.service';
@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss']
})
export class ChatComponent implements OnInit {

username;
message = '';
messages :any=[];
prenom;

  constructor(private http: HttpClient,private auth:AuthServiceService) { 
    
    this.prenom=this.auth.getPrenom()
    this.username=this.prenom
  }
  ngOnInit(): void {
    Pusher.logToConsole = true;

    var pusher = new Pusher('ef89a591e0fe918989d4', {
      cluster: 'mt1'
    });

    var channel = pusher.subscribe('chat');
    channel.bind('message', (data: any) => {           
      this.messages.push(data);
    });
    

  }
  submit(): void {
    this.http.post('http://localhost:3000/api/messages', {
      username: this.username,
      message: this.message
    }).subscribe(() => this.message = '');
  }
  ch(e:any){
    this.message = e.target.value
  }
 
  

}
