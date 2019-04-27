import React from "react";
import { AsyncStorage } from "react-native";
import {
  createBottomTabNavigator,
  createStackNavigator,
  createSwitchNavigator,
  createAppContainer
} from "react-navigation";
import { Provider } from "react-redux";
import { createStore } from "redux";
import WelcomeScreen from "./screens/WelcomeScreen";
import SigninScreen from "./screens/SigninScreen";
import SignupScreen from "./screens/SignupScreen";
import MainScreen from "./screens/MainScreen";
import ExpensesScreen from "./screens/ExpensesScreen";
import ScheduleScreen from "./screens/ScheduleScreen";
import ShoplistScreen from "./screens/ShoplistScreen";
import ForgatPasswordScene from "./screens/ForgatPasswordScene";

import reducers from "./reducers";

let AppTab = createBottomTabNavigator(
  {
    Main: MainScreen,
    Schedule: ScheduleScreen,
    List: ShoplistScreen,
    Expenses: ExpensesScreen
  },
  {
    initialRouteName: "Main"
  }
);

let AuthTab = createStackNavigator(
  {
    Signin: SigninScreen,
    Signup: SignupScreen,
    Forgat: ForgatPasswordScene
  },
  {
    headerMode: "none"
  },
  {
    initialRouteName: "Signin"
  }
);

let Navigation = createAppContainer(
  createSwitchNavigator(
    {
      Welcome: WelcomeScreen,
      Auth: AuthTab,
      App: AppTab
    },
    {
      initialRouteName: 'Auth'
    }
  )
);

export default class App extends React.Component {

  _fethcData = async () => {
    try {
      const JWT = await AsyncStorage.getItem("jwt");
      if (JWT !== null) {
        this.props.navigation.navigate('App');
      }
    } catch (error) {}
  };
  componentDidMount(){
    this._fethcData();
  }

  render() {
    return (
      <Provider store={createStore(reducers, {})}>
        <Navigation />
      </Provider>
    );
  }
}
