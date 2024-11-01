export function greet(name: string) {
	const weekday = new Date().toLocaleDateString('en-US', { weekday: 'long' })

	return `Hello, ${name}! Happy, ${weekday}.`
}

export function congratulate(name: string) {
	const weekday = new Date().toLocaleDateString('en-US', { weekday: 'long' })
	return `Congrats, ${name}! Happy, ${weekday}.`
}
