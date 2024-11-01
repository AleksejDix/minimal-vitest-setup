import { greet, congratulate, greetByResponse } from './date.js'

describe('Greetings with Dates Mocking', () => {
	const OriginalDate = globalThis.Date

	beforeAll(() => {
		globalThis.Date = new Proxy(globalThis.Date, {
			construct: () => new OriginalDate('2024-01-01'),
		})
	})

	afterAll(() => {
		globalThis.Date = OriginalDate
	})

	test('returns a greeting message for the given name', () => {
		expect(greet('John')).toBe('Hello, John! Happy, Monday.')
	})

	test('returns a congratulation message for the given name', () => {
		expect(congratulate('Sarah')).toBe('Congrats, Sarah! Happy, Monday.')
	})
})
