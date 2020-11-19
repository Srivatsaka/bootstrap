import Data from '../../../src/dom/data'

/** Test helpers */
import { getFixture, clearFixture } from '../../helpers/fixture'

describe('Data', () => {
  let fixtureEl

  beforeAll(() => {
    fixtureEl = getFixture()
  })

  afterEach(() => {
    clearFixture()
  })

  describe('getData', () => {
    it('should return stored data', () => {
      fixtureEl.innerHTML = '<div></div>'

      const div = fixtureEl.querySelector('div')
      const data = {
        test: 'bsData'
      }

      Data.setData(div, data)
      expect(Data.getData(div)).toEqual(data)
    })

    it('should return null on undefined element', () => {
      expect(Data.getData(null)).toEqual(null)
      expect(Data.getData(undefined)).toEqual(null)
    })

    it('should return null when an element have nothing stored', () => {
      fixtureEl.innerHTML = '<div></div>'

      const div = fixtureEl.querySelector('div')

      expect(Data.getData(div)).toEqual(null)
    })
  })

  describe('removeData', () => {
    it('should do nothing when an element have nothing stored', () => {
      fixtureEl.innerHTML = '<div></div>'

      const div = fixtureEl.querySelector('div')

      Data.removeData(div)
      expect().nothing()
    })
  })
})
