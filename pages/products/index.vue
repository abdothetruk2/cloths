<template>
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
    <!-- Header -->
    <div class="mb-8">
      <h1 class="text-3xl font-bold mb-4">Products</h1>
      
      <!-- Filters -->
      <div class="flex flex-wrap items-center gap-4 mb-6">
        <div class="flex items-center space-x-2">
          <label class="font-medium">Category:</label>
          <select v-model="selectedCategory" class="input-field">
            <option v-for="category in categories" :key="category.id" :value="category.id">
              {{ category.name }}
            </option>
          </select>
        </div>
        
        <div class="flex items-center space-x-2">
          <label class="font-medium">Sort by:</label>
          <select v-model="sortBy" class="input-field">
            <option value="name">Name</option>
            <option value="price-low">Price: Low to High</option>
            <option value="price-high">Price: High to Low</option>
          </select>
        </div>
        
        <div class="flex-1 max-w-md">
          <input
            v-model="searchQuery"
            type="text"
            placeholder="Search products..."
            class="input-field"
          />
        </div>
      </div>
    </div>

    <!-- Products Grid -->
    <div v-if="filteredProducts.length > 0" class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
      <ProductCard 
        v-for="product in filteredProducts" 
        :key="product.id" 
        :product="product" 
      />
    </div>

    <!-- No Results -->
    <div v-else class="text-center py-12">
      <p class="text-gray-500 text-lg">No products found matching your criteria.</p>
      <button @click="clearFilters" class="btn-primary mt-4">Clear Filters</button>
    </div>
  </div>
</template>

<script setup>
const route = useRoute()
const router = useRouter()
const productsStore = useProductsStore()

const { products, categories } = storeToRefs(productsStore)

const selectedCategory = ref(route.query.category || 'all')
const sortBy = ref('name')
const searchQuery = ref(route.query.q || '')

const filteredProducts = computed(() => {
  let result = products.value

  // Filter by category
  if (selectedCategory.value !== 'all') {
    result = result.filter(product => product.category === selectedCategory.value)
  }

  // Filter by search query
  if (searchQuery.value) {
    const query = searchQuery.value.toLowerCase()
    result = result.filter(product =>
      product.name.toLowerCase().includes(query) ||
      product.description.toLowerCase().includes(query)
    )
  }

  // Sort products
  result = [...result].sort((a, b) => {
    switch (sortBy.value) {
      case 'price-low':
        return a.price - b.price
      case 'price-high':
        return b.price - a.price
      default:
        return a.name.localeCompare(b.name)
    }
  })

  return result
})

const clearFilters = () => {
  selectedCategory.value = 'all'
  searchQuery.value = ''
  sortBy.value = 'name'
}

// Update URL when filters change
watch([selectedCategory, searchQuery], () => {
  const query = {}
  if (selectedCategory.value !== 'all') {
    query.category = selectedCategory.value
  }
  if (searchQuery.value) {
    query.q = searchQuery.value
  }
  router.push({ query })
})

useHead({
  title: 'Products - StyleHub',
  meta: [
    { name: 'description', content: 'Browse our complete collection of clothing and accessories.' }
  ]
})
</script>