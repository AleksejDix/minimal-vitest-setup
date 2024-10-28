import { EventBus } from './eventbus'

const bus = new EventBus()

const mock = vi.fn()

describe('EventBus', () => {
	beforeEach(() => {
		bus.on('hello', mock)
	})

	afterEach(() => {
		bus.clear('hello')
		mock.mockClear()
	})

	test('should call the callback when the event is emitted', () => {
		// Arrange: Set up the initial state
		const expected = 'Aleksej'

		// Act: Trigger the event
		bus.emit('hello', expected)

		// https://vitest.dev/api/mock.html#mock-calls
		const actual = mock.mock.lastCall[0]

		// Assert: Check the result
		expect(actual).toBe(expected)
	})

	test('should call the callback once', () => {
		// Arrange: Set up the initial state
		const expected = 1

		// Act: Trigger the event
		bus.emit('hello', 'Aleksej')
		const actual = mock.mock.calls.length

		// Assert: Check the result
		expect(actual).toBe(expected)
	})
})
