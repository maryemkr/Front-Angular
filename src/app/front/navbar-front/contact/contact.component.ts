import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ContactService } from 'src/app/services/contact.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  myForm: any
  msgSucces=""
  constructor(private formBuilder: FormBuilder, private msg: ContactService, private route: Router) {
    this.myForm = this.formBuilder.group({
      senderName: ['', [Validators.required, Validators.minLength(3)]],
      telephone: [ , [Validators.required, Validators.minLength(8)]],
      email: ['', [Validators.required, Validators.minLength(6)]],
      message: ['', [Validators.required, Validators.minLength(2)]],
      status:[false]
    })
  }

  ngOnInit(): void {
  }
  add(f: any) {
    let data = f.value
    console.log(data)
    this.msg.addMessage(data).subscribe((data) => {
      this.msgSucces = `Bonjour, merci de nous avoir contacté ! Nous vous répondrons dès que possible `
    })
  }
}
