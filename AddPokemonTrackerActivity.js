import React, { Component } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import SearchableDropdown from 'react-native-searchable-dropdown'; 

const pokemonList = require('./pokemon_list.json');

export default class AddPokemonTrackerActivity extends Component {
    static navigationOptions = {
        title: 'AddPokemonTrackerActivity',
        header: null,
    };

    constructor(props) {
        super(props);

        this.state = {};
    }

    render() {
        return (
            <View style={styles.container}>
                <Text>Pokemon Name</Text>

                <SearchableDropdown
                    onTextChange={text => alert(text)}
                    onItemSelect={item => alert(JSON.stringify(item))}
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
                    defaultIndex={2}
                    placeholder="placeholder"
                    resetValue={false}
                    underlineColorAndroid="transparent"
                />

                <Text>{"\n\n\n"}Current Amount of Candy</Text>
                

            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 25,
        backgroundColor: 'lightcyan'
    }
})