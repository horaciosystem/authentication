'user strict';

import React,{
  Component,
  View,
  TextInput,
  Text,
  StyleSheet,
} from 'react-native';

import Button from '../common/button';

export default class Signup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
      passwordConfirmation: '',
      errorMessage: ''
    };
  }
  render() {
    return (
      <View style={styles.container}>
        <Text>Sign Up</Text>

        <Text style={styles.label}>Username:</Text>
        <TextInput
          value={this.state.username}
          onChangeText={(text) => this.setState({username: text})}
          style={styles.input} />

        <Text style={styles.label}>Password:</Text>
        <TextInput
          value={this.state.password}
          onChangeText={(text) => this.setState({password: text})}
          style={styles.input}
          secureTextEntry={true} />

        <Text style={styles.label}>Confirm Password:</Text>
        <TextInput
          value={this.state.passwordConfirmation}
          onChangeText={(text) => this.setState({passwordConfirmation: text})}
          style={styles.input}
          secureTextEntry={true} />
        <Text style={styles.label}>{this.state.errorMessage}</Text>
        <Button text={'I have an account'} onPress={this.onSigninPress.bind(this)} />
        <Button text={'Sign Up'} onPress={this.onSignUpPress.bind(this)} />

      </View>
    )
  }
  onSigninPress() {
    this.props.navigator.pop();
  }
  onSignUpPress() {
    if (!this.state.username || !this.state.password)
      return this.setState({errorMessage: 'User name or password are empty!'});

    if (this.state.password != this.state.passwordConfirmation)
      return this.setState({errorMessage: 'Your passwords do not match'});


    this.props.navigator.immediatelyResetRouteStack([{ name: 'messages' }]);
    //Create a new user
    // User.signUp(this.state.username, this.state.password)
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
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white'
  },
  label: {
    fontSize: 18
  },
  input: {
    padding: 4,
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 5,
    margin: 5,
    width: 200,
    alignSelf:'center'
  }

});
