/**
 * --------------------------------------------------------------------------
 * Bootstrap (v5.0.0-alpha3): dom/data.js
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
 * --------------------------------------------------------------------------
 */

const mapData = new Map()

export default {
  set(element, data) {
    mapData.set(element, data)
  },
  get(element) {
    return mapData.get(element) || null
  },
  remove(element) {
    mapData.delete(element)
  }
}
