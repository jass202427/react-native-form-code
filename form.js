import { useState } from "react"
import { StyleSheet, Text, TextInput, View, Button} from "react-native"

const Form =()=>{
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [display, setDisplay] = useState(false)
    return(
        <View>
            <Text style={{fontSize:40}}>Simple Form</Text>
            <TextInput style={styles.textInput}  
            placeholder="Enter user name"
            onChange={(text)=>setName(text)}
            value={name}/>

            <TextInput style={styles.textInput}  
            placeholder="Enter user email"
            onChange={(text)=>setEmail(text)}
            value={email}/>

            <TextInput style={styles.textInput}  
            placeholder="Enter user password"
            secureTextEntry={true}
            onChange={(text)=>setPassword(text)}
            value={password}/>
            
          <View style={{marginBottom:10}}>  
            <Button color={'green'} 
            title='Print Details' 
            onPress={()=>setDisplay(true)}/>
          </View> 
          
            <Button title='Clear Details'/>
            <View>
              {
                display ?
                <View>
                  <Text style={{fontSize:15}}>Username: {name}</Text>
                  <Text style={{fontSize:15}}>Useremail: {email}</Text>
                  <Text style={{fontSize:15}}>Userpassword: {password}</Text>
                </View> 
                : null
              }
            </View>
          </View>  
    )
}

const styles= StyleSheet.create({
    textInput:{
    fontSize:20,
    backgroundColor:'lightgrey',
    borderWidth:2,
    margin:10
    }
})

export default Form;