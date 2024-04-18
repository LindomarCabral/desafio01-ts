export abstract class DioAccount {
  private readonly name: string
  private readonly accountNumber: number
  private balance: number = 0
  private status: boolean = true

  constructor(name: string, accountNumber: number){
    this.name = name
    this.accountNumber = accountNumber
  }

  getName = (): string => {
    return this.name
  }

  deposit = (valor: number): void => {
    if(this.validateStatus()){
      this.creditBalance(valor)    
      console.log(`Voce depositou: ${valor}`)
    }
  }

  withdraw = (valor: number): void => {
    if(this.validateStatus()){
      if(this.balance >= valor){
        this.debitBalance(valor)     
        console.log(`Voce sacou: ${valor}`)
      } else{
        console.log(`Saldo insuficiente! Seu saldo disponivel é ${this.balance}`);        
      }
    } else{
      console.log('É necessario ter uma conta ativa');      
    }
  }

  
  creditBalance = (valor: number): void => {
    this.balance += valor
  }

  debitBalance = (valor: number): void => {
    this.balance -= valor
  }

  getBalance = (): number => {
    return this.balance
  }
  
  getStatus = (): boolean => {
    return this.validateStatus()
  }
  private validateStatus = (): boolean => {
    try {      
        return this.status 
      
    } catch (error) {
      throw new Error('Conta inválida')
    }
  }
}
