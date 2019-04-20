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

                <View style={styles.buttonContainer}>
                    <Button type='outline' color='darkslategrey' style={styles.buttonStyle} onPress={this.OpenCandyTrackerActivityFunction} title='Candy Tracker!' />
                    <View style={{ flexDirection: 'column' }}>
                        <Text>{"\n"} </Text>
                    </View>
                    <Button type='outline' color='darkslategrey' style={styles.buttonStyle} onPress={this.OpenLUTActivityFunction} title='Encounter Lookup!' />
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    landingContainer: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        backgroundColor: 'lightcyan',
        padding: 8,
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
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
        color: '#0e0e0f',
        fontWeight: 'bold'
    },
    buttonStyle: {
        flex: 0.8,
        alignSelf: 'center',
    },
});