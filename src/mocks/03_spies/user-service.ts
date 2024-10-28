import { type Logger } from './logger'

type UserDraft = {
	name: string
	email: string
}

type User = UserDraft & {
	id: number
}

type CreateUser = (user: UserDraft) => User

const createUser: CreateUser = (user: User) => {
	const newUser: User = {
		id: Math.random(),
		...user,
	}
	return newUser
}

export const createUserWithLogger =
	(logger: Logger) =>
	(user: UserDraft): User => {
		const newUser = createUser(user)
		logger.info(`New user created: ${JSON.stringify(newUser)}`)
		return newUser
	}
