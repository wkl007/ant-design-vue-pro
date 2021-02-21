<template>
  <div class="left-menu-layout">
    <router-view/>
  </div>
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'LeftMenuLayout'
})
</script>
