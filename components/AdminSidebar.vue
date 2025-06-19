<template>
  <div class="fixed inset-y-0 left-0 w-64 bg-gradient-to-b from-gray-900 to-gray-800 text-white shadow-2xl">
    <div class="flex items-center justify-center h-16 bg-gray-900/50 backdrop-blur-sm border-b border-gray-700">
      <h1 class="text-xl font-bold text-gradient">Admin Dashboard</h1>
    </div>
    
    <nav class="mt-8">
      <div class="px-4 space-y-2">
        <NuxtLink 
          to="/admin"
          class="sidebar-link"
          :class="{ 'bg-gray-700 text-white': $route.path === '/admin' }"
        >
          <HomeIcon class="mr-3 h-5 w-5" />
          Dashboard
        </NuxtLink>
        
        <NuxtLink 
          to="/admin/products"
          class="sidebar-link"
          :class="{ 'bg-gray-700 text-white': $route.path.startsWith('/admin/products') }"
        >
          <CubeIcon class="mr-3 h-5 w-5" />
          Products
          <span class="ml-auto bg-blue-500 text-white text-xs px-2 py-1 rounded-full">
            {{ productCount }}
          </span>
        </NuxtLink>
        
        <NuxtLink 
          to="/admin/orders"
          class="sidebar-link"
          :class="{ 'bg-gray-700 text-white': $route.path.startsWith('/admin/orders') }"
        >
          <ShoppingBagIcon class="mr-3 h-5 w-5" />
          Orders
          <span class="ml-auto bg-green-500 text-white text-xs px-2 py-1 rounded-full">
            {{ orderCount }}
          </span>
        </NuxtLink>
        
        <NuxtLink 
          to="/admin/users"
          class="sidebar-link"
          :class="{ 'bg-gray-700 text-white': $route.path.startsWith('/admin/users') }"
        >
          <UsersIcon class="mr-3 h-5 w-5" />
          Users
        </NuxtLink>
        
        <NuxtLink 
          to="/admin/settings"
          class="sidebar-link"
          :class="{ 'bg-gray-700 text-white': $route.path.startsWith('/admin/settings') }"
        >
          <CogIcon class="mr-3 h-5 w-5" />
          Settings
        </NuxtLink>
        
        <div class="border-t border-gray-700 pt-4 mt-4">
          <NuxtLink 
            to="/"
            class="sidebar-link text-gray-300 hover:text-white"
          >
            <ArrowLeftIcon class="mr-3 h-5 w-5" />
            Back to Store
          </NuxtLink>
        </div>
      </div>
    </nav>
    
    <!-- User Info -->
    <div class="absolute bottom-0 left-0 right-0 p-4 bg-gray-900/50 backdrop-blur-sm border-t border-gray-700">
      <div class="flex items-center space-x-3">
        <div class="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
          <span class="text-white font-semibold">A</span>
        </div>
        <div>
          <p class="text-sm font-medium">Admin User</p>
          <p class="text-xs text-gray-400">admin@stylehub.com</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { 
  HomeIcon, 
  CubeIcon, 
  ShoppingBagIcon, 
  UsersIcon,
  CogIcon,
  ArrowLeftIcon 
} from '@heroicons/vue/24/outline'

const productsStore = useProductsStore()
const { products } = storeToRefs(productsStore)

const productCount = computed(() => products.value.length)
const orderCount = computed(() => 12) // Mock order count
</script>