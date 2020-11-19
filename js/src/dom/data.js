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

const mapData = (() => {
  const map = new Map()
  return {
    set(element, data) {
      map.set(element, data)
    },
    get(element) {
      return map.get(element) || null
    },
    delete(element) {
      map.delete(element)
    }
  }
})()

const Data = {
  setData(instance, data) {
    mapData.set(instance, data)
  },
  getData(instance) {
    return mapData.get(instance)
  },
  removeData(instance) {
    mapData.delete(instance)
  }
}

export default Data
