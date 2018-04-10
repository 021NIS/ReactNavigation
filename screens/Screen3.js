import React from 'react';
import { Button, View, Text } from 'react-native';

class Screen3 extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: 'yellow' }}>
        <Text>Screen3</Text>
        <Button
          title="Go to Screen 4"
          onPress={() => this.props.navigation.navigate('Screen4')}
        />
      </View>
    );
  }
}

export default Screen3;
