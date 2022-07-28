import { EventsService } from 'src/app/services/events.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-one-event',
  templateUrl: './one-event.component.html',
  styleUrls: ['./one-event.component.scss']
})
export class OneEventComponent implements OnInit {

  id:any
  dataArray: any = []
  dataArray2:any = []
    constructor(private event:EventsService, private route:ActivatedRoute) { 
      this.route.params.subscribe(data => {
        console.log(data['id']);
        this.id = data['id'];
        console.log("id", this.id)
      })
      this.event.getOneEvent(this.id).subscribe((rep) => {
        console.log("tgdrd", rep);
        this.dataArray = rep    
  
      })
      this.event.getAllEvents().subscribe((rps)=>{
        this.dataArray2 = rps
        console.log("data",this.dataArray2);
        
      })
    }

  ngOnInit(): void {
  }

}
