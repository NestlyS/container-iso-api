import { Request, Response, NextFunction } from 'express'

export const notFound = (req: Request, res: Response, next: NextFunction): void => {
	let err: any = new Error('Not found')
	err.status = 404
	next(err)
}
