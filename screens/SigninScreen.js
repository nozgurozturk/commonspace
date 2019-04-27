import React from "react";
import {
  Text,
  View,
  Button,
  Dimensions,
  KeyboardAvoidingView,
  TouchableOpacity,
  Alert,
  AsyncStorage
} from "react-native";
import { Formik } from "formik";
import * as Yup from "yup";
import styled from "styled-components";
import axios from "axios";

import Input from "../components/Input";

const SCREEN_HEIGHT = Dimensions.get("window").height;
const SCREEN_WIDTH = Dimensions.get("window").width;

const Wrapper = styled(KeyboardAvoidingView)`
  flex: 1;
  margin: 0px auto;
  width: ${SCREEN_WIDTH - 50};
  height: ${SCREEN_HEIGHT - 150};
  justify-content: space-evenly;
`;
const Header = styled(Text)`
  margin-top: 30px;
  color: #2a66ff;
  font-size: 36;
  font-weight: 400;
`;
const ButtonContainer = styled(TouchableOpacity)`
  width: 80%;
  height: 50;
  margin: 40px auto;
  background-color: #2a66ff;
  opacity: ${props => props.opacity};
  border-radius: 25;
  box-shadow: 0px 2px 2px #1a1a1a;
`;
const ButtonText = styled(Text)`
  margin: 8px auto;
  color: #fafafa;
  font-size: 24;
  font-weight: 400;
  text-align: center;
`;

const BottomContainer = styled(View)`
  flex-direction: row;
  justify-content: space-around;
`;

export default class SigninScreen extends React.PureComponent {
  _onPress = () => {
    this.props.navigation.navigate("Signup");
  };
  _handleSubmit =  values => {
    const userData = JSON.stringify(values)
     axios
      .post("http://192.168.1.10:8000/signin", userData)
      .then(res => {
        Alert.alert(res.data.token);
        AsyncStorage.setItem('jwt', res.data.token);
        this.props.navigation.navigate('App')
      })
      .catch(error =>
        Alert.alert(
          "Incorrect",
          "Password or Email is Incorrect",
          [
            {
              text: "Forgat My Password",
              onPress: () => this.props.navigation.navigate("Forgat")
            },
            {
              text: "Cancel",
              style: "cancel"
            }
          ],
          { cancelable: false }
        )
      )
  };
  render() {
    return (
      <Wrapper behavior="padding" enabled>
        <Header>Welcome</Header>
        <Formik
          initialValues={{ email: "", password: "" }}
          onSubmit={this._handleSubmit}
          validationSchema={Yup.object().shape({
            email: Yup.string()
              .email("Not valid email")
              .required("email is required"),
            password: Yup.string()
              .min(6)
              .required()
          })}
          render={({
            values,
            handleSubmit,
            setFieldValue,
            errors,
            touched,
            setFieldTouched,
            isValid
          }) => (
            <React.Fragment>
              <Input
                label="Email"
                autoCapitalize="none"
                value={values.email}
                onChange={setFieldValue}
                onTouch={setFieldTouched}
                name="email"
                error={touched.email && errors.email}
              />
              <Input
                label="Password"
                secureTextEntry
                autoCapitalize="none"
                value={values.password}
                onChange={setFieldValue}
                onTouch={setFieldTouched}
                name="password"
                error={touched.password && errors.password}
              />

              <ButtonContainer
                onPress={handleSubmit}
                opacity={isValid ? 1.0 : 0.4}
                disabled={!isValid}
              >
                <ButtonText>Login</ButtonText>
              </ButtonContainer>
            </React.Fragment>
          )}
        />
        <BottomContainer>
          <Button onPress={this._onPress} title="Signup" />
          <Button onPress={this._onPress} title="Forgat Password" />
        </BottomContainer>
      </Wrapper>
    );
  }
}
