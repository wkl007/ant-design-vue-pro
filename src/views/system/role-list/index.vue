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
        <div class="ant-pro-table-list-toolbar">
          <div class="ant-pro-table-list-toolbar-container">
            <div class="ant-pro-table-list-toolbar-left">
              <div class="ant-pro-table-list-toolbar-title">角色列表</div>
            </div>
            <div class="ant-pro-table-list-toolbar-right">
              <a-space align="center">
                <a-button
                  type="primary"
                  @click="modalVisible=true"
                >
                  <plus-outlined/>
                  新增角色
                </a-button>
              </a-space>
              <div class="ant-pro-table-list-toolbar-divider">
                <a-divider type="vertical"/>
              </div>
              <div class="ant-pro-table-list-toolbar-setting-item">
                <a-tooltip title="刷新">
                  <reload-outlined @click="handleTableChange"/>
                </a-tooltip>
              </div>
              <div class="ant-pro-table-list-toolbar-setting-item">
                <a-tooltip title="密度">
                  <a-dropdown :trigger="['click']" placement="bottomRight">
                    <column-height-outlined/>
                    <template #overlay>
                      <a-menu
                        style="width: 80px;"
                        :selected-keys="[state.tableSize]"
                        @click="({key})=>{
                          state.tableSize=key
                        }"
                      >
                        <a-menu-item key="default">
                          <a href="javascript:;">默认</a>
                        </a-menu-item>
                        <a-menu-item key="middle">
                          <a href="javascript:;">中等</a>
                        </a-menu-item>
                        <a-menu-item key="small">
                          <a href="javascript:;">紧凑</a>
                        </a-menu-item>
                      </a-menu>
                    </template>
                  </a-dropdown>
                </a-tooltip>
              </div>
              <div class="ant-pro-table-list-toolbar-setting-item">
                <a-popover
                  placement="bottomRight"
                  arrow-point-at-center
                  trigger="click"
                  overlay-class-name="ant-pro-table-column-setting-overlay"
                >
                  <template #title>
                    <div class="ant-pro-table-column-setting-title">
                      <a-checkbox
                        v-model:checked="columnState.checkAll"
                        :indeterminate="columnState.indeterminate"
                        @change="handleColumnAllClick"
                      >
                        列展示
                      </a-checkbox>
                      <a href="javascript:;" @click="reset">重置</a>
                    </div>
                  </template>
                  <template #content>
                    <span class="ant-pro-table-column-setting-list">
                      <drag-container
                        lockAxis="y"
                        dragClass="ant-pro-table-drag-ghost"
                        dropClass="ant-pro-table-drop-ghost"
                        @drop="({ removedIndex, addedIndex }) => move(removedIndex, addedIndex)"
                      >
                        <draggable
                          v-for="item in dynamicColumnItems"
                          :key="item.key"
                        >
                          <div class="ant-pro-table-column-setting-list-item">
                            <drag-icon/>
                            <a-checkbox
                              :checked="item.checked"
                              @change="handleColumnChange($event,item)"
                            >
                              {{ item.label }}
                            </a-checkbox>
                          </div>
                        </draggable>
                      </drag-container>
                    </span>
                  </template>
                  <a-tooltip title="列设置">
                    <setting-outlined/>
                  </a-tooltip>
                </a-popover>
              </div>
              <div class="ant-pro-table-list-toolbar-setting-item">
                <a-tooltip :title="screenState?'退出全屏':'全屏'">
                  <fullscreen-outlined
                    v-if="!screenState"
                    @click="setFull"
                  />
                  <fullscreen-exit-outlined
                    v-else
                    @click="exitFull"
                  />
                </a-tooltip>
              </div>
            </div>
          </div>
        </div>
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
              @click="()=>{
                roleModalRef=record
                modalVisible=true
              }"
            >
              编辑
            </a>
          </template>
        </a-table>
      </a-card>
    </div>
  </page-container>
</template>

<script lang="ts">
import { defineComponent, reactive, ref, toRaw } from 'vue'
import { Container as DragContainer, Draggable, DragIcon } from '@/components'
import { useFetchData, useFullscreen, useTableDynamicColumns } from '@/hooks'
import PermissionServer from '@/api/permission'
import { Pagination, TableColumn, TableFilters } from '@/types'

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
    DragContainer,
    Draggable,
    DragIcon
  },
  setup () {
    const roleModalRef = ref({})
    const modalVisible = ref<boolean>(false)
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

    return {
      state,
      columnState,
      dynamicColumns,
      dynamicColumnItems,

      elRef,
      screenState,
      setFull,
      exitFull,

      modalVisible,
      roleModalRef,

      reset,
      move,
      handleTableChange,
      handleColumnChange,
      handleColumnAllClick
    }
  }
})
</script>
