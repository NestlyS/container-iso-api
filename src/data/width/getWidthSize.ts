import { widthSizeList, WidthSizeTyped } from './widthList'

export const getWidthSize = (value: string): any => {
	const nextValue: string = value.toString().toUpperCase()

	const result = widthSizeList.find((type: WidthSizeTyped) => type.code === nextValue)

	if (!result) {
		const err: any = new Error('width size not found')
		err.status = 400
		throw err
	}

	return {
		...result,
		code: undefined
	}
}
