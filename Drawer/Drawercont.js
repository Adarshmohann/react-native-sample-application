import React,{Component} from "react";
import { View,Text,StyleSheet } from "react-native";



export default class Drawercont extends Component{
    render(){
        return(
            <View style={styles.container}>

                <Text style={styles.hometext}
                onPress={()=>this.props.navigation.navigate('House')}>House</Text>
                <Text style={styles.hometext}
                onPress={()=>this.props.navigation.navigate('Hut')}>Hut</Text>
                <Text style={styles.hometext}
                onPress={()=>this.props.navigation.navigate('Veed')}>Veed</Text>

            

            </View>
        )
    }
}
const styles = StyleSheet.create({

    container:{
        flex:1,
        backgroundColor:'white',
        marginTop:10,
        
        marginLeft:10
    
    },
    hometext:{
        fontSize:20,
        fontWeight:'bold',
        marginBottom:10,
        color:'black'
        
    }
})