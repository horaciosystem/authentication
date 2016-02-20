import React,{
  Component,
  StyleSheet,
  Text,
  View
} from 'react-native';

export default class Messages extends Component {
  render() {
    return(
      <View style={styles.container}>
        <Text>Welcome back!</Text>
      </View>
    );
  }
}

const styles =  StyleSheet.create({
  container: {
    flex: 1
  }
});
