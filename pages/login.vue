<template>
  <div class="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
    <div class="max-w-md w-full space-y-8">
      <div>
        <h2 class="mt-6 text-center text-3xl font-bold text-gray-900">
          {{ isLogin ? 'Sign in to your account' : 'Create your account' }}
        </h2>
      </div>
      
      <form @submit.prevent="handleSubmit" class="mt-8 space-y-6">
        <div class="space-y-4">
          <div v-if="!isLogin">
            <label class="block text-sm font-medium text-gray-700">Full Name</label>
            <input 
              v-model="form.name" 
              type="text" 
              required 
              class="input-field"
              placeholder="Enter your full name"
            />
          </div>
          
          <div>
            <label class="block text-sm font-medium text-gray-700">{{ isLogin ? 'Username/Email' : 'Email' }}</label>
            <input 
              v-model="form.email" 
              :type="isLogin ? 'text' : 'email'" 
              required 
              class="input-field"
              :placeholder="isLogin ? 'Enter username or email' : 'Enter your email'"
            />
          </div>
          
          <div>
            <label class="block text-sm font-medium text-gray-700">Password</label>
            <input 
              v-model="form.password" 
              type="password" 
              required 
              class="input-field"
              placeholder="Enter your password"
            />
          </div>
        </div>

        <div v-if="error" class="text-red-600 text-sm">{{ error }}</div>

        <button 
          type="submit" 
          :disabled="loading"
          class="w-full btn-primary disabled:opacity-50"
        >
          {{ loading ? 'Processing...' : (isLogin ? 'Sign In' : 'Sign Up') }}
        </button>

        <div class="text-center">
          <button 
            type="button"
            @click="toggleMode" 
            class="text-blue-600 hover:text-blue-500"
          >
            {{ isLogin ? "Don't have an account? Sign up" : "Already have an account? Sign in" }}
          </button>
        </div>
      </form>

      <!-- Demo Credentials -->
      <div class="bg-yellow-50 border border-yellow-200 rounded-lg p-4 mt-4">
        <h3 class="text-sm font-medium text-yellow-800 mb-2">Demo Credentials:</h3>
        <div class="text-xs text-yellow-700 space-y-1">
          <p><strong>Admin:</strong> admin / admin</p>
          <p><strong>User:</strong> user@example.com / user123</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
definePageMeta({
  layout: false
})

const authStore = useAuthStore()
const router = useRouter()

const isLogin = ref(true)
const loading = ref(false)
const error = ref('')

const form = ref({
  name: '',
  email: '',
  password: ''
})

const toggleMode = () => {
  isLogin.value = !isLogin.value
  error.value = ''
  form.value = { name: '', email: '', password: '' }
}

const handleSubmit = async () => {
  loading.value = true
  error.value = ''

  try {
    let result
    if (isLogin.value) {
      result = await authStore.login(form.value.email, form.value.password)
    } else {
      result = await authStore.register(form.value)
    }

    if (result.success) {
      router.push('/')
    } else {
      error.value = result.error
    }
  } catch (err) {
    error.value = 'An error occurred. Please try again.'
  } finally {
    loading.value = false
  }
}

useHead({
  title: 'Login - StyleHub',
  meta: [
    { name: 'description', content: 'Sign in to your StyleHub account.' }
  ]
})
</script>