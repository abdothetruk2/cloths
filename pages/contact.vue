<template>
  <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
    <div class="text-center mb-12">
      <h1 class="text-4xl font-bold text-gray-900 mb-4">Contact Us</h1>
      <p class="text-xl text-gray-600">We'd love to hear from you. Get in touch with our team.</p>
    </div>

    <div class="grid grid-cols-1 lg:grid-cols-2 gap-12">
      <!-- Contact Form -->
      <div class="card-elevated p-8">
        <h2 class="text-2xl font-semibold mb-6">Send us a Message</h2>
        <form @submit.prevent="submitForm" class="space-y-6">
          <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label class="block text-sm font-medium text-gray-700 mb-2">First Name</label>
              <input v-model="form.firstName" type="text" required class="input-field" />
            </div>
            <div>
              <label class="block text-sm font-medium text-gray-700 mb-2">Last Name</label>
              <input v-model="form.lastName" type="text" required class="input-field" />
            </div>
          </div>
          
          <div>
            <label class="block text-sm font-medium text-gray-700 mb-2">Email</label>
            <input v-model="form.email" type="email" required class="input-field" />
          </div>
          
          <div>
            <label class="block text-sm font-medium text-gray-700 mb-2">Subject</label>
            <select v-model="form.subject" required class="input-field">
              <option value="">Select a subject</option>
              <option value="general">General Inquiry</option>
              <option value="order">Order Support</option>
              <option value="returns">Returns & Exchanges</option>
              <option value="shipping">Shipping Questions</option>
              <option value="product">Product Information</option>
              <option value="other">Other</option>
            </select>
          </div>
          
          <div>
            <label class="block text-sm font-medium text-gray-700 mb-2">Message</label>
            <textarea v-model="form.message" rows="5" required class="input-field resize-none" placeholder="Tell us how we can help you..."></textarea>
          </div>
          
          <button type="submit" :disabled="loading" class="w-full btn-primary disabled:opacity-50">
            {{ loading ? 'Sending...' : 'Send Message' }}
          </button>
        </form>
      </div>

      <!-- Contact Information -->
      <div class="space-y-8">
        <div class="card-elevated p-8">
          <h2 class="text-2xl font-semibold mb-6">Get in Touch</h2>
          <div class="space-y-6">
            <div class="flex items-start space-x-4">
              <div class="p-3 bg-blue-100 rounded-full">
                <PhoneIcon class="h-6 w-6 text-blue-600" />
              </div>
              <div>
                <h3 class="font-semibold text-gray-900">Phone</h3>
                <p class="text-gray-600">+1 (555) 123-4567</p>
                <p class="text-sm text-gray-500">Mon-Fri 9AM-6PM EST</p>
              </div>
            </div>
            
            <div class="flex items-start space-x-4">
              <div class="p-3 bg-green-100 rounded-full">
                <EnvelopeIcon class="h-6 w-6 text-green-600" />
              </div>
              <div>
                <h3 class="font-semibold text-gray-900">Email</h3>
                <p class="text-gray-600">support@stylehub.com</p>
                <p class="text-sm text-gray-500">We'll respond within 24 hours</p>
              </div>
            </div>
            
            <div class="flex items-start space-x-4">
              <div class="p-3 bg-purple-100 rounded-full">
                <MapPinIcon class="h-6 w-6 text-purple-600" />
              </div>
              <div>
                <h3 class="font-semibold text-gray-900">Address</h3>
                <p class="text-gray-600">123 Fashion Street<br>New York, NY 10001</p>
              </div>
            </div>
            
            <div class="flex items-start space-x-4">
              <div class="p-3 bg-yellow-100 rounded-full">
                <ChatBubbleLeftRightIcon class="h-6 w-6 text-yellow-600" />
              </div>
              <div>
                <h3 class="font-semibold text-gray-900">Live Chat</h3>
                <p class="text-gray-600">Available 24/7</p>
                <button class="text-blue-600 hover:text-blue-800 text-sm font-medium mt-1">
                  Start Chat →
                </button>
              </div>
            </div>
          </div>
        </div>

        <!-- FAQ Section -->
        <div class="card-elevated p-8">
          <h2 class="text-2xl font-semibold mb-6">Frequently Asked Questions</h2>
          <div class="space-y-4">
            <div>
              <h3 class="font-semibold text-gray-900 mb-2">How can I track my order?</h3>
              <p class="text-gray-600 text-sm">You can track your order by logging into your account and visiting the "My Orders" section.</p>
            </div>
            <div>
              <h3 class="font-semibold text-gray-900 mb-2">What is your return policy?</h3>
              <p class="text-gray-600 text-sm">We offer a 30-day return policy for all items in original condition. <NuxtLink to="/returns" class="text-blue-600 hover:text-blue-800">Learn more</NuxtLink></p>
            </div>
            <div>
              <h3 class="font-semibold text-gray-900 mb-2">Do you ship internationally?</h3>
              <p class="text-gray-600 text-sm">Yes, we ship to most countries worldwide. <NuxtLink to="/shipping" class="text-blue-600 hover:text-blue-800">View shipping info</NuxtLink></p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { 
  PhoneIcon, 
  EnvelopeIcon, 
  MapPinIcon, 
  ChatBubbleLeftRightIcon 
} from '@heroicons/vue/24/outline'

const loading = ref(false)

const form = ref({
  firstName: '',
  lastName: '',
  email: '',
  subject: '',
  message: ''
})

const submitForm = async () => {
  loading.value = true
  
  try {
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1500))
    
    // Show success message
    alert('Thank you for your message! We\'ll get back to you within 24 hours.')
    
    // Reset form
    form.value = {
      firstName: '',
      lastName: '',
      email: '',
      subject: '',
      message: ''
    }
  } catch (error) {
    alert('There was an error sending your message. Please try again.')
  } finally {
    loading.value = false
  }
}

useHead({
  title: 'Contact Us - StyleHub',
  meta: [
    { name: 'description', content: 'Get in touch with StyleHub. Contact our customer support team for any questions about orders, products, or services.' }
  ]
})
</script>