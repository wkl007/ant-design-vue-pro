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
                  <reload-outlined/>
                </a-tooltip>
              </div>
              <div class="ant-pro-table-list-toolbar-setting-item">
                <a-tooltip title="密度">
                  <a-dropdown :trigger="['click']" placement="bottomRight">
                    <column-height-outlined/>
                    <template #overlay>
                      <a-menu
                        style="width: 80px;"
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
                      <a-checkbox>
                        列展示
                      </a-checkbox>
                      <a href="javascript:;">重置</a>
                    </div>
                  </template>
                  <template #content>
                    <span class="ant-pro-table-column-setting-list">
                    </span>
                  </template>
                  <a-tooltip title="列设置">
                    <setting-outlined/>
                  </a-tooltip>
                </a-popover>
              </div>
              <div class="ant-pro-table-list-toolbar-setting-item">
                <a-tooltip title="test">
                  1122
                </a-tooltip>
              </div>
            </div>
          </div>
        </div>
      </a-card>
    </div>
  </page-container>
</template>

<script lang="ts">
import { defineComponent, reactive, toRaw } from 'vue'
import { Container as DragContainer, Draggable } from '@/components'
import PermissionServer from '@/api/permission'

export default defineComponent({
  name: 'RoleList'
})
</script>
