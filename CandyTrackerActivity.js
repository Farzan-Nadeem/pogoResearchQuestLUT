import React, { Component } from 'react';
import { StyleSheet, FlatList, Text, Button, View } from 'react-native';
import CandyTrack from './CandyTrack.js';

import { openDatabase } from 'react-native-sqlite-storage';

const db = openDatabase({ name: "CandyDatabase.db" });

export default class CandyTrackerActivity extends Component {

    static navigationOptions = {
        title: 'CandyTrackerActivity',
        header: null,
    };

    constructor(props) {
        super(props);

        this.state = {
            refreshing: false,
            FlatListItems: [],
        };

        this.getData();
    }
    
    handleRefresh() { 
        this.setState({ 
            refreshing: true,
        });
        this.getData();
    }
    
    getData() { 
        db.transaction(tx => {
            tx.executeSql('SELECT * FROM UserCandy', [], (tx, results) => {
                var temp = [];
                for (let i = 0; i < results.rows.length; ++i) {
                    temp.push( {
                        pokeName : results.rows.item(i).pokemon_name,
                        candyRemaining:  results.rows.item(i).candy_cost -  results.rows.item(i).current_candy,
                        distanceRemaining: (results.rows.item(i).candy_cost -  results.rows.item(i).current_candy)*results.rows.item(i).buddy_distance
                    }
                       );
                }

                temp = temp.sort(function(a, b) { 
                    return a.distanceRemaining > b.distanceRemaining
                });

                temp.unshift({pokeName:"Pokemon", candyRemaining:"Candy Remaining", distanceRemaining:"Distance Remaining"});

                this.setState({
                    FlatListItems: temp,
                    refreshing: false,
                });
            });
        });
    }

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

                <FlatList
                    data={this.state.FlatListItems}
                    refreshing={this.state.refreshing}
                    onRefresh={this.handleRefresh.bind(this)}
                    renderItem={({ item }) => (
                        <CandyTrack pokeName={item.pokeName} candyRemaining={item.candyRemaining} distanceRemaining={item.distanceRemaining} />
                    )}
                />
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