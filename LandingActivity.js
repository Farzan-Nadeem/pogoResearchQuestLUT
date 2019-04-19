import React, { Component } from 'react';
import { StyleSheet, Text, Button, Image, View } from 'react-native';

export default class LandingActivity extends Component {
    constructor(props) {
        super(props);

        this.state = {};
    }

    static navigationOptions = {
        title: 'Landing',
        header: null,
    };

    OpenLUTActivityFunction = () => {
        this.props.navigation.navigate('LUTActivity');
    }

    OpenCandyTrackerActivityFunction = () => {
        this.props.navigation.navigate('CandyTrackerActivity');
    }

    render() {
        return (

            <View style={styles.landingContainer}>
                <Image source={require('./images/landingLogo.png')}
                    style={styles.landingImg} />

                <Text style={styles.titleText}>{"\n"}Pokemon Go Assistant{"\n"}</Text>

                <Button style={styles.buttonStyle} onPress={this.OpenCandyTrackerActivityFunction} title='Candy Tracker!' />
                <Text></Text>
                <Button style={styles.buttonStyle} onPress={this.OpenLUTActivityFunction} title='Encounter Lookup!' />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    landingContainer: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: '#ecf0f1',
        padding: 8,
    },
    landingImg: {
        aspectRatio: 2.8,
        width: null,
        height: null,
        resizeMode: 'contain'
    },
    titleText: {
        textAlign: 'center',
        fontSize: 22,
    },
    buttonStyle: {
        flex: 3,
        alignSelf: 'center',
    },
});