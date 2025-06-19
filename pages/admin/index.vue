<template>
  <div class="gradient-bg min-h-screen">
    <div class="space-y-8">
      <!-- Header -->
      <div class="text-center">
        <h1 class="text-4xl font-bold text-gradient mb-4">Dashboard Overview</h1>
        <p class="text-gray-600 text-lg">Welcome back! Here's what's happening with your store.</p>
      </div>
      
      <!-- Stats Grid -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div class="stat-card hover-lift">
          <div class="flex items-center justify-between">
            <div>
              <p class="text-sm font-medium text-gray-600">Total Products</p>
              <p class="text-3xl font-bold text-gray-900 mt-2">{{ products.length }}</p>
              <p class="text-sm text-green-600 mt-1">+12% from last month</p>
            </div>
            <div class="p-3 bg-blue-100 rounded-full">
              <CubeIcon class="h-8 w-8 text-blue-600" />
            </div>
          </div>
        </div>
        
        <div class="stat-card hover-lift">
          <div class="flex items-center justify-between">
            <div>
              <p class="text-sm font-medium text-gray-600">Total Orders</p>
              <p class="text-3xl font-bold text-gray-900 mt-2">{{ mockOrders.length }}</p>
              <p class="text-sm text-green-600 mt-1">+8% from last month</p>
            </div>
            <div class="p-3 bg-green-100 rounded-full">
              <ShoppingBagIcon class="h-8 w-8 text-green-600" />
            </div>
          </div>
        </div>
        
        <div class="stat-card hover-lift">
          <div class="flex items-center justify-between">
            <div>
              <p class="text-sm font-medium text-gray-600">Total Users</p>
              <p class="text-3xl font-bold text-gray-900 mt-2">{{ mockUsers.length }}</p>
              <p class="text-sm text-green-600 mt-1">+15% from last month</p>
            </div>
            <div class="p-3 bg-purple-100 rounded-full">
              <UsersIcon class="h-8 w-8 text-purple-600" />
            </div>
          </div>
        </div>
        
        <div class="stat-card hover-lift">
          <div class="flex items-center justify-between">
            <div>
              <p class="text-sm font-medium text-gray-600">Revenue</p>
              <p class="text-3xl font-bold text-gray-900 mt-2">${{ totalRevenue.toFixed(2) }}</p>
              <p class="text-sm text-green-600 mt-1">+23% from last month</p>
            </div>
            <div class="p-3 bg-yellow-100 rounded-full">
              <CurrencyDollarIcon class="h-8 w-8 text-yellow-600" />
            </div>
          </div>
        </div>
      </div>
      
      <!-- Charts Section -->
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <!-- Revenue Chart -->
        <div class="card-elevated p-6">
          <div class="flex items-center justify-between mb-6">
            <h2 class="text-xl font-semibold flex items-center">
              <ChartBarIcon class="h-6 w-6 mr-2 text-blue-600" />
              Revenue Overview
            </h2>
            <select v-model="revenueTimeframe" class="input-field w-auto">
              <option value="7d">Last 7 days</option>
              <option value="30d">Last 30 days</option>
              <option value="90d">Last 90 days</option>
            </select>
          </div>
          <div class="h-80">
            <LineChart :data="revenueChartData" />
          </div>
        </div>
        
        <!-- Category Distribution -->
        <div class="card-elevated p-6">
          <h2 class="text-xl font-semibold mb-6 flex items-center">
            <ChartPieIcon class="h-6 w-6 mr-2 text-green-600" />
            Sales by Category
          </h2>
          <div class="h-80">
            <DoughnutChart :data="categoryChartData" />
          </div>
        </div>
      </div>
      
      <!-- Recent Activity & Quick Actions -->
      <div class="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <!-- Recent Orders -->
        <div class="lg:col-span-2 card-elevated p-6">
          <div class="flex items-center justify-between mb-6">
            <h2 class="text-xl font-semibold flex items-center">
              <ClockIcon class="h-6 w-6 mr-2 text-indigo-600" />
              Recent Orders
            </h2>
            <NuxtLink to="/admin/orders" class="text-blue-600 hover:text-blue-800 text-sm font-medium">
              View All
            </NuxtLink>
          </div>
          <div class="space-y-4">
            <div 
              v-for="order in mockOrders.slice(0, 5)" 
              :key="order.id"
              class="flex items-center justify-between p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors"
            >
              <div class="flex items-center space-x-4">
                <div class="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                  <span class="text-blue-600 font-semibold text-sm">#{{ order.id.slice(-3) }}</span>
                </div>
                <div>
                  <p class="font-medium text-gray-900">{{ order.customer }}</p>
                  <p class="text-sm text-gray-500">{{ formatDate(order.date) }}</p>
                </div>
              </div>
              <div class="text-right">
                <p class="font-semibold text-gray-900">${{ order.total }}</p>
                <span class="badge" :class="getStatusBadgeClass(order.status)">
                  {{ order.status }}
                </span>
              </div>
            </div>
          </div>
        </div>
        
        <!-- Quick Actions -->
        <div class="card-elevated p-6">
          <h2 class="text-xl font-semibold mb-6 flex items-center">
            <BoltIcon class="h-6 w-6 mr-2 text-yellow-600" />
            Quick Actions
          </h2>
          <div class="space-y-4">
            <NuxtLink to="/admin/products/new" class="w-full btn-primary block text-center">
              <PlusIcon class="h-5 w-5 mr-2 inline" />
              Add Product
            </NuxtLink>
            <NuxtLink to="/admin/orders" class="w-full btn-secondary block text-center">
              <EyeIcon class="h-5 w-5 mr-2 inline" />
              View Orders
            </NuxtLink>
            <NuxtLink to="/admin/users" class="w-full btn-secondary block text-center">
              <UsersIcon class="h-5 w-5 mr-2 inline" />
              Manage Users
            </NuxtLink>
            <NuxtLink to="/admin/settings" class="w-full btn-secondary block text-center">
              <CogIcon class="h-5 w-5 mr-2 inline" />
              Settings
            </NuxtLink>
          </div>
          
          <!-- Low Stock Alert -->
          <div class="mt-6 p-4 bg-red-50 border border-red-200 rounded-xl">
            <div class="flex items-center">
              <ExclamationTriangleIcon class="h-5 w-5 text-red-600 mr-2" />
              <span class="text-sm font-medium text-red-800">Low Stock Alert</span>
            </div>
            <p class="text-sm text-red-600 mt-1">{{ lowStockProducts.length }} products need restocking</p>
            <NuxtLink to="/admin/products" class="text-red-600 hover:text-red-800 text-sm font-medium mt-2 inline-block">
              View Products →
            </NuxtLink>
          </div>
        </div>
      </div>
      
      <!-- Performance Metrics -->
      <div class="card-elevated p-6">
        <h2 class="text-xl font-semibold mb-6 flex items-center">
          <PresentationChartLineIcon class="h-6 w-6 mr-2 text-purple-600" />
          Performance Metrics
        </h2>
        <div class="h-64">
          <BarChart :data="performanceChartData" />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { 
  CubeIcon, 
  ShoppingBagIcon, 
  UsersIcon, 
  CurrencyDollarIcon,
  ChartBarIcon,
  ChartPieIcon,
  ClockIcon,
  BoltIcon,
  PlusIcon,
  EyeIcon,
  CogIcon,
  ExclamationTriangleIcon,
  PresentationChartLineIcon
} from '@heroicons/vue/24/outline'
import { format } from 'date-fns'

definePageMeta({
  layout: 'admin'
})

const productsStore = useProductsStore()
const { products } = storeToRefs(productsStore)

const revenueTimeframe = ref('30d')

// Mock data for demonstration
const mockOrders = ref([
  { id: 'ORD-001', customer: 'John Doe', total: 129.99, status: 'completed', date: '2025-01-10' },
  { id: 'ORD-002', customer: 'Jane Smith', total: 89.50, status: 'processing', date: '2025-01-09' },
  { id: 'ORD-003', customer: 'Bob Johnson', total: 199.99, status: 'shipped', date: '2025-01-08' },
  { id: 'ORD-004', customer: 'Alice Brown', total: 59.99, status: 'pending', date: '2025-01-07' },
  { id: 'ORD-005', customer: 'Charlie Wilson', total: 149.99, status: 'completed', date: '2025-01-06' }
])

const mockUsers = ref([
  { id: 1, name: 'John Doe', email: 'john@example.com', role: 'user' },
  { id: 2, name: 'Jane Smith', email: 'jane@example.com', role: 'user' },
  { id: 3, name: 'Admin User', email: 'admin@example.com', role: 'admin' }
])

const totalRevenue = computed(() => 
  mockOrders.value.reduce((sum, order) => sum + order.total, 0)
)

const lowStockProducts = computed(() => 
  products.value.filter(product => product.stock <= 20)
)

// Chart data
const revenueChartData = computed(() => ({
  labels: ['Jan 1', 'Jan 2', 'Jan 3', 'Jan 4', 'Jan 5', 'Jan 6', 'Jan 7'],
  datasets: [
    {
      label: 'Revenue',
      data: [1200, 1900, 3000, 5000, 2000, 3000, 4500],
      borderColor: 'rgb(59, 130, 246)',
      backgroundColor: 'rgba(59, 130, 246, 0.1)',
      fill: true,
      tension: 0.4,
    }
  ]
}))

const categoryChartData = computed(() => ({
  labels: ['Men', 'Women', 'Kids', 'Accessories'],
  datasets: [
    {
      data: [30, 40, 15, 15],
      backgroundColor: [
        'rgba(59, 130, 246, 0.8)',
        'rgba(16, 185, 129, 0.8)',
        'rgba(245, 101, 101, 0.8)',
        'rgba(139, 92, 246, 0.8)',
      ],
      borderWidth: 0,
    }
  ]
}))

const performanceChartData = computed(() => ({
  labels: ['Products', 'Orders', 'Users', 'Revenue (x100)'],
  datasets: [
    {
      label: 'This Month',
      data: [products.value.length, mockOrders.value.length, mockUsers.value.length, totalRevenue.value / 100],
      backgroundColor: 'rgba(59, 130, 246, 0.8)',
    },
    {
      label: 'Last Month',
      data: [products.value.length - 2, mockOrders.value.length - 1, mockUsers.value.length - 1, (totalRevenue.value - 200) / 100],
      backgroundColor: 'rgba(156, 163, 175, 0.8)',
    }
  ]
}))

const formatDate = (dateString) => {
  return format(new Date(dateString), 'MMM dd, yyyy')
}

const getStatusBadgeClass = (status) => {
  const classes = {
    'completed': 'badge-success',
    'processing': 'badge-warning',
    'shipped': 'badge-info',
    'pending': 'badge-error'
  }
  return classes[status] || 'badge-info'
}

useHead({
  title: 'Admin Dashboard - StyleHub',
  meta: [
    { name: 'description', content: 'Admin dashboard for StyleHub e-commerce store.' }
  ]
})
</script>