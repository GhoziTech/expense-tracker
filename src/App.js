import React, { useState } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Transaction from './components/Transaction';
import SaldoBox from './components/SaldoBox';
import AddTransaction from './components/AddTransaction';

const initTransactions = [
  {
    id: "619941539079",
    tanggal: new Date("01 Nov 2021 09:30").getTime(),
    keterangan: "Gaji bulanan",
    nominal: 2500000
  },
  {
    id: "749179155708",
    tanggal: new Date("23 Nov 2021 10:00").getTime(),
    keterangan: "Uang lembur",
    nominal: 750000
  },
  {
    id: "568004092688",
    tanggal: new Date("24 Sept 2021 10:30").getTime(),
    keterangan: "Beli sepatu",
    nominal: -150000
  }
];

const App = () => {
  const [transactions, setTransaction] = useState(initTransactions);
  // handler untuk tambah
  const handleTambahTransaction = (data) => {
    let newTransactions = [
      ...transactions, data
    ];
  
    newTransactions.sort((a, b) => a.tanggal - b.tanggal);
  
    setTransaction(newTransactions);
  }
  // handler untuk hapus
  const handleHapusTransaction = (e) => {
    const result=transactions.findIndex(
      transaction => (transaction.id === e.target.id)
    );
    const newTransactions = transactions;
    newTransactions.splice(result, 1);
    setTransaction([...newTransactions]);
  }
  return (
    <React.Fragment>
      <Header />
      <SaldoBox transactions={transactions} />
      <Transaction transactions={transactions}
      onHapusTransaction={handleHapusTransaction} />
      <AddTransaction onTambahTransaction={handleTambahTransaction} />
      <Footer />
    </React.Fragment>
  );
};

export default App;