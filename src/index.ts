console.log('running test')

export function greet(name: string) {
	const weekday = new Date().toLocaleDateString('en-US', { weekday: 'long' })

	return `Hello, ${name}! Happy, ${weekday}.`
}

export function congratulate(name: string) {
	const weekday = new Date().toLocaleDateString('en-US', { weekday: 'long' })
	return `Congrats, ${name}! Happy, ${weekday}.`
}

export async function greetByResponse(response: Response) {
	if (typeof response === 'undefined') {
		throw new Error('Failed to greet the user: no user response provided')
	}

	const user = await response.json()
	return greet(user.name)
}
