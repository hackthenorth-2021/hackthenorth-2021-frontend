import * as React from 'react';
import {View, ImageBackground, Dimensions, Text, Image, StyleSheet} from 'react-native';
import { Pressable } from 'react-native';
import Logo from '../assets/logo.svg';
import Svg, {Circle, Rect, SvgXml} from 'react-native-svg';


const svgMarkup = `<svg width="377" height="248" viewBox="0 0 377 248" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0 248V0.5L74 32L150.477 46.0263C175.501 50.6158 201.239 49.4801 225.761 42.7042C250.507 35.8664 276.973 39.4281 299.031 52.5649L377 99V248H0Z" fill="#DC267F"/></svg>`;

const styles = StyleSheet.create({
    container: {
        paddingTop: 50,
    },
    tinyLogo: {
        width: 50,
        height: 50,
    },
    logo: {
        width: 66,
        height: 58,
    },
});

export function PreviewScreen({ route, navigation }) {

    const { image, text } = route.params;

    console.log(image);
    console.log(text, "preview screen text");


    return (
        <View
            accessible={true}
            accessibleLabel="Tap me!"
            accessibilityHint="Navigates to login or sign up screen"
            style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}
        >



        <View style={{  position: 'absolute', bottom: 0}}>
            <SvgXml xml={svgMarkup} width={Dimensions.get('window').width} />
        </View>

        <Text style={{
            width: Dimensions.get('window').width/1.5,
            height: 48,
            textAlign: "left",

            fontFamily: 'Roboto-Medium',
            fontStyle: 'normal',
            fontWeight: 'bold',
            fontSize: 36,
            lineHeight: 42,



            color: '#000000',
        }}>Clothing Item</Text>

            <View style={{textAlign: 'left'}}>
                <Text style={{
                    width: Dimensions.get('window').width/1.5,

                    fontFamily: "Roboto-Medium",
                    fontStyle: 'normal',
                    fontWeight: '500',
                    fontSize: 13,
                    lineHeight: 15,
                    color: '#858585',
                    textAlign: 'left',
                    paddingBottom: 10,

                }}>With generated description</Text>
            </View>

        <Image
            style={{
                width: Dimensions.get('window').width / 1.5,
                height: Dimensions.get('window').height /2,
                borderRadius: 15,
            }}
            source={{
                uri: image,
            }}
        />

        <View
            style={{
            width: Dimensions.get('window').width / 1.5,
            height: Dimensions.get('window').height / 6,
            borderRadius: 15,
            top: -50,
            backgroundColor: '#FFFFFF',
        }}
        >
            <Text style={{
                height: Dimensions.get('window').height / 6,
                fontFamily: 'Roboto-Medium',
                fontStyle: 'normal',
                fontWeight: 'bold',
                fontSize: 18,
                lineHeight: 21,
                display: 'flex',
                textAlign: 'center',
                justifyContent: "center",
                paddingTop: 30,
                margin: 5,
                alignItems: "center",
                color: '#000000'
            }}>{text}</Text>
        </View>

            <Pressable
                accessible={true}
                accessibilityHint="Login to continue using Seamless"
                onPress={() => navigation.navigate('Seamless', {
                    username: usertext
                })}
                style={{
                    width: 254,
                    height: 40,
                    backgroundColor: '#FE6100',
                    borderRadius: 4
                }}>
                <Text style={{
                    top: 10,
                    fontFamily: 'Roboto-Medium',
                    fontStyle: 'normal',
                    fontWeight: 'bold',
                    fontSize: 18,
                    lineHeight: 21,
                    display: 'flex',
                    textAlign: 'center',
                    color: '#FFFFFF'
                }}>+ add to closet</Text>
            </Pressable>

        </View>
    );
}