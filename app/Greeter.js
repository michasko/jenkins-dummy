const { count } = require('./lib/util')

class Greeter {
	constructor(names) {
		this.guests = Array.isArray(names) ? names : [ names ]
	}

	addGuest(name) {
		this.guests.push(name)
	}

	get greeting() {
		let greeting

		if (count(this.guests) > 2) {
			greeting = `Hello ${this.guests.slice(0, -1).join(', ')} and ${this.guests.slice(-1)}!`
		} else if (count(this.guests) > 1) {
			greeting = `Hello ${this.guests[0]} and ${this.guests[1]}!`
		} else {
			greeting = `Hello ${this.guests[0]}!`
		}

		return `${greeting} We've got ${count(this.guests)} guests total!`
	}
}

module.exports = Greeter
