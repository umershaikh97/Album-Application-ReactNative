import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, Linking } from 'react-native';
import Button from './Button';




const handleBuyNow = (url) =>{
    Linking.openURL(url);     // open URL
}






const AlbumDetail = (props) =>{

    const {thumbnail_image, title, artist, image} = props.album;


    return(

        <View style={styles.cardStyle}> 
            
            {/* Card Header Section */}
            <View style={styles.cardSectionStyle}> 
            
            <View style={styles.thumbnailContainerStyle}>
                <Image
                 style={styles.thumbnailStyle}
                 source={{uri: thumbnail_image}} />
            </View>


            <View style={styles.albumDetailsContainerStyle}> 
            <Text style={styles.textHeadingStyle}>{title}</Text>
            <Text style={styles.textStyle}>{artist}</Text>
            </View>

            </View>





            {/* Album Image Section */}
            <View style={styles.cardSectionStyle}>
            <Image
            style={styles.imageStyle}
            source={{uri: image}} />
            </View>


            {/* Buy Button Section */}
            <View style={styles.cardSectionStyle}>

            <Button btnText="Buy Now" onPress={() => handleBuyNow(props.album.url)} />

            </View>



            
        </View>
    );


}



const styles = StyleSheet.create({
    textStyle: {
        color: 'black',
        fontSize: 15   
    },

    thumbnailContainerStyle : {
        backgroundColor: 'yellow',
        height: 50,
        width: 50
    },
    
    albumDetailsContainerStyle : {
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
        marginRight: 5  
    },
    thumbnailStyle: {
        height: 50,
        width: 50
    },
    
    imageStyle: {
        height: 300,
        width: null,
        flex: 1
    },

    textHeadingStyle:{
        fontSize: 20,
        color: 'black'     
    }
});




export default AlbumDetail;