<template>
  <page-container>
    <div class="ant-pro-table">
      <div class="ant-pro-table-search">
        <a-form layout="horizontal">
          <a-row :gutter="16" type="flex" justfy="start">
            <a-col :xs="24" :sm="24" :md="12">
              <a-form-item label="权限名称">
                <a-input placeholder="please enter"/>
              </a-form-item>
            </a-col>
            <a-col :xs="24" :sm="24" :md="12">
              <a-form-item label="描述">
                <a-input placeholdre="please enter"/>
              </a-form-item>
            </a-col>
          </a-row>
        </a-form>
      </div>
      <a-card :body-style="{padding:0}" ref="elRef">
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
              @click="handleModalVisible(true,{})"
            >
              <plus-outlined/>
              新增权限
            </a-button>
          </template>
        </table-toolbar>
        <a-table
          row-key="id"
          :size="state.tableSize"
          :loading="state.loading"
          :columns="dynamicColumns"
          :data-source="state.dataSource"
          :pagination="{
            current: state.current,
            pageSize: state.pageSize,
            total: state.total,
          }"
          @change="handleTableChange"
        >
          <template #actions="{record}">
            <a-tag
              v-for="action in record.actions"
              :key="action">
              {{ action }}
            </a-tag>
          </template>
          <template #action="{record}">
            <a
              href="javascript:;"
              @click="handleModalVisible(true,record)"
            >
              编辑
            </a>
          </template>
        </a-table>
      </a-card>
    </div>
    <permission-modal
      ref="permissionModal"
      :visible="visible"
      :model="currentData"
      @cancel="handleModalVisible(false,currentData)"
    />
  </page-container>
</template>

<script lang="ts">
import { defineComponent, nextTick, reactive, ref, toRefs } from 'vue'
import { TableToolbar } from '@/components'
import PermissionModal from './components/permission-modal.vue'
import { Pagination, TableColumn, TableFilters } from '@/types'
import { useFetchData, useFullscreen, useTableDynamicColumns } from '@/hooks'
import PermissionServer from '@/api/permission'
import { Permission } from '@/types/store/user'

const baseColumns: TableColumn[] = [
  {
    align: 'center',
    title: '#',
    dataIndex: 'id'
  },
  {
    align: 'center',
    title: '权限名称',
    dataIndex: 'name'
  },
  {
    align: 'center',
    title: 'Action',
    dataIndex: 'actions',
    slots: { customRender: 'actions' },
    width: 400
  },
  {
    align: 'center',
    title: '操作',
    dataIndex: 'action',
    slots: { customRender: 'action' }
  }
]

export default defineComponent({
  name: 'PermissionList',
  components: {
    TableToolbar,
    PermissionModal
  },
  setup () {
    const modalState = reactive({
      permissionModal: ref(),
      visible: false,
      currentData: {}
    })
    const {
      state: columnState,
      dynamicColumns,
      dynamicColumnItems,
      handleColumnAllClick,
      handleColumnChange,
      reset,
      move
    } = useTableDynamicColumns(baseColumns, true)
    const [elRef, screenState, { setFull, exitFull }] = useFullscreen()

    const { context: state, reload, setPageInfo } = useFetchData(PermissionServer.getPermissions, {
      current: 1,
      pageSize: 10,
      tableSize: 'middle'
    })

    function handleTableChange ({ current, pageSize }: Pagination, filters: TableFilters) {
      setPageInfo({
        current,
        pageSize,
        ...filters
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

    function handleModalVisible (visible: boolean, record: Permission): void {
      modalState.visible = visible
      modalState.currentData = record
      if (visible && record.id) {
        nextTick(() => {
          modalState.permissionModal.modelRef.id = record.id
          modalState.permissionModal.modelRef.name = record.name
          modalState.permissionModal.modelRef.label = record.label
          modalState.permissionModal.modelRef.actions = record.actions
        })
      }
    }

    return {
      state,
      columnState,
      ...toRefs(modalState),
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
      handleModalVisible
    }
  }
})
</script>
