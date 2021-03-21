import { v4 as uuidv4 } from 'uuid'

/**
 * 生成独一无二标识符
 */
export function generateUuid (): string {
  return uuidv4()
}

/**
 * 判断 url
 * @param url
 */
export function isUrl (url: string): boolean {
  /* eslint no-useless-escape:0 */
  const pattern = /(((^https?:(?:\/\/)?)(?:[-;:&=\+\$,\w]+@)?[A-Za-z0-9.-]+(?::\d+)?|(?:www.|[-;:&=\+\$,\w]+@)[A-Za-z0-9.-]+)((?:\/[\+~%\/.\w-_]*)?\??(?:[-\+=&;%@.\w_]*)#?(?:[\w]*))?)$/
  return pattern.test(url)
}
