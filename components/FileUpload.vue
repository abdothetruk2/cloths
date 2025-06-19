<template>
  <div class="space-y-4">
    <div class="flex items-center justify-center w-full">
      <label 
        for="file-upload" 
        class="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 hover:bg-gray-100 transition-colors duration-200"
        :class="{ 'border-blue-500 bg-blue-50': isDragOver }"
        @drop="handleDrop"
        @dragover="handleDragOver"
        @dragleave="handleDragLeave"
      >
        <div class="flex flex-col items-center justify-center pt-5 pb-6">
          <CloudArrowUpIcon class="w-8 h-8 mb-4 text-gray-500" />
          <p class="mb-2 text-sm text-gray-500">
            <span class="font-semibold">Click to upload</span> or drag and drop
          </p>
          <p class="text-xs text-gray-500">PNG, JPG, GIF up to 10MB</p>
        </div>
        <input 
          id="file-upload" 
          type="file" 
          class="hidden" 
          accept="image/*"
          @change="handleFileSelect"
          multiple
        />
      </label>
    </div>

    <!-- Preview uploaded images -->
    <div v-if="uploadedImages.length > 0" class="grid grid-cols-2 md:grid-cols-3 gap-4">
      <div 
        v-for="(image, index) in uploadedImages" 
        :key="index"
        class="relative group"
      >
        <img 
          :src="image.url" 
          :alt="`Upload ${index + 1}`"
          class="w-full h-32 object-cover rounded-lg border border-gray-200"
        />
        <button
          @click="removeImage(index)"
          class="absolute top-2 right-2 bg-red-500 text-white rounded-full p-1 opacity-0 group-hover:opacity-100 transition-opacity duration-200"
        >
          <XMarkIcon class="w-4 h-4" />
        </button>
        <div class="absolute bottom-2 left-2 bg-black bg-opacity-50 text-white text-xs px-2 py-1 rounded">
          {{ image.name }}
        </div>
      </div>
    </div>

    <!-- Upload progress -->
    <div v-if="isUploading" class="w-full bg-gray-200 rounded-full h-2">
      <div 
        class="bg-blue-600 h-2 rounded-full transition-all duration-300"
        :style="{ width: `${uploadProgress}%` }"
      ></div>
    </div>
  </div>
</template>

<script setup>
import { CloudArrowUpIcon, XMarkIcon } from '@heroicons/vue/24/outline'

const props = defineProps({
  modelValue: {
    type: Array,
    default: () => []
  },
  maxFiles: {
    type: Number,
    default: 5
  }
})

const emit = defineEmits(['update:modelValue'])

const uploadedImages = ref([])
const isDragOver = ref(false)
const isUploading = ref(false)
const uploadProgress = ref(0)

const handleFileSelect = (event) => {
  const files = Array.from(event.target.files)
  processFiles(files)
}

const handleDrop = (event) => {
  event.preventDefault()
  isDragOver.value = false
  const files = Array.from(event.dataTransfer.files)
  processFiles(files)
}

const handleDragOver = (event) => {
  event.preventDefault()
  isDragOver.value = true
}

const handleDragLeave = () => {
  isDragOver.value = false
}

const processFiles = async (files) => {
  const imageFiles = files.filter(file => file.type.startsWith('image/'))
  
  if (uploadedImages.value.length + imageFiles.length > props.maxFiles) {
    alert(`Maximum ${props.maxFiles} files allowed`)
    return
  }

  isUploading.value = true
  uploadProgress.value = 0

  for (let i = 0; i < imageFiles.length; i++) {
    const file = imageFiles[i]
    
    // Simulate upload progress
    const progressInterval = setInterval(() => {
      uploadProgress.value += 10
    }, 100)

    // Create preview URL
    const url = URL.createObjectURL(file)
    
    uploadedImages.value.push({
      name: file.name,
      url: url,
      file: file
    })

    // Simulate upload delay
    await new Promise(resolve => setTimeout(resolve, 1000))
    clearInterval(progressInterval)
    uploadProgress.value = ((i + 1) / imageFiles.length) * 100
  }

  isUploading.value = false
  uploadProgress.value = 0
  
  // Emit the uploaded images
  emit('update:modelValue', uploadedImages.value)
}

const removeImage = (index) => {
  const image = uploadedImages.value[index]
  URL.revokeObjectURL(image.url)
  uploadedImages.value.splice(index, 1)
  emit('update:modelValue', uploadedImages.value)
}

// Clean up object URLs when component is unmounted
onUnmounted(() => {
  uploadedImages.value.forEach(image => {
    URL.revokeObjectURL(image.url)
  })
})
</script>