import { createLogger } from './logger'
import { createUserWithLogger } from './user-service'

describe('createUser with logger', () => {
	afterEach(() => {
		vi.restoreAllMocks()
	})

	test('should create a user with a unique ID', () => {
		// Arrange
		const logger = createLogger('info')
		const createUser = createUserWithLogger(logger)

		// Act
		const newUser1 = createUser({ name: 'John Doe', email: 'john@example.com' })
		const newUser2 = createUser({ name: 'Jane Doe', email: 'jane@example.com' })

		// Assert
		expect(newUser1.id).not.toBe(newUser2.id)

		expect(newUser1).toHaveProperty('id')
		expect(newUser2).toHaveProperty('id')
	})

	test('should trigger logger when new user is created', () => {
		// Arrange
		const logger = createLogger('info')
		const loggerSpy = vi.spyOn(logger, 'info')
		const createUser = createUserWithLogger(logger)

		// Act
		const newUser = createUser({ name: 'John Doe', email: 'john@example.com' })

		// Assert
		expect(loggerSpy).toHaveBeenCalledOnce()
		expect(loggerSpy).toHaveBeenCalledWith(
			`New user created: ${JSON.stringify(newUser)}`,
		)

		// Cleanup
		loggerSpy.mockRestore()
	})
})
