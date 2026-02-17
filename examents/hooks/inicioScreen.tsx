import { useContext } from "react"
import { BankContext } from "../components/BankContext" 
import { useNavigation } from "@react-navigation/native";
import { Button, FlatList, Text, View } from "react-native";


export const inicioScreen = () =>{

const context = useContext(BankContext);

const navigation = useNavigation();

if(!context) return null;

const {balance, transactions, deposit} = context;

return(
<View style={{flex: 1, padding: 20}}> 
<Text style={{fontSize: 20}}>Hola Usuario</Text>
<Text style={{fontSize: 18, marginVertical: 10}}> Saldo actual: L{balance}</Text>
<Button title="Depositar L 500" onPress={deposit}></Button>
<Button title="Ir a transferencias" onPress={() => navigation.navigate}></Button>
<Button title="Ver historial" onPress={() => navigation.navigate}></Button>
<Text style={{marginTop: 20, fontWeight: "bold"}}>Transacciones:</Text>
<FlatList data={transactions} keyExtractor={(item) => item.id.toString()} renderItem={({item}) => <Text>{item.description}</Text>}></FlatList>

</View>







);







};