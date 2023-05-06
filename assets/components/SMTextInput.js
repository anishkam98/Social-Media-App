import React from 'react'
import { StyleSheet, TextInput, View, Text, Platform } from 'react-native'
import * as Animatable from 'react-native-animatable';

export default function SMTextInput({label = "", placeholder, onChangeText, error, capital="",isSecure = false, editable = true, ...props}) {
    return (
        <View style={inputStyle.textContainer}>
            <Text style={inputStyle.placeholder}>{(label == "" ? placeholder : label) + ":"}</Text>
            <TextInput
                placeholder={placeholder}
                onChangeText={onChangeText}
                maxLength={30}
                secureTextEntry={isSecure}
                editable={editable}
                {...props} />
            {error ? <Animatable.Text animation="slideInLeft" duration={500} style={inputStyle.error}>{error}</Animatable.Text> : error=null}
        </View>
    );
}

const inputStyle = StyleSheet.create({
    error: {
        color: "#E93C3C",
        fontWeight: "normal",
        fontSize: 15
    },
    placeholder: {
        fontWeight: '500',
        fontSize: 15,
        color: 'red'
    },
    textContainer: {
        width: "75%",
        marginBottom: 12,
        backgroundColor: 'white',
        border:1,
        borderRadius:5,
        ...Platform.select({
            ios: {
                padding: 10
            },
            android: {
                padding: 5
            }
        })
    },
    textInput: {
        placeholderTextColor: "#FFFFFF",
        borderColor: '#FFFFFF',
        height: '100%',
        color: 'red',
        backgroundColor: 'red',
        borderWidth: 3,
        padding: 8,
        paddingLeft: 22,
        textAlign: 'left',
        borderRadius: 20,
        ...Platform.select({
            ios: {
                fontSize: 500,
            },
            android: {
                fontSize: 15,
            }
        })
    }
})
