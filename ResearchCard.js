import React, { Component } from 'react';
import { StyleSheet, Text, View, Dimensions } from 'react-native';


export default class ResearchCard extends Component<Props> {
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
        justifyContent: "center",
        width: Dimensions.get('window').width - 10,
        paddingTop: 15,
        paddingBottom: 15,
        backgroundColor: 'whitesmoke',
        borderRadius: 4,
        borderWidth: 0.5,
        fontSize: 20,
        fontWeight: 'bold',
        borderColor: 'black',
        marginTop: 5,
        marginBottom: 5
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