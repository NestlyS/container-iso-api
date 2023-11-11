import * as http from 'http'
import config from './config'

import app from './app'

const PORT: number = parseInt(config.port)
const server = http.createServer(app)

server.listen(PORT)
server.on('listening', () => console.info(`Running server http://localhost:${ PORT }`))
server.on('error', onErrorServer)

// Graseful shutdown events
process.on('SIGINT', () => {
	console.info('Graceful shutdown ', new Date().toISOString())
	shutdown()
})

process.on('SIGTERM', () => {
	console.info('Graceful shutdown ', new Date().toISOString())
	shutdown()
})

process.on('uncaughtException', (err: any) => {
	console.error('uncaughtException', err.stack)
    shutdown(1)
})

process.on('unhandledRejection', (err: any) => {
	console.error('uncaughtException', err.stack)
	shutdown(1)
})

// Shutdown server
const shutdown = (code?: number) => server.close(onErrorServer)

// Handle error server
function onErrorServer (err: any) {
	if (err) {
		console.error(err)
		process.exitCode = 1
	}

	process.exit()
}
