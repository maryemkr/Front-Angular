import { EventsService } from 'src/app/services/events.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-evenements',
  templateUrl: './evenements.component.html',
  styleUrls: ['./evenements.component.scss']
})
export class EvenementsComponent implements OnInit {
  dataArray:any = []
  constructor(private event:EventsService) { 
    this.event.getAllEvents().subscribe((rep)=>{
      this.dataArray = rep
    })
  }

  ngOnInit(): void {
  }

}
