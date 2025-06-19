<template>
  <nav class="bg-white shadow-lg sticky top-0 z-40">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex justify-between items-center h-16">
        <!-- Logo -->
        <NuxtLink to="/" class="flex items-center space-x-2">
          <span class="text-2xl font-bold text-gray-800">StyleHub</span>
        </NuxtLink>

        <!-- Desktop Navigation -->
        <div class="hidden md:flex items-center space-x-8">
          <NuxtLink 
            to="/products"
            class="nav-link"
            :class="{ 'text-blue-600': $route.path === '/products' }"
          >
            All Products
          </NuxtLink>
          <NuxtLink 
            to="/products?category=men"
            class="nav-link"
            :class="{ 'text-blue-600': $route.query.category === 'men' }"
          >
            Men
          </NuxtLink>
          <NuxtLink 
            to="/products?category=women"
            class="nav-link"
            :class="{ 'text-blue-600': $route.query.category === 'women' }"
          >
            Women
          </NuxtLink>
          <NuxtLink 
            to="/products?category=kids"
            class="nav-link"
            :class="{ 'text-blue-600': $route.query.category === 'kids' }"
          >
            Kids
          </NuxtLink>
          <NuxtLink 
            to="/products?category=accessories"
            class="nav-link"
            :class="{ 'text-blue-600': $route.query.category === 'accessories' }"
          >
            Accessories
          </NuxtLink>
        </div>

        <!-- Search Bar -->
        <div class="hidden md:block flex-1 max-w-md mx-8">
          <div class="relative">
            <MagnifyingGlassIcon class="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
            <input
              v-model="searchQuery"
              @keyup.enter="handleSearch"
              type="text"
              placeholder="Search products..."
              class="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>
        </div>

        <!-- Actions -->
        <div class="flex items-center space-x-4">
          <!-- Cart Button -->
          <button @click="toggleCart" class="relative p-2 text-gray-600 hover:text-gray-900 transition-colors">
            <ShoppingCartIcon class="h-6 w-6" />
            <span 
              v-if="cartStore.itemCount > 0"
              class="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center"
            >
              {{ cartStore.itemCount }}
            </span>
          </button>

          <!-- User Menu -->
          <div ref="userMenuRef" class="relative" v-if="authStore.isLoggedIn">
            <button @click="showUserMenu = !showUserMenu" class="flex items-center space-x-2 text-gray-600 hover:text-gray-900 transition-colors">
              <UserIcon class="h-6 w-6" />
              <span class="hidden sm:block">{{ authStore.user.name }}</span>
              <ChevronDownIcon class="h-4 w-4" />
            </button>
            
            <Transition name="fade">
              <div v-if="showUserMenu" class="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-50 border border-gray-200">
                <NuxtLink to="/profile" @click="showUserMenu = false" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 transition-colors">
                  Profile
                </NuxtLink>
                <NuxtLink to="/orders" @click="showUserMenu = false" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 transition-colors">
                  My Orders
                </NuxtLink>
                <NuxtLink v-if="authStore.isAdmin" to="/admin" @click="showUserMenu = false" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 transition-colors">
                  Admin Dashboard
                </NuxtLink>
                <hr class="my-1">
                <button @click="logout" class="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 transition-colors">
                  Sign Out
                </button>
              </div>
            </Transition>
          </div>

          <!-- Login Button -->
          <NuxtLink v-else to="/login" class="btn-primary">
            Sign In
          </NuxtLink>

          <!-- Mobile Menu Button -->
          <button @click="showMobileMenu = !showMobileMenu" class="md:hidden p-2 text-gray-600 hover:text-gray-900 transition-colors">
            <Bars3Icon class="h-6 w-6" />
          </button>
        </div>
      </div>

      <!-- Mobile Menu -->
      <Transition name="slide">
        <div v-if="showMobileMenu" class="md:hidden py-4 border-t bg-white">
          <div class="flex flex-col space-y-2 px-4">
            <!-- Mobile Search -->
            <div class="mb-4">
              <div class="relative">
                <MagnifyingGlassIcon class="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                <input
                  v-model="searchQuery"
                  @keyup.enter="handleSearch"
                  type="text"
                  placeholder="Search products..."
                  class="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
            </div>
            
            <!-- Mobile Navigation Links -->
            <NuxtLink 
              to="/products"
              class="text-gray-600 hover:text-gray-900 font-medium py-2 transition-colors"
              @click="showMobileMenu = false"
            >
              All Products
            </NuxtLink>
            <NuxtLink 
              to="/products?category=men"
              class="text-gray-600 hover:text-gray-900 font-medium py-2 transition-colors"
              @click="showMobileMenu = false"
            >
              Men
            </NuxtLink>
            <NuxtLink 
              to="/products?category=women"
              class="text-gray-600 hover:text-gray-900 font-medium py-2 transition-colors"
              @click="showMobileMenu = false"
            >
              Women
            </NuxtLink>
            <NuxtLink 
              to="/products?category=kids"
              class="text-gray-600 hover:text-gray-900 font-medium py-2 transition-colors"
              @click="showMobileMenu = false"
            >
              Kids
            </NuxtLink>
            <NuxtLink 
              to="/products?category=accessories"
              class="text-gray-600 hover:text-gray-900 font-medium py-2 transition-colors"
              @click="showMobileMenu = false"
            >
              Accessories
            </NuxtLink>
            
            <!-- Mobile User Links -->
            <div v-if="authStore.isLoggedIn" class="border-t pt-4 mt-4">
              <NuxtLink 
                to="/profile"
                class="text-gray-600 hover:text-gray-900 font-medium py-2 transition-colors block"
                @click="showMobileMenu = false"
              >
                Profile
              </NuxtLink>
              <NuxtLink 
                to="/orders"
                class="text-gray-600 hover:text-gray-900 font-medium py-2 transition-colors block"
                @click="showMobileMenu = false"
              >
                My Orders
              </NuxtLink>
              <NuxtLink 
                v-if="authStore.isAdmin"
                to="/admin"
                class="text-gray-600 hover:text-gray-900 font-medium py-2 transition-colors block"
                @click="showMobileMenu = false"
              >
                Admin Dashboard
              </NuxtLink>
              <button 
                @click="logout"
                class="text-gray-600 hover:text-gray-900 font-medium py-2 transition-colors text-left w-full"
              >
                Sign Out
              </button>
            </div>
            <div v-else class="border-t pt-4 mt-4">
              <NuxtLink 
                to="/login"
                class="btn-primary block text-center"
                @click="showMobileMenu = false"
              >
                Sign In
              </NuxtLink>
            </div>
          </div>
        </div>
      </Transition>
    </div>
  </nav>
</template>

<script setup>
import { 
  MagnifyingGlassIcon, 
  ShoppingCartIcon, 
  UserIcon, 
  ChevronDownIcon,
  Bars3Icon 
} from '@heroicons/vue/24/outline'

const authStore = useAuthStore()
const cartStore = useCartStore()

const searchQuery = ref('')
const showUserMenu = ref(false)
const showMobileMenu = ref(false)
const showCart = ref(false)
const userMenuRef = ref(null)

const handleSearch = () => {
  if (searchQuery.value.trim()) {
    navigateTo(`/search?q=${encodeURIComponent(searchQuery.value)}`)
    searchQuery.value = ''
    showMobileMenu.value = false
  }
}

const toggleCart = () => {
  showCart.value = !showCart.value
}

const logout = () => {
  authStore.logout()
  showUserMenu.value = false
  showMobileMenu.value = false
}

// Close user menu when clicking outside
onClickOutside(userMenuRef, () => {
  showUserMenu.value = false
})

// Close mobile menu when route changes
const route = useRoute()
watch(() => route.path, () => {
  showMobileMenu.value = false
})

provide('showCart', showCart)
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.2s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

.slide-enter-active,
.slide-leave-active {
  transition: all 0.3s ease;
}

.slide-enter-from {
  transform: translateY(-10px);
  opacity: 0;
}

.slide-leave-to {
  transform: translateY(-10px);
  opacity: 0;
}
</style>