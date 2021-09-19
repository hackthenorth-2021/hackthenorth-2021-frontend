import * as React from 'react';
import { View, ImageBackground, Text, StyleSheet, Pressable, Switch } from 'react-native';
import HangerIcon from '../assets/hanger-icon.svg';
import HelpIcon from '../assets/help-icon.svg';
import { useState } from 'react';
import CameraScreen from './CameraScreen';


export function MainScreen({ route, navigation }) {
    
    const username = route.params;

    const [isEnabled, setIsEnabled] = useState(false);
    const toggleSwitch = () => {
        setIsEnabled(previousState => !previousState);
        value == "On" ? setValue("Off") : setValue("On");
    };

    const [hideComponents, setHideComponents] = useState(false);

    const [value, setValue] = React.useState(isEnabled == false ? "Off" : "On");

    return (
      <View>
        <ImageBackground source={require('../assets/white-background.png')} resizeMode="cover" style={{width: '100%', height: '100%', justifyContent: 'center', blend: 'pass through'}}>
            {!hideComponents && 
                <View accessible={true} style={styles.welcomeView}>
                    <Text style={styles.welcomeText}>Welcome, </Text> 
                    <Text style={styles.welcomeText}>{username.username}</Text> 
                </View>
            }
            <CameraScreen setHideComponents={setHideComponents} navigation={navigation}/>
            {!hideComponents && 
                <Pressable 
                    style={styles.closetButton}
                    accessible={true}
                    accessibilityHint="Click button to browse your closet"
                    onPress={() => navigation.navigate('ClosetScreen',        {
                        username: username.username
                    })}
                >
                    <Text style={styles.closetButtonText}>Closet</Text>
                    <HangerIcon style={styles.hangerIcon}/>
                </Pressable>
            }

            {!hideComponents && 
                <View style={styles.recommendButton}>
                    <View 
                        accessible={true}
                        accessibilityLabel={"Recommend styles feature currently" + value}
                        style={styles.recommendView}
                    >
                        <Text style={styles.recommendButtonText}>Recommend</Text>
                        <Text style={styles.recommendButtonText}>styles</Text>
                    </View>
                    <Text style={styles.toggleText}>{value}</Text>
                    <Switch
                        accessibilityHint="Toggle recommendations on and off"
                        trackColor={{ false: '#767577', true: '#FFFFFF' }}
                        thumbColor={isEnabled ? '#FFB000' : '#f4f3f4'}
                        onValueChange={toggleSwitch}
                        value={isEnabled}
                        style={styles.reccSwitch}
                    />
                </View>
            }

            {!hideComponents && 
                <Pressable 
                    accessible={true}
                    accessibilityHint="Click button for guide on how to use app"
                    onPress={() => navigation.navigate('Clothing Analysis')} 
                    style={[styles.helpButton, styles.shadowProp]}
                >
                    <Text style={styles.helpButtonText}>Help</Text>
                    <HelpIcon style={styles.helpIcon}/>
                </Pressable>
            }
        </ImageBackground>
      </View>
    );
  }

  const styles = StyleSheet.create({
    welcomeView: {
        position: 'absolute',
        width: 298,
        height: 76,
        left: 39,
        top: 55,
    },
    welcomeText: {
        fontFamily: 'Roboto-Medium',
        fontStyle: 'normal',
        fontWeight: 'bold',
        fontSize: 36,
        lineHeight: 42
    },
    closetButton: {
        position: 'absolute',
        width: 143,
        height: 208,
        left: 35,
        top: 411,
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
        top: 411,
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
        width: 107,
        height: 45,
        left: 12,
        top: 14
    },
    helpButton: {
        position: 'absolute',
        width: 133,
        height: 47,
        left: 204,
        top: 570,
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
        height: 23,

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