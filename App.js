import React, {useState}          from 'react';
import { StyleSheet, 
         Text, 
         View, 
         Dimensions }             from 'react-native';
import LockScreenPincode          from './view/LockScreenPincode';
import Game                       from './view/Game';
import Cube                       from './view/Cube';
import Flip                       from './view/Flip';
import Register                   from './view/Register';
import Home                       from './view/Home';
import Search                     from './view/Search';  
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import 'react-native-gesture-handler'


const { width, height } = Dimensions.get('window');
const Stack = createNativeStackNavigator();

export default function App() {
  const [hasPincode, setHasPincode] = useState(true)

  const logout = () => {
    setHasPincode(true)
  }
  return (
    <View style={styles.container}>
       <NavigationContainer>
         <Stack.Navigator 
            screenOptions={{ headerShown: false }}>
            <Stack.Screen name="LockScreen" component={LockScreenPincode} />
           <Stack.Screen name="Home" component={Home} />
           <Stack.Screen name="Register" component={Register} />
            <Stack.Screen name="Game" component={Game} />
           <Stack.Screen name="Search" component={Search} />
         </Stack.Navigator>
         </NavigationContainer>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#000',
    justifyContent: 'center',
    width: width,
    height: height,
  },
  screen: {
    width: width,
    height: height,
    zIndex: 100
    
  }
});