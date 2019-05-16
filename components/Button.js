import React from 'react';
import {Text, StyleSheet, View, TouchableOpacity} from 'react-native';

const Button = (props) =>{

    const { btnText, onPress } = props;

    return(
        <TouchableOpacity style={style.buttonStyle} onPress={onPress} >
            <Text style={style.textStyle}>{btnText}</Text>
        </TouchableOpacity>
    );
}



const style = StyleSheet.create({
    textStyle:{
        alignSelf: 'center',
        color: '#007aff',
        fontSize: 16,
        fontWeight: '600'
    },
    buttonStyle:{
        flex:1,
        alignSelf: 'stretch',
        backgroundColor: '#fff',
        borderRadius: 5,
        borderWidth: 1,
        borderColor: '#007aff',
        marginLeft: 5,
        marginRight: 5,
        paddingBottom: 10,
        paddingTop: 10
    }
});

export default Button;
