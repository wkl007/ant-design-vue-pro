import type { App } from 'vue'
import { ProProvider, TransformVNode, PageContainer } from '@/components'

/**
 * 全局组件配置
 * @param app
 */
export function setupComponents (app: App<Element>): void {
  app
    .use(ProProvider)
    .component(TransformVNode.name, TransformVNode)
    .component(PageContainer.name, PageContainer)
}
