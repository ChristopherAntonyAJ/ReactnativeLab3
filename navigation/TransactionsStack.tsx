import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import TransactionsListScreen from '../screens/TransactionsListScreen';
import TransactionDetailScreen from '../screens/TransactionDetailScreen';

export type TransactionStackParamList = {
  TransactionsList: undefined; 
  TransactionDetail: { transaction: { id: string; name: string; amount: number; date: string; place: string } };
};

const Stack = createNativeStackNavigator<TransactionStackParamList>();

const TransactionsStack: React.FC = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="TransactionsList" component={TransactionsListScreen} />
      <Stack.Screen name="TransactionDetail" component={TransactionDetailScreen} />
    </Stack.Navigator>
  );
};

export default TransactionsStack;
