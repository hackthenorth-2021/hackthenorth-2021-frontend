import {StatusBar} from 'expo-status-bar';
import React, { useEffect } from 'react';
import {StyleSheet, Text, View, TouchableOpacity, Alert, ImageBackground, Image, Pressable} from 'react-native';
import { Camera } from 'expo-camera';
import CameraIcon from '../assets/camera-icon.svg';
import CameraButton from '../assets/camera-button.svg';
import CameraDesign from '../assets/camera-design.svg';
import axios from 'axios';
import * as FileSystem from "expo-file-system/build/FileSystem";
import * as ImageManipulator from 'expo-image-manipulator';
import * as Speech from 'expo-speech';

let camera;
export default function CameraScreen({ setHideComponents, navigation }) {

  const [startCamera, setStartCamera] = React.useState(false)
  const [previewVisible, setPreviewVisible] = React.useState(false)
  const [capturedImage, setCapturedImage] = React.useState(null)
  const [cameraType, setCameraType] = React.useState(Camera.Constants.Type.back)
  const [flashMode, setFlashMode] = React.useState('off')
  const [textDataFromPromise, setTextDataFromPromise] = React.useState("");
  const [textDataAvailable, setTextDataAvailable] = React.useState(false);

  React.useEffect(() => {
    sendPhotoAll(capturedImage, setTextDataFromPromise);
    setTextDataAvailable(true);
  }, [previewVisible, capturedImage]);

  const __startCamera = async () => {
    setHideComponents(true)
    const {status} = await Camera.requestPermissionsAsync()
    console.log(status)
    if (status === 'granted') {
      setStartCamera(true)
    } else {
      Alert.alert('Access denied')
    }
  }
  const __takePicture = async () => {
    const photo = await camera.takePictureAsync()
    console.log(photo)
    setPreviewVisible(true)
    //setStartCamera(false)
    setCapturedImage(photo)
  }
  const __savePhoto = () => {}
  const __retakePicture = () => {
    setCapturedImage(null)
    setPreviewVisible(false)
    __startCamera()
  }
  const __handleFlashMode = () => {
    if (flashMode === 'on') {
      setFlashMode('off')
    } else if (flashMode === 'off') {
      setFlashMode('on')
    } else {
      setFlashMode('auto')
    }
  }
  const __switchCamera = () => {
    if (cameraType === 'back') {
      setCameraType('front')
    } else {
      setCameraType('back')
    }
  }
  return (
    <View style={styles.container}>
      {startCamera ? (
        <View
          style={{
            flex: 1,
            width: '100%'
          }}
        >
          {textDataAvailable && previewVisible && capturedImage ? (
            <CameraPreview 
              textDataFromPromise={textDataFromPromise}
              photo={capturedImage} 
              savePhoto={__savePhoto} 
              retakePicture={__retakePicture} 
              navigation={navigation}/>
          ) : (
            <Camera
              type={cameraType}
              flashMode={flashMode}
              style={{flex: 1}}
              ref={(r) => {
                camera = r
              }}
            >
              <View
                style={{
                  flex: 1,
                  width: '100%',
                  backgroundColor: 'transparent',
                  flexDirection: 'row'
                }}
              >
                <View
                  style={{
                    position: 'absolute',
                    left: '5%',
                    top: '10%',
                    flexDirection: 'column',
                    justifyContent: 'space-between'
                  }}
                >
                  <TouchableOpacity
                    accessible={true}
                    accessibilityLabel="Flash"
                    accessibilityHint={"Click button to " + (flashMode === 'off' ? "enable": "disable") + " flash."}
                    onPress={__handleFlashMode}
                    style={{
                      backgroundColor: flashMode === 'off' ? '#000' : '#fff',
                      borderRadius: 10,
                      height: 25,
                      width: 25
                    }}
                  >
                    <Text
                      style={{
                        fontSize: 20
                      }}
                    >
                      ⚡️
                    </Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                    accessible={true}
                    accessibilityHint={"Click button to switch to " + (cameraType === 'back' ? "front" : "back") + " camera."}
                    onPress={__switchCamera}
                    style={{
                      marginTop: 20,
                      borderRadius: 10,
                      height: 25,
                      width: 25
                    }}
                  >
                    <Text
                      style={{
                        fontSize: 20
                      }}
                    >
                      {cameraType === 'front' ? '🤳' : '📷'}
                    </Text>
                  </TouchableOpacity>
                </View>
                <View
                  style={{
                    position: 'absolute',
                    bottom: 0,
                    flexDirection: 'row',
                    flex: 1,
                    width: '100%',
                    padding: 20,
                    justifyContent: 'space-between'
                  }}
                >
                  <View
                    style={{
                      alignSelf: 'center',
                      flex: 1,
                      alignItems: 'center'
                    }}
                  >
                    <CameraDesign style={styles.cameraDesign}/>
                    <TouchableOpacity 
                      accessible={true}
                      accessibilityLabel="Take picture button"
                      accessibilityHint="Position clothing 1 meter in front of you and click button to take picture" 
                      onPress={__takePicture}>
                        <CameraButton style={styles.cameraButton}/>
                    </TouchableOpacity>
                  </View>
                </View>
              </View>
            </Camera>
          )}
        </View>
      ) : (
        <View>
          <Pressable 
            style={styles.captureButton} onPress={__startCamera}>
                <Text style={styles.captureButtonText}>Capture</Text>
                <CameraIcon style={styles.cameraIcon}/>
          </Pressable>
        </View>
      )}

      <StatusBar style="auto" />
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    captureButton: {
        position: 'absolute',
        width: 302,
        height: 239,
        left: -154,
        top: -180,
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
        width: 302,
        height: 76,
        top: 28
    },
    cameraIcon: {
        position: 'absolute',
        width: 108,
        height: 76,
        left: 98,
        top: 104,
        opacity: 0.98
    },
    cameraButton: {
        width: 90,
        height: 90,
        top: -50,
        borderRadius: 50,
    },
    cameraDesign: {
        top: 140
    }
})

// resize the given photo and return the base 64 of the image
async function resizePhoto(photo) {

    const resizedPhoto = await ImageManipulator.manipulateAsync(
        photo.uri,
        [{ resize: { width: 300 } }], // resize to width of 300 and preserve aspect ratio
        { compress: 0.7, format: 'jpeg', base64 : true },
    );
    return resizedPhoto.base64
}

async function sendPhotoAgain(base64, setTextDataFromPromise) {

    await axios.post(
        "https://us-central1-seamless-326405.cloudfunctions.net/seamless_request_api", { "image" : base64})
        .then((response) => {
            console.log("Text", response.data.data);

            Speech.speak(response.data.data);

            if (response.data.status)
            {
                console.log("Good");
                console.log(response);
                console.log(response.data);
            }

            setTextDataFromPromise(response.data.data)
            return response.data.data

        }).catch(error => {
        console.log("Bad");
        console.log(error)


    })
}

const sendPhotoAll = async (photo, setTextDataFromPromise) => {
  const base64Data = await resizePhoto(photo);
  const textData = await sendPhotoAgain(base64Data, setTextDataFromPromise);

  return textData
}


const CameraPreview = ({textDataFromPromise, photo, retakePicture, savePhoto, navigation}) => {

  return (
    <View
      style={{
        backgroundColor: 'transparent',
        flex: 1,
        width: '100%',
        height: '100%'
      }}
    >
      <ImageBackground
        source={{uri: photo && photo.uri}}
        style={{
          flex: 1
        }}
      >
        <View
          style={{
            flex: 1,
            flexDirection: 'column',
            padding: 15,
            justifyContent: 'flex-end'
          }}
        >
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between'
            }}
          >
            <TouchableOpacity
              onPress={retakePicture}
              style={{
                width: 130,
                height: 40,

                alignItems: 'center',
                borderRadius: 4
              }}
            >
              <Text
                style={{
                  color: '#fff',
                  fontSize: 20
                }}
              >
                Re-take
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
                onPress={() => navigation.navigate('Preview',
                    {
                    image: photo.uri,
                    text: textDataFromPromise
                    }
                )}
              style={{
                width: 130,
                height: 40,

                alignItems: 'center',
                borderRadius: 4
              }}
            >
              <Text
                style={{
                  color: '#fff',
                  fontSize: 20
                }}
              >
                save photo
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </ImageBackground>
    </View>
  )
}