import React from 'react';
import { Image,StyleSheet, View } from 'react-native';

function ViewImageScreen(props) {
    return (
        <View style={styles.container}>
            <View style={styles.closeIcon}>
                
            </View>
            <View style={styles.deleteIcon}>

            </View>
            <Image resizeMode='center' blurRadius={1} style={styles.image} source={require("../assets/viewImageScreen.jpg")}></Image>  
        </View>
    );
}

const styles = StyleSheet.create({
    image:{
        width: "100%",
        height: "100%"
    },
    container:{
        flex:1,
        backgroundColor: "black"
    },
    closeIcon:{
        width: 50,
        height: 50,
        backgroundColor: "#fc5c65",
        position:"absolute",
        top:40,
        left:30
    },
    deleteIcon:{
        width: 50,
        height: 50,
        backgroundColor: "#4ecdc4",
        position:"absolute",
        top:40,
        right:30
    }
})

export default ViewImageScreen;