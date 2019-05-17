import React from 'react';
import {View, StyleSheet} from 'react-native';
import Header from './components/Header';
import AlbumList from './components/AlbumList';


const App = () => {
    return (
        <View style={style.container}>
        <Header headerText={"Albums"} />
        <AlbumList />
        </View>
    );

}

const style = StyleSheet.create({
    container:{
        flex: 1
    }
});





export default App;


/* 

We should get data from API rather than hardcoding.. qk agar baad me koi update krni hui
tw API me update kren. . App ko dubara se update krne k bajae .. qk deployment k process me time lagta hai

*/


/* fetch data of albums from https://rallycoding.herokuapp.com/api/music_albums by sending http req*/