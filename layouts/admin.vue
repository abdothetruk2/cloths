<template>
  <div class="min-h-screen bg-gray-100">
    <div class="flex">
      <AdminSidebar />
      <main class="flex-1 ml-64">
        <div class="py-6">
          <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <slot />
          </div>
        </div>
      </main>
    </div>
  </div>
</template>

<script setup>
const { isAdmin } = useAuthStore()

// Redirect if not admin
if (!isAdmin) {
  throw createError({
    statusCode: 403,
    statusMessage: 'Access Denied'
  })
}
</script>