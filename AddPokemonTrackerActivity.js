import React, { Component } from 'react';
import { View, Text, Button, StyleSheet, Alert } from 'react-native';
import SearchableDropdown from 'react-native-searchable-dropdown';
import NumericInput from 'react-native-numeric-input';
import { openDatabase } from 'react-native-sqlite-storage';


const db = openDatabase({ name: "CandyDatabase.db" });

const pokemonList = require('./candy_tracker_static.json');

export default class AddPokemonTrackerActivity extends Component {
    static navigationOptions = {
        title: 'AddPokemonTrackerActivity',
        header: null,
    };

    constructor(props) {
        super(props);

        this.state = {
            pokemonChosen: "Pikachu",
            kmBuddyDistance: 3,
            candyCost: 50,
            currentCandy: 0
        };

    }

    render() {
        return (
            <View style={styles.container}>
                <Text style={{ fontSize: 22, fontWeight: 'bold' }}>Pokemon Details{"\n"}</Text>

                <Text style={styles.textStyle}>Pokemon Name</Text>

                <SearchableDropdown
                    onItemSelect={item => this.setState({ pokemonChosen: item.name, kmBuddyDistance: item.kmBuddyDistance, candyCost: item.candyCost })}
                    containerStyle={{ padding: 5 }}
                    textInputStyle={{
                        padding: 12,
                        borderWidth: 1,
                        borderColor: '#ccc',
                        borderRadius: 5,
                    }}
                    itemStyle={{
                        padding: 10,
                        marginTop: 2,
                        backgroundColor: '#ddd',
                        borderColor: '#bbb',
                        borderWidth: 1,
                        borderRadius: 5,
                    }}
                    itemTextStyle={{ color: '#222' }}
                    itemsContainerStyle={{ maxHeight: 140 }}
                    items={pokemonList}
                    defaultIndex={0}
                    placeholder={this.state.pokemonChosen}
                    resetValue={false}
                    underlineColorAndroid="transparent"
                />

                <Text style={styles.textStyle}>{"\n\n"}Current Amount of Candy{"\n"}</Text>

                <View style={{ alignSelf: 'center', justifyContent: 'center' }}>
                    <NumericInput
                        initValue={this.state.currentCandy}
                        value={this.state.currentCandy}
                        onChange={(currentCandy) => this.setState({ "currentCandy": currentCandy })}
                        totalWidth={200}
                        rounded
                        textColor='#103900'
                        iconStyle={{ color: 'white' }}
                        rightButtonBackgroundColor='#06BA63'
                        leftButtonBackgroundColor='#06BA63'
                        alignSelf='center' />
                </View>

                <Text>{"\n\n\n"}</Text>

                <Button style={styles.buttonStyle} type='outline' color='darkslategrey'
                    onPress={() => {

                        if (this.state.currentCandy == undefined ||
                            this.state.pokemonChosen == undefined||
                            this.state.currentCandy == null ||
                            this.state.pokemonChosen == null) 
                            {
                            alert("Ensure that all data has been selected!");
                            return;
                        }

                        if(this.state.candyCost < this.state.currentCandy) { 
                            alert("Current candy can not be greater than total candy cost: " + this.state.candyCost);
                            return;
                        }

                        db.readTransaction(tx => {
                            tx.executeSql('SELECT * FROM UserCandy where pokemon_name like ?',
                                [this.state.pokemonChosen],
                                (tx, results) => {
                                    if (results.rows.length != 0) {
                                        alert("Tracker already exists for this pokemon!");
                                    }
                                })
                        })

                        db.transaction(tx => {
                            tx.executeSql('INSERT INTO UserCandy (pokemon_name, buddy_distance, candy_cost, current_candy) VALUES (?, ?, ?, ?)',
                                [this.state.pokemonChosen, this.state.kmBuddyDistance, this.state.candyCost, this.state.currentCandy],
                                (tx, results) => {
                                    if (results.rowsAffected != 0) {
                                        Alert.alert(
                                            'Success!',
                                            'Added pokemon Tracker!',
                                            [
                                                {
                                                    text: 'Ok',
                                                    onPress: () =>
                                                        this.props.navigation.goBack(),
                                                },
                                            ],
                                            { cancelable: false }
                                        );
                                    } else {
                                        alert("Something went wrong! Please try again");
                                    }
                                }
                            );
                        })
                    }} title="Add Tracker!"
                />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 25,
        backgroundColor: 'lightcyan',
        fontWeight: 'bold',
    },
    buttonStyle: {
        flex: 0.8,
        alignSelf: 'center',
        margin: 20,
    },
    textStyle: {
        fontWeight: 'bold'
    }
})