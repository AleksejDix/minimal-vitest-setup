type EventCallback = (...args: any[]) => void

export class EventBus {
	private listeners: Map<string, EventCallback[]> = new Map()

	public on(event: string, callback: EventCallback): void {
		if (!this.listeners.has(event)) {
			this.listeners.set(event, [])
		}
		this.listeners.get(event)?.push(callback)
	}

	public off(event: string, callback: EventCallback): void {
		const eventListeners = this.listeners.get(event)
		if (!eventListeners) return

		this.listeners.set(
			event,
			eventListeners.filter(listener => listener !== callback),
		)
	}

	public emit(event: string, ...args: any[]): void {
		const eventListeners = this.listeners.get(event)
		if (!eventListeners) return

		eventListeners.forEach(listener => listener(...args))
	}

	public clear(event: string): void {
		if (this.listeners.has(event)) {
			this.listeners.delete(event)
		}
	}
}
