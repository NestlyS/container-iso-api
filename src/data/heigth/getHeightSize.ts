import { heightSizeList, HeightSizeTyped } from './heigthList'

export const getHeightSize = (value: string): any => {
	const nextValue: string = value.toUpperCase()

	const result = heightSizeList.find(({ code }: HeightSizeTyped) => code === nextValue)

	if (!result) {
		const err: any = new Error('heigth size not found')
		err.status = 400
		throw err
	}

	return {
		...result,
		code: undefined
	}
}
