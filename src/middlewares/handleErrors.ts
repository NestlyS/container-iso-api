import { Request, Response, NextFunction } from 'express'
import config from '../config'

export const handleErrors = (err: any, req: Request, res: Response, next: NextFunction): void => {
	const isProd: boolean = config.env === 'production'

	res.status(err.status || 500).json({
		result: 'failed',
		message: isProd ? 'Something wrong' : err.message
	})
}
