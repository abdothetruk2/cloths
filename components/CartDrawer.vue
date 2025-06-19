<template>
  <Teleport to="body">
    <!-- Overlay -->
    <Transition name="fade">
      <div 
        v-if="showCart" 
        class="fixed inset-0 bg-black bg-opacity-50 z-50"
        @click="closeCart"
      ></div>
    </Transition>

    <!-- Cart Drawer -->
    <Transition name="slide">
      <div v-if="showCart" class="fixed right-0 top-0 h-full w-96 bg-white shadow-lg z-50 flex flex-col">
        <!-- Header -->
        <div class="p-4 border-b border-gray-200">
          <div class="flex items-center justify-between">
            <h2 class="text-lg font-semibold">Shopping Cart ({{ cartStore.itemCount }})</h2>
            <button @click="closeCart" class="p-2 hover:bg-gray-100 rounded">
              <XMarkIcon class="h-5 w-5" />
            </button>
          </div>
        </div>

        <!-- Cart Items -->
        <div class="flex-1 overflow-y-auto p-4">
          <div v-if="cartStore.items.length === 0" class="text-center py-8">
            <ShoppingCartIcon class="h-16 w-16 mx-auto text-gray-300 mb-4" />
            <p class="text-gray-500">Your cart is empty</p>
            <NuxtLink to="/products" @click="closeCart" class="btn-primary mt-4 inline-block">
              Start Shopping
            </NuxtLink>
          </div>

          <div v-else class="space-y-4">
            <div 
              v-for="item in cartStore.items" 
              :key="item.cartId"
              class="flex space-x-3 p-3 border border-gray-200 rounded-lg"
            >
              <img 
                :src="item.image" 
                :alt="item.name"
                class="w-16 h-16 object-cover rounded"
              />
              
              <div class="flex-1">
                <h3 class="font-medium text-sm">{{ item.name }}</h3>
                <p class="text-xs text-gray-500">{{ item.size }} • {{ item.color }}</p>
                <p class="font-semibold text-sm">${{ item.price }}</p>
                
                <div class="flex items-center mt-2">
                  <button 
                    @click="updateQuantity(item.cartId, item.quantity - 1)"
                    class="w-6 h-6 rounded border border-gray-300 flex items-center justify-center text-sm hover:bg-gray-50"
                  >
                    -
                  </button>
                  <span class="mx-2 text-sm">{{ item.quantity }}</span>
                  <button 
                    @click="updateQuantity(item.cartId, item.quantity + 1)"
                    class="w-6 h-6 rounded border border-gray-300 flex items-center justify-center text-sm hover:bg-gray-50"
                  >
                    +
                  </button>
                  <button 
                    @click="removeItem(item.cartId)"
                    class="ml-auto text-red-500 hover:text-red-700"
                  >
                    <TrashIcon class="h-4 w-4" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Footer -->
        <div v-if="cartStore.items.length > 0" class="p-4 border-t border-gray-200">
          <div class="flex justify-between items-center mb-4">
            <span class="font-semibold">Total:</span>
            <span class="font-bold text-lg">${{ cartStore.totalPrice.toFixed(2) }}</span>
          </div>
          
          <div class="space-y-2">
            <NuxtLink to="/cart" @click="closeCart" class="w-full btn-secondary block text-center">
              View Cart
            </NuxtLink>
            <NuxtLink to="/checkout" @click="closeCart" class="w-full btn-primary block text-center">
              Checkout
            </NuxtLink>
          </div>
        </div>
      </div>
    </Transition>
  </Teleport>
</template>

<script setup>
import { XMarkIcon, ShoppingCartIcon, TrashIcon } from '@heroicons/vue/24/outline'

const cartStore = useCartStore()
const showCart = inject('showCart')

const closeCart = () => {
  showCart.value = false
}

const updateQuantity = (cartId, quantity) => {
  cartStore.updateQuantity(cartId, quantity)
}

const removeItem = (cartId) => {
  cartStore.removeItem(cartId)
}
</script>