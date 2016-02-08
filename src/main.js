'use strict';

import React,{
  View,
  Text,
  StyleSheet,
  Component
} from 'react-native'

import Signin from './components/authentication/signin'

export default class Main extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Signin />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
});
