'use strict';

import React,{
  StyleSheet,
  Component,
  Navigator,
} from 'react-native'

import Signin from './components/authentication/signin';
import Signup from './components/authentication/signup';


const ROUTES = {
  signin: Signin,
  signup: Signup,
};

export default class Main extends Component {
  renderScene(route, navigator) {
    let Component = ROUTES[route.name];
    return <Component route={route} navigator={navigator} />;
  }
  render() {
    return (
      <Navigator
        style={styles.container}
        initialRoute={{name: 'signin'}}
        renderScene={this.renderScene.bind(this)}
        configureScene={() => { return Navigator.SceneConfigs.PushFromRight; }}
      />
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
});
