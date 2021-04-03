<template>
  <span>
    <star-two-tone v-if="type === 'star'"/>
    <like-outlined v-else-if="type === 'like'"/>
    <message-filled v-else/>
    {{ text }}
  </span>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue'

export type IconType = 'star' | 'like' | 'message';

export default defineComponent({
  name: 'IconText',
  props: {
    type: {
      type: String as PropType<IconType>,
      required: true
    },
    text: {
      type: [String, Number],
      required: true
    }
  }
})
</script>
