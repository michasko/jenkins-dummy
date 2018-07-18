const { count } = require('./lib/util')

class Greeter {
	constructor(names, greeting = 'Hello') {
		this.guests = Array.isArray(names) ? names : [ names ]
		this.greeting = greeting
	}

	addGuest(name) {
		this.guests.push(name)
	}

	greet() {
		if (count(this.guests) > 2) {
			return `${this.greeting} ${this.guests.slice(0, -1).join(', ')} and ${this.guests.slice(-1)}!`
		} else if (count(this.guests) > 1) {
			return `${this.greeting} ${this.guests[0]} and ${this.guests[1]}!`
		}
		return `${this.greeting} ${this.guests[0]}!`
	}
}

module.exports = Greeter
