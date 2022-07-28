import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { EventsService } from 'src/app/services/events.service';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.scss']
})
export class EventsComponent implements OnInit {
dataArray:any =[]
term=""
page: number = 1;
count: number = 0
tableSize: number = 7;
  tableSizes: any = [7, 14, 21, 28];
  data = {
    name: '',
    city: '',
    address: '',
    date: '01-01-2022',
    description: '',
    id: ''
  }
  messageSuccess=''
  constructor(private events:EventsService) { 
    this.events.getAllEvents().subscribe((data) =>{ 
      this.dataArray = data  
})
  }

  ngOnInit(): void {
  }
  liste(): void {
    this.events.getAllEvents().subscribe(
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
  delete(id:any,i:any){
    this.events.deleteEvent(id).subscribe(data => {
      this.dataArray.splice(i, 1)
    })
  }
  getData(name: string,  city: string, address: string,date:any,  description: string, id: string) {
    this.data.name = name     
    this.data.city = city
    this.data.address = address  
    this.data.date =date
    this.data.description = description
    this.data.id = id
  }
  update(f: any) {
    let val = f.value;
    val.id = this.data.id;
    console.log(val)
    this.events.updateEvent(this.data.id, val).subscribe(rps => {
      console.log(rps);
      let indexId = this.dataArray.findIndex((obj: any) => obj._id == this.data.id)
      this.dataArray[indexId].name = val.name        
      this.dataArray[indexId].city = val.city
      this.dataArray[indexId].address = val.address
      this.dataArray[indexId].date = val.date      
      this.dataArray[indexId].description = val.description
      this.messageSuccess = `l'evenement  ${this.dataArray[indexId].name} est modifié`
    }, (err: HttpErrorResponse) => console.log(err)
    )
  }
}
