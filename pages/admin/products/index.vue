<template>
  <div>
    <div class="flex justify-between items-center mb-8">
      <h1 class="text-3xl font-bold text-gray-900">Products</h1>
      <NuxtLink to="/admin/products/new" class="btn-primary">Add New Product</NuxtLink>
    </div>
    
    <!-- Filters -->
    <div class="card p-4 mb-6">
      <div class="flex flex-wrap items-center gap-4">
        <div>
          <label class="block text-sm font-medium text-gray-700 mb-1">Category</label>
          <select v-model="selectedCategory" class="input-field">
            <option value="all">All Categories</option>
            <option v-for="category in categories.slice(1)" :key="category.id" :value="category.id">
              {{ category.name }}
            </option>
          </select>
        </div>
        
        <div class="flex-1 max-w-md">
          <label class="block text-sm font-medium text-gray-700 mb-1">Search</label>
          <input v-model="searchQuery" type="text" placeholder="Search products..." class="input-field" />
        </div>
      </div>
    </div>
    
    <!-- Products Table -->
    <div class="card overflow-hidden">
      <div class="overflow-x-auto">
        <table class="min-w-full divide-y divide-gray-200">
          <thead class="bg-gray-50">
            <tr>
              <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Product</th>
              <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Category</th>
              <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Price</th>
              <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Stock</th>
              <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
            </tr>
          </thead>
          <tbody class="bg-white divide-y divide-gray-200">
            <tr v-for="product in filteredProducts" :key="product.id">
              <td class="px-6 py-4 whitespace-nowrap">
                <div class="flex items-center">
                  <img :src="product.image" :alt="product.name" class="h-10 w-10 rounded object-cover" />
                  <div class="ml-4">
                    <div class="text-sm font-medium text-gray-900">{{ product.name }}</div>
                    <div class="text-sm text-gray-500">{{ product.description.substring(0, 50) }}...</div>
                  </div>
                </div>
              </td>
              <td class="px-6 py-4 whitespace-nowrap">
                <span class="px-2 py-1 text-xs font-semibold rounded-full bg-blue-100 text-blue-800">
                  {{ getCategoryName(product.category) }}
                </span>
              </td>
              <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                ${{ product.price }}
              </td>
              <td class="px-6 py-4 whitespace-nowrap">
                <span 
                  class="px-2 py-1 text-xs font-semibold rounded-full"
                  :class="product.stock <= 10 ? 'bg-red-100 text-red-800' : 'bg-green-100 text-green-800'"
                >
                  {{ product.stock }}
                </span>
              </td>
              <td class="px-6 py-4 whitespace-nowrap text-right text-sm font-medium space-x-2">
                <NuxtLink :to="`/admin/products/${product.id}`" class="text-blue-600 hover:text-blue-900">
                  Edit
                </NuxtLink>
                <button @click="deleteProduct(product.id)" class="text-red-600 hover:text-red-900">
                  Delete
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script setup>
definePageMeta({
  layout: 'admin'
})

const productsStore = useProductsStore()
const { products, categories } = storeToRefs(productsStore)

const selectedCategory = ref('all')
const searchQuery = ref('')

const filteredProducts = computed(() => {
  let result = products.value

  if (selectedCategory.value !== 'all') {
    result = result.filter(product => product.category === selectedCategory.value)
  }

  if (searchQuery.value) {
    const query = searchQuery.value.toLowerCase()
    result = result.filter(product =>
      product.name.toLowerCase().includes(query) ||
      product.description.toLowerCase().includes(query)
    )
  }

  return result
})

const getCategoryName = (categoryId) => {
  const category = categories.value.find(c => c.id === categoryId)
  return category ? category.name : categoryId
}

const deleteProduct = (id) => {
  if (confirm('Are you sure you want to delete this product?')) {
    productsStore.deleteProduct(id)
  }
}

useHead({
  title: 'Products - Admin Dashboard',
  meta: [
    { name: 'description', content: 'Manage products in the admin dashboard.' }
  ]
})
</script>