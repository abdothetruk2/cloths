<template>
  <div class="min-h-screen bg-gray-50 flex items-center justify-center px-4 sm:px-6 lg:px-8">
    <div class="max-w-md w-full text-center">
      <div class="mb-8">
        <ExclamationTriangleIcon class="h-24 w-24 text-red-500 mx-auto mb-4" />
        <h1 class="text-6xl font-bold text-gray-900 mb-2">{{ error.statusCode }}</h1>
        <h2 class="text-2xl font-semibold text-gray-700 mb-4">
          {{ getErrorTitle(error.statusCode) }}
        </h2>
        <p class="text-gray-600 mb-8">
          {{ error.statusMessage || getErrorMessage(error.statusCode) }}
        </p>
      </div>
      
      <div class="space-y-4">
        <button @click="handleError" class="w-full btn-primary">
          {{ getActionText(error.statusCode) }}
        </button>
        
        <NuxtLink to="/" class="w-full btn-secondary block text-center">
          Go to Homepage
        </NuxtLink>
        
        <button @click="goBack" class="w-full text-gray-600 hover:text-gray-800 transition-colors">
          ← Go Back
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ExclamationTriangleIcon } from '@heroicons/vue/24/outline'

const props = defineProps({
  error: Object
})

const getErrorTitle = (statusCode) => {
  const titles = {
    404: 'Page Not Found',
    403: 'Access Denied',
    500: 'Server Error',
    400: 'Bad Request'
  }
  return titles[statusCode] || 'Something went wrong'
}

const getErrorMessage = (statusCode) => {
  const messages = {
    404: 'The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.',
    403: 'You do not have permission to access this resource.',
    500: 'We are experiencing some technical difficulties. Please try again later.',
    400: 'The request could not be understood by the server.'
  }
  return messages[statusCode] || 'An unexpected error occurred.'
}

const getActionText = (statusCode) => {
  const actions = {
    404: 'Search Our Site',
    403: 'Sign In',
    500: 'Try Again',
    400: 'Try Again'
  }
  return actions[statusCode] || 'Try Again'
}

const handleError = () => {
  if (props.error.statusCode === 404) {
    navigateTo('/products')
  } else if (props.error.statusCode === 403) {
    navigateTo('/login')
  } else {
    clearError({ redirect: '/' })
  }
}

const goBack = () => {
  if (process.client && window.history.length > 1) {
    window.history.back()
  } else {
    navigateTo('/')
  }
}

useHead({
  title: `${props.error.statusCode} - ${getErrorTitle(props.error.statusCode)}`,
  meta: [
    { name: 'description', content: getErrorMessage(props.error.statusCode) }
  ]
})
</script>