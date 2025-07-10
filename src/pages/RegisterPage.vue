<template>
  <div class="max-w-sm mx-auto mt-20 p-4 bg-white shadow rounded">
    <h2 class="text-2xl font-bold mb-4">Daftar</h2>
    <form @submit.prevent="handleRegister">
      <input
        v-model="email"
        type="email"
        placeholder="Email"
        class="w-full mb-2 p-2 border rounded"
        required
      />
      <input
        v-model="password"
        type="password"
        placeholder="Password"
        class="w-full mb-2 p-2 border rounded"
        required
      />
      <input
        v-model="name"
        type="text"
        placeholder="Nama Lengkap"
        class="w-full mb-2 p-2 border rounded"
        required
      />
      <button class="w-full bg-green-500 text-white py-2 rounded" type="submit">
        Daftar
      </button>
    </form>
    <p class="text-sm mt-2">Sudah punya akun?
      <router-link to="/login" class="text-blue-500">Login</router-link>
    </p>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import axios from 'axios'
import { useRouter } from 'vue-router'

const name = ref('')
const email = ref('')
const password = ref('')
const router = useRouter()

const handleRegister = async () => {
  try {
    const res = await axios.post('http://localhost:3000/users', {
      name: name.value,
      email: email.value,
      password: password.value
    })
    alert('Berhasil daftar! Silakan login.')
    router.push('/login')
  } catch (err) {
    alert('Gagal daftar.')
  }
}
</script>
