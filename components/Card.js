import React from "react";
import { ScrollView, View, Text, TouchableWithoutFeedback, Dimensions } from "react-native";
import styled from "styled-components";
import Icon from "react-native-vector-icons/Feather";

let SCREEN_WIDTH = Dimensions.get("window").width;
let SCREEN_HEIGHT = Dimensions.get('window').height;

const Container = styled(View)`
    height:${SCREEN_HEIGHT / 3};
    width:${SCREEN_WIDTH-50};
    border-radius:25;
    box-shadow: 0px 1px 10px #8a8a8a;
    background-color: #fafafa;
    margin-top:50; 
`;

const Header = styled(View)`
    flex-direction:row;
    height:${SCREEN_HEIGHT/12};
    justify-content:space-between;
    align-content:center;
    border-top-left-radius:25;
    border-top-right-radius:25;
    background-color: #2a66ff;
`;

const Title = styled(Text)`
    color: #fafafa;

    font-size: 18;
    font-weight: 600;
    align-self:center;
    margin-left:25;
`;

export default class Card extends React.PureComponent {

render(){
    return(
    <Container>
        <Header>
            <Title>{this.props.title}</Title>
            <Icon style={{textAlign:'center', marginRight:25, height:24, alignSelf:'center'}} name={this.props.icon} size={24}  color="#fafafa" />
        </Header>
    </Container>
    )
}
}