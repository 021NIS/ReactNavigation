import React from 'react';
import { Button, View, Text } from 'react-native';
import { StackNavigator } from 'react-navigation';

class Screen1 extends React.Component {
  render() {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: 'pink' }}>
        <Text>Screen1</Text>
        <Button
          title="Go to Screen2"
          onPress={() => this.props.navigation.navigate('Screen2')}
        />
      </View>
    );
  }
}

export default Screen1;
