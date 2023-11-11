import { Request, Response, NextFunction } from 'express'

import {
	getInfoContainer,
	getLengthSize,
	getHeightSize,
	getWidthSize
} from '../data'

export const infoCtrl = (req: Request, res: Response, next: NextFunction) => {
	const { iso, lang } = req.query

	if (!iso || iso.length !== 4) {
		let err: any = new Error('iso code is incorrect')
		err.status = 422
		return next(err)
	}

	const currentLang = ['ru', 'en'].find(item => item === lang) || 'en'

	const isoCode: string = iso.toUpperCase()

	const lengthSymbol: string = isoCode.slice(0, 1)
	const sizeSymbol: string = isoCode.slice(1, 2)
	const typeSymbols: string = isoCode.slice(-2)

	const data = {
		isoCode,
		...getInfoContainer(typeSymbols, { lang: currentLang }),
		length: getLengthSize(lengthSymbol),
		heigth: getHeightSize(sizeSymbol),
		width: getWidthSize(sizeSymbol)
	}

	res.json({
		result: 'success',
		data
	})
}
