<template>
  <div class="min-h-screen bg-gray-50 flex items-center justify-center px-4 sm:px-6 lg:px-8">
    <div class="max-w-lg w-full text-center">
      <div class="mb-8">
        <MagnifyingGlassIcon class="h-20 w-20 text-gray-400 mx-auto mb-6" />
        <h1 class="text-6xl font-bold text-gray-900 mb-2">404</h1>
        <h2 class="text-2xl font-semibold text-gray-700 mb-4">Page Not Found</h2>
        <p class="text-gray-600 mb-8">
          Sorry, we couldn't find the page you're looking for. It might have been moved, deleted, or you entered the wrong URL.
        </p>
      </div>
      
      <!-- Search Bar -->
      <div class="mb-8">
        <div class="relative max-w-md mx-auto">
          <MagnifyingGlassIcon class="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
          <input
            v-model="searchQuery"
            @keyup.enter="handleSearch"
            type="text"
            placeholder="Search our products..."
            class="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
        </div>
        <button @click="handleSearch" class="mt-3 btn-primary">
          Search Products
        </button>
      </div>
      
      <!-- Quick Links -->
      <div class="space-y-4">
        <div class="grid grid-cols-2 gap-3">
          <NuxtLink to="/products?category=men" class="btn-secondary text-center">
            Men's Fashion
          </NuxtLink>
          <NuxtLink to="/products?category=women" class="btn-secondary text-center">
            Women's Fashion
          </NuxtLink>
          <NuxtLink to="/products?category=kids" class="btn-secondary text-center">
            Kids' Fashion
          </NuxtLink>
          <NuxtLink to="/products?category=accessories" class="btn-secondary text-center">
            Accessories
          </NuxtLink>
        </div>
        
        <NuxtLink to="/" class="w-full btn-primary block text-center">
          Go to Homepage
        </NuxtLink>
        
        <button @click="goBack" class="w-full text-gray-600 hover:text-gray-800 transition-colors">
          ← Go Back
        </button>
      </div>
      
      <!-- Popular Products -->
      <div class="mt-12 text-left">
        <h3 class="text-lg font-semibold text-gray-900 mb-4">Popular Products</h3>
        <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <NuxtLink 
            v-for="product in popularProducts" 
            :key="product.id"
            :to="`/products/${product.id}`"
            class="flex items-center space-x-3 p-3 border border-gray-200 rounded-lg hover:border-gray-300 transition-colors"
          >
            <img :src="product.image" :alt="product.name" class="w-12 h-12 object-cover rounded" />
            <div>
              <p class="font-medium text-sm">{{ product.name }}</p>
              <p class="text-gray-600 text-sm">${{ product.price }}</p>
            </div>
          </NuxtLink>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { MagnifyingGlassIcon } from '@heroicons/vue/24/outline'

const productsStore = useProductsStore()
const { products } = storeToRefs(productsStore)

const searchQuery = ref('')

const popularProducts = computed(() => products.value.slice(0, 4))

const handleSearch = () => {
  if (searchQuery.value.trim()) {
    navigateTo(`/search?q=${encodeURIComponent(searchQuery.value)}`)
  } else {
    navigateTo('/products')
  }
}

const goBack = () => {
  if (process.client && window.history.length > 1) {
    window.history.back()
  } else {
    navigateTo('/')
  }
}

useHead({
  title: '404 - Page Not Found | StyleHub',
  meta: [
    { name: 'description', content: 'The page you are looking for could not be found. Browse our products or search for what you need.' }
  ]
})
</script>