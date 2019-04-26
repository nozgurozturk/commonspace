import React from "react";
import { View, Text, TextInput } from "react-native";
import styled from "styled-components";
import Icon from "react-native-vector-icons/Feather";

const Wrapper = styled(View)`
  width: 100%;
  margin-top: 40px;
`;
const Line = styled(View)`
  border-bottom-width: 1;
  border-bottom-color: #1a1a1a;
`;

const InputType = styled(Text)`
  /* margin: 16px 0px; */
  color: #1a1a1a;
  font-size: 18;
  font-weight: 400;
`;

const TInput = styled(TextInput)`
  color: #9a9a9a;
  height: 40;
  font-size: 18;
  font-weight: 400;
`;

const ErrorMessage = styled(Text)`
    color:#ff0000;
    font-size:16;
    font-weight: 400;
    margin-top:8px;
`;

export default class Input extends React.PureComponent {
  _handleChange = value => {
    this.props.onChange(this.props.name, value);
  };
  _handleTouch = () =>{
      this.props.onTouch(this.props.name)
  }

  icon = () => {
    switch (this.props.label) {
      case "Email":
        return "mail";
        break;
      case "Name":
        return "user";
        break;
      case "Password":
        return "lock";
        break;
      case "Comfirm Password":
        return "lock";
        break;
      default:
        break;
    }
  };
  render() {
    const { label, error, ...rest } = this.props;
    return (
      <Wrapper>
        <InputType>
          <Icon
            style={{ textAlignVertical: "center" }}
            name={this.icon()}
            size={20}
            color="#1a1a1a"
            
          />
          {"  "}
          {label}
        </InputType>
        <TInput
          onChangeText={this._handleChange}
          onBlur={this._handleTouch}
          placeholder={label}
          {...rest}
        />
        <Line />
        <ErrorMessage>{error}</ErrorMessage>
      </Wrapper>
    );
  }
}
