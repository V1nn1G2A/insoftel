import { ISearchResult } from '../SearchResult'

const paths = new Map([
  ['Home', '/'],
  ['About', '/about'],
  ['Services', '/services'],
  ['Technologies', '/technologies'],
  ['Products', '/products'],
  ['Blog', '/blog'],
  ['Contact', '/contact'],
])

export function searchContent(
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  data: Record<any, any>,
  query: string
): ISearchResult[] {
  const results: ISearchResult[] = []

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const recurse = (obj: any, keyPath: string[] = []) => {
    if (Array.isArray(obj)) {
      obj.forEach(item => recurse(item, keyPath))
    } else if (typeof obj === 'object' && obj !== null) {
      for (const key in obj) {
        const value = obj[key]
        const newKeyPath = key.startsWith('NOUP') ? keyPath : [...keyPath, key]
        recurse(value, newKeyPath)
      }
    } else if (typeof obj === 'string') {
      if (obj.toLowerCase().includes(query.toLowerCase())) {
        const filteredKeys = keyPath.filter(k => !k.startsWith('NOUP'))
        const title = `[ ${filteredKeys.join(' / ')} ]`
        const rootSection = filteredKeys[0]
        const path = paths.get(rootSection) + `#${filteredKeys.slice(1)}` || '/'
        results.push({ title, text: obj, path })
      }
    }
  }

  recurse(data)
  return results
}
