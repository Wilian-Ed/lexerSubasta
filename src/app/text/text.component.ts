import { Component, OnInit } from '@angular/core';
import { ListService } from './../list.service';

@Component({
  selector: 'app-text',
  templateUrl: './text.component.html',
  styleUrls: ['./text.component.css']
})
export class TextComponent implements OnInit {

  constructor(private listService: ListService) { }

  cadena = '';
  resp: string | undefined;
  

  ngOnInit(): void {
  }

  intent(): void{
    this.cadena = this.cadena.replace('%', '%25');
    this.listService.lexer(this.cadena).subscribe((list: any) => {
      this.resp = list;
      console.log(this.resp);
      
      alert(JSON.stringify(this.resp));
    });
  }

}
