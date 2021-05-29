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
  aux = '';

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

      this.aux = this.texto.split('"').join('');
      this.aux = this.aux.split(",").join("\n");
      console.log(this.aux);
      

    });
    this.cadena = '';
  }

}
