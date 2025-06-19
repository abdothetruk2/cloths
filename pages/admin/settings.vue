<template>
  <div>
    <h1 class="text-3xl font-bold text-gray-900 mb-8">Settings</h1>
    
    <div class="grid grid-cols-1 lg:grid-cols-2 gap-8">
      <!-- Store Settings -->
      <div class="card p-6">
        <h2 class="text-xl font-semibold mb-4">Store Settings</h2>
        <form @submit.prevent="saveStoreSettings" class="space-y-4">
          <div>
            <label class="block text-sm font-medium text-gray-700 mb-1">Store Name</label>
            <input v-model="storeSettings.name" type="text" class="input-field" />
          </div>
          
          <div>
            <label class="block text-sm font-medium text-gray-700 mb-1">Store Description</label>
            <textarea v-model="storeSettings.description" rows="3" class="input-field"></textarea>
          </div>
          
          <div>
            <label class="block text-sm font-medium text-gray-700 mb-1">Contact Email</label>
            <input v-model="storeSettings.email" type="email" class="input-field" />
          </div>
          
          <div>
            <label class="block text-sm font-medium text-gray-700 mb-1">Phone Number</label>
            <input v-model="storeSettings.phone" type="tel" class="input-field" />
          </div>
          
          <button type="submit" class="btn-primary">Save Store Settings</button>
        </form>
      </div>

      <!-- Shipping Settings -->
      <div class="card p-6">
        <h2 class="text-xl font-semibold mb-4">Shipping Settings</h2>
        <form @submit.prevent="saveShippingSettings" class="space-y-4">
          <div>
            <label class="block text-sm font-medium text-gray-700 mb-1">Free Shipping Threshold ($)</label>
            <input v-model.number="shippingSettings.freeShippingThreshold" type="number" step="0.01" class="input-field" />
          </div>
          
          <div>
            <label class="block text-sm font-medium text-gray-700 mb-1">Standard Shipping Rate ($)</label>
            <input v-model.number="shippingSettings.standardRate" type="number" step="0.01" class="input-field" />
          </div>
          
          <div>
            <label class="block text-sm font-medium text-gray-700 mb-1">Express Shipping Rate ($)</label>
            <input v-model.number="shippingSettings.expressRate" type="number" step="0.01" class="input-field" />
          </div>
          
          <div class="flex items-center">
            <input 
              type="checkbox" 
              v-model="shippingSettings.internationalShipping"
              class="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
            />
            <label class="ml-2 text-sm font-medium text-gray-700">Enable International Shipping</label>
          </div>
          
          <button type="submit" class="btn-primary">Save Shipping Settings</button>
        </form>
      </div>

      <!-- Tax Settings -->
      <div class="card p-6">
        <h2 class="text-xl font-semibold mb-4">Tax Settings</h2>
        <form @submit.prevent="saveTaxSettings" class="space-y-4">
          <div>
            <label class="block text-sm font-medium text-gray-700 mb-1">Tax Rate (%)</label>
            <input v-model.number="taxSettings.rate" type="number" step="0.01" min="0" max="100" class="input-field" />
          </div>
          
          <div class="flex items-center">
            <input 
              type="checkbox" 
              v-model="taxSettings.includedInPrice"
              class="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
            />
            <label class="ml-2 text-sm font-medium text-gray-700">Tax Included in Price</label>
          </div>
          
          <button type="submit" class="btn-primary">Save Tax Settings</button>
        </form>
      </div>

      <!-- Notification Settings -->
      <div class="card p-6">
        <h2 class="text-xl font-semibold mb-4">Notifications</h2>
        <form @submit.prevent="saveNotificationSettings" class="space-y-4">
          <div class="space-y-3">
            <div class="flex items-center">
              <input 
                type="checkbox" 
                v-model="notificationSettings.orderNotifications"
                class="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
              />
              <label class="ml-2 text-sm font-medium text-gray-700">New Order Notifications</label>
            </div>
            
            <div class="flex items-center">
              <input 
                type="checkbox" 
                v-model="notificationSettings.lowStockAlerts"
                class="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
              />
              <label class="ml-2 text-sm font-medium text-gray-700">Low Stock Alerts</label>
            </div>
            
            <div class="flex items-center">
              <input 
                type="checkbox" 
                v-model="notificationSettings.customerMessages"
                class="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
              />
              <label class="ml-2 text-sm font-medium text-gray-700">Customer Message Notifications</label>
            </div>
          </div>
          
          <div>
            <label class="block text-sm font-medium text-gray-700 mb-1">Low Stock Threshold</label>
            <input v-model.number="notificationSettings.lowStockThreshold" type="number" min="0" class="input-field" />
          </div>
          
          <button type="submit" class="btn-primary">Save Notification Settings</button>
        </form>
      </div>
    </div>
  </div>
</template>

<script setup>
definePageMeta({
  layout: 'admin'
})

const storeSettings = ref({
  name: 'StyleHub',
  description: 'Your premier destination for quality clothing and accessories.',
  email: 'contact@stylehub.com',
  phone: '+1 (555) 123-4567'
})

const shippingSettings = ref({
  freeShippingThreshold: 50.00,
  standardRate: 9.99,
  expressRate: 19.99,
  internationalShipping: false
})

const taxSettings = ref({
  rate: 8.00,
  includedInPrice: false
})

const notificationSettings = ref({
  orderNotifications: true,
  lowStockAlerts: true,
  customerMessages: true,
  lowStockThreshold: 10
})

const saveStoreSettings = () => {
  // In a real app, this would make an API call
  alert('Store settings saved successfully!')
}

const saveShippingSettings = () => {
  // In a real app, this would make an API call
  alert('Shipping settings saved successfully!')
}

const saveTaxSettings = () => {
  // In a real app, this would make an API call
  alert('Tax settings saved successfully!')
}

const saveNotificationSettings = () => {
  // In a real app, this would make an API call
  alert('Notification settings saved successfully!')
}

useHead({
  title: 'Settings - Admin Dashboard',
  meta: [
    { name: 'description', content: 'Configure store settings and preferences.' }
  ]
})
</script>