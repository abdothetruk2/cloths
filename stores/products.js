import { defineStore } from 'pinia'

export const useProductsStore = defineStore('products', () => {
  const products = ref([
    {
      id: 1,
      name: 'Classic Cotton T-Shirt',
      price: 29.99,
      category: 'men',
      image: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'Comfortable cotton t-shirt perfect for everyday wear.',
      sizes: ['S', 'M', 'L', 'XL'],
      colors: ['White', 'Black', 'Navy'],
      stock: 50
    },
    {
      id: 2,
      name: 'Elegant Summer Dress',
      price: 79.99,
      category: 'women',
      image: 'https://images.pexels.com/photos/1536619/pexels-photo-1536619.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'Beautiful flowing dress perfect for summer occasions.',
      sizes: ['XS', 'S', 'M', 'L'],
      colors: ['Blue', 'Pink', 'White'],
      stock: 30
    },
    {
      id: 3,
      name: 'Denim Jacket',
      price: 89.99,
      category: 'men',
      image: 'https://images.pexels.com/photos/1082529/pexels-photo-1082529.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'Classic denim jacket that never goes out of style.',
      sizes: ['S', 'M', 'L', 'XL'],
      colors: ['Blue', 'Black'],
      stock: 25
    },
    {
      id: 4,
      name: 'Kids Rainbow Hoodie',
      price: 39.99,
      category: 'kids',
      image: 'https://images.pexels.com/photos/1620760/pexels-photo-1620760.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'Colorful hoodie that kids will love to wear.',
      sizes: ['XS', 'S', 'M'],
      colors: ['Rainbow', 'Pink', 'Blue'],
      stock: 40
    },
    {
      id: 5,
      name: 'Leather Handbag',
      price: 149.99,
      category: 'accessories',
      image: 'https://images.pexels.com/photos/1152077/pexels-photo-1152077.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'Premium leather handbag for the modern woman.',
      sizes: ['One Size'],
      colors: ['Brown', 'Black', 'Tan'],
      stock: 15
    },
    {
      id: 6,
      name: 'Athletic Sneakers',
      price: 119.99,
      category: 'accessories',
      image: 'https://images.pexels.com/photos/1464625/pexels-photo-1464625.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'Comfortable sneakers for your active lifestyle.',
      sizes: ['7', '8', '9', '10', '11'],
      colors: ['White', 'Black', 'Gray'],
      stock: 35
    }
  ])

  const categories = ref([
    { id: 'all', name: 'All Products' },
    { id: 'men', name: 'Men' },
    { id: 'women', name: 'Women' },
    { id: 'kids', name: 'Kids' },
    { id: 'accessories', name: 'Accessories' }
  ])

  const getProductById = (id) => {
    return products.value.find(product => product.id === parseInt(id))
  }

  const getProductsByCategory = (category) => {
    if (category === 'all') return products.value
    return products.value.filter(product => product.category === category)
  }

  const searchProducts = (query) => {
    if (!query) return products.value
    return products.value.filter(product => 
      product.name.toLowerCase().includes(query.toLowerCase()) ||
      product.description.toLowerCase().includes(query.toLowerCase())
    )
  }

  const addProduct = (product) => {
    const newProduct = {
      ...product,
      id: Math.max(...products.value.map(p => p.id)) + 1
    }
    products.value.push(newProduct)
    return newProduct
  }

  const updateProduct = (id, updates) => {
    const index = products.value.findIndex(p => p.id === id)
    if (index > -1) {
      products.value[index] = { ...products.value[index], ...updates }
      return products.value[index]
    }
    return null
  }

  const deleteProduct = (id) => {
    const index = products.value.findIndex(p => p.id === id)
    if (index > -1) {
      products.value.splice(index, 1)
      return true
    }
    return false
  }

  return {
    products: readonly(products),
    categories: readonly(categories),
    getProductById,
    getProductsByCategory,
    searchProducts,
    addProduct,
    updateProduct,
    deleteProduct
  }
})