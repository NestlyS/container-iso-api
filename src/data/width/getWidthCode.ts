import { widthSizeList, WidthSizeTyped } from './widthList'

export const getWidthCode = (value: string): any => {
	const result = widthSizeList.filter(({ mm }: WidthSizeTyped) => mm === value)

	if (!result) {
		const err: any = new Error('Width code not found')
		err.status = 400
		throw err
	}

	return result
}
