import { v4 as uuidv4 } from 'uuid'

/**
 * 生成独一无二标识符
 */
export function generateUuid (): string {
  return uuidv4()
}
