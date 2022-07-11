import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { NavigationContainer } from '@react-navigation/native'
import Home from './screens/Home'
import RestaurantPage from './screens/RestaurantPage'
import { Provider } from "react-redux";
import store from './redux/store'
import Checkout from './screens/Checkout'
import OrderCompleted from './screens/OrderCompleted'

const Navigation = () => {

  const Stack = createStackNavigator();
  const screenOptions = {
    headerShown: false,
  }

  return (
    <Provider store={store} >
      <NavigationContainer>
        <Stack.Navigator initialRouteName='Home' screenOptions={screenOptions}>
          <Stack.Screen name='Home' component={Home} />
          <Stack.Screen name='RestaurantPage' component={RestaurantPage} />
          <Stack.Screen name='Checkout' component={Checkout} />
          <Stack.Screen name='OrderCompleted' component={OrderCompleted} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  )
}

export default Navigation