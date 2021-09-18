import * as React from 'react';
import { View, ImageBackground, Button, Text, TextInput, StyleSheet, ViewBase, Pressable } from 'react-native';
// import styles from '../styles/login.js';

const buttonBorderWidth = 2;

export function LoginScreen({ navigation }) {
    return (
      <View>
        <ImageBackground source={require('../assets/login-background.png')} resizeMode="cover" style={{width: '100%', height: '100%', justifyContent: 'center', blend: 'pass through'}}>
          <Text style={styles.login}>Login</Text>
          <View style={styles.blurb}>
            <Text style={styles.blurbColor}>Please sign in with your username </Text>
            <Text style={styles.blurbColor}>and password</Text>
          </View>
          <TextInput
            placeholder="Username"
            style={styles.usernameTextbox}
            autoCompleteType="username"
          />
          <TextInput
            placeholder="Password"
            style={styles.passwordTextbox}
            autoCompleteType="password"
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
    usernameTextbox: {
      position: 'absolute',
      width: 259,
      height: 51,
      left: 57,
      top: 266,
      borderWidth: buttonBorderWidth,
      borderRadius: 7,
      top: 266,
      padding: 10,
    },
    passwordTextbox: {
      borderWidth: buttonBorderWidth,
      borderRadius: 7,
      position: 'absolute',
      width: 259,
      height: 51,
      left: 57,
      top: 333,
      padding: 10,
    },
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
    }
  });