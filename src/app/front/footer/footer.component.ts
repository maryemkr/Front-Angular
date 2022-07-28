import { EventsService } from 'src/app/services/events.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  dataArray2:any =[]
  constructor(private event:EventsService) {
    this.event.getAllEvents().subscribe((rps)=>{
      this.dataArray2 = rps
      console.log("data",this.dataArray2);
      
    })
   }

  ngOnInit(): void {
  }

}
