import React,{
  Component,
  StyleSheet,
  Text,
  View
} from 'react-native';

export default class Messages extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: null
    }
  }
  componentWillMount() {
    //Get current user
    let user = {name: 'Horacio'};
    this.setState({user: user});
  }
  render() {
    if (!this.state.user)
      return <Text>Loading...</Text>;

    let userName = this.state.user.name;
    return(
      <View style={styles.container}>
        <Text>Welcome back, {userName}!</Text>
      </View>
    );
  }
}

const styles =  StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
});
