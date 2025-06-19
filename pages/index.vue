<template>
  <div>
    <!-- Hero Section -->
    <section class="relative bg-gradient-to-r from-blue-600 to-purple-700 text-white">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div class="text-center">
          <h1 class="text-4xl md:text-6xl font-bold mb-6">
            Welcome to StyleHub
          </h1>
          <p class="text-xl md:text-2xl mb-8 text-blue-100">
            Discover the latest trends in fashion
          </p>
          <NuxtLink to="/products" class="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
            Shop Now
          </NuxtLink>
        </div>
      </div>
    </section>

    <!-- Featured Categories -->
    <section class="py-16">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 class="text-3xl font-bold text-center mb-12">Shop by Category</h2>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
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
                class="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div class="p-6 text-center">
                <h3 class="text-xl font-semibold group-hover:text-blue-600 transition-colors">
                  {{ category.name }}
                </h3>
              </div>
            </div>
          </NuxtLink>
        </div>
      </div>
    </section>

    <!-- Featured Products -->
    <section class="py-16 bg-gray-50">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-12">
          <h2 class="text-3xl font-bold mb-4">Featured Products</h2>
          <p class="text-gray-600">Discover our most popular items</p>
        </div>
        
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          <ProductCard 
            v-for="product in featuredProducts" 
            :key="product.id" 
            :product="product" 
          />
        </div>
        
        <div class="text-center mt-12">
          <NuxtLink to="/products" class="btn-primary">View All Products</NuxtLink>
        </div>
      </div>
    </section>

    <!-- Newsletter -->
    <section class="py-16 bg-gray-800 text-white">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 class="text-3xl font-bold mb-4">Stay Updated</h2>
        <p class="text-gray-300 mb-8">Get the latest updates on new products and exclusive offers</p>
        <div class="max-w-md mx-auto flex">
          <input 
            type="email" 
            placeholder="Enter your email"
            class="flex-1 px-4 py-3 rounded-l-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button class="bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-r-lg font-semibold transition-colors">
            Subscribe
          </button>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
const productsStore = useProductsStore()
const { products } = storeToRefs(productsStore)

const featuredCategories = [
  {
    id: 'men',
    name: 'Men',
    image: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=800'
  },
  {
    id: 'women',
    name: 'Women',
    image: 'https://images.pexels.com/photos/1536619/pexels-photo-1536619.jpeg?auto=compress&cs=tinysrgb&w=800'
  },
  {
    id: 'kids',
    name: 'Kids',
    image: 'https://images.pexels.com/photos/1620760/pexels-photo-1620760.jpeg?auto=compress&cs=tinysrgb&w=800'
  },
  {
    id: 'accessories',
    name: 'Accessories',
    image: 'https://images.pexels.com/photos/1152077/pexels-photo-1152077.jpeg?auto=compress&cs=tinysrgb&w=800'
  }
]

const featuredProducts = computed(() => products.value.slice(0, 4))

useHead({
  title: 'StyleHub - Premium Fashion Store',
  meta: [
    { name: 'description', content: 'Discover the latest trends in fashion at StyleHub. Quality clothing and accessories for men, women, and kids.' }
  ]
})
</script>