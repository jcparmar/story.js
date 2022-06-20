import React from "react";
import {Text,View,FlatList,SafeAreaView, Platform} from "react-native"
import * as Font from "expo-font"
import AppLoading from "expo-app-loading";
import { StatusBar } from "expo-status-bar";


let CustomFont = {BubbleGumSans:require("../assets/fonts/BubblegumSans-Regular.ttf")}

export default class Feed extends React.Component{
    constructor(props){
        super(props)
        this.state= {
fontLoaded:false
        }
    }
    LoadingFont = async() =>{
await Font.loadAsync(CustomFont)
this.setState({fontLoaded:true})
    }
    componentDidMount(){
        this.LoadingFont()
    }
render(){
   
    if(!this.state.fontLoaded){
        return <AppLoading/>
    }
    else{
    return(
        <View>
            <SafeAreaView style={{marginTop:Platform.OS==="android" ? StatusBar.currentHeight:0}} />
            <Image source={require("../assets/logo.png")}/>
        <View style={{justifyContent:"center"}}>
                <Text>feed Screen</Text>
        </View>
        </View>
    )
}
}

}