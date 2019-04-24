import React, { Component } from 'react';
import { StyleSheet, View, Text, Dimensions } from 'react-native';

export default class CandyTrack extends Component {

    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.textStyle}>{this.props.pokeName}</Text>
                <Text style={styles.textStyle}>{this.props.candyRemaining}</Text>
                <Text style={styles.textStyle}>{this.props.distanceRemaining}</Text>
            </View>
        )
    }

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        margin: 15,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    textStyle: {
        width: Dimensions.get('window').width/3,
        fontWeight: 'bold',
        borderLeftWidth: 1,
        borderRightWidth: 1,
        borderColor: 'black',
        padding: 10,
        height: 55, 
    }
});