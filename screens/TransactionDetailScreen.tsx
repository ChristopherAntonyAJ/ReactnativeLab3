import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { RouteProp } from '@react-navigation/native';
import { TransactionStackParamList } from '../navigation/TransactionsStack';

type TransactionDetailScreenRouteProp = RouteProp<TransactionStackParamList, 'TransactionDetail'>;

type Props = {
  route: TransactionDetailScreenRouteProp;
};

const TransactionDetailScreen: React.FC<Props> = ({ route }) => {
  const { transaction } = route.params;

  if (!transaction) {
    return (
      <View style={styles.container}>
        <Text style={styles.errorText}>Transaction not found</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <Text style={styles.title}>{transaction.name}</Text>
        <View style={styles.detailRow}>
          <Text style={styles.label}>Amount:</Text>
          <Text style={styles.amount}>${transaction.amount.toFixed(2)} CAD</Text>
        </View>
        <View style={styles.detailRow}>
          <Text style={styles.label}>Date:</Text>
          <Text style={styles.value}>{transaction.date}</Text>
        </View>
        <View style={styles.detailRow}>
          <Text style={styles.label}>Place:</Text>
          <Text style={styles.value}>{transaction.place}</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f0f0f0',
    padding: 16,
  },
  card: {
    backgroundColor: '#ffffff',
    borderRadius: 8,
    padding: 16,
    width: '100%',
    shadowColor: '#ff0000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 12,
    color: '#333',
    textAlign: 'center',
  },
  detailRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 8,
  },
  label: {
    fontSize: 16,
    color: '#666',
    fontWeight: 'bold',
  },
  amount: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#ff0000',
  },
  value: {
    fontSize: 18,
    color: '#333',
  },
  errorText: {
    fontSize: 18,
    color: 'red',
  },
});

export default TransactionDetailScreen;
