import { FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { AdherentServiceService } from 'src/app/services/adherent-service.service';
import { EntrepriseService } from 'src/app/services/entreprise.service';
import { PostsService } from 'src/app/services/posts.service';
import { ContactService } from 'src/app/services/contact.service';
import { EventsService } from 'src/app/services/events.service';

@Component({
  selector: 'app-navbar-front',
  templateUrl: './navbar-front.component.html',
  styleUrls: ['./navbar-front.component.scss']
})
export class NavbarFrontComponent implements OnInit {
  dataArray1: any = []
  dataArray: any = []
  dataArray3: any = []
  myForm: any
  msgSucces = ""
  constructor(private post: PostsService, private entreprise: EntrepriseService, private formBuilder: FormBuilder, private msg: ContactService, private event:EventsService) {
    this.post.getAllPosts().subscribe(
      (data) => {
        this.dataArray1 = data
        console.log("array", this.dataArray1);
      })
    this.myForm = this.formBuilder.group({
      senderName: ['', [Validators.required, Validators.minLength(3)]],
      telephone: [, [Validators.required, Validators.minLength(8)]],
      email: ['', [Validators.required, Validators.minLength(6)]],
      message: ['', [Validators.required, Validators.minLength(2)]]
    })
    this.entreprise.getAllEntreprise().subscribe((data) => {
      this.dataArray = data

    })
    this.event.getAllEvents().subscribe((rep)=>{
      this.dataArray3 = rep
    })

  };

  ngOnInit(): void {
  }
  getData(id: any) {
    console.log(id);

  }
  add(f: any) {
    let data = f.value
    console.log(data)
    this.msg.addMessage(data).subscribe((data) => {
      this.msgSucces = `Bonjour, merci de nous avoir contacté ! Nous vous répondrons dès que possible `
    })
  }

}
