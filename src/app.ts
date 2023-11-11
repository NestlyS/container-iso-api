import * as express from 'express'
import * as morgan from 'morgan'
import * as cors from 'cors'

import config from './config'
import routes from './routes'
import { notFound } from './middlewares/notFound'
import { handleErrors } from './middlewares/handleErrors'

class App {
    public app: express.Application

    constructor() {
        this.app = express()

        this.configure()
        this.router()
    }

    private configure(): void {
        this.app.set('x-powered-by', false)

        if (config.env !== 'production') {
			this.app.use(morgan('dev'))
		}

        this.app.use(cors())
        this.app.use(express.json())
        this.app.use(express.urlencoded({ extended: true }))
    }

    private router(): void {
        this.app.use(routes)
		// Not found route
		this.app.use(notFound)
		// Handle errors
		this.app.use(handleErrors)
    }
}

export default new App().app
