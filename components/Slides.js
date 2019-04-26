import React from "react";
import { ScrollView, View, Text, TouchableWithoutFeedback, Dimensions } from "react-native";
import styled from "styled-components";
import Icon from "react-native-vector-icons/Feather";

let SCREEN_WIDTH = Dimensions.get("window").width;

const Slide = styled(View)`
  flex: 1;
  justify-content: center;
  align-content: center;
  width: ${SCREEN_WIDTH};
`;

const Header = styled(Text)`
  font-size: 36;
  text-align: center;
`;

const IndicatorContainer = styled(View)`
  z-index: 99;
  margin: 40px auto;
  flex-direction: row;
  width: ${SCREEN_WIDTH - 200};
  justify-content: space-around;
`;

const Indicator = styled(View)`
  height: 8;
  width: ${(SCREEN_WIDTH - 200) / 5};
  border-radius: 4;
  border: 1px solid #1a1a1a;
  background-color: ${props => props.color};
`;

const ButtonContainer = styled(View)`
  margin:0 auto;
  justify-content:center;
  align-content:center;
  width:${SCREEN_WIDTH /6};
  height:${SCREEN_WIDTH /6};
  border-radius:${SCREEN_WIDTH /12};
  background-color:#2a66ff;
`;
export default class Slides extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      active: 0
    };
  }
  _onScroll = e => {
    if (
      e.nativeEvent.contentOffset.x >= 0 &&
      e.nativeEvent.contentOffset.x <=
        (this.props.data.length - 1) * SCREEN_WIDTH
    ) {
      this.setState({ active : e.nativeEvent.contentOffset.x /SCREEN_WIDTH });
    }
  };
  renderLastPage (i){
    if(i === this.props.data.length-1){
      return(
        <TouchableWithoutFeedback onPress={this.props.onComplete}>
          <ButtonContainer>
          <Icon style={{textAlign:'center'}} name="arrow-right" size={SCREEN_WIDTH / 7}  color="#fafafa" />
          </ButtonContainer>
        </TouchableWithoutFeedback>
      )
    }
  }
  render() {
    return (
      <View style={{ flex: 1 }}>
        <ScrollView
          style={{ flex: 1 }}
          horizontal
          pagingEnabled
          showsHorizontalScrollIndicator={false}
          onScroll={e => this._onScroll(e)}
        >
          {this.props.data.map((slide, i) => (
            <Slide key={i}>
              <Header>{slide.text}</Header>
              {this.renderLastPage(i)}
            </Slide>
          ))}
        </ScrollView>
        <IndicatorContainer>
          {this.props.data.map((item, i) => (
            <Indicator
              key={i}
              color={
                item.id === this.state.active
                  ? "#2A66FF"
                  : "#ffffff"
              }
            />
          ))}
        </IndicatorContainer>
      </View>
    );
  }
}
