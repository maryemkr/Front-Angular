import { ContactService } from 'src/app/services/contact.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.scss']
})
export class MessageComponent implements OnInit {
dataArray:any=[]
term = ""
data={
  senderName:'',
  telephone:0,
  email:'',
  message:'',
  id:'',
  status:true
}
  constructor(private msg:ContactService) { 
    this.msg.getAllMessage().subscribe(rep=>{
      this.dataArray = rep
      console.log(this.dataArray);
      
    })
  }

  ngOnInit(): void {
  }
  delete(id: any, i: any) {
    this.msg.deleteMessage(id).subscribe(data => {
      this.dataArray.splice(i, 1)
    })
  }
getData( senderName: string,  telephone: number,email: string,message:string, id: any , status:Boolean) {
  this.data.senderName = senderName
  this.data.telephone = telephone  
  this.data.email = email 
  this.data.message = message
  this.data.id = id
  this.data.status = status = true
  console.log(status);  
}


}
// update(f: any) {
//   let prof = f.value;
//   prof.id = this.data.id;
//   console.log("prof", prof);

//   this.adherent.updataAdherent(this.data.id, prof).subscribe(rps => {
//     console.log(rps);
//     let indexId = this.dataArray.findIndex((obj: any) => obj._id == this.data.id)

//     this.dataArray[indexId].email = prof.email
//     this.dataArray[indexId].firstName = prof.firstName
//     this.dataArray[indexId].name = prof.name
//     this.dataArray[indexId].telephone = prof.telephone     
//     this.dataArray[indexId].activation = prof.activation;

//     this.messageSuccess = `l'adherent  ${this.dataArray[indexId].firstName} est modifié`



//   }, (err: HttpErrorResponse) => console.log(err))
// }