import { heightSizeList, HeightSizeTyped } from './heigthList'

export const getHeightCode = (value: string): any => {
	const nextValue: string = value.toLowerCase()

	const result = heightSizeList.filter(({ mm }: HeightSizeTyped) => mm === nextValue)

	if (!result) {
		const err: any = new Error('Height code not found')
		err.status = 400
		throw err
	}

	return result
}
