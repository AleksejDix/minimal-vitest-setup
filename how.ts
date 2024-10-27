interface Assertions {
	toBe(expected: unknown): void
	rejects: {
		toThrow(expected: unknown): Promise<void>
	}
}

declare global {
	var _expect: (actual: unknown) => Assertions
	var _test: (title: string, callback: () => void | Promise<void>) => void
	var _beforeAll: (callback: () => void) => void
	var _afterAll: (callback: () => void) => void
}

globalThis._beforeAll = function (callback: () => void) {
	callback()
}

globalThis._afterAll = function (callback: () => void) {
	process.on('beforeExit', () => {
		callback()
	})
}

globalThis._expect = function (actual: unknown) {
	return {
		toBe(expected: unknown) {
			if (actual !== expected) {
				throw new Error(`Expected ${actual} to equal to ${expected}`)
			}
		},
		rejects: {
			toThrow(expected: unknown) {
				if (!(actual instanceof Promise)) {
					throw new Error(`Expected ${actual} to be a promise`)
				}

				return actual.then(
					() => {
						throw new Error(`Expected ${actual} to reject but it didn't`)
					},
					error => {
						if (error instanceof Error) {
							if (error.message !== expected.message) {
								throw new Error(
									`Expected ${error.message} to equal to ${expected.message}`,
								)
							}
						}
					},
				)
			},
		},
	}
}

globalThis._test = async function (title, callback) {
	try {
		await callback()
		console.log(`✓ ${title}`)
	} catch (error) {
		console.error(`✗ ${title}`)
		console.error(error, '\n')
	}
}
