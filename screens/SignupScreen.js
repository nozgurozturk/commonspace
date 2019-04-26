import React from "react";
import {
  Text,
  View,
  Button,
  Dimensions,
  KeyboardAvoidingView,
  TouchableOpacity,
  Alert
} from "react-native";
import { Formik } from "formik";
import * as Yup from "yup";
import styled from "styled-components";

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

export default class SigninScreen extends React.PureComponent {
  _handleSubmit = values => {
    Alert.alert(JSON.stringify(values));
  };
  render() {
    return (
      <Wrapper behavior="padding" enabled>
        <Header>Create Account</Header>
        <Formik
          initialValues={{ email: "", password: "", name: "" }}
          onSubmit={this._handleSubmit}
          validationSchema={Yup.object().shape({
            name: Yup.string()
            .required("name is required"),
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
                label="Name"
                value={values.name}
                onChange={setFieldValue}
                onTouch={setFieldTouched}
                name="name"
                error={touched.email && errors.email}
              />
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
                <ButtonText>Sign Up</ButtonText>
              </ButtonContainer>
            </React.Fragment>
          )}
        />
      </Wrapper>
    );
  }
}
