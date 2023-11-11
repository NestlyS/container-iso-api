import { lengthSizeList, LengthSizeTyped } from './lengthList'

export const getLengthSize = (value: string): any => {
	const nextValue = value.toUpperCase()

	const result = lengthSizeList.find(({ code }: LengthSizeTyped) => code === nextValue)

	if (!result) {
		const err: any = new Error('length size not found')
		err.status = 400
		throw err
	}

	return {
		...result,
		code: undefined
	}
}
