import { Component, OnInit } from '@angular/core';
import { PostsService } from 'src/app/services/posts.service';

@Component({
  selector: 'app-actualite',
  templateUrl: './actualite.component.html',
  styleUrls: ['./actualite.component.scss']
})
export class ActualiteComponent implements OnInit {
  dataArray: any = []
  page: number = 1;
  count: number = 0
  tableSize: number = 12;
  tableSizes: any = [12, 24, 36, 48];
  constructor(private news: PostsService) {
    this.news.getAllPosts().subscribe((data) => {
      this.dataArray = data
      console.log(data);

    })
  }

  ngOnInit(): void {
  }
  liste(): void {
    this.news.getAllPosts().subscribe((data) => {
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
