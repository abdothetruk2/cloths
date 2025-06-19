<template>
  <div class="text-center py-16">
    <div class="max-w-md mx-auto">
      <ExclamationTriangleIcon class="h-20 w-20 text-red-500 mx-auto mb-6" />
      <h1 class="text-4xl font-bold text-gray-900 mb-4">Admin Page Not Found</h1>
      <p class="text-gray-600 mb-8">
        The admin page you're looking for doesn't exist or has been moved.
      </p>
      
      <div class="space-y-4">
        <NuxtLink to="/admin" class="w-full btn-primary block text-center">
          Go to Admin Dashboard
        </NuxtLink>
        
        <div class="grid grid-cols-2 gap-3">
          <NuxtLink to="/admin/products" class="btn-secondary text-center">
            Products
          </NuxtLink>
          <NuxtLink to="/admin/orders" class="btn-secondary text-center">
            Orders
          </NuxtLink>
          <NuxtLink to="/admin/users" class="btn-secondary text-center">
            Users
          </NuxtLink>
          <NuxtLink to="/admin/settings" class="btn-secondary text-center">
            Settings
          </NuxtLink>
        </div>
        
        <button @click="goBack" class="w-full text-gray-600 hover:text-gray-800 transition-colors">
          ← Go Back
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ExclamationTriangleIcon } from '@heroicons/vue/24/outline'

definePageMeta({
  layout: 'admin'
})

const goBack = () => {
  if (process.client && window.history.length > 1) {
    window.history.back()
  } else {
    navigateTo('/admin')
  }
}

useHead({
  title: 'Admin Page Not Found - StyleHub',
  meta: [
    { name: 'description', content: 'The admin page you are looking for does not exist.' }
  ]
})
</script>