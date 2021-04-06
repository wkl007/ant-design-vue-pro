<template>
  <div class="container" ref="container"></div>
</template>

<script lang="ts">
import { defineComponent, inject, onMounted, onUnmounted, reactive, ref, toRaw, watch } from 'vue'

export default defineComponent({
  name: 'VTinyColumn'
})
</script>

<style scoped>
.container {
  width: 100%;
  height: 100%;
}
</style>
