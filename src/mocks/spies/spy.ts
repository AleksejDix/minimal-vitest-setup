export function random(min: number = 0, max: number = 100) {
	return Math.floor(Math.random() * (max - min + 1)) + min
}

export function double() {
	return random() * 2
}
