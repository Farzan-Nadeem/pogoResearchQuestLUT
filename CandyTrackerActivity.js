import React, { Component } from 'react';
import { StyleSheet, FlatList, Modal, Button, Text, View, TouchableHighlight } from 'react-native';
import NumericInput from 'react-native-numeric-input';
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
            modalVisible: false,
            addCandy: 0
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
                    temp.push({
                        pokeName: results.rows.item(i).pokemon_name,
                        candyRemaining: results.rows.item(i).candy_cost - results.rows.item(i).current_candy,
                        distanceRemaining: (results.rows.item(i).candy_cost - results.rows.item(i).current_candy) * results.rows.item(i).buddy_distance,
                        currentCandy: results.rows.item(i).current_candy
                    }
                    );
                }

                temp = temp.sort(function (a, b) {
                    return a.distanceRemaining > b.distanceRemaining
                });

                temp.unshift({ pokeName: "Pokemon", candyRemaining: "Candy Remaining", distanceRemaining: "Distance Remaining" });

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

                <Text>{"\n"}</Text>

                <FlatList
                    data={this.state.FlatListItems}
                    refreshing={this.state.refreshing}
                    onRefresh={this.handleRefresh.bind(this)}
                    renderItem={({ item }) => (
                        <TouchableHighlight onPress={() => { this.setState({ pokeInQuestion: item.pokeName, pokeIQCurrCandy: item.currentCandy, pokeIQRemaining: item.candyRemaining, modalVisible: true }) }} >
                            <CandyTrack pokeName={item.pokeName} candyRemaining={item.candyRemaining} distanceRemaining={item.distanceRemaining} />
                        </TouchableHighlight>
                    )}
                />

                <Modal
                    animationType="slide"
                    transparent={false}
                    visible={this.state.modalVisible}>
                    <View style={styles.modalContainer}>

                        <Text style={styles.titleText}>{this.state.pokeInQuestion}</Text>
                        <Text style={styles.titleText}>{"\n"}Add Candy</Text>

                        <View style={{ alignSelf: 'center', justifyContent: 'center' }}>
                            <NumericInput
                                initValue={this.state.addCandy}
                                value={this.state.addCandy}
                                onChange={(addCandy) => this.setState({ "addCandy": addCandy })}
                                totalWidth={200}
                                rounded
                                textColor='#103900'
                                iconStyle={{ color: 'white' }}
                                rightButtonBackgroundColor='#06BA63'
                                leftButtonBackgroundColor='#06BA63'
                                alignSelf='center' />
                        </View>

                        <Text>{"\n"}</Text>

                        <View style={styles.buttonContainer}>
                            <Button style={styles.buttonStyleTop} onPress={() => { this.addCandy() }} title="Add!" />
                            <Button style={styles.buttonStyle} onPress={() => { this.deleteTracker() }} title="Delete tracking!" color="red" />

                            <Text>{"\n"}</Text>

                            <Button style={styles.buttonStyle} title="Cancel" color="silver"
                                onPress={() => {
                                    this.setState({
                                        modalVisible: false
                                    })
                                }}
                            />
                        </View>
                    </View>
                </Modal>
            </View>
        );
    }

    addCandy() {
        var newCandyValue = (this.state.pokeIQRemaining < this.state.addCandy) ? this.state.pokeIQRemaining : (this.state.addCandy + this.state.pokeIQCurrCandy);

        db.transaction(tx => {
            tx.executeSql("UPDATE UserCandy set current_candy = ? WHERE pokemon_name like ?",
                [newCandyValue, this.state.pokeInQuestion])
        })

        this.setState({
            modalVisible: false
        });
    }

    deleteTracker() {
        db.transaction(tx => {
            tx.executeSql("DELETE FROM UserCandy where pokemon_name like ?",
                [this.state.pokeInQuestion]);
        });

        this.setState({
            modalVisible: false
        });
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'lightcyan'
    },
    modalContainer: {
        flex: 1,
        backgroundColor: 'lightcyan',
        justifyContent: 'center',
    },
    buttonStyle: {
        flex: 0.8,
        alignSelf: 'center',
    },
    buttonStyleTop: {
        flex: 0.8,
        alignSelf: 'center',
        marginBottom: 5
    },
    buttonContainer: {
        margin: 20
    },
    titleText: {
        fontSize: 22,
        fontWeight: 'bold',
        justifyContent: 'center',
        alignSelf: 'center'
    }
});