import { createStackNavigator, createSwitchNavigator } from 'react-navigation';
import LoadingScreen from '../screens/Loading';
import LoginScreen from '../screens/Login';
import BookingsScreen from '../screens/Bookings';

const defaultNavigationOptions = {
  header: null,
};

const AuthStack = createStackNavigator(
  {
    Loading: LoadingScreen,
    Login: LoginScreen,
  },
  {
    navigationOptions: defaultNavigationOptions,
  },
);

const AppStack = createStackNavigator({
  Bookings: BookingsScreen,
});

const AppSwitchNavigator = createSwitchNavigator({
  Auth: AuthStack,
  App: AppStack,
});

export default AppSwitchNavigator;
