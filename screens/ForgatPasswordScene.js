import React from 'react';
import { Text, View, Button } from 'react-native';

export default class ForgatPasswordScene extends React.Component {
  render() {
    return (
      <View>
        <Button style={{marginTop:50}} onPress={()=>this.props.navigation.navigate('Main')} title='GO'></Button>
      </View>
    );
  }
}