import { StatusBar } from 'expo-status-bar';
import { Animated, View, Dimensions, Button, Image, Easing, Text, Keyboard, Platform } from 'react-native';
import { styles } from '../assets/styles/Main';
import SMTextInput from '../assets/components/SMTextInput';
import React, { useState, useEffect, setState } from 'react';

export default function Login(props) {
    const [password, setPassword] = useState("");
    const [passwordError, setPasswordError] = useState("");
    const [email, setEmail] = useState("");
    const [emailError, setEmailError] = useState("");
    let formHeight = Dimensions.get('window').height / 3;
    let titleHeight = Dimensions.get('window').height / 5;
    let [titleOpacity, setTitleOpacity] = useState();
    const [isKeyboardVisible, setKeyboardVisible] = useState(false);

    useEffect(() => {
        const keyboardDidShowListener = Keyboard.addListener(
            'keyboardDidShow',
            () => {
                setKeyboardVisible(true); // or some other action
                if(Platform.OS === "android") {
                    setTitleOpacity(0)
                }
            }
        );
        const keyboardDidHideListener = Keyboard.addListener(
            'keyboardDidHide',
            () => {
                setKeyboardVisible(false); // or some other action
                if(Platform.OS === "android") {
                    setTitleOpacity(1)
                }
            }
        );

        return () => {
            keyboardDidHideListener.remove();
            keyboardDidShowListener.remove();
            this.titleOpacity = 0;
        };
    }, []);

    const submit = () => {
        if(email === '' || password === '') {
            console.log("Email or password is missing.");
        }
        else {
            console.log("Submit!");
            console.log("Email: " + email);
            console.log("Password: " + password);
            props.navigation.navigate('HomeTabs', { screen: 'Feed' });
        }
    }

    spinValue = new Animated.Value(0);
    Animated.loop(
        Animated.timing(
            this.spinValue,
            {
                toValue: 1,
                duration: 5000,
                easing: Easing.linear,
                useNativeDriver: true
            }
        )).start()

    const spin = this.spinValue.interpolate({
        inputRange: [0, 1],
        outputRange: ['0deg', '360deg']
    })

    return (
        <View style={styles.container}>
            <View style={styles.loginContainer}>
                <View style={[styles.loginTitle, { "top": titleHeight, opacity: titleOpacity }]}><Text style={styles.titleText}>Social Media</Text></View>
                <View style={styles.loginLogoContainer}>
                    <Animated.Image style={[styles.loginLogo, { "marginTop": formHeight, transform: [{ rotate: spin }] }]} source={require('../assets/swirl.png')} />
                </View>
                <View style={styles.form}>
                    <SMTextInput placeholder='Email'
                        data={email}
                        onChangeText={(text) => setEmail(text)}
                        isSecure={false}
                        error={emailError} />
                    <StatusBar style="auto" />
                    <SMTextInput placeholder='Password'
                        data={password}
                        onChangeText={(text) => setPassword(text)}
                        isSecure={true}
                        error={passwordError} />
                    <StatusBar style="auto" />
                    <Button onPress={submit}
                        title="Submit"
                        color="red"
                        accessibilityLabel="Learn more about this purple button" />
                    <Text style={{ color: "white" }}>Forgot password?</Text>
                </View>
            </View>
        </View>
    );
}
