<template>
  <div>
    <div class="flex items-center justify-between mb-8">
      <div>
        <h1 class="text-3xl font-bold text-gray-900">Add New Product</h1>
        <p class="text-gray-600 mt-2">Create a new product for your store</p>
      </div>
      <NuxtLink to="/admin/products" class="btn-secondary">
        <ArrowLeftIcon class="h-4 w-4 mr-2" />
        Back to Products
      </NuxtLink>
    </div>

    <form @submit.prevent="handleSubmit" class="max-w-6xl">
      <div class="grid grid-cols-1 xl:grid-cols-3 gap-8">
        <!-- Basic Information -->
        <div class="xl:col-span-2 space-y-6">
          <div class="card-elevated p-8">
            <h2 class="text-xl font-semibold mb-6 flex items-center">
              <InformationCircleIcon class="h-6 w-6 mr-2 text-blue-600" />
              Basic Information
            </h2>
            <div class="space-y-6">
              <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Product Name</label>
                <input 
                  v-model="form.name" 
                  type="text" 
                  required 
                  class="input-field" 
                  placeholder="Enter product name"
                />
              </div>
              
              <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Description</label>
                <textarea 
                  v-model="form.description" 
                  rows="4" 
                  required 
                  class="input-field resize-none" 
                  placeholder="Enter detailed product description"
                ></textarea>
              </div>
              
              <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label class="block text-sm font-medium text-gray-700 mb-2">Price ($)</label>
                  <div class="relative">
                    <span class="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500">$</span>
                    <input 
                      v-model.number="form.price" 
                      type="number" 
                      step="0.01" 
                      required 
                      class="input-field pl-8" 
                      placeholder="0.00"
                    />
                  </div>
                </div>
                
                <div>
                  <label class="block text-sm font-medium text-gray-700 mb-2">Stock Quantity</label>
                  <input 
                    v-model.number="form.stock" 
                    type="number" 
                    required 
                    class="input-field" 
                    placeholder="0"
                  />
                </div>
              </div>
              
              <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Category</label>
                <select v-model="form.category" required class="input-field">
                  <option value="">Select a category</option>
                  <option v-for="category in categories.slice(1)" :key="category.id" :value="category.id">
                    {{ category.name }}
                  </option>
                </select>
              </div>
            </div>
          </div>

          <!-- Product Images -->
          <div class="card-elevated p-8">
            <h2 class="text-xl font-semibold mb-6 flex items-center">
              <PhotoIcon class="h-6 w-6 mr-2 text-green-600" />
              Product Images
            </h2>
            <FileUpload v-model="uploadedImages" :max-files="5" />
            
            <!-- Manual URL Input -->
            <div class="mt-6 pt-6 border-t border-gray-200">
              <label class="block text-sm font-medium text-gray-700 mb-2">Or enter image URL</label>
              <div class="flex space-x-3">
                <input 
                  v-model="imageUrl" 
                  type="url" 
                  class="input-field flex-1" 
                  placeholder="https://example.com/image.jpg"
                />
                <button 
                  type="button" 
                  @click="addImageUrl" 
                  class="btn-secondary whitespace-nowrap"
                >
                  Add URL
                </button>
              </div>
            </div>
          </div>
        </div>

        <!-- Product Options & Preview -->
        <div class="space-y-6">
          <!-- Product Options -->
          <div class="card-elevated p-6">
            <h2 class="text-xl font-semibold mb-6 flex items-center">
              <CogIcon class="h-6 w-6 mr-2 text-purple-600" />
              Options
            </h2>
            <div class="space-y-6">
              <div>
                <label class="block text-sm font-medium text-gray-700 mb-3">Available Sizes</label>
                <div class="grid grid-cols-3 gap-2">
                  <label v-for="size in availableSizes" :key="size" class="flex items-center">
                    <input 
                      type="checkbox" 
                      :value="size" 
                      v-model="form.sizes"
                      class="rounded border-gray-300 text-blue-600 focus:ring-blue-500 mr-2"
                    />
                    <span class="text-sm">{{ size }}</span>
                  </label>
                </div>
              </div>
              
              <div>
                <label class="block text-sm font-medium text-gray-700 mb-3">Available Colors</label>
                <div class="grid grid-cols-2 gap-2">
                  <label v-for="color in availableColors" :key="color" class="flex items-center">
                    <input 
                      type="checkbox" 
                      :value="color" 
                      v-model="form.colors"
                      class="rounded border-gray-300 text-blue-600 focus:ring-blue-500 mr-2"
                    />
                    <span class="text-sm">{{ color }}</span>
                  </label>
                </div>
              </div>
              
              <div class="space-y-4">
                <div class="flex items-center">
                  <input 
                    type="checkbox" 
                    v-model="form.onSale"
                    class="rounded border-gray-300 text-blue-600 focus:ring-blue-500 mr-2"
                  />
                  <label class="text-sm font-medium text-gray-700">On Sale</label>
                </div>
                
                <div v-if="form.onSale">
                  <label class="block text-sm font-medium text-gray-700 mb-2">Original Price ($)</label>
                  <div class="relative">
                    <span class="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500">$</span>
                    <input 
                      v-model.number="form.originalPrice" 
                      type="number" 
                      step="0.01" 
                      class="input-field pl-8" 
                      placeholder="0.00"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- Preview -->
          <div v-if="form.name && (form.image || uploadedImages.length > 0)" class="card-elevated p-6">
            <h2 class="text-xl font-semibold mb-4 flex items-center">
              <EyeIcon class="h-6 w-6 mr-2 text-indigo-600" />
              Preview
            </h2>
            <div class="transform scale-90 origin-top">
              <ProductCard :product="previewProduct" />
            </div>
          </div>

          <!-- Actions -->
          <div class="space-y-3">
            <button 
              type="submit" 
              :disabled="loading || !isFormValid" 
              class="w-full btn-primary disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <span v-if="loading" class="flex items-center justify-center">
                <div class="loading-spinner mr-2"></div>
                Creating...
              </span>
              <span v-else class="flex items-center justify-center">
                <PlusIcon class="h-5 w-5 mr-2" />
                Create Product
              </span>
            </button>
            
            <NuxtLink to="/admin/products" class="w-full btn-secondary block text-center">
              Cancel
            </NuxtLink>
          </div>
        </div>
      </div>
    </form>
  </div>
</template>

<script setup>
import { 
  ArrowLeftIcon, 
  InformationCircleIcon, 
  PhotoIcon, 
  CogIcon, 
  EyeIcon, 
  PlusIcon 
} from '@heroicons/vue/24/outline'

definePageMeta({
  layout: 'admin'
})

const productsStore = useProductsStore()
const { categories } = storeToRefs(productsStore)
const router = useRouter()

const loading = ref(false)
const uploadedImages = ref([])
const imageUrl = ref('')

const availableSizes = ['XS', 'S', 'M', 'L', 'XL', 'XXL', '7', '8', '9', '10', '11', '12', 'One Size']
const availableColors = ['White', 'Black', 'Navy', 'Blue', 'Pink', 'Brown', 'Tan', 'Gray', 'Red', 'Green']

const form = ref({
  name: '',
  description: '',
  price: 0,
  stock: 0,
  category: '',
  image: '',
  sizes: ['M'],
  colors: ['White'],
  onSale: false,
  originalPrice: 0
})

const isFormValid = computed(() => {
  return form.value.name && 
         form.value.description && 
         form.value.price > 0 && 
         form.value.stock >= 0 && 
         form.value.category &&
         (form.value.image || uploadedImages.value.length > 0)
})

const previewProduct = computed(() => ({
  ...form.value,
  id: 'preview',
  image: form.value.image || (uploadedImages.value.length > 0 ? uploadedImages.value[0].url : '')
}))

const addImageUrl = () => {
  if (imageUrl.value) {
    form.value.image = imageUrl.value
    imageUrl.value = ''
  }
}

// Watch for uploaded images and set the first one as the main image
watch(uploadedImages, (newImages) => {
  if (newImages.length > 0 && !form.value.image) {
    form.value.image = newImages[0].url
  }
}, { deep: true })

const handleSubmit = async () => {
  if (!isFormValid.value) return
  
  loading.value = true
  
  try {
    // Simulate API call delay
    await new Promise(resolve => setTimeout(resolve, 1500))
    
    const newProduct = productsStore.addProduct(form.value)
    
    // Show success notification
    const notification = document.createElement('div')
    notification.className = 'fixed top-4 right-4 bg-green-500 text-white px-6 py-3 rounded-lg shadow-lg z-50 bounce-in'
    notification.textContent = 'Product created successfully!'
    document.body.appendChild(notification)
    
    setTimeout(() => {
      document.body.removeChild(notification)
    }, 3000)
    
    router.push('/admin/products')
  } catch (error) {
    alert('Failed to create product. Please try again.')
  } finally {
    loading.value = false
  }
}

useHead({
  title: 'Add New Product - Admin Dashboard',
  meta: [
    { name: 'description', content: 'Add a new product to the store.' }
  ]
})
</script>