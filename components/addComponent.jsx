import {View, Text,TextInput,TouchableOpacity, StyleSheet} from 'react-native'
import {useState} from 'react'
import {v4 as uuid} from 'uuid'
//import styles  from '../style'
let counter = 0;
export const AddTODO = ({onTodoAdd})=>{
    const [title,setTitle] = useState('');
    const [count,setCounter] = useState(0);
    //const [error,setError] = useState(false);
    const handleChangeText = (text)=>{
        setTitle(text)
    }
    const handleAddTodo = ()=>{
        const todo = {
            id:uuid(),
            title,
            done:false
        }
        title&&onTodoAdd(todo);
        setTitle("");
    }
    return(
        <View>

        <View style={styles.container}>
            <TextInput
          style={styles.TextInput}
          value={title}
          onChangeText={handleChangeText}
          placeholder="  Enter Your Task"
          />
            <TouchableOpacity
          style={styles.roundedButton}
          onPress={handleAddTodo}
          >
          <Text style={{color:"white"}}>Add</Text>
        </TouchableOpacity>
        </View>
              </View>
    )
} 
const styles = StyleSheet.create({
    roundedButton: {
        justifyContent: "center",
        alignItems: "center",
        padding: 15,
        borderRadius: 10,
        backgroundColor: "#144C9A",
        fontSize: 20,
      },
      container: {
        flexDirection: "row",
        justifyContent: "space-around",
        marginTop:10,
        marginBottom: 10
      },
      TextInput: {
        borderRadius: 10,
        width: "80%",
        height: 50,
        borderWidth: 1,
        borderColor: '#144C9A'
      },
});