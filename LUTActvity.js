import React, { Component } from 'react';
import { FlatList, StyleSheet, View } from 'react-native';
import TitleCard from './TitleCard.js';
import Swiper from './Swiper.js';
import ResearchCard from './ResearchCard.js';

// Move all of these to storage
const BattleQuests = [
    { task: "TASK", reward: "REWARD" },
    { task: "Battle in a Gym", reward: "Mankey or Mankey encounter" },
    { task: "Battle in a Gym 5 times", reward: "Machop encounter" },
    { task: "Win a Gym Battle", reward: "Bulbasaur, Charmander or Squirtle encounter (shiny chance up)" },
    { task: "Win 3 Gym Battles", reward: "Jynx encounter" },
    { task: "Win 5 Gym Battles", reward: "Lapras encounter" },
    { task: "Battle in a Raid", reward: "Drowzee encounter (shiny chance up)" },
    { task: "Win a Level 3 or Higher Raid", reward: "Omanyte encounter or Kabuto encounter (shiny chance up)" },
    { task: "Win 5 Raids", reward: "Aerodactyl encounter (shiny chance)" },
    { task: "Use a Super-Effective Charge Attack 7 Times", reward: "Electabuzz encounter" },
];

const CatchQuests = [
    { task: "TASK", reward: "REWARD" },
    { task: "Catch 10 Pokemon", reward: "Magikarp encounter (shiny chance up) or Houndour encounter (shiny chance up)" },
    { task: "Catch 5 Pokemon with Weather Boost", reward: "Vulpix or Poliwag encounter" },
    { task: "Catch a Dragon-type Pokemon", reward: "Dratini (shiny chance up)" },
    { task: "Catch 5 Fighting-type Pokemon", reward: "Magnemite encounter" },
    { task: "Catch 5 Normal, Electric or Poison-type Pokemon", reward: "Starmie encounter" },
    { task: "Catch 7 Flying, Psychic or Dark-type Pokemon", reward: "Anorith encounter" },
    { task: "Catch 10 Ice-type Pokemon", reward: "Kabuto encounter (shiny chance up)" },
    { task: "Catch 10 Ground-type Pokemon", reward: "Sandshrew encounter (shiny chance up)" },
];

const BerryQuests = [
    { task: "TASK", reward: "REWARD" },
    { task: "Use 5 Berries while catching Pokemon", reward: "Growlithe encounter (shiny chance up)" },
    { task: "Use 5 Razz Berries while catching Pokemon", reward: "Cubone encounter (shiny chance up)" },
    { task: "Use 10 Pinap Berries while catching Pokemon", reward: "Magikarp encounter (shiny chance up)" },
];

const ThrowQuests = [
    { task: "TASK", reward: "REWARD" },
    { task: "Make 5 Great Curveball Throws in a row", reward: "Spinda encounter" },
    { task: "Make 5 Nice Throws", reward: "Bidoof encounter or Voltorb encounter" },
    { task: "Make 3 Great Throws", reward: "Gastly encounter (shiny chance up),  Lileep encounter or Anorith encounter" },
    { task: "Make 3 Great Throws in a row", reward: "Onix encounter" },
    { task: "Make 5 Great Curveball Throws in a row", reward: "Spinda encounter" },
    { task: "Make 3 Excellent Throws in a row", reward: "Larvitar encounter (shiny chance)" },
];

const ManagemQuests = [
    { task: "TASK", reward: "REWARD" },
    { task: "Evolve a Pokemon", reward: "Eevee encounter or Sunkern encounter (shiny chance up)" },
    { task: "Power up a Pokemon 5 times", reward: "Bulbasaur, Charmander or Squirtle encounter (shiny chance)" },
    { task: "Use an item to evolve a Pokemon", reward: "Aerodactyl encounter (shiny chance)" },
    { task: "Trade a Pokemon", reward: "Manectric encounter" },
    { task: "Transfer 3 Pokemon", reward: "Vulpix encounter" },
    { task: "Earn a candy walking with your buddy", reward: "Clefable encounter" },
    { task: "Earn 5 Candies walking with your Buddy", reward: "Tentacruel encounter" },
    { task: "Send 2 Gifts to Friends", reward: "Gastly encounter (shiny chance up)" },
];

const EggQuests = [
    { task: "TASK", reward: "REWARD" },
    { task: "Hatch an Egg", reward: "Snubbull encounter (shiny chance) or Exeggcute encounter" },
    { task: "Hatch 3 Eggs", reward: "Magmar encounter" },
    { task: "Hatch 5 Eggs", reward: "Chansey encounter (plus 3 Rare Candy)" },
];
//

export default class LUTActivity extends Component {
    static navigationOptions =
        {
            title: 'LUTActivity',
            header: null,
        };

    render() {
        return (
            <View style={styles.container}>
                <Swiper>
                    <View style={[styles.slideContainer, styles.slide1]}>
                        <TitleCard title="Battle Missions+Rewards" />
                        <FlatList
                            data={BattleQuests}
                            renderItem={({ item }) => (
                                <ResearchCard task={item.task} reward={item.reward} />
                            )}
                        />
                    </View>
                    <View style={[styles.slideContainer, styles.slide2]}>
                        <TitleCard title="Catch Field Missions+Rewards" />
                        <FlatList
                            data={CatchQuests}
                            renderItem={({ item }) => (
                                <ResearchCard task={item.task} reward={item.reward} />
                            )}
                        />
                    </View>
                    <View style={[styles.slideContainer, styles.slide3]}>
                        <TitleCard title="Berry Field Missions+Rewards" />
                        <FlatList
                            data={BerryQuests}
                            renderItem={({ item }) => (
                                <ResearchCard task={item.task} reward={item.reward} />
                            )}
                        />
                    </View>
                    <View style={[styles.slideContainer, styles.slide1]}>
                        <TitleCard title="Pokeball + Throw Field Missions+Rewards" />
                        <FlatList
                            data={ThrowQuests}
                            renderItem={({ item }) => (
                                <ResearchCard task={item.task} reward={item.reward} />
                            )}
                        />
                    </View>
                    <View style={[styles.slideContainer, styles.slide2]}>
                        <TitleCard title="Pokemon Management + Evolution Field Missions+Rewards" />
                        <FlatList
                            data={ManagemQuests}
                            renderItem={({ item }) => (
                                <ResearchCard task={item.task} reward={item.reward} />
                            )}
                        />
                    </View>
                    <View style={[styles.slideContainer, styles.slide3]}>
                        <TitleCard title="Egg Hatching Field Missions+Rewards" />
                        <FlatList
                            data={EggQuests}
                            renderItem={({ item }) => (
                                <ResearchCard task={item.task} reward={item.reward} />
                            )}
                        />
                    </View>
                </Swiper>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    slideContainer: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center"
    },
    slide1: {
        backgroundColor: "lightskyblue"
    },
    slide2: {
        backgroundColor: "khaki"
    },
    slide3: {
        backgroundColor: "tomato"
    },
});