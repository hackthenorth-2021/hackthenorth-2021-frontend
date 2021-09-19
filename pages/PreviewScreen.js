import * as React from 'react';
import { View, ImageBackground } from 'react-native';
import { Pressable } from 'react-native';
import Logo from '../assets/logo.svg';
import * as Svg from 'react-native-svg';

export function PreviewScreen({ navigator,  }) {
    return (
        <View
            accessible={true}
            accessibleLabel="Tap me!"
            accessibilityHint="Navigates to login or sign up screen"
            style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}
        >
            <Svg height="50%" width="50%" viewBox="0 0 100 100" {...props}>
                <Circle cx="50" cy="50" r="45" stroke="blue" strokeWidth="2.5" fill="green" />
                <Rect x="15" y="15" width="70" height="70" stroke="red" strokeWidth="2" fill="yellow" />
            </Svg>
        </View>
    );
}