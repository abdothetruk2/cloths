<template>
  <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
    <h1 class="text-3xl font-bold mb-8">My Orders</h1>
    
    <div v-if="orders.length === 0" class="text-center py-12">
      <ShoppingBagIcon class="h-16 w-16 text-gray-300 mx-auto mb-4" />
      <h2 class="text-xl font-semibold text-gray-600 mb-4">No orders yet</h2>
      <p class="text-gray-500 mb-6">When you place your first order, it will appear here.</p>
      <NuxtLink to="/products" class="btn-primary">Start Shopping</NuxtLink>
    </div>
    
    <div v-else class="space-y-6">
      <div v-for="order in orders" :key="order.id" class="card p-6">
        <div class="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-4">
          <div>
            <h3 class="text-lg font-semibold">Order #{{ order.id }}</h3>
            <p class="text-gray-600">Placed on {{ order.date }}</p>
          </div>
          <div class="mt-2 lg:mt-0 flex items-center space-x-4">
            <span 
              class="px-3 py-1 text-sm font-semibold rounded-full"
              :class="getStatusClass(order.status)"
            >
              {{ order.status }}
            </span>
            <span class="font-semibold">${{ order.total }}</span>
          </div>
        </div>
        
        <div class="border-t pt-4">
          <div class="space-y-3">
            <div v-for="item in order.items" :key="item.id" class="flex items-center space-x-4">
              <img :src="item.image" :alt="item.name" class="w-16 h-16 object-cover rounded" />
              <div class="flex-1">
                <h4 class="font-medium">{{ item.name }}</h4>
                <p class="text-sm text-gray-600">Quantity: {{ item.quantity }}</p>
              </div>
              <span class="font-semibold">${{ item.price }}</span>
            </div>
          </div>
        </div>
        
        <div class="border-t pt-4 mt-4 flex justify-between items-center">
          <div class="flex space-x-4">
            <button v-if="order.status === 'shipped'" class="text-blue-600 hover:text-blue-800">
              Track Package
            </button>
            <button v-if="order.status === 'completed'" class="text-blue-600 hover:text-blue-800">
              Reorder
            </button>
          </div>
          <button class="text-gray-600 hover:text-gray-800">
            View Details
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ShoppingBagIcon } from '@heroicons/vue/24/outline'

definePageMeta({
  middleware: 'auth'
})

// Mock orders data
const orders = ref([
  {
    id: 'ORD-001',
    date: '2025-01-10',
    status: 'completed',
    total: 129.99,
    items: [
      {
        id: 1,
        name: 'Classic Cotton T-Shirt',
        quantity: 2,
        price: 29.99,
        image: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=200'
      },
      {
        id: 2,
        name: 'Denim Jacket',
        quantity: 1,
        price: 89.99,
        image: 'https://images.pexels.com/photos/1082529/pexels-photo-1082529.jpeg?auto=compress&cs=tinysrgb&w=200'
      }
    ]
  },
  {
    id: 'ORD-002',
    date: '2025-01-05',
    status: 'shipped',
    total: 79.99,
    items: [
      {
        id: 3,
        name: 'Elegant Summer Dress',
        quantity: 1,
        price: 79.99,
        image: 'https://images.pexels.com/photos/1536619/pexels-photo-1536619.jpeg?auto=compress&cs=tinysrgb&w=200'
      }
    ]
  }
])

const getStatusClass = (status) => {
  const classes = {
    'completed': 'bg-green-100 text-green-800',
    'processing': 'bg-yellow-100 text-yellow-800',
    'shipped': 'bg-blue-100 text-blue-800',
    'pending': 'bg-gray-100 text-gray-800'
  }
  return classes[status] || 'bg-gray-100 text-gray-800'
}

useHead({
  title: 'My Orders - StyleHub',
  meta: [
    { name: 'description', content: 'View and track your orders.' }
  ]
})
</script>