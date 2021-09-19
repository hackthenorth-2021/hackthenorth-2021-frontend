import * as React from 'react';
import {View, ImageBackground, Dimensions, Text, Image, StyleSheet} from 'react-native';
import { Pressable, SafeAreaView, ScrollView } from 'react-native';
import Logo from '../assets/logo.svg';
import Svg, {Circle, Rect, SvgXml} from 'react-native-svg';


const svgMarkup = `<svg width="375" height="156" viewBox="0 0 375 156" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0.5 76.5V0H375.5V156C332.711 76.9144 242.228 36.3199 154.706 56.9429L82.9644 73.8475C55.9277 80.2182 27.8902 81.12 0.5 76.5Z" fill="#FE6100"/></svg>`;

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
    container2: {
        flex: 1,
        marginTop: 5,
    },
    scrollView: {
        backgroundColor: 'pink',
        marginHorizontal: 20,
    },
    text: {
        fontSize: 42,
    },
});

export function ClosetScreen({ route, navigation }) {

    //const { image, text } = route.params;


    return (
        <View
            accessible={true}
            accessibleLabel="Tap me!"
            accessibilityHint="Navigates to login or sign up screen"
            style={{ flex: 1, alignItems: 'center', justifyContent: 'center',
                backgroundColor: "#ffffff" }}
        >

            <View style={{  position: 'absolute', top: -10}}>
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
            }}>Closet</Text>

            <View style={{textAlign: 'left'}}>
                <Text style={{
                    width: Dimensions.get('window').width/1.5,

                    fontFamily: "Roboto-Medium",
                    fontStyle: 'normal',
                    fontWeight: '500',
                    fontSize: 13,
                    lineHeight: 15,
                    color: '#858585',
                    textAlign: 'left'

                }}>Store and add captured clothes</Text>
            </View>





            {/*<Image*/}
            {/*    style={{*/}
            {/*        width: Dimensions.get('window').width / 1.5,*/}
            {/*        height: Dimensions.get('window').height /2,*/}
            {/*        borderRadius: 15,*/}
            {/*    }}*/}
            {/*    source={{*/}
            {/*        uri: image,*/}
            {/*    }}*/}
            {/*/>*/}

            {/*<View*/}
            {/*    style={{*/}
            {/*        width: Dimensions.get('window').width / 1.5,*/}
            {/*        height: Dimensions.get('window').height / 6,*/}
            {/*        borderRadius: 15,*/}
            {/*        top: -50,*/}
            {/*        backgroundColor: '#FFFFFF',*/}
            {/*    }}*/}
            {/*>*/}
            {/*    <Text style={{*/}
            {/*        top: 10,*/}
            {/*        fontFamily: 'Roboto-Medium',*/}
            {/*        fontStyle: 'normal',*/}
            {/*        fontWeight: 'bold',*/}
            {/*        fontSize: 18,*/}
            {/*        lineHeight: 21,*/}
            {/*        display: 'flex',*/}
            {/*        textAlign: 'center',*/}
            {/*        color: '#000000'*/}
            {/*    }}>{text}</Text>*/}
            {/*</View>*/}

            <Pressable
                accessible={true}
                accessibilityHint="Login to continue using Seamless"
                onPress={() => navigation.navigate('Seamless', {
                    username: usertext
                })}
                style={{
                    width: 254,
                    height: 120,
                    backgroundColor: '#DC267F',
                    borderRadius: 15,
                    margin: 5
                }}>
                <Text style={{
                    paddingTop: 40,
                    fontFamily: 'Roboto-Medium',
                    fontStyle: 'normal',
                    fontWeight: 'bold',
                    fontSize: 18,
                    lineHeight: 21,
                    display: 'flex',
                    textAlign: 'center',
                    color: '#FFFFFF'
                }}>Capture</Text>
                <Text style={{
                    fontFamily: 'Roboto-Medium',
                    fontStyle: 'normal',
                    fontSize: 14,
                    lineHeight: 21,
                    display: 'flex',
                    textAlign: 'center',
                    color: '#FFFFFF'
                }}>Add new items to your closet</Text>
            </Pressable>


            <View style={{
                height: 350,

            }}>


            <SafeAreaView style={{
                flex: 1,
                marginTop: 5,

            }}>
                <ScrollView style={{
                    backgroundColor: '#ffffff',
                    marginHorizontal: 20,
                    height: 5,
                }}>
                    <Pressable
                        accessible={true}
                        accessibilityHint="Login to continue using Seamless"
                        onPress={() => {}}
                        style={{
                            width: 254,
                            height: 120,
                            backgroundColor: 'gray',
                            borderRadius: 15,
                            margin: 5,
                        }}>
                        <ImageBackground
                            source={require('../assets/shorts.jpg')}
                            style={{
                                flex: 1,
                            }}
                            imageStyle={{ borderRadius: 15}}
                        >
                        <Text style={{
                            paddingTop: 50,
                            fontFamily: 'Roboto-Medium',
                            fontStyle: 'normal',
                            fontWeight: 'bold',
                            fontSize: 18,
                            lineHeight: 21,
                            display: 'flex',
                            textAlign: 'center',
                            color: '#FFFFFF'
                        }}>Shorts</Text>
                        <Text style={{
                            fontFamily: 'Roboto-Medium',
                            fontStyle: 'normal',
                            fontSize: 14,
                            lineHeight: 21,
                            display: 'flex',
                            textAlign: 'center',
                            color: '#FFFFFF'
                        }}>Black shorts athletic basketball</Text>
                        </ImageBackground>
                    </Pressable>

                    <Pressable
                        accessible={true}
                        accessibilityHint="Login to continue using Seamless"
                        onPress={() => {}}
                        style={{
                            width: 254,
                            height: 120,
                            backgroundColor: 'gray',
                            borderRadius: 15,
                            margin: 5
                        }}>
                        <ImageBackground
                            source={require('../assets/jeans.jpg')}
                            style={{
                                flex: 1,
                            }}
                            imageStyle={{ borderRadius: 15}}
                        >
                        <Text style={{
                            paddingTop: 50,
                            fontFamily: 'Roboto-Medium',
                            fontStyle: 'normal',
                            fontWeight: 'bold',
                            fontSize: 18,
                            lineHeight: 21,
                            display: 'flex',
                            textAlign: 'center',
                            color: '#FFFFFF'
                        }}>Pants</Text>
                        <Text style={{
                            fontFamily: 'Roboto-Medium',
                            fontStyle: 'normal',
                            fontSize: 14,
                            lineHeight: 21,
                            display: 'flex',
                            textAlign: 'center',
                            color: '#FFFFFF'
                        }}>Blue jeans high waisted</Text>
                        </ImageBackground>
                    </Pressable>

                    <Pressable
                        accessible={true}
                        accessibilityHint="Login to continue using Seamless"
                        onPress={() => {}}
                        style={{
                            width: 254,
                            height: 120,
                            backgroundColor: 'gray',
                            borderRadius: 15,
                            margin: 5
                        }}>
                        <ImageBackground
                            source={require('../assets/red_shirt.jpg')}
                            style={{
                                flex: 1,
                            }}
                            imageStyle={{ borderRadius: 15}}
                        >
                        <Text style={{
                            paddingTop: 50,
                            fontFamily: 'Roboto-Medium',
                            fontStyle: 'normal',
                            fontWeight: 'bold',
                            fontSize: 18,
                            lineHeight: 21,
                            display: 'flex',
                            textAlign: 'center',
                            color: '#FFFFFF'
                        }}>T shirt</Text>
                        <Text style={{
                            fontFamily: 'Roboto-Medium',
                            fontStyle: 'normal',
                            fontSize: 14,
                            lineHeight: 21,
                            display: 'flex',
                            textAlign: 'center',
                            color: '#FFFFFF'
                        }}>Red cotton round-collar </Text>
                        </ImageBackground>
                    </Pressable>


                    <Pressable
                        accessible={true}
                        accessibilityHint="Login to continue using Seamless"
                        onPress={() => {}}
                        style={{
                            width: 254,
                            height: 120,
                            backgroundColor: 'gray',
                            borderRadius: 15,
                            margin: 5
                        }}>
                        <ImageBackground
                            source={require('../assets/white_shirt.jpg')}
                            style={{
                                flex: 1,
                            }}
                            imageStyle={{ borderRadius: 15}}
                        >
                        <Text style={{
                            paddingTop: 50,
                            fontFamily: 'Roboto-Medium',
                            fontStyle: 'normal',
                            fontWeight: 'bold',
                            fontSize: 18,
                            lineHeight: 21,
                            display: 'flex',
                            textAlign: 'center',
                            color: '#FFFFFF'
                        }}>T shirt</Text>
                        <Text style={{
                            fontFamily: 'Roboto-Medium',
                            fontStyle: 'normal',
                            fontSize: 14,
                            lineHeight: 21,
                            display: 'flex',
                            textAlign: 'center',
                            color: '#FFFFFF'
                        }}>White cotton maxi</Text>
                        </ImageBackground>
                    </Pressable>
                </ScrollView>
            </SafeAreaView>
            </View>
        </View>
    );


}