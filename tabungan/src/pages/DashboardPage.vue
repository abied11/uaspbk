<template>
  <div class="p-6">
    <h1 class="text-3xl font-bold mb-8 text-gray-800"> Dashboard Keuangan</h1>

    <div class="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      <!-- Card Pemasukan -->
      <div class="bg-white border-l-4 border-green-500 p-6 rounded-lg shadow hover:shadow-md transition">
        <div class="text-green-700 font-semibold">Total Pemasukan</div>
        <div class="text-3xl font-bold text-green-800 mt-2">Rp {{ pemasukan.toLocaleString() }}</div>
        <p class="text-sm text-gray-500 mt-1">Uang masuk dari semua sumber</p>
      </div>

      <!-- Card Pengeluaran -->
      <div class="bg-white border-l-4 border-red-500 p-6 rounded-lg shadow hover:shadow-md transition">
        <div class="text-red-700 font-semibold">Total Pengeluaran</div>
        <div class="text-3xl font-bold text-red-800 mt-2">Rp {{ pengeluaran.toLocaleString() }}</div>
        <p class="text-sm text-gray-500 mt-1">Biaya-biaya yang sudah dikeluarkan</p>
      </div>

      <!-- Card Saldo -->
      <div class="bg-white border-l-4 border-blue-500 p-6 rounded-lg shadow hover:shadow-md transition">
        <div class="text-blue-700 font-semibold">Saldo Akhir</div>
        <div class="text-3xl font-bold text-blue-800 mt-2">Rp {{ saldo.toLocaleString() }}</div>
        <p class="text-sm text-gray-500 mt-1">Total uang yang masih tersedia</p>
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
