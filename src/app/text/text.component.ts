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
  texto = '';

  ngOnInit(): void {
  }

  intent(): void{
    this.cadena = this.cadena.replace('%', '%25');


    this.listService.lexer(this.cadena).subscribe((list: any) => {
      this.resp = list;
      this.texto = JSON.stringify(this.resp);
      this.texto = this.texto.replace('"' , '');
      this.texto = this.texto.replace('{' , '');
      this.texto = this.texto.replace('}' , '');

      console.log(this.texto.split('"').join(''));
      alert(this.texto.split('"').join(''));
    });
    this.cadena = '';
  }

}
