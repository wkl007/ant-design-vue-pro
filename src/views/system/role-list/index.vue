<template>
  <page-container>
    <div class="ant-pro-table">
      <div class="ant-pro-table-search">
        <a-form layout="horizontal">
          <a-row :gutter="16" type="flex" justfy="start">
            <a-col :xs="24" :sm="24" :md="12">
              <a-form-item label="角色名称">
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
              新增角色
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
          <template #expandedRowRender="{record}">
            <div class="table-role-permission-card">
              <a-row :gutter="12">
                <a-col
                  style="height: 48px;"
                  :span="12"
                  :key="permission.id"
                  v-for="permission in record.permissions"
                >
                  <a-row :gutter="16">
                    <a-col
                      :span="4">
                      {{ permission.label }}
                    </a-col>
                    <a-col>
                      <a-tag
                        color="cyan"
                        :key="action"
                        v-for="action in permission.actions">
                        {{ action }}
                      </a-tag>
                    </a-col>
                  </a-row>
                </a-col>
              </a-row>
            </div>
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
    <role-modal
      ref="roleModal"
      :model="currentData"
      :visible="visible"
      @cancel="visible=false"
    ></role-modal>
  </page-container>
</template>

<script lang="ts">
import { defineComponent, nextTick, reactive, ref, toRefs } from 'vue'
import { TableToolbar } from '@/components'
import RoleModal from './components/role-modal.vue'
import { useFetchData, useFullscreen, useTableDynamicColumns } from '@/hooks'
import PermissionServer from '@/api/permission'
import { Pagination, TableColumn, TableFilters } from '@/types'
import { Role } from '@/types/api/user'

const baseColumns: TableColumn[] = [
  {
    align: 'center',
    title: '编号',
    dataIndex: 'id'
  },
  {
    align: 'center',
    title: '角色名称',
    dataIndex: 'name'
  },
  {
    align: 'center',
    title: '描述',
    dataIndex: 'describe'
  },
  {
    align: 'center',
    title: '操作',
    dataIndex: 'action',
    slots: { customRender: 'action' }
  }
]

export default defineComponent({
  name: 'RoleList',
  components: {
    TableToolbar,
    RoleModal
  },
  setup () {
    const modalState = reactive({
      roleModal: ref(),
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
    } = useTableDynamicColumns(baseColumns, { checkAll: true, needRowIndex: false })
    const [elRef, screenState, { setFull, exitFull }] = useFullscreen()

    const { context: state, reload, setPageInfo } = useFetchData(PermissionServer.getRoles, {
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

    function handleModalVisible (visible: boolean, record: Role): void {
      modalState.visible = visible
      modalState.currentData = record
      if (visible && record.id) {
        nextTick(() => {
          modalState.roleModal.modelRef.id = record.id
          modalState.roleModal.modelRef.name = record.name
          modalState.roleModal.modelRef.describe = record.describe
          modalState.roleModal.modelRef.permissions = record.permissions
        })
      }
    }

    return {
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
      handleModalVisible
    }
  }
})
</script>
