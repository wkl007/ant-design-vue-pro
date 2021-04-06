<template>
  <div class="container" ref="container"></div>
</template>

<script lang="ts">
import { defineComponent, inject, onMounted, onUnmounted, PropType, reactive, ref, toRaw, watch } from 'vue'
import { DualAxes, DualAxesOptions } from '@antv/g2plot'

export default defineComponent({
  name: 'VLine',
  props: {
    data: {
      type: Array as PropType<Record<string, any>[]>,
      default: () => [
        { year: '1991', value: 3, count: 10 },
        { year: '1992', value: 4, count: 4 },
        { year: '1993', value: 3.5, count: 5 },
        { year: '1994', value: 5, count: 5 },
        { year: '1995', value: 4.9, count: 4.9 },
        { year: '1996', value: 6, count: 35 },
        { year: '1997', value: 7, count: 7 },
        { year: '1998', value: 9, count: 1 },
        { year: '1999', value: 13, count: 20 },
        { year: '2000', value: 3, count: 10 },
        { year: '2001', value: 4, count: 4 },
        { year: '2002', value: 3.5, count: 5 },
        { year: '2003', value: 5, count: 5 },
        { year: '2004', value: 4.9, count: 4.9 },
        { year: '2005', value: 6, count: 35 },
        { year: '2006', value: 7, count: 7 },
        { year: '2007', value: 9, count: 1 },
        { year: '2008', value: 13, count: 20 }
      ]
    },
    width: {
      type: Number,
      default: 0
    },
    height: {
      type: Number,
      default: 400
    }
  },
  setup (props) {
    const isRealDark = inject('isRealDark', ref(false))

    let chart: DualAxes | null = null
    const container = ref<HTMLDivElement | null>(null)
    const config = reactive<DualAxesOptions>({
      data: [props.data, props.data],
      width: props.width,
      height: props.height,
      theme: isRealDark.value ? 'dark' : 'default',
      autoFit: true,
      xField: 'year',
      yField: ['value', 'count'],
      slider: {
        start: 0,
        end: 0.5
      },
      geometryOptions: [
        {
          geometry: 'line',
          color: '#5B8FF9'
        },
        {
          geometry: 'line',
          color: '#5AD8A6'
        }
      ]
    })

    function initChart () {
      destroyChart()
      if (!container.value) return
      chart = new DualAxes(toRaw(container.value), {
        ...config
      })
      chart.render()
    }

    function destroyChart () {
      chart?.destroy()
    }

    onMounted(() => {
      initChart()
    })

    onUnmounted(() => {
      destroyChart()
    })

    watch(
      () => props.data,
      (val) => {
        chart?.changeData(val)
      },
      { deep: true }
    )

    watch(
      () => isRealDark.value,
      () => {
        chart?.update({
          theme: isRealDark.value ? 'dark' : 'default'
        })
      }
    )

    return {
      container
    }
  }
})
</script>

<style scoped>
.container {
  width: 100%;
  height: 100%;
}
</style>
