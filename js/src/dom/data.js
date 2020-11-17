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
  const storeData = new Map()
  let id = 1
  return {
    set(element, key, data) {
      if (typeof element.bsKey === 'undefined') {
        element.bsKey = {
          key,
          id
        }
        id++
      }

      storeData.set(element.bsKey.id, data)
    },
    get(element, key) {
      if (!element || typeof element.bsKey === 'undefined') {
        return null
      }

      const keyProperties = element.bsKey
      if (keyProperties.key === key) {
        return storeData.get(keyProperties.id)
      }

      return null
    },
    delete(element, key) {
      if (typeof element.bsKey === 'undefined') {
        return
      }

      const keyProperties = element.bsKey
      if (keyProperties.key === key) {
        storeData.delete(keyProperties.id)
        delete element.bsKey
      }
    }
  }
})()

const Data = {
  setData(instance, key, data) {
    mapData.set(instance, key, data)
  },
  getData(instance, key) {
    return mapData.get(instance, key)
  },
  removeData(instance, key) {
    mapData.delete(instance, key)
  }
}

export default Data
