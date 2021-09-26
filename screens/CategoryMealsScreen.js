import React from 'react'
import {FlatList} from 'react-native'
import {CATEGORIES, MEALS} from './../data/dummy-data'
import MealItem from '../components/MealItem'

const getSelectedCategory = (catId) => {
    return CATEGORIES.find(cat => cat.id === catId)
}

const getAvailableMeals = (catId) => {
    return MEALS.filter(meal => meal.categoryIds.indexOf(catId) >= 0)
}

const CategoryMealsScreen = (props) => { 
    let displayedMeals = getAvailableMeals(props.navigation.getParam('categoryId'))

    const renderMealDetail = (mealData) => {
        return <MealItem onGoDetail={() => props.navigation.navigate({
            routeName: 'MealDetail',
            params: {
                mealId: mealData.item.id
            }
        })} mealData={mealData.item}/>
    }

    return (
        <FlatList data={displayedMeals} renderItem={renderMealDetail}/>
    )
}

CategoryMealsScreen.navigationOptions = (navigationData) => {
    let selectedCategory = getSelectedCategory(navigationData.navigation.getParam('categoryId'))
    
    return {
        headerTitle: selectedCategory.title
    }
}


export default CategoryMealsScreen;