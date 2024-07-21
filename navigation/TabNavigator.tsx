import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import TransactionsStack from './TransactionsStack';
import SummaryScreen from '../screens/SummaryScreen';
import { FontAwesome, Ionicons } from '@expo/vector-icons';

const Tab = createBottomTabNavigator();

const TabNavigator: React.FC = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen 
          name="Transactions" 
          component={TransactionsStack}
          options={{
            tabBarIcon: ({ color, size }) => (
              <FontAwesome name="money" size={size} color={color} />
            ),
          }}
        />
        <Tab.Screen 
          name="Summary" 
          component={SummaryScreen} 
          options={{
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="list" size={size} color={color} />
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default TabNavigator;
