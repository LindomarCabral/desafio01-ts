import { DioAccount } from "./DioAccount"

export class CompanyAccount extends DioAccount {

  constructor(name: string, accountNumber: number){
    super(name, accountNumber)
  }

  
  getLoan = (valor: number): void => {
    if(this.getStatus()){
      console.log('Voce pegou um empréstimo de', valor)
      this.creditBalance(valor)      
    } else{
      console.log('É necessario ter uma conta ativa')
    }
    
  }
}
