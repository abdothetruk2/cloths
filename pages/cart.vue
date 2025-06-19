<template>
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
    <h1 class="text-3xl font-bold mb-8">Shopping Cart</h1>

    <div v-if="cartStore.items.length === 0" class="text-center py-12">
      <ShoppingCartIcon class="h-24 w-24 mx-auto text-gray-300 mb-4" />
      <h2 class="text-xl font-semibold text-gray-600 mb-4">Your cart is empty</h2>
      <NuxtLink to="/products" class="btn-primary">Continue Shopping</NuxtLink>
    </div>

    <div v-else class="grid grid-cols-1 lg:grid-cols-3 gap-8">
      <!-- Cart Items -->
      <div class="lg:col-span-2">
        <div class="space-y-4">
          <div 
            v-for="item in cartStore.items" 
            :key="item.cartId"
            class="card p-6"
          >
            <div class="flex space-x-4">
              <img 
                :src="item.image" 
                :alt="item.name"
                class="w-24 h-24 object-cover rounded-lg"
              />
              
              <div class="flex-1">
                <div class="flex justify-between">
                  <div>
                    <h3 class="font-semibold text-lg">{{ item.name }}</h3>
                    <p class="text-gray-600">{{ item.size }} • {{ item.color }}</p>
                    <p class="font-semibold text-lg mt-2">${{ item.price }}</p>
                  </div>
                  
                  <button 
                    @click="removeItem(item.cartId)"
                    class="text-red-500 hover:text-red-700"
                  >
                    <TrashIcon class="h-5 w-5" />
                  </button>
                </div>
                
                <div class="flex items-center mt-4 space-x-3">
                  <button 
                    @click="updateQuantity(item.cartId, item.quantity - 1)"
                    class="w-8 h-8 rounded border border-gray-300 flex items-center justify-center hover:bg-gray-50"
                  >
                    -
                  </button>
                  <span class="text-lg font-medium">{{ item.quantity }}</span>
                  <button 
                    @click="updateQuantity(item.cartId, item.quantity + 1)"
                    class="w-8 h-8 rounded border border-gray-300 flex items-center justify-center hover:bg-gray-50"
                  >
                    +
                  </button>
                  <span class="ml-4 font-semibold">
                    Subtotal: ${{ (item.price * item.quantity).toFixed(2) }}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Order Summary -->
      <div class="lg:col-span-1">
        <div class="card p-6 sticky top-4">
          <h2 class="text-xl font-semibold mb-4">Order Summary</h2>
          
          <div class="space-y-3 mb-4">
            <div class="flex justify-between">
              <span>Subtotal ({{ cartStore.itemCount }} items)</span>
              <span>${{ cartStore.totalPrice.toFixed(2) }}</span>
            </div>
            <div class="flex justify-between">
              <span>Shipping</span>
              <span>{{ cartStore.totalPrice >= 50 ? 'FREE' : '$9.99' }}</span>
            </div>
            <div class="flex justify-between">
              <span>Tax</span>
              <span>${{ (cartStore.totalPrice * 0.08).toFixed(2) }}</span>
            </div>
            <div class="border-t pt-3 flex justify-between font-semibold text-lg">
              <span>Total</span>
              <span>${{ finalTotal.toFixed(2) }}</span>
            </div>
          </div>
          
          <NuxtLink to="/checkout" class="w-full btn-primary block text-center">
            Proceed to Checkout
          </NuxtLink>
          
          <NuxtLink to="/products" class="w-full btn-secondary block text-center mt-2">
            Continue Shopping
          </NuxtLink>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ShoppingCartIcon, TrashIcon } from '@heroicons/vue/24/outline'

const cartStore = useCartStore()

const finalTotal = computed(() => {
  const subtotal = cartStore.totalPrice
  const shipping = subtotal >= 50 ? 0 : 9.99
  const tax = subtotal * 0.08
  return subtotal + shipping + tax
})

const updateQuantity = (cartId, quantity) => {
  cartStore.updateQuantity(cartId, quantity)
}

const removeItem = (cartId) => {
  cartStore.removeItem(cartId)
}

useHead({
  title: 'Shopping Cart - StyleHub',
  meta: [
    { name: 'description', content: 'Review your cart and proceed to checkout.' }
  ]
})
</script>