import React, { Component } from 'react';
import { View } from 'react-native';
import ResearchCard from './ResearchCard.js';

export default class ResearchList extends Component<Props> {
    render() { 
        return (
            <View>
              {this.props.items.map((prop, key) => {
                return (
                  <ResearchCard task={prop.task} reward={prop.reward} />
                );
              })}
            </View>
        );
    }
}
