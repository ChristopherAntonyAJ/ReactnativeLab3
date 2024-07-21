import React, { useState } from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import { Transaction, initialTransactions } from '../data/transactionsData'; 

const totalBalance = 2500;

const SummaryScreen: React.FC = () => {
  const [transactions] = useState<Transaction[]>(initialTransactions);
  const totalSpent = transactions.reduce((sum, transaction) => sum + transaction.amount, 0);
  const remainingBalance = totalBalance - totalSpent;

  const getSpendingStatus = (amount: number) => {
    if (amount <= 50) return 'Low';
    if (amount <= 250) return 'Normal';
    return 'High';
  };

  const renderItem = ({ item }: { item: Transaction }) => (
    <View style={styles.item}>
      <Text style={styles.name}>{item.name}</Text>
      <Text
        style={[
          styles.amount,
          getSpendingStatus(item.amount) === 'Low' && styles.low,
          getSpendingStatus(item.amount) === 'Normal' && styles.normal,
          getSpendingStatus(item.amount) === 'High' && styles.high,
        ]}
      >
        {item.amount} CAD
      </Text>
      <Text style={styles.status}>Spending: {getSpendingStatus(item.amount)}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Summary</Text>
      <Text style={styles.balance}>Total Balance: {remainingBalance} CAD</Text>
      <Text style={styles.transactionsCount}>Number of Transactions: {transactions.length}</Text>
      <FlatList
        data={transactions}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#f0f0f0',
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
    textAlign: 'center',
  },
  balance: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 12,
    textAlign: 'center',
    color: '#328966'
  },
  transactionsCount: {
    fontSize: 16,
    marginBottom: 12,
    textAlign: 'center',
  },
  item: {
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
  name: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  amount: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  status: {
    fontSize: 16,
    marginTop: 8,
  },
  low: {
    color: 'green',
  },
  normal: {
    color: 'orange',
  },
  high: {
    color: 'red',
  },
});

export default SummaryScreen;
