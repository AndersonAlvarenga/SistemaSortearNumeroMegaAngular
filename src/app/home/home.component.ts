import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  valor: string="";
  aux: any;
  ListaNumeros: number[] = [];
  ListaResposta: number[] = [];
  constructor() { }

  ngOnInit(): void {
  }
  onSubmit(form:any) {
    this.aux = form.value;
    this.addNumero(this.aux.valor);
    this.valor = "";
  }
  addNumero(numero: number) {
    if (numero <= 60 && !this.contem(numero, this.ListaNumeros))
      this.ListaNumeros.push(numero)
  }
  apagar() {
    this.ListaNumeros.pop();
  }
  limpar() {
    this.ListaNumeros = [];
  }
  sortear() {
    let min = Math.ceil(0);
    let max = Math.floor(this.ListaNumeros.length-1);
   
    while (this.ListaResposta.length < 10) {
      let resp = Math.floor(Math.random() * (max - min)) + min;
      console.log("posicao Sorteado" + resp)
      if (!this.contem(this.ListaNumeros[resp], this.ListaResposta)) {
        this.ListaResposta.push(this.ListaNumeros[resp]);
      }
      this.ListaResposta = this.ListaResposta.sort((n1, n2) => n1 - n2);
    }
    
  }
  contem(numero: number, Lista: number[]) {
    let aux = false;

    Lista.forEach((number) => {
      if (numero == number) {
        aux = true;
      }
    })
    return aux;
  }

}
