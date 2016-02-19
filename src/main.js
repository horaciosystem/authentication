'use strict';

import React,{
  StyleSheet,
  Component
  Navigator,
} from 'react-native'

import Signin from './components/authentication/signin'

export default class Main extends Component {
  render() {
    return (
      <Navigator
        style={styles.container}
        initialRoute={}
        renderScene={}
        configureScene={() => { return Navigator.SceneConfigs.FloatRight; }}
      />
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
});
