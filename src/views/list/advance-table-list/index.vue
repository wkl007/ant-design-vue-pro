<template>
  <page-container>
    <a-alert
      type="success"
      message="高性能表格特点：虚拟滚动，万条数据不卡顿；列宽拖拽，实时拖拽调整列宽；表格合计，灵活配置行合计；更多功能在路上......"
    />
    <br/>
    <a-form layout="horizontal">
      <a-row :gutter="16" type="flex" justify="start">
        <a-col :xs="12" :sm="12" :md="6">
          <a-form-item label="条数">
            <a-select v-model:value="modelRef.count" style="width: 160px;">
              <a-select-option :value="10">10</a-select-option>
              <a-select-option :value="100">100</a-select-option>
              <a-select-option :value="1000">1000</a-select-option>
              <a-select-option :value="10000">10000</a-select-option>
              <a-select-option :value="50000">50000</a-select-option>
              <a-select-option :value="100000">100000</a-select-option>
            </a-select>
          </a-form-item>
        </a-col>
        <a-col :xs="12" :sm="12" :md="6">
          <a-form-item label="大小">
            <a-select v-model:value="modelRef.size" style="width: 160px;">
              <a-select-option value="small">紧凑</a-select-option>
              <a-select-option value="default">默认</a-select-option>
              <a-select-option value="middle">中等</a-select-option>
            </a-select>
          </a-form-item>
        </a-col>
        <a-col :xs="12" :sm="12" :md="6">
          <a-form-item label="选择">
            <a-select v-model:value="modelRef.type" style="width: 160px;">
              <a-select-option value="radio">单选</a-select-option>
              <a-select-option value="checkbox">多选</a-select-option>
            </a-select>
          </a-form-item>
        </a-col>
        <a-col :xs="12" :sm="12" :md="6">
          <a-form-item label="加载中">
            <a-switch v-model:checked="modelRef.loading"/>
          </a-form-item>
        </a-col>
        <a-col :xs="12" :sm="12" :md="6">
          <a-form-item label="边框">
            <a-switch v-model:checked="modelRef.bordered"/>
          </a-form-item>
        </a-col>
        <a-col :xs="12" :sm="12" :md="6">
          <a-form-item label="自动行高">
            <a-switch v-model:checked="modelRef.autoRowHeight"/>
          </a-form-item>
        </a-col>

      </a-row>
    </a-form>
    <br/>
    <!--<s-table
      ref="tableRef"
      stripe
      sticky
      virtual
      :height="400"
      :bordered="modelRef.bordered"
      :size="modelRef.size"
      :auto-row-height="modelRef.autoRowHeight"
      :loading="modelRef.loading"
      :row-selection="rowSelection"
      :row-height="rowHeight"
      :wrap-text="modelRef.autoRowHeight"
      :data-source="dataSource"
      v-model:columns="columns"
      v-model:pagination="pagination"
      v-model:selected-row-keys="selectedRowKeys"
    >
      <template #filterIcon="{ filtered }">
        <search-outlined :style="{ color: filtered ? '#1890ff' : undefined }"/>
      </template>
      <template #cell="{ column, text }">
        <template v-if="column.key === 'operation'">
          <a>Action</a>
        </template>
        <template v-else>
          {{ text }}
        </template>
      </template>
      <template #summary>
        <s-table-summary-row>
          <s-table-summary-cell :index="0">Total</s-table-summary-cell>
          <s-table-summary-cell :index="1">
            <template #default="{ total }">{{ total }}</template>
          </s-table-summary-cell>
        </s-table-summary-row>
        <s-table-summary-row>
          <s-table-summary-cell :index="0">Blance</s-table-summary-cell>
          <s-table-summary-cell :index="1">
            <template #default="{ total }">{{ total + 999 }}</template>
          </s-table-summary-cell>
          <s-table-summary-cell :index="2" :colSpan="3">
            <template #default="{ total }">{{ total }}</template>
          </s-table-summary-cell>
        </s-table-summary-row>
      </template>
    </s-table>-->
  </page-container>
</template>

<script lang="ts">
import { computed, defineComponent, reactive, ref } from 'vue'
import type { RowHeight } from '@surely-vue/table/dist/src/components/interface'

const columns = [
  {
    title: 'Full Name',
    width: 150,
    dataIndex: 'name',
    fixed: 'left',
    maxWidth: 300,
    resizable: true,
    onFilter: (value: string, record: any) => record.name.includes(value),
    slots: { filterIcon: 'filterIcon' },
    filters: [
      {
        text: 'Joe',
        value: 'Joe'
      },
      {
        text: 'Jim',
        value: 'Jim'
      },
      {
        text: 'Submenu',
        value: 'Submenu',
        children: [
          {
            text: 'Green',
            value: 'Green'
          },
          {
            text: 'Black',
            value: 'Black'
          }
        ]
      }
    ]
  },
  {
    title: 'Age',
    width: 150,
    dataIndex: 'age',
    fixed: 'left',
    resizable: true,
    sorter: (a: any, b: any) => a.age - b.age
  },
  {
    title: 'ColumnColumnColumnColumnColumnColumn',
    children: [
      {
        title: 'Column 1',
        dataIndex: 'address',
        key: '1',
        width: 150,
        resizable: true
      },
      {
        title: 'Column 2',
        dataIndex: 'address',
        key: '2',
        width: 150,
        resizable: true
      }
    ]
  },
  {
    title: 'Column 3',
    dataIndex: 'address',
    key: '3',
    width: 150,
    resizable: true
  },
  {
    title: 'Column 4',
    dataIndex: 'address',
    key: '4',
    width: 150,
    resizable: true
  },
  {
    title: 'Column 5',
    dataIndex: 'address',
    key: '5',
    width: 150,
    resizable: true
  },
  {
    title: 'Column 6',
    dataIndex: 'address',
    key: '6',
    width: 150,
    resizable: true
  },
  {
    title: 'Column 7',
    dataIndex: 'address',
    key: '7',
    width: 150,
    resizable: true
  },
  {
    title: 'Column 8',
    dataIndex: 'address',
    key: '8',
    width: 150,
    resizable: true
  },
  {
    title: 'Action',
    key: 'operation',
    fixed: 'right',
    width: 100
  }
]

interface DataItem {
  rowKey: number;
  name: string;
  age: number;
  address: string;
}

export default defineComponent({
  name: 'AdvanceTableList',
  setup () {
    const tableRef = ref<any>(undefined)
    const modelRef = reactive({
      count: 100,
      size: 'default',
      loading: false,
      bordered: true,
      autoRowHeight: false,
      type: 'checkbox'
    })
    const rowHeight = ref<RowHeight>((_data, baseHeight) => modelRef.autoRowHeight ? undefined : baseHeight)

    const selectedRowKeys = ref([])

    const dataSource = computed<DataItem[]>(() => {
      const data = []
      for (let i = 0; i < modelRef.count; i++) {
        data.push({
          rowKey: i,
          name: i % 2 === 1 ? `Edrward ${i}` : `Jim ${i}`,
          age: i + 1,
          address: `London Park no. ${i}`
        })
      }
      return data
    })

    const rowSelection = computed(() => {
      return {
        type: modelRef.type,
        getCheckboxProps: (record: any, index: number) => {
          if (index === 3) {
            return { disabled: true }
          }
          return { disabled: false }
        }
      }
    })

    const pageSizeOptions = ['5', '10', '50']
    const pagination = ref({
      current: 1,
      pageSize: dataSource.value.length,
      showSizeChanger: true,
      pageSizeOptions: [...pageSizeOptions]
    })

    return {
      tableRef,
      modelRef,
      dataSource,
      columns: ref(columns),
      rowHeight,
      selectedRowKeys,
      rowSelection,
      pagination
    }
  }
})
</script>
