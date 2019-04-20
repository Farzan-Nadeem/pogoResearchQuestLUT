import React, { Component } from 'react';
import { StyleSheet, Text, View, Dimensions } from 'react-native';

export default class ResearchCard extends Component{
    render() { 
        return (
            <View style={styles.titleContainer}>
                <View style={styles.halfContainer1}>
                  <Text>{this.props.task}</Text>
                </View>
                <View style={styles.halfContainer2}>
                  <Text>{this.props.reward}</Text>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({ 
    titleContainer: { 
        flex: 1,
        flexDirection: 'row', 
        width: Dimensions.get('window').width - 5,
        backgroundColor: 'whitesmoke',
        justifyContent: "center", 
        paddingTop: 12,
        paddingBottom: 12,
        marginBottom: 3,
        borderRadius: 4,
        borderWidth: 1,
        borderColor: 'black', 
        fontSize: 20,
        fontWeight: 'bold',
      },
      halfContainer1: { 
        width: Dimensions.get('window').width/2,
        paddingLeft: 20, 
      },
      halfContainer2: { 
        width: Dimensions.get('window').width/2,
        paddingLeft: 5,
        paddingRight: 10
      },
});