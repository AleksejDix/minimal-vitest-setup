import { random, double } from './spy'

describe('mocking random', () => {
	beforeEach(() => {
		vi.spyOn(Math, 'random').mockReturnValue(0.5) // Mocking Math.random to return 0.5
	})

	afterEach(() => {
		vi.restoreAllMocks()
	})

	test('returns a random number', () => {
		expect(random()).toBe(50)
	})

	test('returns double of a random number', () => {
		expect(double()).toBe(100)
	})
})
