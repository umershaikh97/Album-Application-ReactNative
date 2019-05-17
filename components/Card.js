import React from 'react';
import { View, StyleSheet } from 'react-native';

const Card = (props) =>{
    return (
        <View style={styles.cardStyle} >
            {props.children}
        </View>
    );
}


const styles = StyleSheet.create({
    cardStyle : {
        borderWidth: 1,  // border 1px
        borderRadius: 2,  // rounded corners
        borderColor: '#ddd',
        marginTop: 10,
        marginLeft: 5,
        marginRight: 5  
    }
})

export default Card;

