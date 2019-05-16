import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const AlbumDetail = (props) =>{
    return(
        <View style={styles.cardStyle}>
            
            <View style={styles.cardSectionStyle}>
            
            <View style={styles.picContainerStyle}>
                <Text>Pic here</Text>
            </View>


            <View style={styles.albumContainerStyle}>
            <Text>{props.album.title}</Text>
            <Text>{props.album.artist}</Text>
            </View>

            </View>
            
        </View>
    );


}



const styles = StyleSheet.create({
    textStyle: {
        color: 'black',
        fontSize: 15   
    },

    picContainerStyle : {
        backgroundColor: 'yellow',
        height: 50,
        width: 90
    },
    
    albumContainerStyle : {
        flexDirection: 'column',
        justifyContent: 'space-around',
        marginLeft: 10
    },

    cardSectionStyle : {
        borderBottomWidth: 1,
        padding: 5,
        backgroundColor: '#fff',
        justifyContent: 'flex-start',
        flexDirection: 'row',
        borderColor: '#ddd',
        position: 'relative'
    },

    cardStyle : {
        borderWidth: 1,  // border 1px
        borderRadius: 2,  // rounded corners
        borderColor: '#ddd',
        marginTop: 10,
        marginLeft: 5,
        marginRight: 5  }
});




export default AlbumDetail;