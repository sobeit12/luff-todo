import React from 'react';
import { StyleSheet, Text, View, StatusBar, TextInput, Dimensions, Platform} from 'react-native';
import { white } from 'ansi-colors';

const { height, width } = Dimensions.get("window");

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <StatusBar barStyle="light-content" />
        <Text style={styles.title}>luff Task</Text>
        <View style={styles.card}>
          <TextInput style={styles.input} placeholder={"New Task"}/>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#006aa7',
    alignItems: 'center'
  },
  title: {
    color: '#ffffff',
    fontSize: 30,
    marginTop: 50,
    fontWeight: "300",
    marginBottom: 20
  }, 
  card: {
    backgroundColor: "#fecc00",
    flex: 1,
    width: width-40,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    ...Platform.select({
      ios: {
        shadowColor:"rgb(50, 50, 50)",
        shadowOpacity: 0.5,
        shadowRadius: 5,
        shadowOffset:{
          height: -1,
          width: 0
        }
      },
      android: {
        elevation: 3,
      }

    })
  }
});
