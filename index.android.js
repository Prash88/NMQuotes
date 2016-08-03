/**
 * NMQuotes
 * https://github.com/facebook/react-native
 * @flow
 */

'use strict';

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
} from 'react-native';
const NMSaid = require('./NMQuotes.json');

const SIGNATURE_URL = 'https://upload.wikimedia.org/wikipedia/commons/e/ec/Signature_of_Narendra_Modi.svg';

type State = {
  quote: string,
};

type Props = {

};

class NMQuotes extends Component<void, Props, State> {

  state: State;
  props: Props;

  static propTypes = {
  };

  constructor() {
    super();
    this.state = {
      quote: NMSaid.ModiQuotes[
        Math.floor(Math.random() * NMSaid.ModiQuotes.length)
      ],
    };
  }

  //Touch Function
  _changeQuote() {
     this.setState({
      quote: NMSaid.ModiQuotes[
        Math.floor(Math.random() * NMSaid.ModiQuotes.length)
      ],
    });
  }

  //Render Function
  render() {
    return (
      <View
        style={styles.container}
        onTouchStart={this._changeQuote}>
       <Text style={styles.quote}>
           {this.state.quote}
       </Text>
       <Image
        style={styles.signature}
        source={{uri: SIGNATURE_URL}}/>
     </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'black',
  },
  quote: {
    fontSize: 30,
    textAlign: 'center',
    margin: 10,
    color: 'white',
    fontFamily: 'Cochin'
  },
  signature: {
    height: 30,
    width: 100
  },
});

AppRegistry.registerComponent('NMQuotes', () => NMQuotes);
