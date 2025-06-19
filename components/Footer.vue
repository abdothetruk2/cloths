<template>
  <footer class="bg-gray-800 text-white mt-16">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div class="grid grid-cols-1 md:grid-cols-4 gap-8">
        <div>
          <h3 class="text-lg font-semibold mb-4">StyleHub</h3>
          <p class="text-gray-300">Your premier destination for quality clothing and accessories.</p>
        </div>
        
        <div>
          <h4 class="font-semibold mb-4">Shop</h4>
          <ul class="space-y-2">
            <li><NuxtLink to="/products?category=men" class="text-gray-300 hover:text-white">Men</NuxtLink></li>
            <li><NuxtLink to="/products?category=women" class="text-gray-300 hover:text-white">Women</NuxtLink></li>
            <li><NuxtLink to="/products?category=kids" class="text-gray-300 hover:text-white">Kids</NuxtLink></li>
            <li><NuxtLink to="/products?category=accessories" class="text-gray-300 hover:text-white">Accessories</NuxtLink></li>
          </ul>
        </div>
        
        <div>
          <h4 class="font-semibold mb-4">Customer Service</h4>
          <ul class="space-y-2">
            <li><NuxtLink to="/contact" class="text-gray-300 hover:text-white">Contact Us</NuxtLink></li>
            <li><NuxtLink to="/shipping" class="text-gray-300 hover:text-white">Shipping Info</NuxtLink></li>
            <li><NuxtLink to="/returns" class="text-gray-300 hover:text-white">Returns</NuxtLink></li>
            <li><NuxtLink to="/size-guide" class="text-gray-300 hover:text-white">Size Guide</NuxtLink></li>
          </ul>
        </div>
        
        <div>
          <h4 class="font-semibold mb-4">Connect</h4>
          <div class="flex space-x-4">
            <a href="#" class="text-gray-300 hover:text-white">Facebook</a>
            <a href="#" class="text-gray-300 hover:text-white">Instagram</a>
            <a href="#" class="text-gray-300 hover:text-white">Twitter</a>
          </div>
        </div>
      </div>
      
      <div class="border-t border-gray-700 mt-8 pt-8 text-center text-gray-300">
        <p>&copy; 2025 StyleHub. All rights reserved.</p>
      </div>
    </div>
  </footer>
</template>