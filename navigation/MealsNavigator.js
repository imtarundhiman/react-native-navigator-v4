import React from "react";
import { Platform,StatusBar } from "react-native";
import { createStackNavigator } from "react-navigation-stack";
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { createMaterialBottomTabNavigator } from "react-navigation-material-bottom-tabs";
import { createDrawerNavigator } from "react-navigation-drawer";
import { createAppContainer } from 'react-navigation';
import CategoriesScreen from './../screens/CategoriesScreen'
import CategoryMealsScreen from './../screens/CategoryMealsScreen'
import MealDetailScreen from './../screens/MealDetailScreen'
import FiltersScreen from './../screens/FiltersScreen'
import FavouriteScreen from './../screens/FavouritesScreen'
import Colors from '../constants/color'
import {Ionicons} from '@expo/vector-icons'

const stackNavigatorDefaultOptions = {
    headerStyle: {
        backgroundColor: Platform.OS === 'android' ? Colors.primaryColor: 'white'
    },
    headerTintColor: Platform.OS === 'android' ? '#fff' : Colors.primaryColor
}

// stack navigatior for meals
const MealsNavigator = createStackNavigator({
    Categories: CategoriesScreen,
    CategoryMeals: CategoryMealsScreen,
    MealDetail: MealDetailScreen
}, {
    initialRouteName: "Categories",
    mode:"modal",
    defaultNavigationOptions: stackNavigatorDefaultOptions
})

// stack navigatior for favourites
const FavouritesNavigator = createStackNavigator({
    Favourite: FavouriteScreen,
    MealDetail: MealDetailScreen
},{
    initialRouteName: "Favourite",
    mode:"modal",
    defaultNavigationOptions: stackNavigatorDefaultOptions
})

const tabScreenConfig = {
    Meals: {   
        screen: MealsNavigator,
        navigationOptions: {
            tabBarLabel: "Meals",
            tabBarIcon : (tabInfo) => {
                return <Ionicons name="ios-restaurant" size={25} color={tabInfo.tintColor}/>
            },
            tabBarColor: Colors.primaryColor
        }
    },
    Favourite: {
        screen: FavouritesNavigator,
        navigationOptions: {
            tabBarLabel: "Favourite",
            tabBarIcon: (tabInfo) => {
                return <Ionicons name="ios-star" size={25} color={tabInfo.tintColor}/>
            },
            tabBarColor: Colors.primaryColor
        }
    }
}

// tab navigator
const MealsTabFavNavigator = Platform.OS === 'android' ? createMaterialBottomTabNavigator(tabScreenConfig, {
    activeColor: Colors.accentColor,
    shifting: true,
    barStyle: {
        backgroundColor: Colors.primaryColor
    }
}) : createBottomTabNavigator(tabScreenConfig,{
    tabBarOptions:{
        activeTintColor: Colors.accentColor
    }
})

// filters stack navigator

const FilterNavigator = createStackNavigator({
    Filters: FiltersScreen
},{
    initialRouteName: "Filters",
    mode:"modal",
    defaultNavigationOptions: stackNavigatorDefaultOptions
})

// main drawr navigator

const MainNavigator = createDrawerNavigator({
    MealsFavs: {
        screen: MealsTabFavNavigator,
        navigationOptions: {
            drawerLabel: "Meals"
        }
    },
    Filters: {
        screen: FilterNavigator,
        navigationOptions: {
            drawerLabel: "Filters"
        }
    }
},{
    contentOptions: {
        activeTintColor: Colors.accentColor
    },
    cardStyle: {
        paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0
    }
})

export default createAppContainer(MainNavigator);