import { EntrepriseService } from './../../../services/entreprise.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {
  dataArray:any=[]
  constructor(private entreprise:EntrepriseService) {
    this.entreprise.getAllEntreprise().subscribe((data) => {
      this.dataArray = data
    })
   }

  ngOnInit(): void {
  }

}
