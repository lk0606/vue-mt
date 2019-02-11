const ls = window.localStorage
export function setItem (key, val) {
  ls.setItem(JSON.stringify(key), val)
}
export function getItem (key) {
  if (ls.getItem(key) !== null) {
    return JSON.parse(ls.getItem(key))
  }
  // JSON.parse( JSON.stringify(ls.getItem( key )) )
}
export function rmItem (key) {
  ls.removeItem(key)
}
