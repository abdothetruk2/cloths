<template>
  <div class="relative">
    <canvas ref="chartRef"></canvas>
  </div>
</template>

<script setup>
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend
} from 'chart.js'

ChartJS.register(ArcElement, Tooltip, Legend)

const props = defineProps({
  data: {
    type: Object,
    required: true
  },
  options: {
    type: Object,
    default: () => ({})
  }
})

const chartRef = ref(null)
let chartInstance = null

const defaultOptions = {
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: {
      position: 'bottom',
      labels: {
        padding: 20,
        usePointStyle: true,
      }
    },
    tooltip: {
      backgroundColor: 'rgba(0, 0, 0, 0.8)',
      titleColor: 'white',
      bodyColor: 'white',
      borderColor: 'rgba(255, 255, 255, 0.1)',
      borderWidth: 1,
    }
  },
  cutout: '60%',
}

const createChart = () => {
  if (chartInstance) {
    chartInstance.destroy()
  }

  const ctx = chartRef.value.getContext('2d')
  chartInstance = new ChartJS(ctx, {
    type: 'doughnut',
    data: props.data,
    options: { ...defaultOptions, ...props.options }
  })
}

onMounted(() => {
  createChart()
})

watch(() => props.data, () => {
  if (chartInstance) {
    chartInstance.data = props.data
    chartInstance.update()
  }
}, { deep: true })

onUnmounted(() => {
  if (chartInstance) {
    chartInstance.destroy()
  }
})
</script>