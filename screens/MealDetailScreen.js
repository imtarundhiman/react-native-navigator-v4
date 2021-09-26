import React from 'react'
import {Text, View} from 'react-native'
import {MEALS} from './../data/dummy-data'
import HeaderButton from '../components/HeaderButton'
import { HeaderButtons, Item } from 'react-navigation-header-buttons'

const getSelectedMeal = (mealId) => {
    return MEALS.find(meal => meal.id === mealId)
}

const MealDetailScreen = (props) => {
    const meal = getSelectedMeal(props.navigation.getParam('mealId'))
    return (
        <View>
            <Text>{meal.title} {props.navigation.getParam('mealId')}</Text>
        </View>
    )
}

MealDetailScreen.navigationOptions = (navigationData) => {

    const mealDetail = getSelectedMeal(navigationData.navigation.getParam('mealId'))
    return {
        headerTitle: mealDetail.title,
        headerRight: () => <HeaderButtons HeaderButtonComponent={HeaderButton}>
            <Item title="Favourite" iconName="ios-star" />
        </HeaderButtons>
    }
}


export default MealDetailScreen;