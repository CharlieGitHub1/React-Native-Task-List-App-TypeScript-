import React from 'react';
import { StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import TaskListScreen from './src/screens/TaskListScreen';

const Stack = createNativeStackNavigator();

Stack.Navigator.defaultProps = {
  screenOptions: {
    headerStyle: {
      backgroundColor: ' rgb(58, 58, 203)',
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
      fontSize: 18,
      fontWeight: 'bold',
    },
  },

  initialRouteName: 'Task Wise: Empower Your Workflow',
};
const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Task Wise: Empower Your Workflow"
          component={TaskListScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
