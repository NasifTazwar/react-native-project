import React from 'react';
import { Image, ImageBackground ,StyleSheet, Text, View} from 'react-native';
import AppButton from '../components/AppButton';

function WelcomeScreen(props) {
    return (
        <ImageBackground blurRadius={5} resizeMode="cover" style={styles.background} source={require('../assets/background.jpg')}>
            <View style={styles.logoContainer}>
                <Image style={styles.logo} source={require("../assets/logo.png")}></Image>
                <Text style={styles.appNameStyle}>Cameraoid</Text>
            </View>
            <View style={styles.buttonsContainer}>
                <AppButton title="Login"></AppButton>
                <AppButton title="Register"></AppButton>
                
            </View>
        </ImageBackground>
    );
}

const styles = StyleSheet.create({
    background: {
        flex: 1,
        justifyContent:'flex-end',
        alignItems: "center"
    },
    logo:{
        width:100,
        height:100,
    },
    logoContainer:{
        position: "absolute",
        top: 70,
        alignItems: "center"
    },
    appNameStyle:{
        fontSize: 32,
        fontWeight:"700",
        color: "white"
    },
    buttonsContainer:{
        padding: 20,
        width:"90%"
    }
})

export default WelcomeScreen;