<template>
  <page-container>
    welcome
  </page-container>
</template>

<script lang="ts">
import { defineComponent, onMounted } from 'vue'

export default defineComponent({
  name: 'Welcome',
  setup () {
    onMounted(() => {
      console.log('welcome')
    })
  }
})
</script>
