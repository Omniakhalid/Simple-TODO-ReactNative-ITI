import {View, Text, StyleSheet} from 'react-native'
//import styles  from '../style'
export const Header = ({title})=>{
    return(
        <View>
            <Text style={styles.header}>
                {title}
            </Text>
        </View>
    )
} 
const styles = StyleSheet.create({
    header: {
        fontSize: 20,
        color:"white",
        textAlign:"center",
        padding:40,
        paddingBottom:15,
        backgroundColor:"#144C9A"
    }
});