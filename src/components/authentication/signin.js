'use strict';

import React,{
  Component,
  View,
  StyleSheet,
  TextInput,
  Text
} from 'react-native';

import Button from '../common/button';

export default class Signin extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
      errorMessage: ''
    };
  }
  render() {
    return (
        <View style={styles.container}>
          <Text>Sign In</Text>

          <Text style={styles.label}>User name:</Text>
          <TextInput
            style={styles.input}
            onChangeText={(text) => this.setState({ username: text})}
            value={this.state.username}
            />

          <Text style={styles.label}>Password:</Text>
          <TextInput
            secureTextEntry={true}
            style={styles.input}
            onChangeText={(text) => this.setState({ password: text})}
            value={this.state.password}
            />
          <Text style={styles.label}>{this.state.errorMessage}</Text>
          <Button text={'Sign In'} onPress={this.onSignInPress.bind(this)} />
          <Button text={'Sign Up'} onPress={this.onSignupPress.bind(this)} />
        </View>

    );
  }
  onSignInPress() {
    if (!this.state.username || !this.state.password)
      return this.setState({errorMessage: 'User name or password are empty!'});

    this.props.navigator.immediatelyResetRouteStack([{ name: 'messages' }]);
    // User.logIn(this.state.username, this.state.password)
    //   .done(response => {
    //     console.log(response.user);
    //   })
    //   .catch(error => {
    //     console.warn(error);
    //     this.setState({
    //       errorMessage: error.message
    //     });
    //   });
  }
  onSignupPress() {
    this.props.navigator.push({name: 'signup'});
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  input: {
    padding: 4,
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 5,
    margin: 5,
    width: 200,
    alignSelf: 'center'
  },
  label: {
    fontSize: 18
  },
  buttons: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
});
