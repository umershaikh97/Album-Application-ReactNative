import React, { Component } from 'react';
import {View, Text, StyleSheet, ScrollView} from 'react-native';
import axios from 'axios';
import AlbumDetail from './AlbumDetail';


class AlbumList extends Component{

    state = {
        albums: []
    }

    componentWillMount(){  // AJAX requests here

        axios.get("https://rallycoding.herokuapp.com/api/music_albums")  // HTTP request
        .then((Response)=>{         //request handler
            this.setState({
                albums: Response.data
            })
        })

    }



    renderAlbums = () => {
        return(
            this.state.albums.map((album)=>{
                return <AlbumDetail key={album.title} album={album} />
            })
        )
    }


    render(){

        return(
            <ScrollView>
                { this.renderAlbums() }
            </ScrollView>
        );
    }

}

export default AlbumList;

