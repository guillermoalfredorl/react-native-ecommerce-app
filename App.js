import React from 'react'
import { createStore, combineReducers } from 'redux'
import { Provider } from 'react-redux'
import AppLoading from 'expo-app-loading' // expo install expo-app-loading
import { useFonts } from 'expo-font'
 
import productReducer from './store/reducers/products'
import cartReducer from './store/reducers/cart'
import ShopNavigator from './navigation/ShopNavigator'
 
const rootReducer = combineReducers({
  products: productReducer,
  cart: cartReducer,
})
 
const store = createStore(rootReducer)
 
export default function App() {
  let [fontsLoaded] = useFonts({
    'open-sans': require('./assets/fonts/OpenSans-Regular.ttf'),
    'open-sans-bold': require('./assets/fonts/OpenSans-Bold.ttf'),
  })
 
  if (!fontsLoaded) {
    return <AppLoading />
  } else {
    return (
      <Provider store={store}>
        <ShopNavigator />
      </Provider>
    )
  }
}