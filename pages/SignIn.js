import React, {useState, useCallback} from 'react';
import styled from 'styled-components';
import Header from '../components/Header';
import Nav from '../components/Nav';
import {
  StyleSheet,
  Button,
  Text,
  View,
  ScrollView,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
// import { Actions } from 'react-native-router-flux';
import axios from 'axios';
import {useDispatch, useSelector} from 'react-redux';
import {loginAction} from '../reducers/login';

const Container = styled.SafeAreaView`
  flex: 1;
  border: 2px solid blue;
`;

const Contents = styled.ScrollView`
  flex: 1;
  border: 2px solid blue;
`;

// const InputText = styled.TextInput`
//         height: 40,
// `

const InButton = styled.Button`
  width: 100px;
  border: 2px solid yellow;
`;

const SignIn = (props) => {
  const dispatch = useDispatch();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const errMessage = useSelector((state) => state.login?.data);

  const text = {
    email,
    password,
  };

  const onPressSignin = useCallback(() => {
    dispatch(loginAction(text));
    console.log('login page', errMessage);
    props.navigation.navigate('Home');
  }, [email, password]);

  return (
    <Container>
      <Header props={props} />
      <Contents>
        {/* <TouchableOpacity style = {{ margin: 100 }} onPress = {goToHome}>
         <Text>Log In</Text>
      </TouchableOpacity> */}
        <Text>Login</Text>
        <TextInput
          placeholder="Email"
          type="email"
          value={email}
          onChangeText={(email) => setEmail(email)}></TextInput>

        <TextInput
          placeholder="Password"
          type="password"
          value={password}
          secureTextEntry={true}
          onChangeText={(password) => setPassword(password)}></TextInput>

        <InButton
          onPress={onPressSignin}
          title="Log in"
          // disabled={!isLogin}
          // title={isLogin ? "Log in" : "Log out"}
        />
        <Button
          title="회원가입하기"
          onPress={() => props.navigation.navigate('SignUp')}
        />
      </Contents>
      <Nav props={props} />
    </Container>
  );
};

export default SignIn;
