import * as React from 'react';
import { View, ImageBackground, Text, StyleSheet, Pressable, Switch } from 'react-native';
import CameraIcon from '../assets/camera-icon.svg';
import HangerIcon from '../assets/hanger-icon.svg';
import HelpIcon from '../assets/help-icon.svg';
import { useState } from 'react';


export function MainScreen({ navigation }) {
    
    const username = "Stephanie";

    const [isEnabled, setIsEnabled] = useState(false);
    const toggleSwitch = () => {
        setIsEnabled(previousState => !previousState);
        value == "On" ? setValue("Off") : setValue("On");
    };

    const [value, setValue] = React.useState("On");

    return (
      <View style={styles.container}>
        <ImageBackground source={require('../assets/white-background.png')} resizeMode="cover" style={{width: '100%', height: '100%', justifyContent: 'center', blend: 'pass through'}}>
            <View style={styles.welcomeView}>
                <Text style={styles.welcomeText}>Welcome, </Text> 
                <Text style={styles.welcomeText}>{username}</Text> 
            </View>
            <Pressable style={styles.captureButton}>
                <Text style={styles.captureButtonText}>Capture</Text>
                <CameraIcon style={styles.cameraIcon}/>
            </Pressable>
            
            <Pressable style={styles.closetButton}>
                <Text style={styles.closetButtonText}>Closet</Text>
                <HangerIcon style={styles.hangerIcon}/>
            </Pressable>

            <Pressable style={styles.recommendButton}>
                <View style={styles.recommendView}>
                    <Text style={styles.recommendButtonText}>Recommend</Text>
                    <Text style={styles.recommendButtonText}>styles</Text>
                </View>
                <Text style={styles.toggleText}>{value}</Text>
                <Switch
                    trackColor={{ false: '#767577', true: '#FFFFFF' }}
                    thumbColor={isEnabled ? '#FFB000' : '#f4f3f4'}
                    onValueChange={toggleSwitch}
                    value={isEnabled}
                    style={styles.reccSwitch}
                />
            </Pressable>
            
            <Pressable style={[styles.helpButton, styles.shadowProp]}>
                <Text style={styles.helpButtonText}>Help</Text>
                <HelpIcon style={styles.helpIcon}/>
            </Pressable>
        </ImageBackground>
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
        top: 15,
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
    },
    shadowProp: {
        shadowColor: '#171717',
        shadowOffset: {width: -3, height: 6},
        shadowOpacity: 0.2,
        shadowRadius: 3,
    },
    cameraIcon: {
        position: 'absolute',
        width: 108,
        height: 76,
        left: 98,
        top: 104,
        opacity: 0.98
    },
    hangerIcon: {
        position: 'absolute',
        width: 129,
        height: 86,
        left: 7,
        top: 92,
    },
    helpIcon: {
        position: 'absolute',
        width: 30,
        height: 30,
        left: 15,
        top: 8,
    },
    reccSwitch: {
        top: 70,
        left: 60,
        position: 'absolute',
        height: 35,
    },
    toggleText: {
        top: 75,
        left: 20,
        position: 'absolute',
        height: 35,

        fontFamily: 'Roboto-Medium',
        fontStyle: 'normal',
        fontWeight: 'bold',
        fontSize: 18,
        lineHeight: 21,
        display: 'flex',
        alignItems: 'center',
        textAlign: 'center',
        color: '#FFFFFF',
    }
  });