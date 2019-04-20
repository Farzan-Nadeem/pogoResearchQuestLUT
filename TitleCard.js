import React, { Component } from 'react';
import { StyleSheet, Text, View, Dimensions } from 'react-native';
 
export default class TitleCard extends Component {
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
        width: Dimensions.get('window').width - 10,
        alignItems: "center", 
        paddingTop: 15,
        paddingBottom: 15,
        backgroundColor: 'whitesmoke',
        borderRadius: 4,
        borderWidth: 1,
        borderColor: 'black',
        fontSize: 20,
        fontWeight: 'bold',
        marginTop: 10,
        marginBottom: 15,
      },
});