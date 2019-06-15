import React from 'react';
import { Text, ScrollView, View, Dimensions } from 'react-native';
import styled from "styled-components";


import Card from '../components/Card'

const SCREEN_HEIGHT = Dimensions.get("window").height;
const SCREEN_WIDTH = Dimensions.get("window").width;

const CARD_DATA = [
  {title:'Shopping List',
  icon:'shopping-bag'},
  {title:'Expenses',
  icon:'zap'},
  {title:'Schedule',
  icon:'calendar'},
  {title:'Custom Card',
  icon:'triangle'},
]

const Wrapper = styled(ScrollView)`
  margin:0px auto;
  overflow: auto;
`;


export default class MainScreen extends React.Component {
  render() {
    return (
      <View style={{flex:1, justifyContent:"center"}}>
      <Wrapper showsVerticalScrollIndicator={false}>
        {CARD_DATA.map((card, i) => (
            <Card title={card.title} icon={card.icon}>
            </Card>
          ))}
      </Wrapper>
      </View>

    );
  }
}