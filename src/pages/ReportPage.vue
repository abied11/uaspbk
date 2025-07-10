<template>
  <div class="p-6">
    <h2 class="text-2xl font-bold mb-6">📊 Laporan Keuangan</h2>

    <div class="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
      <div class="bg-green-100 border-l-4 border-green-500 p-4 rounded">
        <h3 class="font-semibold text-green-800">Total Pemasukan</h3>
        <p class="text-2xl font-bold text-green-600">Rp {{ pemasukan.toLocaleString() }}</p>
      </div>

      <div class="bg-red-100 border-l-4 border-red-500 p-4 rounded">
        <h3 class="font-semibold text-red-800">Total Pengeluaran</h3>
        <p class="text-2xl font-bold text-red-600">Rp {{ pengeluaran.toLocaleString() }}</p>
      </div>

      <div class="bg-blue-100 border-l-4 border-blue-500 p-4 rounded">
        <h3 class="font-semibold text-blue-800">Saldo Akhir</h3>
        <p class="text-2xl font-bold text-blue-600">Rp {{ saldo.toLocaleString() }}</p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed, onMounted } from 'vue'
import { useTransactionStore } from '../store/transaction'

const store = useTransactionStore()

onMounted(() => {
  store.fetchTransactions()
})

const pemasukan = computed(() => store.totalPemasukan)
const pengeluaran = computed(() => store.totalPengeluaran)
const saldo = computed(() => store.saldo)
</script>
