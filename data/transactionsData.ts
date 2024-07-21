
export type Transaction = {
    id: string;
    name: string;
    amount: number;
    date: string;
    place: string;
  };
  
  export const initialTransactions: Transaction[] = [
    { id: '1', name: 'Grocery', amount: 50, date: '2023-07-14', place: 'London, ON' },
    { id: '2', name: 'Rent', amount: 1000, date: '2023-07-01', place: 'MedicineHat, AB' },
    { id: '3', name: 'Utilities', amount: 200, date: '2023-07-05', place: 'Sarnia, ON' },
    { id: '4', name: 'Subscription', amount: 15, date: '2023-07-10', place: 'Washington, DC' },
    { id: '5', name: 'Dining', amount: 70, date: '2023-07-11', place: 'Delhi, IND' },
  ];