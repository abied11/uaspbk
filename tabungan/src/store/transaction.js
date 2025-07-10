
import { defineStore } from 'pinia'
import axios from 'axios'

export const useTransactionStore = defineStore('transaction', {
  state: () => ({
    transactions: []
  }),
  getters: {
    totalPemasukan: (state) =>
      state.transactions
        .filter(t => t.type === 'debit')
        .reduce((sum, t) => sum + t.amount, 100000),

    totalPengeluaran: (state) =>
      state.transactions
        .filter(t => t.type === 'kredit')
        .reduce((sum, t) => sum + t.amount, 10000),

    saldo() {
      return this.totalPemasukan - this.totalPengeluaran
    }
  },
  actions: {
    async fetchTransactions() {
      try {
        const res = await axios.get('http://localhost:3000/transactions')
        this.transactions = res.data
      } catch (error) {
        console.error('Gagal fetch transaksi:', error)
      }
    }
  }
})
