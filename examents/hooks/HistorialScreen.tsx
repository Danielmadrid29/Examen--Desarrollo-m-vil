import { useContext } from "react"
import { BankContext } from "../components/BankContext"
import { FlatList, Text, View } from "react-native";

export const HistorialScreen = () =>{

const context = useContext(BankContext);
if(!context) return null;

const {transactions} = context;

return(
<View style={{flex: 1, padding: 20}}>
<Text style={{fontSize: 18, fontWeight: "bold"}}>Historial de transacciones</Text>
<FlatList data={transactions} keyExtractor={(item) => item.id.toString()} 
    renderItem={({item}) => <Text>{item.description}</Text>}>

</FlatList>

<Text style={{marginTop: 20}}>Total de Transacciones: {transactions.length}</Text>






</View>





);



};