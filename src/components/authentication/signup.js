'user strict';

import React,{
  Component,
  View,
  TextInput,
  Text,
  StyleSheet,
} from 'react-native'

export default class Signup extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>
          BisMillah!
        </Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white'
  }
});
