import { lengthSizeList, LengthSizeTyped } from './lengthList'

export const getLengthCode = (value: string): any => {
	const nextValue = value.toString().toLowerCase()

	const result = lengthSizeList.find(({ mm }: LengthSizeTyped) => mm === nextValue)

	if (!result) {
		const err: any = new Error('Length code not found')
		err.status = 400
		throw err
	}

	return result.code
}
