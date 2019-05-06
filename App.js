// @flow
import React, { Component } from "react";
import { Alert, Button, StyleSheet, Text, View, Image } from "react-native";

type Props = {};
export default class App extends Component<Props> {
  render() {
    return (
      <View style={styles.container}>
        <FlexBasics style={{flex: 1}} />
        <Text style={styles.welcome}>Hello, world!!</Text>
        <Bananas style={{flex: 1}} />
      </View>
    );
  }
}

const FlexBasics = () => (
  <View style={{flex: 1}}>
    <View style={{flex: 1, backgroundColor: 'powderblue'}} />
    <View style={{flex: 2, backgroundColor: 'skyblue'}} />
    <View style={{flex: 3, backgroundColor: 'yellow'}}>
      <Button title="Press me" onPress={() => {
        Alert.alert('You tapped the button!');
      }} />
    </View>
  </View>
)

const Bananas = () => (
  <Image
    source={{uri: 'https://upload.wikimedia.org/wikipedia/commons/d/de/Bananavarieties.jpg' }}
    style={{width: 193, height: 110}}
  />
)

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: "center",
    // alignItems: "center",
    backgroundColor: "#F5FCFF"
  },
  welcome: {
    flex: 1,
    fontSize: 20,
    textAlign: "center",
    margin: 10
  },
  instructions: {
    textAlign: "center",
    color: "#333333",
    marginBottom: 5
  }
});
