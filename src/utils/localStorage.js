const ls = window.localStorage
export function setItem (key: string, val: string) {
  ls.setItem(key, val)
}
export function getItem (key: string) {
  if (ls.getItem(key) !== null) {
    return JSON.parse(ls.getItem(key))
  }
  // JSON.parse( JSON.stringify(ls.getItem( key )) )
}
export function rmItem (key: string) {
  ls.removeItem(key)
}
