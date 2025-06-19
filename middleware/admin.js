export default defineNuxtRouteMiddleware((to, from) => {
  const { isAdmin } = useAuthStore()
  
  if (!isAdmin) {
    throw createError({
      statusCode: 403,
      statusMessage: 'Access Denied'
    })
  }
})