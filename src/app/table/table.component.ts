import { Component, OnInit } from '@angular/core';
import { Data } from '@angular/router';
import { ListService } from './../list.service';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit{

  list: Data[] = [];

  constructor(private listService: ListService){}

  ngOnInit(): void{
    this.fetchList();
  }

  fetchList(): void{
    this.listService.getList().subscribe((list: Data[]) => {
      this.list = list;
      console.log(list);
    });
  }

}
