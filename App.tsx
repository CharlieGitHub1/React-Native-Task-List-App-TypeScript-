import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import TaskListScreen from './src/screens/TaskListScreen';

const Stack = createNativeStackNavigator();

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
