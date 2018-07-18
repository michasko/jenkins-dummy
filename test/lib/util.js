const { expect } = require('chai')
const { count } = require('../../app/lib/util')

describe('util # count', () => {
	it('returns the array length', () => {
		expect(count([1, 2, 3])).to.equal(3)
		expect(count([1])).to.equal(1)
	})

	it('returns 0 if non-array value was passed', () => {
		expect(count({})).to.equal(0)
	})
})
