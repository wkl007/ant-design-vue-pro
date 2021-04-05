<template>
  <page-container :title="t(`${route.meta.title}`)">
    <template #content>
      将一个冗长或用户不熟悉的表单任务分成多个步骤，指导用户完成。
    </template>
    <a-card :bordered="false">
      <a-steps
        :current="current"
        class="steps"
      >
        <a-step title="填写转账信息"/>
        <a-step title="确认转账信息"/>
        <a-step title="完成"/>
      </a-steps>
      <step1 v-if="current===0" @next="nextStep"/>
      <step2 v-else-if="current===1" @next="nextStep" @prev="prevStep"/>
      <step3 v-else-if="current===2" @finish="finish"/>
    </a-card>
  </page-container>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import { useRoute } from 'vue-router'
import { injectProProvider } from '@/components'
import Step1 from './components/step1.vue'
import Step2 from './components/step2.vue'
import Step3 from './components/step3.vue'

export default defineComponent({
  name: 'StepForm',
  components: {
    Step1,
    Step2,
    Step3
  },
  setup () {
    const route = useRoute()
    const { i18n: t } = injectProProvider()
    const current = ref(0)

    function nextStep (): void {
      if (current.value < 2) current.value += 1
    }

    function prevStep (): void {
      if (current.value > 0) current.value -= 1
    }

    function finish (): void {
      current.value = 0
    }

    return {
      t,
      route,
      current,

      nextStep,
      prevStep,
      finish
    }
  }
})
</script>

<style scoped lang="less">
.card {
  margin-bottom: 24px;
}

.heading {
  margin: 0 0 16px 0;
  font-size: 14px;
  line-height: 22px;
}

.steps {
  max-width: 750px;
  margin: 16px auto;
}
</style>
