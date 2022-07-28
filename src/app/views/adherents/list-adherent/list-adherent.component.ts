import { HttpErrorResponse } from '@angular/common/http';
import { AdherentServiceService } from './../../../services/adherent-service.service';
import { Component, OnInit } from '@angular/core';
import { AuthServiceService } from 'src/app/services/auth-service.service';
import { EntrepriseService } from 'src/app/services/entreprise.service';
import { FormControl } from '@angular/forms';
import { BureauxService } from 'src/app/services/bureaux.service';

@Component({
  selector: 'app-list-adherent',
  templateUrl: './list-adherent.component.html',
  styleUrls: ['./list-adherent.component.scss']
})
export class ListAdherentComponent implements OnInit {
  dataArray: any = []
  dataArray2: any = []
  dataArray3: any = []
  messageSuccess = ""
  data = {
    pseudo: '',
    password:'',
    email: '',
    firstName: '',
    name: '',
    telephone: 0,
    entrepriseId: '',
    deskId: '',
    id: '',
    activation: false,

  }
 
  term: string = '';
  page: number = 1;
  count: number = 0
  tableSize: number = 7;
  tableSizes: any = [7, 14, 21, 28];



  constructor(private adherent: AdherentServiceService, private auth: AuthServiceService, private entrepriseService: EntrepriseService, private bureau:BureauxService) {
    this.adherent.getAllAdherent().subscribe((data) => {
      this.dataArray = data
      console.log(this.dataArray);
    })
    this.entrepriseService.getAllEntreprise().subscribe((data) => {
      this.dataArray2 = data
      console.log(this.dataArray2);
    })
    this.bureau.getAllDesks().subscribe((data) => {
      this.dataArray3 = data
      console.log(this.dataArray3);
    })

  }

  ngOnInit(): void {
    
  }


  
  getData(email: string, firstName: string, name: string, telephone: number,id: any, activation: boolean) {

    this.data.email = email
    this.data.firstName = firstName
    this.data.name = name
    this.data.telephone = telephone 
   
    this.data.id = id
    this.data.activation = activation
    console.log(activation);
  }



  update(f: any) {
    let prof = f.value;
    prof.id = this.data.id;
    console.log("prof", prof);

    this.adherent.updataAdherent(this.data.id, prof).subscribe(rps => {
      console.log(rps);
      let indexId = this.dataArray.findIndex((obj: any) => obj._id == this.data.id)

      this.dataArray[indexId].email = prof.email
      this.dataArray[indexId].firstName = prof.firstName
      this.dataArray[indexId].name = prof.name
      this.dataArray[indexId].telephone = prof.telephone  
      
      this.dataArray[indexId].activation = prof.activation;

      this.messageSuccess = `l'adherent  ${this.dataArray[indexId].firstName} est modifié`



    }, (err: HttpErrorResponse) => console.log(err))
  }
  delete(id: any, i: any) {
    this.adherent.deleteAdherent(id).subscribe(data => {
      this.dataArray.splice(i, 1)
    })
  }
  change() {
    this.data.activation = !this.data.activation;
    console.log(this.data.activation);
  }

  liste(): void {
    this.adherent.getAllAdherent().subscribe((data) => {
      this.dataArray = data
      console.log(this.dataArray);
    })

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

}
