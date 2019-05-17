import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, Linking } from 'react-native';
import Button from './Button';
import Card from './Card';
import CardSection from './CardSection';




const handleBuyNow = (url) =>{
    Linking.openURL(url);     // open URL
}




const AlbumDetail = (props) =>{

    const {thumbnail_image, title, artist, image} = props.album;


    return(

        <Card> 
            
            {/* Card Header Section */}
            <CardSection> 
            
            <View style={styles.thumbnailContainerStyle}>
                <Image
                 style={styles.thumbnailStyle}
                 source={{uri: thumbnail_image}} />
            </View>


            <View style={styles.albumDetailsContainerStyle}> 
            <Text style={styles.textHeadingStyle}>{title}</Text>
            <Text style={styles.textStyle}>{artist}</Text>
            </View>

            </CardSection>





            {/* Album Image Section */}
            <CardSection>
            <Image
            style={styles.imageStyle}
            source={{uri: image}} />
            </CardSection>


            {/* Buy Button Section */}
            <CardSection>

            <Button btnText="Buy Now" onPress={() => handleBuyNow(props.album.url)} />

            </CardSection>



            
        </Card>
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