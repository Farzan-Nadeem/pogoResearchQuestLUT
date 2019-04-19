import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class CandyTrackerActivity extends Component {

    static navigationOptions = {
        title: 'CandyTrackerActivity',
        header: null,
    };

    render() {
        return (
            <View style={styles.container}>
                <Text>Candy Tracking Not Implemented!</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    buttonStyle: {
        flex: 3,
        alignSelf: 'center',
    },
});