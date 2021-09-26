import React from 'react'
import {FlatList} from 'react-native'
import {CATEGORIES} from './../data/dummy-data'
import CategoryGridTile from '../components/CategoryGridTile'
import { HeaderButtons, Item } from 'react-navigation-header-buttons'
import HeaderButton from '../components/HeaderButton'

const CategoriesScreen = (props) => {

    const renderGridItem = (itemData) => {
        return <CategoryGridTile onSelect={() => props.navigation.navigate({routeName: 'CategoryMeals',params: {categoryId: itemData.item.id}})} color={itemData.item.color} title={itemData.item.title} id={itemData.item.id}/>
    }

    return (
        <FlatList numColumns={2} data={CATEGORIES} renderItem={renderGridItem}/>
    )
}

CategoriesScreen.navigationOptions = (navData) => {
    return {
        headerTitle: 'Meal Categories',
        headerLeft: () => <HeaderButtons HeaderButtonComponent={HeaderButton}>
            <Item title="menu" iconName="ios-menu" onPress={() => {navData.navigation.toggleDrawer()}}/>
        </HeaderButtons>
    }
}


export default CategoriesScreen;