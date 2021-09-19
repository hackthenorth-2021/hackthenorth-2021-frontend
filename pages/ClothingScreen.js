import * as React from 'react';
import { View, ImageBackground, Text, TextInput, StyleSheet, ViewBase, Pressable, TouchableOpacity } from 'react-native';

export function ClothingScreen({ navigation }) {

    const longDescription = "Insert generated description ababaababababbabababababababbabab";
    const clothingName = "Pants";
    const clothingDescription = "Blue jeans, high waisted, cuffed, denim-washed"
    
    return (
      <View>
        <ImageBackground source={require('../assets/clothing-item-background.png')} resizeMode="cover" style={{width: '100%', height: '100%', justifyContent: 'center', blend: 'pass through'}}>
            <Text style={styles.title}>Clothing Item</Text>
            <View style={{textAlign: 'left'}}>
                <Text style={styles.description}>{longDescription}</Text>
            </View>
          <View 
            accessible={true}
            accessibilityLabel={clothingName + "." + clothingDescription}
            style={styles.pictureContainer}>
            <View style={styles.descriptionContainer}>
                <Text style={styles.descriptionTitle}>{clothingName}</Text>
                <Text style={styles.descriptionAdjectives}>{clothingDescription}</Text>
            </View>
          </View>
          <TouchableOpacity 
            accessible={true}
            accessibilityHint="Click button to save clothing in virtual closet"
            style={styles.addToClosetButton} 
            onPress={() => navigation.navigate('Closet')}
          >
            <Text style={styles.addToClosetButtonText}>Add to closet</Text>
          </TouchableOpacity>
          
        </ImageBackground>
      </View>
    );
  }

  const styles = StyleSheet.create({
    title: {
        position: 'absolute',
        width: 230,
        height: 42,
        left: 80,
        top: 30,

        fontFamily: "Roboto-Medium",
        fontStyle: 'normal',
        fontWeight: 'bold',
        fontSize: 36,
        lineHeight: 42
    },
    description: {
        position: 'absolute',
        display: 'flex',
        width: 228,
        height: 14,
        left: 76,
        top: -225,

        fontFamily: "Roboto-Medium",
        fontStyle: 'normal',
        fontWeight: '500',
        fontSize: 13,
        lineHeight: 15,
        color: '#858585',
        textAlign: 'left'

    },
    pictureContainer: {
        position: 'absolute',
        width: 233,
        height: 356,
        left: 71,
        top: 120,
        backgroundColor: '#C4C4C4',
        borderRadius: 10
    },
    descriptionContainer: {
        position: 'absolute',
        width: 233,
        height: 96,
        top: 260,
        backgroundColor: '#FFFFFF',
        borderRadius: 10,
        textAlign: 'left'
    },
    descriptionTitle: {
        position: 'absolute',
        width: 123,
        height: 31,
        left: 22,
        top: 17,

        fontFamily: "Roboto-Medium",
        fontStyle: 'normal',
        fontWeight: 'bold',
        fontSize: 18,
        lineHeight: 21,
        display: 'flex',
        textAlign: 'left'
    },
    descriptionAdjectives: {
        position: 'absolute',
        width: 189,
        height: 31,
        left: 22,
        top: 44,

        fontFamily: "Roboto",
        fontStyle: 'normal',
        fontWeight: "500",
        fontSize: 13,
        lineHeight: 15,
        display: 'flex',
        textAlign: 'left'
    },
    addToClosetButton: {
        position: 'absolute',
        width: 233,
        height: 46,
        left: 71,
        top: 490,
        backgroundColor: '#FE6100',
        borderRadius: 10
    },
    addToClosetButtonText: {
        position: 'absolute',
        width: 127,
        height: 31,
        left: 50,
        top: 12,

        fontFamily: "Roboto-Medium",
        fontStyle: 'normal',
        fontWeight: 'bold',
        fontSize: 18,
        lineHeight: 21,
        display: 'flex',
        textAlign: 'center',
        color: '#FFFFFF'
    },
    addedToClosetButton: {
        position: 'absolute',
        width: 233,
        height: 46,
        left: 71,
        top: 490,
        backgroundColor: '#FFFFFF',
        borderRadius: 10
    },
    adddedToClosetButtonText: {
        position: 'absolute',
        width: 127,
        height: 31,
        left: 50,
        top: 12,

        fontFamily: "Roboto-Medium",
        fontStyle: 'normal',
        fontWeight: 'bold',
        fontSize: 18,
        lineHeight: 21,
        display: 'flex',
        textAlign: 'center',
    },
  });