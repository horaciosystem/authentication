'use strict';

import React,{
  TouchableHighlight,
  Component,
  Text,
  StyleSheet
} from 'react-native'

export default class Button extends Component {
  render() {
    return (
      <TouchableHighlight
        style={styles.button}
        underlayColor={'blue'}
        onPress={this.props.onPress.bind(this)}>
        <Text style={styles.buttonText}>
          {this.props.text}
        </Text>
      </TouchableHighlight>
    )
  }
}

const styles = StyleSheet.create({
  button: {
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderRadius: 5,
    padding: 5,
    borderColor: 'black',
    marginTop: 10
  },
  buttonText: {
    flex: 1,
    alignSelf: 'center',
    fontSize: 20
  }
});
