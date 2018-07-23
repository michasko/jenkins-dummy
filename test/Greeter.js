const { expect } = require('chai')
const Greeter = require('../app/Greeter')

describe('Greeter', () => {
	it('greets one person', () => {
		let greeter = new Greeter('mike')
		expect(greeter.guests).to.deep.equal(['mike'])
		expect(greeter.greet()).to.equal('Hello mike!')
	})

	it('greets two people', () => {
		let greeter = new Greeter(['mike', 'matthew'])
		expect(greeter.guests).to.deep.equal(['mike', 'matthew'])
		expect(greeter.greet()).to.equal('Hello mike and matthew!')
	})

	it('adds more people and greets them', () => {
		let greeter = new Greeter(['mike', 'matthew'])
		greeter.addGuest('john')

		expect(greeter.guests).to.deep.equal(['mike', 'matthew', 'john'])
		expect(greeter.greet()).to.equal('Hello mike, matthew and john!')
	})

	it('allows custom greetings', () => {
		let greeter = new Greeter(['mike', 'john'], 'Wazzup')

		expect(greeter.guests).to.deep.equal(['mike', 'john'])
		expect(greeter.greet()).to.equal('Wazzup mike and john!')
	})
})


