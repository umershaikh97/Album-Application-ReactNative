import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const Header = (props) =>{
    return(
        <View style={style.viewStyle}>
            <Text style={style.textStyle}>{props.headerText}</Text>
        </View>
    );
}

const style = StyleSheet.create({
    viewStyle : {
        backgroundColor: '#F2F4F4',
        justifyContent: 'center',
        alignItems: 'center',
        height: 60,
        borderBottomColor: '#808B96',
        borderBottomWidth: 1
    },
    textStyle: {
        fontSize: 20,
        color: 'black'
    }
});

export default Header;