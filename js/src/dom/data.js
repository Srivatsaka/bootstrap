/**
 * --------------------------------------------------------------------------
 * Bootstrap (v5.0.0-alpha3): dom/data.js
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
 * --------------------------------------------------------------------------
 */

/**
 * ------------------------------------------------------------------------
 * Constants
 * ------------------------------------------------------------------------
 */

const mapData = new Map()

export default {
  setData(element, data) {
    mapData.set(element, data)
  },
  getData(element) {
    return mapData.get(element) || null
  },
  removeData(element) {
    mapData.delete(element)
  }
}
