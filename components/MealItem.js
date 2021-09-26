import React from "react";
import {Text, View, TouchableOpacity, StyleSheet, ImageBackground} from 'react-native'

const MealItem = (props) => {
    return <View style={styles.mealItem}>
        <TouchableOpacity activeOpacity={1} style={styles.opacity} onPress={props.onGoDetail}>
            <View>
                <View style={{...styles.mealRow,...styles.mealHeader}}>
                    <ImageBackground style={styles.bgImage} source={{uri: props.mealData.imageUrl}}>
                    <Text style={styles.title} numberOfLines={1}>{props.mealData.title}</Text>
                    </ImageBackground>
                </View>
                <View style={{...styles.mealRow, ...styles.mealDetail}}>
                    <Text>{props.mealData.duration}m</Text>
                    <Text>{props.mealData.complexity}</Text>
                    <Text>{props.mealData.affordability}</Text>
                </View>
            </View>
        </TouchableOpacity>
    </View> 
}

const styles = StyleSheet.create({
    opacity: {
    },
    mealItem :{
        height: 200,
        width: '100%',
        backgroundColor: '#a1a1a1'
    },  
    title: {
        fontFamily: 'open-sans-bold',
        fontSize: 20,
        backgroundColor: 'rgba(0,0,0,.7)',
        color: '#fff',
        padding:10
    }, 
    mealRow: {
        flexDirection:"row"
    },
    mealHeader: {
        height: '90%'
    },
    mealDetail: {
        paddingHorizontal:10,
        justifyContent: 'space-between',
        alignItems:'center',
        alignContent:'center'
    },
    bgImage: {
        width: "100%",
        height: "100%",
        justifyContent: 'flex-end'
    }
})

export default MealItem;