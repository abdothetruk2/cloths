<template>
  <div>
    <div class="flex justify-between items-center mb-8">
      <h1 class="text-3xl font-bold text-gray-900">Orders</h1>
    </div>
    
    <!-- Filters -->
    <div class="card p-4 mb-6">
      <div class="flex flex-wrap items-center gap-4">
        <div>
          <label class="block text-sm font-medium text-gray-700 mb-1">Status</label>
          <select v-model="selectedStatus" class="input-field">
            <option value="all">All Statuses</option>
            <option value="pending">Pending</option>
            <option value="processing">Processing</option>
            <option value="shipped">Shipped</option>
            <option value="completed">Completed</option>
          </select>
        </div>
        
        <div class="flex-1 max-w-md">
          <label class="block text-sm font-medium text-gray-700 mb-1">Search</label>
          <input v-model="searchQuery" type="text" placeholder="Search orders..." class="input-field" />
        </div>
      </div>
    </div>
    
    <!-- Orders Table -->
    <div class="card overflow-hidden">
      <div class="overflow-x-auto">
        <table class="min-w-full divide-y divide-gray-200">
          <thead class="bg-gray-50">
            <tr>
              <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Order ID</th>
              <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Customer</th>
              <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date</th>
              <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Total</th>
              <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
              <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
            </tr>
          </thead>
          <tbody class="bg-white divide-y divide-gray-200">
            <tr v-for="order in filteredOrders" :key="order.id">
              <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                #{{ order.id }}
              </td>
              <td class="px-6 py-4 whitespace-nowrap">
                <div class="text-sm font-medium text-gray-900">{{ order.customer }}</div>
                <div class="text-sm text-gray-500">{{ order.email }}</div>
              </td>
              <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                {{ order.date }}
              </td>
              <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                ${{ order.total }}
              </td>
              <td class="px-6 py-4 whitespace-nowrap">
                <select 
                  v-model="order.status" 
                  @change="updateOrderStatus(order.id, order.status)"
                  class="text-xs px-2 py-1 rounded-full border-0" 
                  :class="getStatusClass(order.status)"
                >
                  <option value="pending">Pending</option>
                  <option value="processing">Processing</option>
                  <option value="shipped">Shipped</option>
                  <option value="completed">Completed</option>
                </select>
              </td>
              <td class="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                <button @click="viewOrder(order)" class="text-blue-600 hover:text-blue-900">
                  View Details
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

const selectedStatus = ref('all')
const searchQuery = ref('')

// Mock orders data
const orders = ref([
  {
    id: 'ORD-001',
    customer: 'John Doe',
    email: 'john@example.com',
    date: '2025-01-10',
    total: 129.99,
    status: 'completed',
    items: [
      { name: 'Classic Cotton T-Shirt', quantity: 2, price: 29.99 },
      { name: 'Denim Jacket', quantity: 1, price: 89.99 }
    ]
  },
  {
    id: 'ORD-002',
    customer: 'Jane Smith',
    email: 'jane@example.com',
    date: '2025-01-09',
    total: 89.50,
    status: 'processing',
    items: [
      { name: 'Elegant Summer Dress', quantity: 1, price: 79.99 }
    ]
  },
  {
    id: 'ORD-003',
    customer: 'Bob Johnson',
    email: 'bob@example.com',
    date: '2025-01-08',
    total: 199.99,
    status: 'shipped',
    items: [
      { name: 'Leather Handbag', quantity: 1, price: 149.99 },
      { name: 'Kids Rainbow Hoodie', quantity: 1, price: 39.99 }
    ]
  }
])

const filteredOrders = computed(() => {
  let result = orders.value

  if (selectedStatus.value !== 'all') {
    result = result.filter(order => order.status === selectedStatus.value)
  }

  if (searchQuery.value) {
    const query = searchQuery.value.toLowerCase()
    result = result.filter(order =>
      order.id.toLowerCase().includes(query) ||
      order.customer.toLowerCase().includes(query) ||
      order.email.toLowerCase().includes(query)
    )
  }

  return result
})

const getStatusClass = (status) => {
  const classes = {
    'completed': 'bg-green-100 text-green-800',
    'processing': 'bg-yellow-100 text-yellow-800',
    'shipped': 'bg-blue-100 text-blue-800',
    'pending': 'bg-gray-100 text-gray-800'
  }
  return classes[status] || 'bg-gray-100 text-gray-800'
}

const updateOrderStatus = (orderId, newStatus) => {
  // In a real app, this would make an API call
  console.log(`Updated order ${orderId} status to ${newStatus}`)
}

const viewOrder = (order) => {
  // In a real app, this would navigate to order details or show a modal
  alert(`Order Details:\nID: ${order.id}\nCustomer: ${order.customer}\nTotal: $${order.total}\nStatus: ${order.status}`)
}

useHead({
  title: 'Orders - Admin Dashboard',
  meta: [
    { name: 'description', content: 'Manage orders in the admin dashboard.' }
  ]
})
</script>