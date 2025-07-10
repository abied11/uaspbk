<template>
  <div class="max-w-md mx-auto mt-6 p-4 bg-white shadow rounded">
    <h2 class="text-xl font-bold mb-4">{{ isEdit ? 'Edit' : 'Tambah' }} Transaksi</h2>
    <form @submit.prevent="handleSubmit">
      <input
        v-model="form.keterangan"
        type="text"
        placeholder="Keterangan"
        class="w-full mb-2 p-2 border rounded"
        required
      />
      <input
        v-model.number="form.jumlah"
        type="number"
        placeholder="Jumlah"
        class="w-full mb-2 p-2 border rounded"
        required
      />
      <select v-model="form.tipe" class="w-full mb-4 p-2 border rounded" required>
        <option value="">Pilih Tipe</option>
        <option value="pemasukan">Pemasukan</option>
        <option value="pengeluaran">Pengeluaran</option>
      </select>
      <button class="bg-green-500 text-white w-full py-2 rounded" type="submit">
        {{ isEdit ? 'Update' : 'Simpan' }}
      </button>
    </form>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import axios from 'axios'
import { useTransactionStore } from '../store/transaction'

const form = ref({ keterangan: '', jumlah: 0, tipe: '' })
const route = useRoute()
const router = useRouter()
const store = useTransactionStore()

const isEdit = route.params.id !== undefined

onMounted(async () => {
  if (isEdit) {
    const res = await axios.get(`http://localhost:3000/transactions/${route.params.id}`)
    form.value = res.data
  }
})

const handleSubmit = async () => {
  if (isEdit) {
    await axios.put(`http://localhost:3000/transactions/${route.params.id}`, form.value)
  } else {
    await axios.post('http://localhost:3000/transactions', form.value)
  }
  router.push('/transaksi')
}
</script>
