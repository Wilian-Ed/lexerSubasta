import { Component, OnInit } from '@angular/core';
import {JsonService} from './json.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent{
  title = 'lexerSubasta';


  constructor(private json: JsonService){
    this.json.getJson('http://analizadorlexico1.herokuapp.com/api/table').subscribe((res: any) => {console.log(res); });
  }

  posts = [];

}
