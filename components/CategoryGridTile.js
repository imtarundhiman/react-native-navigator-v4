import React from "react";
import { TouchableOpacity, View, Text, StyleSheet } from "react-native";

const CategoryGridTile = (props) => {
    return <TouchableOpacity style={styles.opacity} onPress={props.onSelect}>
        <View style={{...styles.container,...{backgroundColor: `${props.color}`}}}>
            <Text style={styles.title}>{props.title}</Text>
        </View>
    </TouchableOpacity>
}

const styles = StyleSheet.create({
    opacity: {
        flex:1, margin:15
    },
    title: {
        fontFamily: 'open-sans-bold',
        fontSize: 20,
        textAlign: 'right'
    },  
    container:{
        flex:1,
        height:150,
        borderRadius: 10,
        padding: 10,
        justifyContent: 'flex-end',
        alignContent: 'flex-end',
        alignItems: 'flex-end'
    }
})

export default CategoryGridTile;