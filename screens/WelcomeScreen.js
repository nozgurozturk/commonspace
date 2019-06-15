import React from "react";
import { View } from "react-native";

import Slides from "../components/Slides";

const SLIDE_DATA = [
  { id: 0, text: "Welcome to CommonSpace" },
  { id: 1, text: "Create Commons and Add User" },
  { id: 2, text: "Add Expenses and List with due data" },
  { id: 3, text: "Let's Start" }
];

export default class WelcomeScreen extends React.Component {
_onComplete=()=>{
  this.props.navigation.navigate('Signup')
}
  render() {
    return (
      <View style={{ flex: 1 }}>
        <Slides data={SLIDE_DATA} onComplete={this._onComplete}/>
      </View>
    );
  }
}
