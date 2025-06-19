<template>
  <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
    <div class="text-center mb-12">
      <h1 class="text-4xl font-bold text-gray-900 mb-4">Size Guide</h1>
      <p class="text-xl text-gray-600">Find your perfect fit with our comprehensive sizing charts and measurement guide.</p>
    </div>

    <div class="space-y-12">
      <!-- How to Measure -->
      <div class="card-elevated p-8">
        <h2 class="text-2xl font-semibold mb-6 flex items-center">
          <ScaleIcon class="h-6 w-6 mr-3 text-blue-600" />
          How to Measure Yourself
        </h2>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h3 class="font-semibold text-lg mb-4">Measurement Tips</h3>
            <ul class="space-y-3 text-gray-600">
              <li class="flex items-start">
                <CheckIcon class="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                Use a soft measuring tape for accurate measurements
              </li>
              <li class="flex items-start">
                <CheckIcon class="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                Measure over your undergarments, not over clothes
              </li>
              <li class="flex items-start">
                <CheckIcon class="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                Keep the tape snug but not tight
              </li>
              <li class="flex items-start">
                <CheckIcon class="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                Stand straight and breathe normally
              </li>
              <li class="flex items-start">
                <CheckIcon class="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                Have someone help you for best results
              </li>
            </ul>
          </div>
          <div>
            <h3 class="font-semibold text-lg mb-4">Key Measurements</h3>
            <div class="space-y-4">
              <div class="p-4 bg-gray-50 rounded-lg">
                <h4 class="font-medium mb-2">Chest/Bust</h4>
                <p class="text-sm text-gray-600">Measure around the fullest part of your chest/bust</p>
              </div>
              <div class="p-4 bg-gray-50 rounded-lg">
                <h4 class="font-medium mb-2">Waist</h4>
                <p class="text-sm text-gray-600">Measure around your natural waistline</p>
              </div>
              <div class="p-4 bg-gray-50 rounded-lg">
                <h4 class="font-medium mb-2">Hips</h4>
                <p class="text-sm text-gray-600">Measure around the fullest part of your hips</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Women's Sizing -->
      <div class="card-elevated p-8">
        <h2 class="text-2xl font-semibold mb-6 flex items-center">
          <UserIcon class="h-6 w-6 mr-3 text-pink-600" />
          Women's Sizing
        </h2>
        
        <!-- Women's Clothing -->
        <div class="mb-8">
          <h3 class="font-semibold text-lg mb-4">Clothing Sizes</h3>
          <div class="overflow-x-auto">
            <table class="min-w-full border border-gray-200 rounded-lg">
              <thead class="bg-gray-50">
                <tr>
                  <th class="px-4 py-3 text-left text-sm font-medium text-gray-900">Size</th>
                  <th class="px-4 py-3 text-left text-sm font-medium text-gray-900">Bust (inches)</th>
                  <th class="px-4 py-3 text-left text-sm font-medium text-gray-900">Waist (inches)</th>
                  <th class="px-4 py-3 text-left text-sm font-medium text-gray-900">Hips (inches)</th>
                </tr>
              </thead>
              <tbody class="divide-y divide-gray-200">
                <tr><td class="px-4 py-3 font-medium">XS</td><td class="px-4 py-3">30-32</td><td class="px-4 py-3">24-26</td><td class="px-4 py-3">34-36</td></tr>
                <tr><td class="px-4 py-3 font-medium">S</td><td class="px-4 py-3">32-34</td><td class="px-4 py-3">26-28</td><td class="px-4 py-3">36-38</td></tr>
                <tr><td class="px-4 py-3 font-medium">M</td><td class="px-4 py-3">34-36</td><td class="px-4 py-3">28-30</td><td class="px-4 py-3">38-40</td></tr>
                <tr><td class="px-4 py-3 font-medium">L</td><td class="px-4 py-3">36-38</td><td class="px-4 py-3">30-32</td><td class="px-4 py-3">40-42</td></tr>
                <tr><td class="px-4 py-3 font-medium">XL</td><td class="px-4 py-3">38-40</td><td class="px-4 py-3">32-34</td><td class="px-4 py-3">42-44</td></tr>
                <tr><td class="px-4 py-3 font-medium">XXL</td><td class="px-4 py-3">40-42</td><td class="px-4 py-3">34-36</td><td class="px-4 py-3">44-46</td></tr>
              </tbody>
            </table>
          </div>
        </div>

        <!-- Women's Shoes -->
        <div>
          <h3 class="font-semibold text-lg mb-4">Shoe Sizes</h3>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div class="overflow-x-auto">
              <table class="min-w-full border border-gray-200 rounded-lg">
                <thead class="bg-gray-50">
                  <tr>
                    <th class="px-4 py-3 text-left text-sm font-medium text-gray-900">US Size</th>
                    <th class="px-4 py-3 text-left text-sm font-medium text-gray-900">Length (inches)</th>
                  </tr>
                </thead>
                <tbody class="divide-y divide-gray-200">
                  <tr><td class="px-4 py-3 font-medium">6</td><td class="px-4 py-3">9.25</td></tr>
                  <tr><td class="px-4 py-3 font-medium">7</td><td class="px-4 py-3">9.5</td></tr>
                  <tr><td class="px-4 py-3 font-medium">8</td><td class="px-4 py-3">9.75</td></tr>
                  <tr><td class="px-4 py-3 font-medium">9</td><td class="px-4 py-3">10</td></tr>
                  <tr><td class="px-4 py-3 font-medium">10</td><td class="px-4 py-3">10.25</td></tr>
                  <tr><td class="px-4 py-3 font-medium">11</td><td class="px-4 py-3">10.5</td></tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>

      <!-- Men's Sizing -->
      <div class="card-elevated p-8">
        <h2 class="text-2xl font-semibold mb-6 flex items-center">
          <UserIcon class="h-6 w-6 mr-3 text-blue-600" />
          Men's Sizing
        </h2>
        
        <!-- Men's Clothing -->
        <div class="mb-8">
          <h3 class="font-semibold text-lg mb-4">Clothing Sizes</h3>
          <div class="overflow-x-auto">
            <table class="min-w-full border border-gray-200 rounded-lg">
              <thead class="bg-gray-50">
                <tr>
                  <th class="px-4 py-3 text-left text-sm font-medium text-gray-900">Size</th>
                  <th class="px-4 py-3 text-left text-sm font-medium text-gray-900">Chest (inches)</th>
                  <th class="px-4 py-3 text-left text-sm font-medium text-gray-900">Waist (inches)</th>
                  <th class="px-4 py-3 text-left text-sm font-medium text-gray-900">Neck (inches)</th>
                </tr>
              </thead>
              <tbody class="divide-y divide-gray-200">
                <tr><td class="px-4 py-3 font-medium">S</td><td class="px-4 py-3">34-36</td><td class="px-4 py-3">28-30</td><td class="px-4 py-3">14-14.5</td></tr>
                <tr><td class="px-4 py-3 font-medium">M</td><td class="px-4 py-3">38-40</td><td class="px-4 py-3">32-34</td><td class="px-4 py-3">15-15.5</td></tr>
                <tr><td class="px-4 py-3 font-medium">L</td><td class="px-4 py-3">42-44</td><td class="px-4 py-3">36-38</td><td class="px-4 py-3">16-16.5</td></tr>
                <tr><td class="px-4 py-3 font-medium">XL</td><td class="px-4 py-3">46-48</td><td class="px-4 py-3">40-42</td><td class="px-4 py-3">17-17.5</td></tr>
                <tr><td class="px-4 py-3 font-medium">XXL</td><td class="px-4 py-3">50-52</td><td class="px-4 py-3">44-46</td><td class="px-4 py-3">18-18.5</td></tr>
              </tbody>
            </table>
          </div>
        </div>

        <!-- Men's Shoes -->
        <div>
          <h3 class="font-semibold text-lg mb-4">Shoe Sizes</h3>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div class="overflow-x-auto">
              <table class="min-w-full border border-gray-200 rounded-lg">
                <thead class="bg-gray-50">
                  <tr>
                    <th class="px-4 py-3 text-left text-sm font-medium text-gray-900">US Size</th>
                    <th class="px-4 py-3 text-left text-sm font-medium text-gray-900">Length (inches)</th>
                  </tr>
                </thead>
                <tbody class="divide-y divide-gray-200">
                  <tr><td class="px-4 py-3 font-medium">7</td><td class="px-4 py-3">10</td></tr>
                  <tr><td class="px-4 py-3 font-medium">8</td><td class="px-4 py-3">10.25</td></tr>
                  <tr><td class="px-4 py-3 font-medium">9</td><td class="px-4 py-3">10.5</td></tr>
                  <tr><td class="px-4 py-3 font-medium">10</td><td class="px-4 py-3">10.75</td></tr>
                  <tr><td class="px-4 py-3 font-medium">11</td><td class="px-4 py-3">11</td></tr>
                  <tr><td class="px-4 py-3 font-medium">12</td><td class="px-4 py-3">11.25</td></tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>

      <!-- Kids Sizing -->
      <div class="card-elevated p-8">
        <h2 class="text-2xl font-semibold mb-6 flex items-center">
          <UserIcon class="h-6 w-6 mr-3 text-green-600" />
          Kids' Sizing
        </h2>
        
        <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
          <!-- Kids Clothing -->
          <div>
            <h3 class="font-semibold text-lg mb-4">Clothing Sizes</h3>
            <div class="overflow-x-auto">
              <table class="min-w-full border border-gray-200 rounded-lg">
                <thead class="bg-gray-50">
                  <tr>
                    <th class="px-4 py-3 text-left text-sm font-medium text-gray-900">Size</th>
                    <th class="px-4 py-3 text-left text-sm font-medium text-gray-900">Age</th>
                    <th class="px-4 py-3 text-left text-sm font-medium text-gray-900">Height (inches)</th>
                  </tr>
                </thead>
                <tbody class="divide-y divide-gray-200">
                  <tr><td class="px-4 py-3 font-medium">XS</td><td class="px-4 py-3">4-5</td><td class="px-4 py-3">39-42</td></tr>
                  <tr><td class="px-4 py-3 font-medium">S</td><td class="px-4 py-3">6-7</td><td class="px-4 py-3">43-46</td></tr>
                  <tr><td class="px-4 py-3 font-medium">M</td><td class="px-4 py-3">8-9</td><td class="px-4 py-3">47-50</td></tr>
                  <tr><td class="px-4 py-3 font-medium">L</td><td class="px-4 py-3">10-11</td><td class="px-4 py-3">51-54</td></tr>
                  <tr><td class="px-4 py-3 font-medium">XL</td><td class="px-4 py-3">12-13</td><td class="px-4 py-3">55-58</td></tr>
                </tbody>
              </table>
            </div>
          </div>

          <!-- Kids Shoes -->
          <div>
            <h3 class="font-semibold text-lg mb-4">Shoe Sizes</h3>
            <div class="overflow-x-auto">
              <table class="min-w-full border border-gray-200 rounded-lg">
                <thead class="bg-gray-50">
                  <tr>
                    <th class="px-4 py-3 text-left text-sm font-medium text-gray-900">US Size</th>
                    <th class="px-4 py-3 text-left text-sm font-medium text-gray-900">Age</th>
                    <th class="px-4 py-3 text-left text-sm font-medium text-gray-900">Length (inches)</th>
                  </tr>
                </thead>
                <tbody class="divide-y divide-gray-200">
                  <tr><td class="px-4 py-3 font-medium">11</td><td class="px-4 py-3">4-5</td><td class="px-4 py-3">6.5</td></tr>
                  <tr><td class="px-4 py-3 font-medium">12</td><td class="px-4 py-3">5-6</td><td class="px-4 py-3">7</td></tr>
                  <tr><td class="px-4 py-3 font-medium">13</td><td class="px-4 py-3">6-7</td><td class="px-4 py-3">7.25</td></tr>
                  <tr><td class="px-4 py-3 font-medium">1</td><td class="px-4 py-3">7-8</td><td class="px-4 py-3">7.5</td></tr>
                  <tr><td class="px-4 py-3 font-medium">2</td><td class="px-4 py-3">8-9</td><td class="px-4 py-3">8</td></tr>
                  <tr><td class="px-4 py-3 font-medium">3</td><td class="px-4 py-3">9-10</td><td class="px-4 py-3">8.25</td></tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>

      <!-- Fit Guide -->
      <div class="card-elevated p-8">
        <h2 class="text-2xl font-semibold mb-6 flex items-center">
          <AdjustmentsHorizontalIcon class="h-6 w-6 mr-3 text-purple-600" />
          Fit Guide
        </h2>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div class="text-center p-6 border border-gray-200 rounded-lg">
            <div class="p-3 bg-blue-100 rounded-full w-fit mx-auto mb-4">
              <ArrowsPointingInIcon class="h-8 w-8 text-blue-600" />
            </div>
            <h3 class="font-semibold text-lg mb-2">Slim Fit</h3>
            <p class="text-gray-600">Close to body, tailored silhouette with minimal ease</p>
          </div>
          
          <div class="text-center p-6 border border-gray-200 rounded-lg">
            <div class="p-3 bg-green-100 rounded-full w-fit mx-auto mb-4">
              <ArrowsPointingOutIcon class="h-8 w-8 text-green-600" />
            </div>
            <h3 class="font-semibold text-lg mb-2">Regular Fit</h3>
            <p class="text-gray-600">Comfortable fit with room to move, not too tight or loose</p>
          </div>
          
          <div class="text-center p-6 border border-gray-200 rounded-lg">
            <div class="p-3 bg-orange-100 rounded-full w-fit mx-auto mb-4">
              <ArrowsPointingOutIcon class="h-8 w-8 text-orange-600" />
            </div>
            <h3 class="font-semibold text-lg mb-2">Relaxed Fit</h3>
            <p class="text-gray-600">Loose, comfortable fit with extra room for movement</p>
          </div>
        </div>
      </div>

      <!-- Size Conversion -->
      <div class="card-elevated p-8">
        <h2 class="text-2xl font-semibold mb-6 flex items-center">
          <GlobeAltIcon class="h-6 w-6 mr-3 text-indigo-600" />
          International Size Conversion
        </h2>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h3 class="font-semibold text-lg mb-4">Women's Clothing</h3>
            <div class="overflow-x-auto">
              <table class="min-w-full border border-gray-200 rounded-lg">
                <thead class="bg-gray-50">
                  <tr>
                    <th class="px-4 py-3 text-left text-sm font-medium text-gray-900">US</th>
                    <th class="px-4 py-3 text-left text-sm font-medium text-gray-900">UK</th>
                    <th class="px-4 py-3 text-left text-sm font-medium text-gray-900">EU</th>
                  </tr>
                </thead>
                <tbody class="divide-y divide-gray-200">
                  <tr><td class="px-4 py-3">XS</td><td class="px-4 py-3">6</td><td class="px-4 py-3">32</td></tr>
                  <tr><td class="px-4 py-3">S</td><td class="px-4 py-3">8</td><td class="px-4 py-3">34</td></tr>
                  <tr><td class="px-4 py-3">M</td><td class="px-4 py-3">10</td><td class="px-4 py-3">36</td></tr>
                  <tr><td class="px-4 py-3">L</td><td class="px-4 py-3">12</td><td class="px-4 py-3">38</td></tr>
                  <tr><td class="px-4 py-3">XL</td><td class="px-4 py-3">14</td><td class="px-4 py-3">40</td></tr>
                </tbody>
              </table>
            </div>
          </div>
          
          <div>
            <h3 class="font-semibold text-lg mb-4">Men's Clothing</h3>
            <div class="overflow-x-auto">
              <table class="min-w-full border border-gray-200 rounded-lg">
                <thead class="bg-gray-50">
                  <tr>
                    <th class="px-4 py-3 text-left text-sm font-medium text-gray-900">US</th>
                    <th class="px-4 py-3 text-left text-sm font-medium text-gray-900">UK</th>
                    <th class="px-4 py-3 text-left text-sm font-medium text-gray-900">EU</th>
                  </tr>
                </thead>
                <tbody class="divide-y divide-gray-200">
                  <tr><td class="px-4 py-3">S</td><td class="px-4 py-3">36</td><td class="px-4 py-3">46</td></tr>
                  <tr><td class="px-4 py-3">M</td><td class="px-4 py-3">38</td><td class="px-4 py-3">48</td></tr>
                  <tr><td class="px-4 py-3">L</td><td class="px-4 py-3">40</td><td class="px-4 py-3">50</td></tr>
                  <tr><td class="px-4 py-3">XL</td><td class="px-4 py-3">42</td><td class="px-4 py-3">52</td></tr>
                  <tr><td class="px-4 py-3">XXL</td><td class="px-4 py-3">44</td><td class="px-4 py-3">54</td></tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>

      <!-- Contact Section -->
      <div class="card-elevated p-8 text-center">
        <h2 class="text-2xl font-semibold mb-4">Still Need Help Finding Your Size?</h2>
        <p class="text-gray-600 mb-6">
          Our sizing experts are here to help you find the perfect fit. Contact us for personalized sizing assistance.
        </p>
        <div class="flex flex-col sm:flex-row gap-4 justify-center">
          <NuxtLink to="/contact" class="btn-primary">
            Contact Size Expert
          </NuxtLink>
          <button class="btn-secondary">
            Size Recommendation Tool
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { 
  ScaleIcon,
  CheckIcon,
  UserIcon,
  AdjustmentsHorizontalIcon,
  ArrowsPointingInIcon,
  ArrowsPointingOutIcon,
  GlobeAltIcon
} from '@heroicons/vue/24/outline'

useHead({
  title: 'Size Guide - StyleHub',
  meta: [
    { name: 'description', content: 'Find your perfect fit with StyleHub\'s comprehensive size guide. Detailed sizing charts for men, women, and kids clothing and shoes.' }
  ]
})
</script>