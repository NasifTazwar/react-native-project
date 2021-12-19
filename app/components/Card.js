import React from 'react';
import { View,StyleSheet, Image } from 'react-native';
import AppText from './AppText';

function Card({ title,subTitle,image }) {
    return (
        <View style={styles.card}>
            <Image source={require(image)}></Image>
            <AppText>{title}</AppText>
            <AppText>{subTitle}</AppText>
        </View>
    );
}

const styles = StyleSheet.create({
    card:{
        borderRadius: 15,
        backgroundColor: "white",
        marginBottom: 20
    }
})

export default Card;