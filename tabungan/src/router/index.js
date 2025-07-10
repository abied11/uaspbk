import { createRouter, createWebHistory } from 'vue-router'
import LoginPage from '../pages/LoginPage.vue'
import RegisterPage from '../pages/RegisterPage.vue'
import DashboardPage from '../pages/DashboardPage.vue'
import TransactionListPage from '../pages/TransactionListPage.vue'
import TransactionFormPage from '../pages/TransactionFormPage.vue'
import ReportPage from '../pages/ReportPage.vue'

const routes = [
  { path: '/', redirect: '/login' },
  { path: '/login', component: LoginPage },
  { path: '/register', component: RegisterPage },
  { path: '/dashboard', component: DashboardPage },
  { path: '/transaksi', component: TransactionListPage },
  { path: '/transaksi/tambah', component: TransactionFormPage },
  { path: '/transaksi/edit/:id', component: TransactionFormPage },
  { path: '/laporan', component: ReportPage }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
