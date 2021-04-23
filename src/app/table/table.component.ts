import { Component, OnInit } from '@angular/core';
import {JsonService} from './../json.service';


@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit{

  posts = [];

  ngOnInit(): void{
  }

  constructor(private json: JsonService){
    setTimeout((): void => {
      // tslint:disable-next-line:semicolon
      this.json.getJson().subscribe((data: any) => {this.posts = data; }); console.log(this.posts); } , 2000);
    }
}
