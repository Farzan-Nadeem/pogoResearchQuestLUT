import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import CandyTrack from './CandyTrack.js';

var staticCandyData = require('./candy_tracker_static.json');
var staticPokeList = require('./pokemon_list.json');

export default class CandyTrackerActivity extends Component {

    static navigationOptions = {
        title: 'CandyTrackerActivity',
        header: null,
    };

    render() {
        return (
            <View style={styles.container}>
                <Text>Candy Tracking Not Implemented!{"\n"}</Text>
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
        flex: 3,
        alignSelf: 'center',
    },
});