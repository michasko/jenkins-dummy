const { count } = require('./lib/util')

class Greeter {
	constructor(names) {
		this.guests = Array.isArray(names) ? names : [ names ]
	}

	addGuest(name) {
		this.guests.push(name)
	}

	get greeting() {
		if (count(this.guests) > 2) {
			return `Hello ${this.guests.slice(0, -1).join(', ')} and ${this.guests.slice(-1)}!`
		} else if (count(this.guests) > 1) {
			return `Hello ${this.guests[0]} and ${this.guests[1]}!`
		}
		return `Hello ${this.guests[0]}!`
	}
}

module.exports = Greeter
