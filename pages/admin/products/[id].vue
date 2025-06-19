<template>
  <div v-if="product">
    <div class="flex items-center justify-between mb-8">
      <h1 class="text-3xl font-bold text-gray-900">Edit Product</h1>
      <NuxtLink to="/admin/products" class="btn-secondary">
        <ArrowLeftIcon class="h-4 w-4 mr-2" />
        Back to Products
      </NuxtLink>
    </div>

    <form @submit.prevent="handleSubmit" class="max-w-4xl">
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <!-- Basic Information -->
        <div class="card p-6">
          <h2 class="text-xl font-semibold mb-4">Basic Information</h2>
          <div class="space-y-4">
            <div>
              <label class="block text-sm font-medium text-gray-700 mb-1">Product Name</label>
              <input v-model="form.name" type="text" required class="input-field" />
            </div>
            
            <div>
              <label class="block text-sm font-medium text-gray-700 mb-1">Description</label>
              <textarea v-model="form.description" rows="3" required class="input-field"></textarea>
            </div>
            
            <div class="grid grid-cols-2 gap-4">
              <div>
                <label class="block text-sm font-medium text-gray-700 mb-1">Price ($)</label>
                <input v-model.number="form.price" type="number" step="0.01" required class="input-field" />
              </div>
              
              <div>
                <label class="block text-sm font-medium text-gray-700 mb-1">Stock Quantity</label>
                <input v-model.number="form.stock" type="number" required class="input-field" />
              </div>
            </div>
            
            <div>
              <label class="block text-sm font-medium text-gray-700 mb-1">Category</label>
              <select v-model="form.category" required class="input-field">
                <option v-for="category in categories.slice(1)" :key="category.id" :value="category.id">
                  {{ category.name }}
                </option>
              </select>
            </div>
            
            <div>
              <label class="block text-sm font-medium text-gray-700 mb-1">Image URL</label>
              <input v-model="form.image" type="url" required class="input-field" />
            </div>
          </div>
        </div>

        <!-- Product Options -->
        <div class="card p-6">
          <h2 class="text-xl font-semibold mb-4">Product Options</h2>
          <div class="space-y-4">
            <div>
              <label class="block text-sm font-medium text-gray-700 mb-1">Available Sizes</label>
              <div class="grid grid-cols-4 gap-2">
                <label v-for="size in availableSizes" :key="size" class="flex items-center">
                  <input 
                    type="checkbox" 
                    :value="size" 
                    v-model="form.sizes"
                    class="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                  />
                  <span class="ml-2 text-sm">{{ size }}</span>
                </label>
              </div>
            </div>
            
            <div>
              <label class="block text-sm font-medium text-gray-700 mb-1">Available Colors</label>
              <div class="grid grid-cols-3 gap-2">
                <label v-for="color in availableColors" :key="color" class="flex items-center">
                  <input 
                    type="checkbox" 
                    :value="color" 
                    v-model="form.colors"
                    class="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                  />
                  <span class="ml-2 text-sm">{{ color }}</span>
                </label>
              </div>
            </div>
            
            <div class="flex items-center">
              <input 
                type="checkbox" 
                v-model="form.onSale"
                class="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
              />
              <label class="ml-2 text-sm font-medium text-gray-700">On Sale</label>
            </div>
            
            <div v-if="form.onSale">
              <label class="block text-sm font-medium text-gray-700 mb-1">Original Price ($)</label>
              <input v-model.number="form.originalPrice" type="number" step="0.01" class="input-field" />
            </div>
          </div>
        </div>
      </div>

      <!-- Actions -->
      <div class="flex justify-end space-x-4 mt-8">
        <NuxtLink to="/admin/products" class="btn-secondary">Cancel</NuxtLink>
        <button type="submit" :disabled="loading" class="btn-primary disabled:opacity-50">
          {{ loading ? 'Updating...' : 'Update Product' }}
        </button>
      </div>
    </form>
  </div>

  <div v-else class="text-center py-12">
    <p class="text-gray-500">Product not found.</p>
    <NuxtLink to="/admin/products" class="btn-primary mt-4">Back to Products</NuxtLink>
  </div>
</template>

<script setup>
import { ArrowLeftIcon } from '@heroicons/vue/24/outline'

definePageMeta({
  layout: 'admin'
})

const route = useRoute()
const router = useRouter()
const productsStore = useProductsStore()
const { categories } = storeToRefs(productsStore)

const loading = ref(false)
const product = computed(() => productsStore.getProductById(route.params.id))

const availableSizes = ['XS', 'S', 'M', 'L', 'XL', 'XXL', '7', '8', '9', '10', '11', '12', 'One Size']
const availableColors = ['White', 'Black', 'Navy', 'Blue', 'Pink', 'Brown', 'Tan', 'Gray', 'Red', 'Green']

const form = ref({
  name: '',
  description: '',
  price: 0,
  stock: 0,
  category: '',
  image: '',
  sizes: [],
  colors: [],
  onSale: false,
  originalPrice: 0
})

// Initialize form with product data
watchEffect(() => {
  if (product.value) {
    form.value = { ...product.value }
  }
})

const handleSubmit = async () => {
  loading.value = true
  
  try {
    productsStore.updateProduct(product.value.id, form.value)
    router.push('/admin/products')
  } catch (error) {
    alert('Failed to update product. Please try again.')
  } finally {
    loading.value = false
  }
}

useHead({
  title: 'Edit Product - Admin Dashboard',
  meta: [
    { name: 'description', content: 'Edit product details.' }
  ]
})
</script>