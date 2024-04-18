import { CompanyAccount } from './class/CompanyAccount'
import { PeopleAccount } from './class/PeopleAccount'
import { InvestmentAccount } from './class/InvestmentAccount'


const peopleAccount: PeopleAccount = new PeopleAccount(1, 'Lindomar', 10)
console.log(peopleAccount);
peopleAccount.deposit(10)
peopleAccount.withdraw(7.5)
peopleAccount.withdraw(50)

console.log('**********************************');

const companyAccount: CompanyAccount = new CompanyAccount('DIO', 20)
console.log(companyAccount)
console.log('saldo atual:', companyAccount.getBalance());
companyAccount.deposit(10)
console.log('saldo atual:', companyAccount.getBalance());
companyAccount.getLoan(20)
console.log('saldo atual:', companyAccount.getBalance());
companyAccount.withdraw(10)
console.log('saldo atual:', companyAccount.getBalance());
companyAccount.getLoan(30)
console.log('saldo atual:', companyAccount.getBalance());

console.log('**********************************');

 const investimentAccount: InvestmentAccount = new InvestmentAccount('Lindomar', 20)
 investimentAccount.deposit(100)


