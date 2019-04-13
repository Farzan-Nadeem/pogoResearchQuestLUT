import React, { Component } from 'react';
import { StyleSheet, Text, View, Dimensions } from 'react-native';

type Props = {};
export default class TitleCard extends Component<Props> {
    render() { 
        return (
            <View style={styles.titleContainer}>
                <Text>{this.props.title}</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({ 
    titleContainer: { 
        alignItems: "center",
        justifyContent: "center",
        width: Dimensions.get('window').width - 10,
        paddingTop: 15,
        paddingBottom: 15,
        backgroundColor: 'whitesmoke',
        borderRadius: 4,
        borderWidth: 0.5,
        borderColor: 'black',
        fontSize: 20,
        fontWeight: 'bold',
        marginTop: 10,
        marginBottom: 25,
      },
});