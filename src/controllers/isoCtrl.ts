import { Request, Response, NextFunction } from 'express'
import * as Joi from '@hapi/joi'

import {
	getLengthCode,
	getHeightCode,
	getWidthCode
} from '../data'

const schemaParams = Joi.object().keys({
	type: Joi.string().max(2).required(),
	width: Joi.string().required(),
	height: Joi.string().required(),
	length: Joi.string().required()
})

export const isoCtrl = async(req: Request, res: Response, next: NextFunction) => {
	try {
		await Joi.validate(req.query, schemaParams, { abortEarly: false })
	} catch (err) {
		err.status = 422
		err.message = err.details[0].message.replace(/['"]/g, '')
		return next(err)
	}

	const { type, width, height, length } = req.query

	const lengthCode = getLengthCode(length)
	const heightCode = getHeightCode(height)
	const widthCode = getWidthCode(width)


	const firstCode: string = lengthCode
	const secondCode: any = widthCode.find((widthItem: any) => heightCode.some((heightItem: any) => heightItem.code === widthItem.code))

	if (!firstCode || !secondCode) {
		let err: any = new Error(`firstCode: ${ firstCode } or secondCode: ${ secondCode } is not found`)
		err.status = 400
		return next(err)
	}

	res.json({
		result: 'success',
		data: {
			isoCode: `${ firstCode }${ secondCode.code }${ type }`
		}
	})
}
