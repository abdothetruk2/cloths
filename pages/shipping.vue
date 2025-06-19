<template>
  <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
    <div class="text-center mb-12">
      <h1 class="text-4xl font-bold text-gray-900 mb-4">Shipping Information</h1>
      <p class="text-xl text-gray-600">Everything you need to know about our shipping policies and delivery options.</p>
    </div>

    <div class="space-y-12">
      <!-- Shipping Options -->
      <div class="card-elevated p-8">
        <h2 class="text-2xl font-semibold mb-6 flex items-center">
          <TruckIcon class="h-6 w-6 mr-3 text-blue-600" />
          Shipping Options
        </h2>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div class="border border-gray-200 rounded-lg p-6 text-center">
            <div class="p-3 bg-green-100 rounded-full w-fit mx-auto mb-4">
              <CheckCircleIcon class="h-8 w-8 text-green-600" />
            </div>
            <h3 class="font-semibold text-lg mb-2">Standard Shipping</h3>
            <p class="text-gray-600 mb-3">5-7 business days</p>
            <p class="text-2xl font-bold text-gray-900">$9.99</p>
            <p class="text-sm text-gray-500 mt-2">FREE on orders over $50</p>
          </div>
          
          <div class="border border-gray-200 rounded-lg p-6 text-center">
            <div class="p-3 bg-blue-100 rounded-full w-fit mx-auto mb-4">
              <BoltIcon class="h-8 w-8 text-blue-600" />
            </div>
            <h3 class="font-semibold text-lg mb-2">Express Shipping</h3>
            <p class="text-gray-600 mb-3">2-3 business days</p>
            <p class="text-2xl font-bold text-gray-900">$19.99</p>
            <p class="text-sm text-gray-500 mt-2">Available nationwide</p>
          </div>
          
          <div class="border border-gray-200 rounded-lg p-6 text-center">
            <div class="p-3 bg-purple-100 rounded-full w-fit mx-auto mb-4">
              <RocketLaunchIcon class="h-8 w-8 text-purple-600" />
            </div>
            <h3 class="font-semibold text-lg mb-2">Overnight</h3>
            <p class="text-gray-600 mb-3">Next business day</p>
            <p class="text-2xl font-bold text-gray-900">$39.99</p>
            <p class="text-sm text-gray-500 mt-2">Order by 2PM EST</p>
          </div>
        </div>
      </div>

      <!-- Processing Time -->
      <div class="card-elevated p-8">
        <h2 class="text-2xl font-semibold mb-6 flex items-center">
          <ClockIcon class="h-6 w-6 mr-3 text-orange-600" />
          Processing Time
        </h2>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h3 class="font-semibold text-lg mb-4">Order Processing</h3>
            <ul class="space-y-3 text-gray-600">
              <li class="flex items-start">
                <CheckIcon class="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                Orders placed before 2PM EST ship same day
              </li>
              <li class="flex items-start">
                <CheckIcon class="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                Orders placed after 2PM EST ship next business day
              </li>
              <li class="flex items-start">
                <CheckIcon class="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                Weekend orders ship on Monday
              </li>
              <li class="flex items-start">
                <CheckIcon class="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                Holiday processing may take 1-2 additional days
              </li>
            </ul>
          </div>
          <div>
            <h3 class="font-semibold text-lg mb-4">Tracking Information</h3>
            <ul class="space-y-3 text-gray-600">
              <li class="flex items-start">
                <CheckIcon class="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                Tracking number sent via email once shipped
              </li>
              <li class="flex items-start">
                <CheckIcon class="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                Real-time tracking available 24/7
              </li>
              <li class="flex items-start">
                <CheckIcon class="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                SMS notifications available upon request
              </li>
              <li class="flex items-start">
                <CheckIcon class="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                Track orders in your account dashboard
              </li>
            </ul>
          </div>
        </div>
      </div>

      <!-- International Shipping -->
      <div class="card-elevated p-8">
        <h2 class="text-2xl font-semibold mb-6 flex items-center">
          <GlobeAltIcon class="h-6 w-6 mr-3 text-indigo-600" />
          International Shipping
        </h2>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h3 class="font-semibold text-lg mb-4">Available Countries</h3>
            <p class="text-gray-600 mb-4">We ship to over 100 countries worldwide including:</p>
            <div class="grid grid-cols-2 gap-2 text-sm text-gray-600">
              <div>• Canada</div>
              <div>• United Kingdom</div>
              <div>• Australia</div>
              <div>• Germany</div>
              <div>• France</div>
              <div>• Japan</div>
              <div>• And many more...</div>
            </div>
          </div>
          <div>
            <h3 class="font-semibold text-lg mb-4">International Rates & Times</h3>
            <div class="space-y-3">
              <div class="flex justify-between items-center p-3 bg-gray-50 rounded">
                <span class="font-medium">Standard International</span>
                <div class="text-right">
                  <div class="font-semibold">$24.99</div>
                  <div class="text-sm text-gray-500">7-14 days</div>
                </div>
              </div>
              <div class="flex justify-between items-center p-3 bg-gray-50 rounded">
                <span class="font-medium">Express International</span>
                <div class="text-right">
                  <div class="font-semibold">$49.99</div>
                  <div class="text-sm text-gray-500">3-7 days</div>
                </div>
              </div>
            </div>
            <p class="text-sm text-gray-500 mt-4">
              * Customs fees and duties may apply and are the responsibility of the recipient.
            </p>
          </div>
        </div>
      </div>

      <!-- Shipping Restrictions -->
      <div class="card-elevated p-8">
        <h2 class="text-2xl font-semibold mb-6 flex items-center">
          <ExclamationTriangleIcon class="h-6 w-6 mr-3 text-red-600" />
          Important Information
        </h2>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h3 class="font-semibold text-lg mb-4">Shipping Restrictions</h3>
            <ul class="space-y-2 text-gray-600">
              <li>• We do not ship to P.O. boxes for express delivery</li>
              <li>• Some remote areas may require additional delivery time</li>
              <li>• Certain products may have shipping restrictions</li>
              <li>• Weather conditions may cause delays</li>
            </ul>
          </div>
          <div>
            <h3 class="font-semibold text-lg mb-4">Delivery Requirements</h3>
            <ul class="space-y-2 text-gray-600">
              <li>• Signature required for orders over $200</li>
              <li>• Someone must be available to receive the package</li>
              <li>• Packages may be left with neighbors if authorized</li>
              <li>• Delivery attempts made up to 3 times</li>
            </ul>
          </div>
        </div>
      </div>

      <!-- Contact Section -->
      <div class="card-elevated p-8 text-center">
        <h2 class="text-2xl font-semibold mb-4">Need Help with Shipping?</h2>
        <p class="text-gray-600 mb-6">
          Our customer service team is here to help with any shipping questions or concerns.
        </p>
        <div class="flex flex-col sm:flex-row gap-4 justify-center">
          <NuxtLink to="/contact" class="btn-primary">
            Contact Support
          </NuxtLink>
          <a href="tel:+15551234567" class="btn-secondary">
            Call (555) 123-4567
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { 
  TruckIcon,
  CheckCircleIcon,
  BoltIcon,
  RocketLaunchIcon,
  ClockIcon,
  CheckIcon,
  GlobeAltIcon,
  ExclamationTriangleIcon
} from '@heroicons/vue/24/outline'

useHead({
  title: 'Shipping Information - StyleHub',
  meta: [
    { name: 'description', content: 'Learn about StyleHub shipping options, delivery times, and international shipping policies. Free shipping on orders over $50.' }
  ]
})
</script>