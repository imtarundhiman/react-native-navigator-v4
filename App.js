import React, {useState, useEffect} from 'react';
import * as Font from 'expo-font'
import AppLoading from 'expo-app-loading'
import MealsNavigator from './navigation/MealsNavigator';
import { enableScreens } from 'react-native-screens';
import {createStore, combineReducers} from 'redux'
import mealsReducer from './store/reducers/meals'
import {Provider} from 'react-redux'

enableScreens()

const rootReducer = combineReducers({
  meals: mealsReducer
})

const store = createStore(rootReducer)

export default function App() {

  const [fontsLoaded, setFontsLoaded] = useState(false)

  const fetchFonts = () => {
    return Font.loadAsync({
      'open-sans-regular' : require('./assets/fonts/OpenSans-Regular.ttf'),
      'open-sans-bold' : require('./assets/fonts/OpenSans-Bold.ttf'),
    })
  }

  useEffect(() => {
    fetchFonts().then(() => {
      setFontsLoaded(true)
    })
  }, [])

  if(!fontsLoaded){
    return (<AppLoading/>)
  }

  return (
    <Provider store={store}><MealsNavigator/></Provider>
  );
}