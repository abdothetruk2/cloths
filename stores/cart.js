import { defineStore } from 'pinia'

export const useCartStore = defineStore('cart', () => {
  const items = ref([])

  const itemCount = computed(() => items.value.reduce((total, item) => total + item.quantity, 0))
  const totalPrice = computed(() => items.value.reduce((total, item) => total + (item.price * item.quantity), 0))

  const addItem = (product, size = 'M', color = 'Default') => {
    const existingItem = items.value.find(item => 
      item.id === product.id && item.size === size && item.color === color
    )

    if (existingItem) {
      existingItem.quantity++
    } else {
      items.value.push({
        ...product,
        size,
        color,
        quantity: 1,
        cartId: Date.now()
      })
    }
  }

  const removeItem = (cartId) => {
    const index = items.value.findIndex(item => item.cartId === cartId)
    if (index > -1) {
      items.value.splice(index, 1)
    }
  }

  const updateQuantity = (cartId, quantity) => {
    const item = items.value.find(item => item.cartId === cartId)
    if (item) {
      if (quantity <= 0) {
        removeItem(cartId)
      } else {
        item.quantity = quantity
      }
    }
  }

  const clearCart = () => {
    items.value = []
  }

  return {
    items: readonly(items),
    itemCount,
    totalPrice,
    addItem,
    removeItem,
    updateQuantity,
    clearCart
  }
})