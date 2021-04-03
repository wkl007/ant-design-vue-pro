<template>
  <div
    :class="['avatar-list', `avatar-list-${size}`]"
    v-bind="$attrs"
  >
    <ul>
      <slot/>
      <template v-if="totalSize>maxLength">
        <li>
          <avatar-list-item>
            {{ `+${totalSize - maxLength}` }}
          </avatar-list-item>
        </li>
      </template>
    </ul>
  </div>
</template>

<script lang="ts">
import {
  defineComponent,
  provide,
  reactive,
  ref,
  InjectionKey,
  CSSProperties,
  PropType,
  readonly
} from 'vue'
import AvatarListItem from './item.vue'
import { filterEmpty } from '@/utils/vnode-util'

export type SizeType = number | 'small' | 'default' | 'large'

export const AVATAR_LIST_STORE_KEY = 'avatarListStore'

export default defineComponent({
  name: 'AvatarList',
  components: {
    AvatarListItem
  },
  props: {
    size: {
      type: String as PropType<SizeType>,
      default: 'default'
    },
    maxLength: {
      type: Number,
      default: 5
    },
    excessItemsStyle: {
      type: Object as PropType<CSSProperties>,
      default: () => {}
    }
  },
  setup (props, { slots }) {
    const children = filterEmpty(slots.default?.())
    const totalSize = ref(children.length)
    const avatarListStore = reactive({
      size: props.size,
      excessItemsStyle: props.excessItemsStyle
    })

    provide(AVATAR_LIST_STORE_KEY, readonly(avatarListStore))

    return {
      totalSize
    }
  }
})
</script>

<style scoped lang="less">
.avatar-list {
  display: inline-block;

  ul {
    display: inline-block;
    margin-left: 8px;
    font-size: 0;
  }
}
</style>
