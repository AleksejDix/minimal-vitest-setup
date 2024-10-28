import { getUserName } from './async'

test('returns async mock of a Response.json', async () => {
	const response = Response.json({ name: 'Patrick' })
	expect(await getUserName(response)).toBe('Patrick')
})

test('throws on greeting user with undefined user response', async () => {
	await expect(getUserName(undefined)).rejects.toThrow(
		new Error('Failed to greet the user: no user response provided'),
	)
})
