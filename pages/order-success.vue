<template>
  <div class="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
    <div class="card p-8">
      <CheckCircleIcon class="h-16 w-16 text-green-500 mx-auto mb-4" />
      <h1 class="text-3xl font-bold text-gray-900 mb-4">Order Confirmed!</h1>
      <p class="text-gray-600 mb-6">
        Thank you for your purchase. Your order has been successfully placed and is being processed.
      </p>
      
      <div class="bg-gray-50 rounded-lg p-4 mb-6">
        <p class="text-sm text-gray-600 mb-2">Order Number</p>
        <p class="text-lg font-semibold">#{{ orderNumber }}</p>
      </div>
      
      <div class="space-y-3">
        <p class="text-sm text-gray-600">
          You will receive an email confirmation shortly with tracking information.
        </p>
        
        <div class="space-x-4">
          <NuxtLink to="/products" class="btn-primary">Continue Shopping</NuxtLink>
          <NuxtLink to="/orders" class="btn-secondary">Track Order</NuxtLink>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { CheckCircleIcon } from '@heroicons/vue/24/outline'

const orderNumber = ref(`ORD-${Date.now()}`)

useHead({
  title: 'Order Confirmed - StyleHub',
  meta: [
    { name: 'description', content: 'Your order has been successfully placed.' }
  ]
})
</script>