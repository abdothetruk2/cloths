<template>
  <div class="card-elevated overflow-hidden product-card group hover-glow">
    <div class="relative overflow-hidden">
      <img 
        :src="product.image" 
        :alt="product.name"
        class="product-image"
      />
      <div class="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      
      <!-- Quick Actions -->
      <div class="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
        <button 
          @click="addToCart"
          class="bg-white/90 backdrop-blur-sm p-3 rounded-full shadow-lg hover:bg-white hover:scale-110 transition-all duration-200"
        >
          <ShoppingCartIcon class="h-5 w-5 text-gray-700" />
        </button>
      </div>
      
      <!-- Sale Badge -->
      <div v-if="product.onSale" class="absolute top-3 left-3">
        <span class="bg-gradient-to-r from-red-500 to-red-600 text-white px-3 py-1 rounded-full text-xs font-bold shadow-lg pulse-glow">
          SALE
        </span>
      </div>
      
      <!-- Stock Badge -->
      <div v-if="product.stock <= 10" class="absolute bottom-3 left-3">
        <span class="bg-orange-500 text-white px-2 py-1 rounded-full text-xs font-semibold">
          Only {{ product.stock }} left
        </span>
      </div>
    </div>
    
    <div class="p-6">
      <h3 class="font-bold text-lg mb-2 group-hover:text-blue-600 transition-colors line-clamp-2">
        <NuxtLink :to="`/products/${product.id}`">{{ product.name }}</NuxtLink>
      </h3>
      <p class="text-gray-600 text-sm mb-4 line-clamp-2">{{ product.description }}</p>
      
      <div class="flex items-center justify-between mb-4">
        <div class="flex items-center space-x-2">
          <span class="text-xl font-bold text-gray-900">${{ product.price }}</span>
          <span v-if="product.originalPrice" class="text-sm text-gray-500 line-through">
            ${{ product.originalPrice }}
          </span>
        </div>
        
        <div class="flex items-center space-x-1">
          <div class="flex text-yellow-400">
            <StarIcon v-for="i in 5" :key="i" class="h-4 w-4 fill-current" />
          </div>
          <span class="text-sm text-gray-600">(4.8)</span>
        </div>
      </div>
      
      <!-- Colors -->
      <div v-if="product.colors.length > 1" class="flex items-center justify-between">
        <div class="flex space-x-1">
          <div 
            v-for="color in product.colors.slice(0, 4)" 
            :key="color"
            class="w-5 h-5 rounded-full border-2 border-white shadow-sm"
            :class="getColorClass(color)"
            :title="color"
          ></div>
          <span v-if="product.colors.length > 4" class="text-xs text-gray-500 ml-1">
            +{{ product.colors.length - 4 }}
          </span>
        </div>
        
        <button class="text-blue-600 hover:text-blue-800 text-sm font-medium transition-colors">
          Quick View
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ShoppingCartIcon, StarIcon } from '@heroicons/vue/24/outline'

const props = defineProps({
  product: {
    type: Object,
    required: true
  }
})

const cartStore = useCartStore()

const addToCart = () => {
  cartStore.addItem(props.product)
  
  // Show success notification
  const notification = document.createElement('div')
  notification.className = 'fixed top-4 right-4 bg-green-500 text-white px-4 py-2 rounded-lg shadow-lg z-50 bounce-in'
  notification.textContent = 'Added to cart!'
  document.body.appendChild(notification)
  
  setTimeout(() => {
    if (document.body.contains(notification)) {
      document.body.removeChild(notification)
    }
  }, 2000)
}

const getColorClass = (color) => {
  const colorMap = {
    'White': 'bg-white border-gray-300',
    'Black': 'bg-black',
    'Navy': 'bg-blue-900',
    'Blue': 'bg-blue-500',
    'Pink': 'bg-pink-500',
    'Brown': 'bg-amber-700',
    'Tan': 'bg-yellow-600',
    'Gray': 'bg-gray-500',
    'Red': 'bg-red-500',
    'Green': 'bg-green-500',
    'Rainbow': 'bg-gradient-to-r from-red-500 via-yellow-500 to-blue-500'
  }
  return colorMap[color] || 'bg-gray-300'
}
</script>