import * as React from 'react';
import { View, ImageBackground, Text, TextInput, StyleSheet, ViewBase, Pressable } from 'react-native';
import UserIcon from '../assets/user-icon.svg';
import PasswordIcon from '../assets/password-icon.svg';
import { useState } from 'react';

const buttonBorderWidth = 2;

export function MainScreen({ navigation }) {
    
    const username = "Stephanie";

    return (
      <View>
        <Text>Welcome, {username}</Text> 
        <Pressable>
            <Text>Capture</Text>
        </Pressable>
        <Pressable>
            <Text>Closet</Text>
        </Pressable>
        <Pressable>
            <Text>Recommended styles</Text>
        </Pressable>
        <Pressable>
            <Text>Help</Text>
        </Pressable>
      </View>
    );
  }

  const styles = StyleSheet.create({

    
  });