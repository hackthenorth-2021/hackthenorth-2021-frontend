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
        top: 160,
    
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
      top: 208,

      fontFamily: 'Roboto',
      fontStyle: 'normal',
      fontWeight: "500",
      fontSize: 13,
      lineHeight: 15,
    },
    blurbColor: {
      color: '#858585'
    },
    // usernameTextbox: {
    //   position: 'absolute',
    //   width: 259,
    //   height: 51,
    //   left: 57,
    //   top: 266,
    //   borderWidth: buttonBorderWidth,
    //   borderRadius: 7,
    //   top: 266,
    //   paddingLeft: 40,
    //   color: borderColor
    // },
    // passwordTextbox: {
    //   borderWidth: buttonBorderWidth,
    //   borderRadius: 7,
    //   position: 'absolute',
    //   width: 259,
    //   height: 51,
    //   left: 57,
    //   top: 333,
    //   paddingLeft: 40,
    //   color: borderColor
    // },
    forgotPasswordButton: {
      position: 'absolute',
      width: 148,
      height: 30,
      left: 108,
      top: 393,
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
    userIcon: {
      position: 'absolute',
      width: 16,
      height: 24,
      left: 72,
      top: 278
    },
    passwordIcon: {
      position: 'absolute',
      width: 20,
      height: 24,
      left: 72,
      top: 346
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
      top: 266,
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
      top: 333,
      paddingLeft: 40,
      borderColor: passwordBorderColor
    },
  });