<template>
  <div>
    <div class="flex justify-between items-center mb-8">
      <h1 class="text-3xl font-bold text-gray-900">Users</h1>
      <button @click="showAddUserModal = true" class="btn-primary">Add New User</button>
    </div>
    
    <!-- Filters -->
    <div class="card p-4 mb-6">
      <div class="flex flex-wrap items-center gap-4">
        <div>
          <label class="block text-sm font-medium text-gray-700 mb-1">Role</label>
          <select v-model="selectedRole" class="input-field">
            <option value="all">All Roles</option>
            <option value="admin">Admin</option>
            <option value="user">User</option>
          </select>
        </div>
        
        <div class="flex-1 max-w-md">
          <label class="block text-sm font-medium text-gray-700 mb-1">Search</label>
          <input v-model="searchQuery" type="text" placeholder="Search users..." class="input-field" />
        </div>
      </div>
    </div>
    
    <!-- Users Table -->
    <div class="card overflow-hidden">
      <div class="overflow-x-auto">
        <table class="min-w-full divide-y divide-gray-200">
          <thead class="bg-gray-50">
            <tr>
              <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">User</th>
              <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Role</th>
              <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Joined</th>
              <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
              <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
            </tr>
          </thead>
          <tbody class="bg-white divide-y divide-gray-200">
            <tr v-for="user in filteredUsers" :key="user.id">
              <td class="px-6 py-4 whitespace-nowrap">
                <div class="flex items-center">
                  <div class="h-10 w-10 rounded-full bg-gray-300 flex items-center justify-center">
                    <UserIcon class="h-6 w-6 text-gray-600" />
                  </div>
                  <div class="ml-4">
                    <div class="text-sm font-medium text-gray-900">{{ user.name }}</div>
                    <div class="text-sm text-gray-500">{{ user.email }}</div>
                  </div>
                </div>
              </td>
              <td class="px-6 py-4 whitespace-nowrap">
                <span 
                  class="px-2 py-1 text-xs font-semibold rounded-full"
                  :class="user.role === 'admin' ? 'bg-purple-100 text-purple-800' : 'bg-blue-100 text-blue-800'"
                >
                  {{ user.role }}
                </span>
              </td>
              <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                {{ user.joinedDate }}
              </td>
              <td class="px-6 py-4 whitespace-nowrap">
                <span 
                  class="px-2 py-1 text-xs font-semibold rounded-full"
                  :class="user.status === 'active' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'"
                >
                  {{ user.status }}
                </span>
              </td>
              <td class="px-6 py-4 whitespace-nowrap text-right text-sm font-medium space-x-2">
                <button @click="editUser(user)" class="text-blue-600 hover:text-blue-900">
                  Edit
                </button>
                <button 
                  @click="toggleUserStatus(user)" 
                  :class="user.status === 'active' ? 'text-red-600 hover:text-red-900' : 'text-green-600 hover:text-green-900'"
                >
                  {{ user.status === 'active' ? 'Deactivate' : 'Activate' }}
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>

    <!-- Add User Modal -->
    <div v-if="showAddUserModal" class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div class="bg-white rounded-lg p-6 w-full max-w-md">
        <h2 class="text-xl font-semibold mb-4">Add New User</h2>
        <form @submit.prevent="addUser" class="space-y-4">
          <div>
            <label class="block text-sm font-medium text-gray-700 mb-1">Name</label>
            <input v-model="newUser.name" type="text" required class="input-field" />
          </div>
          <div>
            <label class="block text-sm font-medium text-gray-700 mb-1">Email</label>
            <input v-model="newUser.email" type="email" required class="input-field" />
          </div>
          <div>
            <label class="block text-sm font-medium text-gray-700 mb-1">Role</label>
            <select v-model="newUser.role" required class="input-field">
              <option value="user">User</option>
              <option value="admin">Admin</option>
            </select>
          </div>
          <div class="flex justify-end space-x-3 pt-4">
            <button type="button" @click="showAddUserModal = false" class="btn-secondary">Cancel</button>
            <button type="submit" class="btn-primary">Add User</button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script setup>
import { UserIcon } from '@heroicons/vue/24/outline'

definePageMeta({
  layout: 'admin'
})

const selectedRole = ref('all')
const searchQuery = ref('')
const showAddUserModal = ref(false)

const newUser = ref({
  name: '',
  email: '',
  role: 'user'
})

// Mock users data
const users = ref([
  {
    id: 1,
    name: 'John Doe',
    email: 'john@example.com',
    role: 'user',
    status: 'active',
    joinedDate: '2024-01-15'
  },
  {
    id: 2,
    name: 'Jane Smith',
    email: 'jane@example.com',
    role: 'user',
    status: 'active',
    joinedDate: '2024-02-20'
  },
  {
    id: 3,
    name: 'Admin User',
    email: 'admin@stylehub.com',
    role: 'admin',
    status: 'active',
    joinedDate: '2023-12-01'
  },
  {
    id: 4,
    name: 'Bob Johnson',
    email: 'bob@example.com',
    role: 'user',
    status: 'inactive',
    joinedDate: '2024-03-10'
  }
])

const filteredUsers = computed(() => {
  let result = users.value

  if (selectedRole.value !== 'all') {
    result = result.filter(user => user.role === selectedRole.value)
  }

  if (searchQuery.value) {
    const query = searchQuery.value.toLowerCase()
    result = result.filter(user =>
      user.name.toLowerCase().includes(query) ||
      user.email.toLowerCase().includes(query)
    )
  }

  return result
})

const addUser = () => {
  const user = {
    ...newUser.value,
    id: Math.max(...users.value.map(u => u.id)) + 1,
    status: 'active',
    joinedDate: new Date().toISOString().split('T')[0]
  }
  
  users.value.push(user)
  showAddUserModal.value = false
  newUser.value = { name: '', email: '', role: 'user' }
}

const editUser = (user) => {
  // In a real app, this would open an edit modal or navigate to edit page
  alert(`Edit user: ${user.name}`)
}

const toggleUserStatus = (user) => {
  user.status = user.status === 'active' ? 'inactive' : 'active'
}

useHead({
  title: 'Users - Admin Dashboard',
  meta: [
    { name: 'description', content: 'Manage users in the admin dashboard.' }
  ]
})
</script>