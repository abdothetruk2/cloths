<template>
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
    <!-- Search Header -->
    <div class="mb-8">
      <h1 class="text-3xl font-bold mb-4">
        {{ searchQuery ? `Search Results for "${searchQuery}"` : 'Search Products' }}
      </h1>
      
      <!-- Search Bar -->
      <div class="max-w-2xl">
        <div class="relative">
          <MagnifyingGlassIcon class="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
          <input
            v-model="currentSearch"
            @keyup.enter="performSearch"
            type="text"
            placeholder="Search for products..."
            class="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
        </div>
        <button @click="performSearch" class="mt-3 btn-primary">
          Search
        </button>
      </div>
    </div>

    <!-- Search Results -->
    <div v-if="searchQuery">
      <div class="flex items-center justify-between mb-6">
        <p class="text-gray-600">
          {{ searchResults.length }} result{{ searchResults.length !== 1 ? 's' : '' }} found
        </p>
        
        <div class="flex items-center space-x-2">
          <label class="font-medium">Sort by:</label>
          <select v-model="sortBy" class="input-field">
            <option value="relevance">Relevance</option>
            <option value="name">Name</option>
            <option value="price-low">Price: Low to High</option>
            <option value="price-high">Price: High to Low</option>
          </select>
        </div>
      </div>

      <!-- Results Grid -->
      <div v-if="sortedResults.length > 0" class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        <ProductCard 
          v-for="product in sortedResults" 
          :key="product.id" 
          :product="product" 
        />
      </div>

      <!-- No Results -->
      <div v-else class="text-center py-12">
        <MagnifyingGlassIcon class="h-16 w-16 text-gray-300 mx-auto mb-4" />
        <h3 class="text-xl font-semibold text-gray-600 mb-2">No products found</h3>
        <p class="text-gray-500 mb-6">
          Try adjusting your search terms or browse our categories below.
        </p>
        
        <div class="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-2xl mx-auto">
          <NuxtLink 
            v-for="category in categories.slice(1)" 
            :key="category.id"
            :to="`/products?category=${category.id}`"
            class="btn-secondary text-center"
          >
            {{ category.name }}
          </NuxtLink>
        </div>
      </div>
    </div>

    <!-- Popular Searches (when no search query) -->
    <div v-else class="space-y-8">
      <div>
        <h2 class="text-2xl font-semibold mb-6">Popular Searches</h2>
        <div class="flex flex-wrap gap-3">
          <button 
            v-for="term in popularSearches" 
            :key="term"
            @click="searchForTerm(term)"
            class="px-4 py-2 bg-gray-100 hover:bg-gray-200 rounded-full text-sm font-medium transition-colors"
          >
            {{ term }}
          </button>
        </div>
      </div>
      
      <div>
        <h2 class="text-2xl font-semibold mb-6">Browse Categories</h2>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <NuxtLink 
            v-for="category in featuredCategories" 
            :key="category.id"
            :to="`/products?category=${category.id}`"
            class="group"
          >
            <div class="card overflow-hidden">
              <img 
                :src="category.image" 
                :alt="category.name"
                class="w-full h-32 object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div class="p-4 text-center">
                <h3 class="font-semibold group-hover:text-blue-600 transition-colors">
                  {{ category.name }}
                </h3>
              </div>
            </div>
          </NuxtLink>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { MagnifyingGlassIcon } from '@heroicons/vue/24/outline'

const route = useRoute()
const router = useRouter()
const productsStore = useProductsStore()

const { products, categories } = storeToRefs(productsStore)

const searchQuery = ref(route.query.q || '')
const currentSearch = ref(searchQuery.value)
const sortBy = ref('relevance')

const popularSearches = ['t-shirt', 'dress', 'jacket', 'shoes', 'handbag', 'jeans']

const featuredCategories = [
  {
    id: 'men',
    name: 'Men',
    image: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=400'
  },
  {
    id: 'women',
    name: 'Women',
    image: 'https://images.pexels.com/photos/1536619/pexels-photo-1536619.jpeg?auto=compress&cs=tinysrgb&w=400'
  },
  {
    id: 'kids',
    name: 'Kids',
    image: 'https://images.pexels.com/photos/1620760/pexels-photo-1620760.jpeg?auto=compress&cs=tinysrgb&w=400'
  },
  {
    id: 'accessories',
    name: 'Accessories',
    image: 'https://images.pexels.com/photos/1152077/pexels-photo-1152077.jpeg?auto=compress&cs=tinysrgb&w=400'
  }
]

const searchResults = computed(() => {
  if (!searchQuery.value) return []
  
  const query = searchQuery.value.toLowerCase()
  return products.value.filter(product =>
    product.name.toLowerCase().includes(query) ||
    product.description.toLowerCase().includes(query) ||
    product.category.toLowerCase().includes(query)
  )
})

const sortedResults = computed(() => {
  const results = [...searchResults.value]
  
  switch (sortBy.value) {
    case 'name':
      return results.sort((a, b) => a.name.localeCompare(b.name))
    case 'price-low':
      return results.sort((a, b) => a.price - b.price)
    case 'price-high':
      return results.sort((a, b) => b.price - a.price)
    default:
      return results
  }
})

const performSearch = () => {
  if (currentSearch.value.trim()) {
    router.push({ query: { q: currentSearch.value.trim() } })
  }
}

const searchForTerm = (term) => {
  currentSearch.value = term
  performSearch()
}

// Watch for route changes
watch(() => route.query.q, (newQuery) => {
  searchQuery.value = newQuery || ''
  currentSearch.value = searchQuery.value
})

useHead(() => ({
  title: searchQuery.value ? `Search: ${searchQuery.value} - StyleHub` : 'Search Products - StyleHub',
  meta: [
    { name: 'description', content: searchQuery.value ? `Search results for "${searchQuery.value}"` : 'Search for products at StyleHub' }
  ]
}))
</script>