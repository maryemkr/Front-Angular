import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { BureauxService } from 'src/app/services/bureaux.service';

@Component({
  selector: 'app-list-bureaux',
  templateUrl: './list-bureaux.component.html',
  styleUrls: ['./list-bureaux.component.scss']
})
export class ListBureauxComponent implements OnInit {
  dataArray: any = []
  term=''
  data={
    deskNumber:0,
    telephone:0,
    city:'',
    address:'',
    postalCode:0,
    id:''
  }
   page: number = 1;
  count: number = 0
  tableSize: number = 7;
  tableSizes: any = [7, 14, 21, 28];
  messageSuccess=""
  constructor(private bureau:BureauxService) { 
    this.bureau.getAllDesks().subscribe(data=>this.dataArray = data)
  }

  ngOnInit(): void {
    this.liste()
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

  getData(deskNumber:number,telephone:number,city:string,address:string,postalCode:number , id:string){
    this.data.deskNumber = deskNumber
    this.data.telephone = telephone
    this.data.city=city
    this.data.address= address
    this.data.postalCode= postalCode
    this.data.id = id   
  }
  delete(id:any,i:any){
    this.bureau.deleteDesk(id).subscribe(data=>{
      this.dataArray.splice(i,1)
    })
  }

  update(f: any) {
    let desk = f.value;
    desk.id = this.data.id;
   
    
    this.bureau.updateDesk(this.data.id,desk).subscribe(rps=>{
      console.log(rps);
      let indexId = this.dataArray.findIndex((obj:any)=>obj._id==this.data.id)
      
      this.dataArray[indexId].deskNumber=desk.deskNumber
      this.dataArray[indexId].telephone=desk.telephone
      this.dataArray[indexId].city=desk.city
      this.dataArray[indexId].address=desk.address
      this.dataArray[indexId].postalCode=desk.postalCode
  
      this.messageSuccess=`le bureau Numéro ${this.dataArray[indexId].deskNumber} est modifié`
      

      
    },(err:HttpErrorResponse)=>console.log(err))
  }
  liste(): void {
    this.bureau.getAllDesks().subscribe(
      (data) => {
        this.dataArray = data
        console.log(data);
      },
      (error) => {
        console.log(error);
      }
    );
  }

}
