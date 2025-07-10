<template>
  <div class="max-w-sm mx-auto mt-20 p-4 bg-white shadow rounded">
    <h2 class="text-2xl font-bold mb-4">Login</h2>
    <form @submit.prevent="handleLogin">
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
      <button class="w-full bg-blue-500 text-white py-2 rounded" type="submit">
        Login
      </button>
    </form>
    <p class="text-sm mt-2">Belum punya akun?
      <router-link to="/register" class="text-blue-500">Daftar</router-link>
    </p>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import axios from 'axios'
import { useRouter } from 'vue-router'
import { useUserStore } from '../store/user'

const email = ref('')
const password = ref('')
const router = useRouter()
const userStore = useUserStore()

const handleLogin = async () => {
  try {
    const res = await axios.get(`http://localhost:3000/users?email=${email.value}`)
    const user = res.data[0]
    if (user && user.password === password.value) {
      userStore.login(user)
      router.push('/dashboard')
    } else {
      alert('Email atau password salah!')
    }
  } catch (err) {
    alert('Terjadi kesalahan saat login.')
  }
}
</script>
