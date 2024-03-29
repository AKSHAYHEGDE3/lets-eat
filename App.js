import { createStackNavigator } from '@react-navigation/stack'
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import Home from './pages/Home';
import { Provider } from "react-redux";
import store from './redux/store'
import RestaurantPage from './pages/RestaurantPage';
import Checkout from './pages/Checkout';
import OrderCompleted from './pages/OrderCompleted';

export default function App() {

  const Stack = createStackNavigator();
  const theme = {
    ...DefaultTheme,
    colors: {
      ...DefaultTheme.colors,
      background: "transparent",
    }
  }

  return (
    <Provider store={store} >
      <NavigationContainer theme={theme}>
        <Stack.Navigator screenOptions={{
          headerShown: false,
        }}
          initialRouteName="Home"
        >
          <Stack.Screen name='Home' component={Home} />
          <Stack.Screen name='RestaurantPage' component={RestaurantPage} />
          <Stack.Screen name='Checkout' component={Checkout} />
          <Stack.Screen name='OrderCompleted' component={OrderCompleted} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}


