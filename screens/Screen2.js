import React from 'react';
import { Button, View, Text } from 'react-native';
import { StackNavigator } from 'react-navigation';

class Screen2 extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: 'gray' }}>
        <Text>Screen2</Text>
        <Button
          title="Go to Screen3"
          onPress={() => this.props.navigation.navigate('Screen3')}
        />
      </View>
    );
  }
}

export default Screen2;
