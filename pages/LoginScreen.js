import * as React from 'react';
import { View, ImageBackground, Text, TextInput, StyleSheet, ViewBase, Pressable } from 'react-native';
import UserIcon from '../assets/user-icon.svg';
import PasswordIcon from '../assets/password-icon.svg';
import { useState } from 'react';

const buttonBorderWidth = 2;

export function LoginScreen({ navigation }) {
    const [usernameBorderColor, setUsernameBorderColor] = useState('black');
    const [passwordBorderColor, setPasswordBorderColor] = useState('black');
    const onFocusUsername = () => {
      setUsernameBorderColor('#648FFF');
    }
    const onFocusPassword = () => {
      setPasswordBorderColor('#648FFF');
    }
    return (
      <View>
        <ImageBackground source={require('../assets/login-background.png')} resizeMode="cover" style={{width: '100%', height: '100%', justifyContent: 'center', blend: 'pass through'}}>
          <Text style={styles.login}>Login</Text>
          <View style={styles.blurb}>
            <Text style={styles.blurbColor}>Please sign in with your username </Text>
            <Text style={styles.blurbColor}>and password</Text>
          </View>
          <UserIcon style={styles.userIcon}/>
          <TextInput
            placeholder="Username"
            style={inputStyle(usernameBorderColor, passwordBorderColor).usernameTextbox}
            autoCompleteType="username"
            onFocus={() => onFocusUsername()}
          />
          <PasswordIcon style={styles.passwordIcon}/>
          <TextInput
            placeholder="Password"
            style={inputStyle(usernameBorderColor, passwordBorderColor).passwordTextbox}
            autoCompleteType="password"
            onFocus={() => onFocusPassword()}
          />
          <Pressable style={styles.forgotPasswordButton}>
            <Text style={styles.forgotPasswordText}>Forgot Password</Text>
          </Pressable>
          <Pressable onPress={() => navigation.navigate('Seamless')} style={styles.loginButton}>
            <Text style={styles.loginButtonText}>Login</Text>
          </Pressable>
          <Pressable
            onPress={() => navigation.navigate('Home')}
            style={styles.signupButton}
          >
            <Text style={styles.signupButtonText}>New User? Sign up ⟶</Text>
          </Pressable>
        </ImageBackground>
      </View>
    );
  }

  const styles = StyleSheet.create({

    login: {
        position: 'absolute',
        width: 404,
        height: 76,
        left: 58,
        top: 98,
    
        fontFamily: 'Roboto-Medium',
        fontStyle: 'normal',
        fontWeight: 'bold',
        fontSize: 36,
        lineHeight: 42,
    
        color: '#000000',
    },
    blurb: {
      position: 'absolute',
      width: 228,
      height: 28,
      left: 58,
      top: 146,

      fontFamily: 'Roboto',
      fontStyle: 'normal',
      fontWeight: "500",
      fontSize: 13,
      lineHeight: 15,
    },
    blurbColor: {
      color: '#858585'
    },
    forgotPasswordButton: {
      position: 'absolute',
      width: 148,
      height: 30,
      left: 108,
      top: 335,
      display: 'flex',
      alignItems: 'center',
      
    },
    forgotPasswordText: {
      color: '#648FFF',
      fontFamily: 'Roboto',
      fontStyle: 'normal',
      fontWeight: 'bold',
      fontSize: 18,
      lineHeight: 21,
      textAlign: 'center',
    },
    signupButton: {
      position: 'absolute',
      width: 259,
      height: 51,
      left: 58,
      top: 500,
      backgroundColor: '#785EF0',
      borderRadius: 25.5
    },
    signupButtonText: {
      position: 'absolute',
      width: 194,
      height: 30,
      left: 45,
      top: 15,
      fontFamily: 'Roboto-Medium',
      fontStyle: 'normal',
      fontWeight: 'bold',
      fontSize: 18,
      lineHeight: 21,
      display: 'flex',
      alignItems: 'center',

      color: '#FFFFFF',
    },
    loginButton: {
      position: 'absolute',
      width: 254,
      height: 32,
      left: 61,
      top: 390,
      backgroundColor: '#648FFF',
      borderRadius: 4
    },
    loginButtonText: {
      position: 'absolute',
      width: 148,
      height: 30,
      left: 50,
      top: 5, 

      fontFamily: 'Roboto-Medium',
      fontStyle: 'normal',
      fontWeight: 'bold',
      fontSize: 18,
      lineHeight: 21,
      display: 'flex',
      textAlign: 'center',
      color: '#FFFFFF'
    },
    userIcon: {
      position: 'absolute',
      width: 16,
      height: 24,
      left: 72,
      top: 216
    },
    passwordIcon: {
      position: 'absolute',
      width: 20,
      height: 24,
      left: 72,
      top: 284
    }
  });

  const inputStyle = (usernameBorderColor, passwordBorderColor) => StyleSheet.create({
    usernameTextbox: {
      position: 'absolute',
      width: 259,
      height: 51,
      left: 57,
      top: 266,
      borderWidth: buttonBorderWidth,
      borderRadius: 7,
      top: 204,
      paddingLeft: 40,
      borderColor: usernameBorderColor
    },
    passwordTextbox: {
      borderWidth: buttonBorderWidth,
      borderRadius: 7,
      position: 'absolute',
      width: 259,
      height: 51,
      left: 57,
      top: 271,
      paddingLeft: 40,
      borderColor: passwordBorderColor
    },
  });