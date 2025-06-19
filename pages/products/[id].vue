<template>
  <div v-if="product" class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
    <div class="grid grid-cols-1 lg:grid-cols-2 gap-12">
      <!-- Product Images -->
      <div class="space-y-4">
        <div class="aspect-square overflow-hidden rounded-lg">
          <img 
            :src="product.image" 
            :alt="product.name"
            class="w-full h-full object-cover"
          />
        </div>
      </div>

      <!-- Product Info -->
      <div class="space-y-6">
        <div>
          <h1 class="text-3xl font-bold text-gray-900">{{ product.name }}</h1>
          <p class="text-xl text-gray-600 mt-2">{{ product.description }}</p>
        </div>

        <div class="flex items-center space-x-4">
          <span class="text-3xl font-bold text-gray-900">${{ product.price }}</span>
          <span class="text-sm text-gray-500">{{ product.stock }} in stock</span>
        </div>

        <!-- Size Selection -->
        <div v-if="product.sizes.length > 0">
          <h3 class="text-sm font-medium text-gray-900 mb-3">Size</h3>
          <div class="grid grid-cols-4 gap-2">
            <button
              v-for="size in product.sizes"
              :key="size"
              @click="selectedSize = size"
              class="border rounded-md py-2 px-3 text-sm font-medium hover:border-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
              :class="{
                'border-blue-500 bg-blue-50': selectedSize === size,
                'border-gray-300': selectedSize !== size
              }"
            >
              {{ size }}
            </button>
          </div>
        </div>

        <!-- Color Selection -->
        <div v-if="product.colors.length > 1">
          <h3 class="text-sm font-medium text-gray-900 mb-3">Color</h3>
          <div class="flex space-x-3">
            <button
              v-for="color in product.colors"
              :key="color"
              @click="selectedColor = color"
              class="w-8 h-8 rounded-full border-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              :class="{
                'border-gray-900': selectedColor === color,
                'border-gray-300': selectedColor !== color,
                ...getColorClasses(color)
              }"
              :title="color"
            >
              <span class="sr-only">{{ color }}</span>
            </button>
          </div>
          <p class="text-sm text-gray-600 mt-2">Selected: {{ selectedColor }}</p>
        </div>

        <!-- Quantity -->
        <div>
          <h3 class="text-sm font-medium text-gray-900 mb-3">Quantity</h3>
          <div class="flex items-center space-x-3">
            <button
              @click="quantity = Math.max(1, quantity - 1)"
              class="w-8 h-8 rounded border border-gray-300 flex items-center justify-center hover:bg-gray-50"
            >
              -
            </button>
            <span class="text-lg font-medium">{{ quantity }}</span>
            <button
              @click="quantity = Math.min(product.stock, quantity + 1)"
              class="w-8 h-8 rounded border border-gray-300 flex items-center justify-center hover:bg-gray-50"
            >
              +
            </button>
          </div>
        </div>

        <!-- Add to Cart -->
        <div class="space-y-3">
          <button
            @click="addToCart"
            :disabled="product.stock === 0"
            class="w-full btn-primary disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {{ product.stock === 0 ? 'Out of Stock' : 'Add to Cart' }}
          </button>
          
          <button class="w-full btn-secondary">
            Add to Wishlist
          </button>
        </div>

        <!-- Product Details -->
        <div class="border-t pt-6">
          <h3 class="text-lg font-medium text-gray-900 mb-4">Details</h3>
          <ul class="space-y-2 text-sm text-gray-600">
            <li>• Premium quality materials</li>
            <li>• Machine washable</li>
            <li>• Free shipping on orders over $50</li>
            <li>• 30-day return policy</li>
          </ul>
        </div>
      </div>
    </div>

    <!-- Related Products -->
    <div class="mt-16">
      <h2 class="text-2xl font-bold text-gray-900 mb-8">You might also like</h2>
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        <ProductCard 
          v-for="relatedProduct in relatedProducts" 
          :key="relatedProduct.id" 
          :product="relatedProduct" 
        />
      </div>
    </div>
  </div>

  <div v-else class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
    <p class="text-center text-gray-500">Product not found.</p>
  </div>
</template>

<script setup>
const route = useRoute()
const productsStore = useProductsStore()
const cartStore = useCartStore()

const { products } = storeToRefs(productsStore)

const product = computed(() => productsStore.getProductById(route.params.id))
const relatedProducts = computed(() => 
  products.value
    .filter(p => p.category === product.value?.category && p.id !== product.value?.id)
    .slice(0, 4)
)

const selectedSize = ref('')
const selectedColor = ref('')
const quantity = ref(1)

// Initialize selections
watchEffect(() => {
  if (product.value) {
    selectedSize.value = product.value.sizes[0] || ''
    selectedColor.value = product.value.colors[0] || ''
  }
})

const getColorClasses = (color) => {
  const colorMap = {
    'White': 'bg-white',
    'Black': 'bg-black',
    'Navy': 'bg-blue-900',
    'Blue': 'bg-blue-500',
    'Pink': 'bg-pink-500',
    'Brown': 'bg-amber-700',
    'Tan': 'bg-yellow-600',
    'Gray': 'bg-gray-500',
    'Rainbow': 'bg-gradient-to-r from-red-500 via-yellow-500 to-blue-500'
  }
  return { [colorMap[color] || 'bg-gray-300']: true }
}

const addToCart = () => {
  for (let i = 0; i < quantity.value; i++) {
    cartStore.addItem(product.value, selectedSize.value, selectedColor.value)
  }
  
  // Show success message (you can implement a toast notification here)
  alert('Product added to cart!')
}

useHead(() => ({
  title: product.value ? `${product.value.name} - StyleHub` : 'Product - StyleHub',
  meta: [
    { name: 'description', content: product.value?.description || 'Product details' }
  ]
}))
</script>