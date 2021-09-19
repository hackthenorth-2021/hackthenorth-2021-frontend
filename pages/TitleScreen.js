import * as React from 'react';
import { View, ImageBackground } from 'react-native';
import { Pressable } from 'react-native';
import Logo from '../assets/logo.svg';

export function TitleScreen({ navigation }) {
    return (
      <View 
        accessible={true} 
        accessibleLabel="Tap me!"
        accessibilityHint="Navigates to login or sign up screen"
        style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}
      >
        <ImageBackground source={require('../assets/logo-background.png')} resizeMode="cover" style={{width: '100%', height: '100%', justifyContent: 'center', blend: 'pass through'}}>
            <Pressable onPress={() => navigation.navigate('Login')}>
                <Logo 
                    flex={1} 
                    flexDirection={'column'} 
                    justifyContent={'center'} 
                    alignSelf={'center'} 
                    height={'76px'}
                    width={'263px'}
                />
            </Pressable>
        </ImageBackground> 
      </View>
    );
  }