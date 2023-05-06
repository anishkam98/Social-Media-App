import { StatusBar } from 'expo-status-bar';
import { Animated, View, Dimensions, Button, Image, Easing, Text, Keyboard, Platform } from 'react-native';
import { styles } from '../assets/styles/Main';
import React, { useState, useEffect, setState } from 'react';

export default function Inbox() {



    return (
        <View style={styles.container}>
            <Text style={{color: 'white'}}>Inbox</Text>
        </View>
    );
}
