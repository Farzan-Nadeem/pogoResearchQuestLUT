import React, { Component } from 'react';
import { StyleSheet, Text, Button, View } from 'react-native';
import CandyTrack from './CandyTrack.js';

var staticCandyData = require('./candy_tracker_static.json');
var staticPokeList = require('./pokemon_list.json');

export default class CandyTrackerActivity extends Component {

    static navigationOptions = {
        title: 'CandyTrackerActivity',
        header: null,
    };

    OpenAddPokemonTrackerActivity = () => { 
        this.props.navigation.navigate('AddPokemonTrackerActivity');
    }

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.buttonContainer}>
                    <Button type='outline' color='darkslategrey' style={styles.buttonStyle} 
                    onPress={this.OpenAddPokemonTrackerActivity} title='Add Tracker!' />
                </View>
                
                <CandyTrack pokeName="Chikorita" candyRemaining="4" distanceRemaining="54" />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'lightcyan'
    },
    buttonStyle: {
        flex: 0.8,
        alignSelf: 'center',
    },
    buttonContainer: {
        margin: 20
    }
});