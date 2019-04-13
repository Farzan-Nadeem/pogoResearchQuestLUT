import React, { Component } from 'react';
import TitleCard from './TitleCard.js';
import ResearchList from './ResearchList.js';
import Swiper from './Swiper.js';
import { ScrollView, StyleSheet, Text, View } from 'react-native';

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
  { task:"TASK", reward:"REWARD"},
  { task: "Use 5 Berries while catching Pokemon", reward:"Growlithe encounter (shiny chance up)"},
  { task: "Use 5 Razz Berries while catching Pokemon", reward:"Cubone encounter (shiny chance up)"},
  { task: "Use 10 Pinap Berries while catching Pokemon", reward:"Magikarp encounter (shiny chance up)"},
  ];
  
  const ThrowQuests = [
  { task:"TASK", reward:"REWARD"},
  { task: "Make 5 Great Curveball Throws in a row", reward:"Spinda encounter"},
  { task: "Make 5 Nice Throws", reward:"Bidoof encounter or Voltorb encounter"},
  { task: "Make 3 Great Throws", reward:"Gastly encounter (shiny chance up),  Lileep encounter or Anorith encounter"},
  { task: "Make 3 Great Throws in a row", reward:"Onix encounter"},
  { task: "Make 5 Great Curveball Throws in a row", reward:"Spinda encounter"},
  { task: "Make 3 Excellent Throws in a row", reward:"Larvitar encounter (shiny chance)"},
  ];
  
  const ManagemQuests = [
  { task:"TASK", reward:"REWARD"},
  { task: "Evolve a Pokemon", reward:"Eevee encounter or Sunkern encounter (shiny chance up)"},
  { task: "Power up a Pokemon 5 times", reward:"Bulbasaur, Charmander or Squirtle encounter (shiny chance)"},
  { task: "Use an item to evolve a Pokemon", reward:"Aerodactyl encounter (shiny chance)"},
  { task: "Trade a Pokemon", reward:"Manectric encounter"},
  { task: "Transfer 3 Pokemon", reward:"Vulpix encounter"},
  { task: "Earn a candy walking with your buddy", reward:"Clefable encounter"},
  { task: "Earn 5 Candies walking with your Buddy", reward:"Tentacruel encounter"},
  { task: "Send 2 Gifts to Friends", reward:"Gastly encounter (shiny chance up)"},
  ];
  
  const EggQuests = [
  { task:"TASK", reward:"REWARD"},
  { task: "Hatch an Egg" , reward:"Snubbull encounter (shiny chance) or Exeggcute encounter"},
  { task: "Hatch 3 Eggs" , reward:"Magmar encounter"},
  { task: "Hatch 5 Eggs" , reward:"Chansey encounter (plus 3 Rare Candy)"},
  ];

type Props = {};
export default class App extends Component<Props> {
  render() {
    return (
      <View style={styles.container}>
        <Swiper>
          <View style={[styles.slideContainer, styles.slide1]}>
            <ScrollView>
              <View style={{ flex: 1, flexDirection: 'column' }}>
                <TitleCard title="Battle Field Missions+Rewards" />
                <ResearchList items={BattleQuests} />
              </View>
            </ScrollView>
          </View>
          <View style={[styles.slideContainer, styles.slide2]}>
            <ScrollView>
              <View style={{ flex: 1, flexDirection: 'column' }}>
                <TitleCard title="Catch Field Missions+Rewards" />
                <ResearchList items={CatchQuests} />
              </View>
            </ScrollView>
          </View>
          <View style={[styles.slideContainer, styles.slide3]}>
            <ScrollView>
              <View style={{ flex: 1, flexDirection: 'column' }}>
                <TitleCard title="Berry Field Missions+Rewards" />
                <ResearchList items={BerryQuests} />
              </View>
            </ScrollView>
          </View>
          <View style={[styles.slideContainer, styles.slide1]}>
            <ScrollView>
              <View style={{ flex: 1, flexDirection: 'column' }}>
                <TitleCard title="Pokeball + Throw Field Missions+Rewards" />
                <ResearchList items={ThrowQuests} />
              </View>
            </ScrollView>
          </View>
          <View style={[styles.slideContainer, styles.slide2]}>
            <ScrollView>
              <View style={{ flex: 1, flexDirection: 'column' }}>
                <TitleCard title="Pokemon Management + Evolution Field Missions+Rewards" />
                <ResearchList items={ManagemQuests} />
              </View>
            </ScrollView>
          </View>
          <View style={[styles.slideContainer, styles.slide3]}>
            <ScrollView>
              <View style={{ flex: 1, flexDirection: 'column' }}>
                <TitleCard title="Egg Hatching Field Missions+Rewards" />
                <ResearchList items={EggQuests} />
              </View>
            </ScrollView>
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
    backgroundColor: "rgba(20,20,200,0.3)"
  },
  slide2: {
    backgroundColor: "rgba(20,200,20,0.3)"
  },
  slide3: {
    backgroundColor: "rgba(200,20,20,0.3)"
  },
});
