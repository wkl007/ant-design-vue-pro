<template>
  <page-container>
    <div class="ant-pro-table">
      <div class="ant-pro-table-search">
        <a-form layout="horizontal">
          <a-row :gutter="16" type="flex" justfy="start">
            <a-col :xs="24" :sm="24" :md="12">
              <a-form-item label="规则名称">
                <a-input v-model:value="queryParams.ruleName" placeholder="规则名称"/>
              </a-form-item>
            </a-col>
            <a-col :xs="24" :sm="24" :md="12">
              <a-form-item label="描述">
                <a-input v-model:value="queryParams.desc" placeholder="描述"/>
              </a-form-item>
            </a-col>
            <a-col :xs="24" :sm="24" :md="12">
              <a-form-item label="服务调用次数">
                <a-input v-model:value="queryParams.callNo" placeholder="服务调用次数"/>
              </a-form-item>
            </a-col>
            <a-col :xs="24" :sm="24" :md="12">
              <a-form-item>
                <a-button @click="handleSearch">搜索</a-button>
              </a-form-item>
            </a-col>
          </a-row>
        </a-form>
      </div>
      <a-card
        :body-style="{padding:0}"
        ref="elRef"
      >
        <table-toolbar
          title="角色列表"
          :screen-state="screenState"
          :indeterminate="columnState.indeterminate"
          :column-items="dynamicColumnItems"
          v-model:table-size="state.tableSize"
          v-model:check-all="columnState.checkAll"
          @reload="handleReload"
          @reset="reset"
          @setFull="setFull"
          @exitFull="exitFull"
          @change="handleColumnChange"
          @changeAll="handleColumnAllClick"
          @move="move"
        >
          <template #action>
            <a-button
              type="primary"
              @click="visible = true"
            >
              <plus-outlined/>
              新建
            </a-button>
            <div class="ant-pro-table-list-toolbar-setting-item">
              <a-tooltip title="表格斑马纹">
                <a-switch
                  checked-children="开"
                  un-checked-children="关"
                  v-model:checked="state.stripe"
                />
              </a-tooltip>
            </div>
          </template>
        </table-toolbar>
        <a-table
          :row-class-name="stripe"
          :size="state.tableSize"
          :loading="state.loading"
          :columns="dynamicColumns"
          :data-source="state.dataSource"
          :pagination="{
            current: state.current,
            pageSize: state.pageSize,
            total: state.total,
          }"
          :getPopupContainer="trigger => trigger.parentNode"
          @change="handleTableChange"
        >
          <template #rowIndex="{ index }">
            {{ index }}
          </template>
          <template #status="{ text }">
            <a-badge :status="statusMap[text].status" :text="statusMap[text].text"/>
          </template>
          <template #action="{ text }">
            <a :title="text">编辑</a>
          </template>
        </a-table>
      </a-card>
    </div>
    <a-modal
      title="Basic Modal"
      :get-container="()=>elRef.$el"
      v-model:visible="visible"
      @ok="visible=false"
    >
      <p>Some contents...</p>
      <p>Some contents...</p>
      <p>Some contents...</p>
    </a-modal>
  </page-container>
</template>

<script lang="ts">
import { defineComponent, reactive, toRaw, toRefs } from 'vue'
import { TableToolbar } from '@/components'
import { useFetchData, useFullscreen, useTableDynamicColumns } from '@/hooks'
import { Pagination, TableColumn, TableFilters } from '@/types'
import ListServer from '@/api/list'
import { dateFormat } from '@/utils'

const statusMap = {
  0: { text: '关闭', status: 'default' },
  1: { text: '运行中', status: 'processing' },
  2: { text: '已上线', status: 'success' },
  3: { text: '异常', status: 'error' }
}
const status = ['关闭', '运行中', '已上线', '异常']

const baseColumns: TableColumn[] = [
  {
    align: 'center',
    title: '规则名称',
    dataIndex: 'name'
  },
  {
    align: 'center',
    title: '描述',
    dataIndex: 'desc'
  },
  {
    align: 'center',
    title: '服务调用次数',
    dataIndex: 'callNo',
    sorter: true,
    customRender: ({ text }) => `${text} 万`,
    // mark to display a total number
    needTotal: true
  },
  {
    align: 'center',
    title: '状态',
    dataIndex: 'status',
    slots: { customRender: 'status' },
    filters: [
      {
        text: status[0],
        value: '0'
      },
      {
        text: status[1],
        value: '1'
      },
      {
        text: status[2],
        value: '2'
      },
      {
        text: status[3],
        value: '3'
      }
    ]
  },
  {
    align: 'center',
    title: '上次调度时间',
    dataIndex: 'updatedAt',
    customRender: ({ text }) => dateFormat(text),
    sorter: true
  },
  {
    align: 'center',
    title: '操作',
    dataIndex: 'action',
    slots: { customRender: 'action' }
  }
]

export default defineComponent({
  name: 'TableList',
  components: {
    TableToolbar
  },
  setup () {
    const {
      state: columnState,
      dynamicColumns,
      dynamicColumnItems,
      handleColumnAllClick,
      handleColumnChange,
      reset,
      move
    } = useTableDynamicColumns(baseColumns, { checkAll: true, needRowIndex: true })
    const [elRef, screenState, { setFull, exitFull }] = useFullscreen()

    const { context: state, stripe, reload, setPageInfo } = useFetchData(ListServer.getRule, {
      current: 1,
      pageSize: 10,
      tableSize: 'middle',
      stripe: true
    })

    const queryParams = reactive({
      ruleName: undefined,
      desc: undefined,
      callNo: undefined
    })
    const modalState = reactive({
      visible: false,
      currentData: {}
    })

    function handleTableChange ({ current, pageSize }: Pagination, filters: TableFilters) {
      setPageInfo({
        current,
        pageSize,
        ...filters
      })
      reload()
    }

    function handleSearch (): void {
      setPageInfo({
        ...toRaw(queryParams)
      })
      reload()
    }

    function handleReload () {
      setPageInfo({
        current: 1,
        pageSize: 10
      })
      reload()
    }

    return {
      stripe,
      statusMap,
      queryParams,
      ...toRefs(modalState),
      state,
      columnState,
      dynamicColumns,
      dynamicColumnItems,

      elRef,
      screenState,
      setFull,
      exitFull,
      reset,
      move,
      handleTableChange,
      handleColumnChange,
      handleColumnAllClick,
      handleReload,
      handleSearch
    }
  }
})
</script>
