import { StackNavigator } from 'react-navigation';

import Screen1 from '../screens/Screen1';
import Screen2 from '../screens/Screen2';
import Screen3 from '../screens/Screen3';
import Screen4 from '../screens/Screen4';

const stackNavigator = StackNavigator({
    Screen1: {
        screen: Screen1
    },
    Screen2: {
        screen: Screen2
    },
    Screen3: {
        screen: Screen3
    },
    Screen4: {
        screen: Screen4
    }
})

export default stackNavigator;



