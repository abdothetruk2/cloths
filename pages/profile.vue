<template>
  <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
    <h1 class="text-3xl font-bold mb-8">My Profile</h1>
    
    <div class="grid grid-cols-1 lg:grid-cols-3 gap-8">
      <!-- Profile Information -->
      <div class="lg:col-span-2">
        <div class="card p-6 mb-6">
          <h2 class="text-xl font-semibold mb-4">Personal Information</h2>
          <form @submit.prevent="updateProfile" class="space-y-4">
            <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label class="block text-sm font-medium text-gray-700 mb-1">First Name</label>
                <input v-model="profile.firstName" type="text" class="input-field" />
              </div>
              <div>
                <label class="block text-sm font-medium text-gray-700 mb-1">Last Name</label>
                <input v-model="profile.lastName" type="text" class="input-field" />
              </div>
            </div>
            
            <div>
              <label class="block text-sm font-medium text-gray-700 mb-1">Email</label>
              <input v-model="profile.email" type="email" class="input-field" />
            </div>
            
            <div>
              <label class="block text-sm font-medium text-gray-700 mb-1">Phone</label>
              <input v-model="profile.phone" type="tel" class="input-field" />
            </div>
            
            <button type="submit" class="btn-primary">Update Profile</button>
          </form>
        </div>
        
        <!-- Address Book -->
        <div class="card p-6">
          <h2 class="text-xl font-semibold mb-4">Address Book</h2>
          <div class="space-y-4">
            <div v-for="address in addresses" :key="address.id" class="border border-gray-200 rounded-lg p-4">
              <div class="flex justify-between items-start">
                <div>
                  <p class="font-medium">{{ address.name }}</p>
                  <p class="text-sm text-gray-600">{{ address.street }}</p>
                  <p class="text-sm text-gray-600">{{ address.city }}, {{ address.state }} {{ address.zip }}</p>
                </div>
                <div class="flex space-x-2">
                  <button class="text-blue-600 hover:text-blue-800 text-sm">Edit</button>
                  <button class="text-red-600 hover:text-red-800 text-sm">Delete</button>
                </div>
              </div>
            </div>
            <button class="btn-secondary">Add New Address</button>
          </div>
        </div>
      </div>
      
      <!-- Account Summary -->
      <div class="space-y-6">
        <div class="card p-6">
          <h2 class="text-xl font-semibold mb-4">Account Summary</h2>
          <div class="space-y-3">
            <div class="flex justify-between">
              <span class="text-gray-600">Member since</span>
              <span class="font-medium">Jan 2024</span>
            </div>
            <div class="flex justify-between">
              <span class="text-gray-600">Total orders</span>
              <span class="font-medium">12</span>
            </div>
            <div class="flex justify-between">
              <span class="text-gray-600">Total spent</span>
              <span class="font-medium">$1,234.56</span>
            </div>
          </div>
        </div>
        
        <div class="card p-6">
          <h2 class="text-xl font-semibold mb-4">Quick Actions</h2>
          <div class="space-y-3">
            <NuxtLink to="/orders" class="w-full btn-secondary block text-center">
              View Orders
            </NuxtLink>
            <NuxtLink to="/products" class="w-full btn-secondary block text-center">
              Continue Shopping
            </NuxtLink>
            <button @click="logout" class="w-full text-red-600 hover:text-red-800 py-2">
              Sign Out
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
definePageMeta({
  middleware: 'auth'
})

const authStore = useAuthStore()

const profile = ref({
  firstName: 'John',
  lastName: 'Doe',
  email: 'john@example.com',
  phone: '+1 (555) 123-4567'
})

const addresses = ref([
  {
    id: 1,
    name: 'Home',
    street: '123 Main St',
    city: 'New York',
    state: 'NY',
    zip: '10001'
  },
  {
    id: 2,
    name: 'Work',
    street: '456 Business Ave',
    city: 'New York',
    state: 'NY',
    zip: '10002'
  }
])

const updateProfile = () => {
  // In a real app, this would make an API call
  alert('Profile updated successfully!')
}

const logout = () => {
  authStore.logout()
}

useHead({
  title: 'My Profile - StyleHub',
  meta: [
    { name: 'description', content: 'Manage your profile and account settings.' }
  ]
})
</script>