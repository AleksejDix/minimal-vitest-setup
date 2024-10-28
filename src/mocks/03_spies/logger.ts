export type LogLevel = 'debug' | 'info' | 'warn' | 'error'

export type LogMessage = (message: string) => void

export type Logger = {
	debug: LogMessage
	info: LogMessage
	warn: LogMessage
	error: LogMessage
}

export const createLogger = (level: LogLevel = 'info'): Logger => {
	const levels: Record<LogLevel, number> = {
		debug: 0,
		info: 1,
		warn: 2,
		error: 3,
	}

	const log = (currentLevel: LogLevel, message: string) => {
		if (levels[currentLevel] >= levels[level]) {
			console.log(`[${currentLevel.toUpperCase()}] ${message}`)
		}
	}

	return {
		debug: (message: string) => log('debug', message),
		info: (message: string) => log('info', message),
		warn: (message: string) => log('warn', message),
		error: (message: string) => log('error', message),
	}
}

// // Example usage
// const logger = createLogger('debug')

// logger.debug('This is a debug message') // [DEBUG] This is a debug message
// logger.info('This is an info message') // [INFO] This is an info message
// logger.warn('This is a warning message') // [WARN] This is a warning message
// logger.error('This is an error message') // [ERROR] This is an error message
