import { defineStore } from 'pinia'

export const useAuthStore = defineStore('auth', () => {
  const user = ref(null)
  const isLoggedIn = computed(() => !!user.value)
  const isAdmin = computed(() => user.value?.role === 'admin')

  const login = async (email, password) => {
    try {
      // Mock authentication - replace with real API
      if (email === 'admin' && password === 'admin') {
        user.value = {
          id: 1,
          email: 'admin@stylehub.com',
          name: 'Admin User',
          role: 'admin'
        }
        return { success: true }
      } else if (email === 'user@example.com' && password === 'user123') {
        user.value = {
          id: 2,
          email: 'user@example.com',
          name: 'John Doe',
          role: 'user'
        }
        return { success: true }
      }
      return { success: false, error: 'Invalid credentials' }
    } catch (error) {
      return { success: false, error: error.message }
    }
  }

  const logout = () => {
    user.value = null
    navigateTo('/')
  }

  const register = async (userData) => {
    try {
      // Mock registration - replace with real API
      user.value = {
        id: Date.now(),
        ...userData,
        role: 'user'
      }
      return { success: true }
    } catch (error) {
      return { success: false, error: error.message }
    }
  }

  return {
    user: readonly(user),
    isLoggedIn,
    isAdmin,
    login,
    logout,
    register
  }
})