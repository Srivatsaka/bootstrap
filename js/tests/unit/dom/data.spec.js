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

  describe('get', () => {
    it('should return stored data', () => {
      fixtureEl.innerHTML = '<div></div>'

      const div = fixtureEl.querySelector('div')
      const data = {
        test: 'bsData'
      }

      Data.set(div, data)
      expect(Data.get(div)).toEqual(data)
    })

    it('should return null on undefined element', () => {
      expect(Data.get(null)).toEqual(null)
      expect(Data.get(undefined)).toEqual(null)
    })

    it('should return null when an element have nothing stored', () => {
      fixtureEl.innerHTML = '<div></div>'

      const div = fixtureEl.querySelector('div')

      expect(Data.get(div)).toEqual(null)
    })
  })

  describe('remove', () => {
    it('should do nothing when an element have nothing stored', () => {
      fixtureEl.innerHTML = '<div></div>'

      const div = fixtureEl.querySelector('div')

      Data.remove(div)
      expect().nothing()
    })
  })
})
