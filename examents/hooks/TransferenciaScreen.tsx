import { useContext, useState } from "react"
import { BankContext } from "../components/BankContext"
import { Alert, View, Text, TextInput, Button } from "react-native";

export const TransferScreen = () =>{

const context = useContext(BankContext);
if(!context) return null;

const {transfer} = context; 

const [account, setAccount] = useState("");
const [name, setName] = useState("");
const [amount, setAmount] = useState("");

const handleTransfer = () =>{

    const monto = parseFloat(amount);
if(isNaN(monto)){
Alert.alert("Error", "Ingrese un monto valido");
return;
}
const success = transfer(monto, account, name );
if(success){

Alert.alert("Exito", "Transferencia realizada");

}else{
Alert.alert("Error", "No cuenta con el saldo para hacer la transaccion");


}

};

return(

<View style={{flex: 1, padding: 20}}>
<Text>Numero de cuenta:</Text>
<TextInput style={{borderWidth: 1, marginBottom: 10}} value={account} onChangeText={setAccount}>

</TextInput>

<Text>Nombre del destinatario:</Text>

<TextInput style={{borderWidth: 1, marginBottom: 10}} value={name} onChangeText={setName}>

</TextInput>
<Text>Monto a transferir:</Text>
<TextInput style={{borderWidth: 1, marginBottom: 10}} value={amount} onChangeText={setAmount} keyboardType="numeric">


</TextInput>

<Button title="Transferir saldo" onPress={handleTransfer}></Button>

</View>






);





};