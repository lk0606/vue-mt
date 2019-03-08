const ls = window.localStorage
export function setItem (key, val) {
  ls.setItem(key, JSON.stringify(val))
}
export function getItem (key) {
  if (ls.getItem(key) !== null) {
    return JSON.parse(ls.getItem(key))
  }
}
export function rmItem (key) {
  ls.removeItem(key)
}
