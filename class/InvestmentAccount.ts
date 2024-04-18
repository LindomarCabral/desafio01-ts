import { DioAccount } from "./DioAccount";

export class InvestmentAccount extends DioAccount{

  constructor(name: string, accountNumber: number){
    super(name, accountNumber)    
  }

  deposit = (valor: number): void => {
    if(this.getStatus()){
      let acrescimo: number = valor * 0.1
      let valorTotal: number = valor + acrescimo
      this.creditBalance(valorTotal)
     // this.deposit(valorTotal) 
      console.log(`Voce depositou: ${valor} e recebeu de acréscimo: ${acrescimo} Seu novo saldo é: ${this.getBalance()}`)
    }
  }

}

