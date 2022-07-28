import { HttpErrorResponse } from '@angular/common/http';
import { AdherentServiceService } from 'src/app/services/adherent-service.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-membres',
  templateUrl: './membres.component.html',
  styleUrls: ['./membres.component.scss']
})
export class MembresComponent implements OnInit {
  dataArray:any=[]
  term=''
  messageSuccess=''
  page: number = 1;
  count: number = 0
  tableSize: number = 7;
  tableSizes: any = [7, 14, 21, 28];
  constructor(private user:AdherentServiceService) {
    this.user.getAllMembres().subscribe(data => this.dataArray = data)
   }

  ngOnInit(): void {
    this.liste()
  }
  data = {
    pseudo: '',
    email: '',
    firstName: '',
    name: '',
    telephone: 0,    
    id: '',   
  }

  getData(email: string, firstName: string, name: string, telephone: number, id: any) {

    this.data.email = email
    this.data.firstName = firstName
    this.data.name = name
    this.data.telephone = telephone    
    
    this.data.id = id
   
  }
  delete(id: any, i: any) {
    this.user.deleteAdherent(id).subscribe(data => {
      this.dataArray.splice(i, 1)
    })
  }

  liste(): void {
    this.user.getAllMembres().subscribe((data) => {
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
  update(f: any) {
    let prof = f.value;
    prof.id = this.data.id;
    console.log("prof", prof);

    this.user.updataAdherent(this.data.id, prof).subscribe(rps => {
      console.log(rps);
      let indexId = this.dataArray.findIndex((obj: any) => obj._id == this.data.id)

      this.dataArray[indexId].email = prof.email
      this.dataArray[indexId].firstName = prof.firstName
      this.dataArray[indexId].name = prof.name
      this.dataArray[indexId].telephone = prof.telephone      
      this.dataArray[indexId].deskId = prof.deskId     

      this.messageSuccess = `le membre ${this.dataArray[indexId].firstName} est modifié`



    }, (err: HttpErrorResponse) => console.log(err))
  }
}
