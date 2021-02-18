<template>
  <a-result
    status="success"
    title="标题"
    sub-title="'激活邮件已发送到你的邮箱中，邮件有效期为24小时。请及时登录邮箱，点击邮件中的链接激活帐户。'"
  >
    <template #extra>
      <a-space>
        <a-button size="large" type="primary">查看邮箱</a-button>
        <a-button size="large" @click="goBack">返回首页</a-button>
      </a-space>
    </template>
  </a-result>
</template>

<script lang="ts">
import { computed, defineComponent, reactive } from 'vue'
import { useRouter, useRoute } from 'vue-router'

export default defineComponent({
  name: 'RegisterResult',
  setup () {
    const route = useRoute()
    const router = useRouter()

    // 返回
    function goBack () {
      router.push({
        path: '/user/login'
      })
    }

    return {
      goBack
    }
  }
})
</script>

<style scoped>
.register {
  height: auto;
}
</style>
