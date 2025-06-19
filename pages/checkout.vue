<template>
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
    <h1 class="text-3xl font-bold mb-8">Checkout</h1>

    <div v-if="cartStore.items.length === 0" class="text-center py-12">
      <p class="text-gray-500 text-lg">Your cart is empty. Please add items before checkout.</p>
      <NuxtLink to="/products" class="btn-primary mt-4">Continue Shopping</NuxtLink>
    </div>

    <div v-else class="grid grid-cols-1 lg:grid-cols-2 gap-8">
      <!-- Checkout Form -->
      <div class="space-y-6">
        <!-- Shipping Information -->
        <div class="card p-6">
          <h2 class="text-xl font-semibold mb-4">Shipping Information</h2>
          <form @submit.prevent="processOrder" class="space-y-4">
            <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label class="block text-sm font-medium text-gray-700 mb-1">First Name</label>
                <input v-model="shippingInfo.firstName" type="text" required class="input-field" />
              </div>
              <div>
                <label class="block text-sm font-medium text-gray-700 mb-1">Last Name</label>
                <input v-model="shippingInfo.lastName" type="text" required class="input-field" />
              </div>
            </div>
            
            <div>
              <label class="block text-sm font-medium text-gray-700 mb-1">Email</label>
              <input v-model="shippingInfo.email" type="email" required class="input-field" />
            </div>
            
            <div>
              <label class="block text-sm font-medium text-gray-700 mb-1">Address</label>
              <input v-model="shippingInfo.address" type="text" required class="input-field" />
            </div>
            
            <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div>
                <label class="block text-sm font-medium text-gray-700 mb-1">City</label>
                <input v-model="shippingInfo.city" type="text" required class="input-field" />
              </div>
              <div>
                <label class="block text-sm font-medium text-gray-700 mb-1">State</label>
                <input v-model="shippingInfo.state" type="text" required class="input-field" />
              </div>
              <div>
                <label class="block text-sm font-medium text-gray-700 mb-1">ZIP Code</label>
                <input v-model="shippingInfo.zipCode" type="text" required class="input-field" />
              </div>
            </div>
          </form>
        </div>

        <!-- Payment Information -->
        <div class="card p-6">
          <h2 class="text-xl font-semibold mb-4">Payment Information</h2>
          <div class="space-y-4">
            <div>
              <label class="block text-sm font-medium text-gray-700 mb-1">Card Number</label>
              <input v-model="paymentInfo.cardNumber" type="text" placeholder="1234 5678 9012 3456" class="input-field" />
            </div>
            
            <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label class="block text-sm font-medium text-gray-700 mb-1">Expiry Date</label>
                <input v-model="paymentInfo.expiryDate" type="text" placeholder="MM/YY" class="input-field" />
              </div>
              <div>
                <label class="block text-sm font-medium text-gray-700 mb-1">CVV</label>
                <input v-model="paymentInfo.cvv" type="text" placeholder="123" class="input-field" />
              </div>
            </div>
            
            <div>
              <label class="block text-sm font-medium text-gray-700 mb-1">Cardholder Name</label>
              <input v-model="paymentInfo.cardholderName" type="text" class="input-field" />
            </div>
          </div>
        </div>

        <button 
          @click="processOrder"
          :disabled="processing"
          class="w-full btn-primary disabled:opacity-50"
        >
          {{ processing ? 'Processing...' : `Place Order - $${finalTotal.toFixed(2)}` }}
        </button>
      </div>

      <!-- Order Summary -->
      <div>
        <div class="card p-6 sticky top-4">
          <h2 class="text-xl font-semibold mb-4">Order Summary</h2>
          
          <div class="space-y-3 mb-4">
            <div v-for="item in cartStore.items" :key="item.cartId" class="flex justify-between text-sm">
              <span>{{ item.name }} ({{ item.quantity }}x)</span>
              <span>${{ (item.price * item.quantity).toFixed(2) }}</span>
            </div>
          </div>
          
          <div class="border-t pt-3 space-y-2">
            <div class="flex justify-between">
              <span>Subtotal</span>
              <span>${{ cartStore.totalPrice.toFixed(2) }}</span>
            </div>
            <div class="flex justify-between">
              <span>Shipping</span>
              <span>{{ cartStore.totalPrice >= 50 ? 'FREE' : '$9.99' }}</span>
            </div>
            <div class="flex justify-between">
              <span>Tax</span>
              <span>${{ (cartStore.totalPrice * 0.08).toFixed(2) }}</span>
            </div>
            <div class="border-t pt-2 flex justify-between font-semibold text-lg">
              <span>Total</span>
              <span>${{ finalTotal.toFixed(2) }}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const cartStore = useCartStore()
const router = useRouter()

const processing = ref(false)

const shippingInfo = ref({
  firstName: '',
  lastName: '',
  email: '',
  address: '',
  city: '',
  state: '',
  zipCode: ''
})

const paymentInfo = ref({
  cardNumber: '',
  expiryDate: '',
  cvv: '',
  cardholderName: ''
})

const finalTotal = computed(() => {
  const subtotal = cartStore.totalPrice
  const shipping = subtotal >= 50 ? 0 : 9.99
  const tax = subtotal * 0.08
  return subtotal + shipping + tax
})

const processOrder = async () => {
  processing.value = true
  
  try {
    // Mock order processing
    await new Promise(resolve => setTimeout(resolve, 2000))
    
    // Clear cart
    cartStore.clearCart()
    
    // Redirect to success page
    router.push('/order-success')
  } catch (error) {
    alert('Order processing failed. Please try again.')
  } finally {
    processing.value = false
  }
}

useHead({
  title: 'Checkout - StyleHub',
  meta: [
    { name: 'description', content: 'Complete your order securely.' }
  ]
})
</script>