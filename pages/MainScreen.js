import * as React from 'react';
import { View, ImageBackground, Text, TextInput, StyleSheet, ViewBase, Pressable } from 'react-native';
import UserIcon from '../assets/user-icon.svg';
import PasswordIcon from '../assets/password-icon.svg';
import { useState } from 'react';

const buttonBorderWidth = 2;

export function MainScreen({ navigation }) {
    
    const username = "Stephanie";

    return (
      <View style={styles.container}>
        <View style={styles.welcomeView}>
            <Text style={styles.welcomeText}>Welcome, </Text> 
            <Text style={styles.welcomeText}>{username}</Text> 
        </View>
        <Pressable style={styles.captureButton}>
            <Text style={styles.captureButtonText}>Capture</Text>
        </Pressable>
        <Pressable style={styles.closetButton}>
            <Text style={styles.closetButtonText}>Closet</Text>
        </Pressable>
        <Pressable style={styles.recommendButton}>
            <View style={styles.recommendView}>
                <Text style={styles.recommendButtonText}>Recommend</Text>
                <Text style={styles.recommendButtonText}>styles</Text>
            </View>
        </Pressable>
        <Pressable style={styles.helpButton}>
            <Text style={styles.helpButtonText}>Help</Text>
        </Pressable>
      </View>
    );
  }

  const styles = StyleSheet.create({
    container: {
        backgroundColor: '#FFFFFF'
    },
    welcomeView: {
        position: 'absolute',
        width: 404,
        height: 76,
        left: 39,
        top: 10,
    },
    welcomeText: {
        fontFamily: 'Roboto-Medium',
        fontStyle: 'normal',
        fontWeight: 'bold',
        fontSize: 36,
        lineHeight: 42
    },
    captureButton: {
        position: 'absolute',
        width: 303,
        height: 239,
        left: 35,
        top: 114,
        backgroundColor: '#DC267F',
        borderRadius: 14
    },
    captureButtonText: {
        fontFamily: 'Roboto-Medium',
        fontStyle: 'normal',
        fontWeight: 'bold',
        fontSize: 36,
        lineHeight: 42,
        display: 'flex',
        alignItems: 'center',
        textAlign: 'center',
        color: '#FFFFFF',

        position: 'absolute',
        width: 404,
        height: 76,
        left: -50,
        top: 28
    },
    closetButton: {
        position: 'absolute',
        width: 143,
        height: 208,
        left: 35,
        top: 371,
        backgroundColor: '#FE6100',
        borderRadius: 12
    },
    closetButtonText: {
        fontFamily: 'Roboto-Medium',
        fontStyle: 'normal',
        fontWeight: 'bold',
        fontSize: 36,
        lineHeight: 42,
        display: 'flex',
        alignItems: 'center',
        textAlign: 'center',
        color: '#FFFFFF',

        position: 'absolute',
        width: 110,
        height: 42,
        left: 15,
        top: 36
    },
    recommendButton: {
        position: 'absolute',
        width: 133,
        height: 121,
        left: 204,
        top: 371,
        backgroundColor: '#FFB000',
        borderRadius: 12
    },
    recommendButtonText: {
        fontFamily: 'Roboto-Medium',
        fontStyle: 'normal',
        fontWeight: 'bold',
        fontSize: 18,
        lineHeight: 21,
        display: 'flex',
        alignItems: 'center',
        textAlign: 'left',
        color: '#FFFFFF',
    },
    recommendView: {
        position: 'absolute',
        width: 149,
        height: 20,
        left: 12,
        top: 14
    },
    helpButton: {
        position: 'absolute',
        width: 133,
        height: 47,
        left: 204,
        top: 525,
        backgroundColor: '#FFFFFF',
        borderRadius: 12
    },
    helpButtonText: {
        fontFamily: 'Roboto-Medium',
        fontStyle: 'normal',
        fontWeight: 'bold',
        fontSize: 18,
        lineHeight: 21,
        display: 'flex',
        alignItems: 'center',
        textAlign: 'center',
        color: '#000000',

        position: 'absolute',
        width: 72,
        height: 20,
        left: 39,
        top: 12
    }
  });