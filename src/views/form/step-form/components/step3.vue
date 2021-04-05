<template>
  <a-result status="success" title="操作成功" sub-title="预计两小时到账" class="result">
    <template #extra>
      <a-button type="primary" @click="handleFinish">再转一笔</a-button>
      <a-button>查看账单</a-button>
    </template>
    <div class="information">
      <a-descriptions :column="1">
        <a-descriptions-item label="转账账号">
          123456@123.com
        </a-descriptions-item>
        <a-descriptions-item label="收款账户">
          123456@123.com
        </a-descriptions-item>
        <a-descriptions-item label="收款人姓名">
          123456@123.com
        </a-descriptions-item>
        <a-descriptions-item label="转账金额">
          <a-statistic :value="100" suffix="元"/>
        </a-descriptions-item>
      </a-descriptions>
    </div>
  </a-result>
</template>

<script lang="ts">
import { defineComponent, computed, onUnmounted } from 'vue'

export default defineComponent({
  name: 'Step3',
  emits: ['finish'],
  setup (props, { emit }) {
    function handleFinish (e: Event): void {
      e.preventDefault()
      emit('finish')
    }

    return {
      handleFinish
    }
  }
})
</script>

<style scoped lang="less">
@import "~@/assets/styles/variables";

.information {
  line-height: 22px;

  ::v-deep(&.ant-row:not(:last-child)) {
    margin-bottom: 24px;
  }

  .label {
    padding-right: 8px;
    color: @heading-color;
    text-align: right;

    @media screen and (max-width: @screen-sm) {
      text-align: left;
    }
  }
}
</style>
