import React, { useState } from 'react';
import { View, Text, TouchableOpacity, FlatList, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { TransactionStackParamList } from '../navigation/TransactionsStack';
import { Transaction, initialTransactions } from '../data/transactionsData';

type TransactionsListScreenNavigationProp = NativeStackNavigationProp<
  TransactionStackParamList,
  'TransactionsList'
>;

const TransactionsListScreen: React.FC = () => {
  const [transactions, setTransactions] = useState<Transaction[]>(initialTransactions);
  const navigation = useNavigation<TransactionsListScreenNavigationProp>();

  const renderItem = ({ item }: { item: Transaction }) => (
    <TouchableOpacity
      style={styles.item}
      onPress={() => navigation.navigate('TransactionDetail', { transaction: item })}
    >
      <View style={styles.card}>
        <Text style={styles.title}>{item.name}</Text>
        <Text style={styles.amount}>${item.amount.toFixed(2)}</Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <FlatList
      data={transactions}
      renderItem={renderItem}
      keyExtractor={item => item.id}
    />
  );
};

const styles = StyleSheet.create({
  item: {
    paddingVertical: 8,
    paddingHorizontal: 16,
  },
  card: {
    backgroundColor: '#ffffff',
    borderRadius: 8,
    padding: 16,
    marginBottom: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  amount: {
    fontSize: 22,
    marginBottom: 4,
    color: '#328966',
    fontWeight: 'bold'
  },
});

export default TransactionsListScreen;
