import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { EntrepriseService } from 'src/app/services/entreprise.service';

@Component({
  selector: 'app-liste-entreprise',
  templateUrl: './liste-entreprise.component.html',
  styleUrls: ['./liste-entreprise.component.scss']
})
export class ListeEntrepriseComponent implements OnInit {
  dataArray: any = []
  page: number = 1;
  count: number = 0
  tableSize: number = 7;
  tableSizes: any = [7, 14, 21, 28];
  term = ''
  messageSuccess2 = ''
  messageSuccess = ''
  data = {
    name: '',
    commercialName: '',
    image: '',
    telephone: 0,
    fax: 0,
    webSite: '',    
    city: '',
    address: '',
    type: '',
    category:'',
    subCategory:'',
    description: '',
    id: ''
  }
  constructor(private entrepriseService: EntrepriseService) {
    this.entrepriseService.getAllEntreprise().subscribe(data => this.dataArray = data)
  }
  ngOnInit(): void {
    this.liste()
  }
  liste(): void {
    this.entrepriseService.getAllEntreprise().subscribe(
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

  getDataa(name: string, commercialName: string, image: string, telephone: number, fax: number, webSite: string,   city: string, address: string, type: string,category:string, subCatgory:string, description: string, id: string) {
    this.data.name = name
    this.data.commercialName = commercialName
    this.data.image = image
    this.data.telephone = telephone
    this.data.fax = fax
    this.data.webSite = webSite    
    this.data.city = city
    this.data.address = address
    this.data.type = type
    this.data.category= category
    this.data.subCategory=subCatgory
    this.data.description = description
    this.data.id = id
    console.log(image);
  }
  getData(name: string, commercialName: string, telephone: number, fax: number, webSite: string, city: string, address: string, type: string, category:string, subCatgory:string, description: string, id: string) {
    this.data.name = name
    this.data.commercialName = commercialName
    this.data.telephone = telephone
    this.data.fax = fax
    this.data.webSite = webSite    
    this.data.city = city
    this.data.address = address
    this.data.type = type
    this.data.category= category
    this.data.subCategory=subCatgory
    this.data.description = description
    this.data.id = id
  }
  update(f: any) {
    let val = f.value;
    val.id = this.data.id;
    console.log(val)
    this.entrepriseService.modifierEntreprise(this.data.id, val).subscribe(rps => {
      console.log(rps);
      let indexId = this.dataArray.findIndex((obj: any) => obj._id == this.data.id)
      this.dataArray[indexId].name = val.name
      this.dataArray[indexId].commercialName = val.commercialName
      this.dataArray[indexId].telephone = val.telephone
      this.dataArray[indexId].fax = val.fax
      this.dataArray[indexId].webSite = val.webSite      
      this.dataArray[indexId].city = val.city
      this.dataArray[indexId].address = val.address
      this.dataArray[indexId].type = val.type
      this.dataArray[indexId].category = val.category
      this.dataArray[indexId].subCategory = val.subCategory
      this.dataArray[indexId].description = val.description
      this.messageSuccess = `l'entreprise  ${this.dataArray[indexId].name} est modifié`
    }, (err: HttpErrorResponse) => console.log(err)
    )
  }
  delete(id: string, i: any) {
    this.entrepriseService.supprimerEntreprise(id).subscribe(data => {
      this.dataArray.splice(i, 1)
    })
  }


}

