import { createContext, useState, ReactNode } from "react";

type Transaction ={
id: number; 

description: string;   


}; 

type BankContextType ={

balance: number; 

transactions: Transaction[];  

deposit: () => void; 

transfer: (amount: number,account: string, name: string) => boolean;




}; 

export const BankContext = createContext< BankContextType |  undefined>(undefined); 

export const BankProvider = ({children} : {children: ReactNode}) =>{

const [balance, setBalance] = useState(10000);

const [transactions, setTransactions] = useState<Transaction[]>([]);

const deposit = () =>{

setBalance(balance + 500);

setTransactions([...transactions,{id: transactions.length + 1, description:"deposito de L 500"},]);


};

const transfer =(amount: number, account: string, name: string) =>{

if(amount <= balance){

setBalance(balance - amount);
setTransactions([...transactions, {id: transactions.length + 1, description: `Transferencia de L${amount} a ${name} (${account})`,
},

]);
return true;

}else{
return false;

}


};

return(
<BankContext.Provider value={{balance, transactions, deposit, transfer}}>
{children}

</BankContext.Provider>


);

};