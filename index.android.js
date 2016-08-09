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
   Clipboard,
   ToastAndroid,
   AlertIOS,
   Platform,
 } from 'react-native';

 const NMSaid = require('./NMQuotes.json');

 const MODI_IMAGE = require('./resources/modi.png');
 const TITLE_TEXT = 'Narendra Modi Quotes';
 const INFORMATION_TEXT = 'Tap on the quote to change quote';
 const AUTHOR_TEXT = 'Narendra Modi';

 type State = {
   quote: string,
   visible: boolean,
 };

 type Props = {

 };

 class NMQuotes extends Component<void, Props, State> {

   state: State;
   props: Props;

   static propTypes = {
   };

   constructor(props) {
     super(props);
     this.state = {
       quote: NMSaid.ModiQuotes[
         Math.floor(Math.random() * NMSaid.ModiQuotes.length)
       ],
       visible: false,
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
         style={styles.container}>
         <View style={styles.topHalfView}>
           <View style={styles.titleView}>
             <Text style={styles.title}>
               {TITLE_TEXT}
             </Text>
           </View>
           <View style={styles.profileImageView}>
             <Image
              style={styles.profilePic}
              source={MODI_IMAGE}/>
           </View>
           <View style={styles.informationView}>
             <Text style={styles.information}>
               {INFORMATION_TEXT}
             </Text>
           </View>
         </View>
         <View style={styles.bottomHalfView} onTouchStart={() => this._changeQuote()}>
           <Text style={styles.quote}>
             {this.state.quote}
           </Text>
           <Text style={styles.author}>
             {AUTHOR_TEXT}
           </Text>
         </View>
      </View>
    );
   }

 }

 const styles = StyleSheet.create({
   container: {
     flex: 1,
     flexDirection: 'column',
   },
   topHalfView: {
     flex:0.5,
     flexDirection: 'column',
   },
   bottomHalfView: {
     flex:0.5,
     justifyContent: 'center',
     alignItems: 'center',
     backgroundColor: 'seashell',

   },
   titleView: {
     flex: 0.2,
     justifyContent: 'center',
     alignItems: 'center',
     backgroundColor: 'saddlebrown',
   },
   profileImageView: {
     flex: 0.7,
     justifyContent: 'center',
     alignItems: 'center',
     backgroundColor: 'saddlebrown',
   },
   informationView: {
     flex: 0.1,
     justifyContent: 'center',
     alignItems: 'center',
     backgroundColor: 'saddlebrown',
   },
   quote: {
     fontSize: 18,
     textAlign: 'center',
     margin: 10,
     color: 'black',
     fontFamily: 'Cochin'
   },
   author: {
     fontSize: 18,
     textAlign: 'center',
     margin: 10,
     color: 'brown',
     fontFamily: 'Cochin'
   },
   title: {
     fontSize: 24,
     textAlign: 'center',
     margin: 10,
     color: 'white',
     fontWeight: 'bold'
   },
   information: {
     fontSize: 12,
     textAlign: 'center',
     margin: 10,
     color: 'white',
   },
   share: {
     fontSize: 14,
     textAlign: 'center',
     color: 'black',
   },
   profilePic: {
     height: 100,
     borderRadius: 50,
     width: 100
   },
 });

 AppRegistry.registerComponent('NMQuotes', () => NMQuotes);
