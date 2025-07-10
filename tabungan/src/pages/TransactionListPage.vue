<template>
  <div class="p-4">
    <h2 class="text-xl font-bold mb-4">Daftar Transaksi</h2>
    <router-link to="/transaksi/tambah" class="bg-blue-500 text-white px-4 py-2 rounded mb-4 inline-block">
      + Tambah Transaksi
    </router-link>

    <div v-if="store.transactions.length === 0">
      <p>Belum ada transaksi.</p>
    </div>

    <ul v-else class="space-y-2">
      <li v-for="tx in store.transactions" :key="tx.id" class="p-3 bg-gray-100 rounded flex justify-between items-center">
        <div>
          <p class="font-semibold">{{ tx.keterangan }}</p>
          <p class="text-sm text-gray-600">{{ tx.tipe }} - Rp {{ Number(tx.jumlah).toLocaleString() }}</p>
        </div>
        <div class="flex gap-2">
          <router-link :to="`/transaksi/edit/${tx.id}`" class="text-blue-500">Edit</router-link>
          <button @click="hapus(tx.id)" class="text-red-500">Hapus</button>
        </div>
      </li>
    </ul>
  </div>
</template>

<script setup>
import { onMounted } from 'vue'
import { useTransactionStore } from '../store/transaction'

const store = useTransactionStore()

onMounted(() => {
  store.fetchTransactions()
})

const hapus = async (id) => {
  if (confirm('Yakin ingin menghapus?')) {
    await store.deleteTransaction(id)
    await store.fetchTransactions()
  }
}
</script>
