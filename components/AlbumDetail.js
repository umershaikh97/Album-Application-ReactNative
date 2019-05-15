import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Card from './Card';
import CardItem from './CardItem';


const AlbumDetail = (props) =>{
    return(
        <Card>
            
            <CardItem>
            <Text style={styles.textStyle} > {props.album.title} </Text>
            </CardItem>

            
        </Card>
    );


}


const styles = StyleSheet.create({
    textStyle: {
        color: 'black',
        fontSize: 15   
    }
})




export default AlbumDetail;