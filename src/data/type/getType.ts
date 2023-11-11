import { containersList, ContainerTyped } from './typesList'

interface Options {
	lang: string
}

export const getInfoContainer = (value: string, { lang }: Options): any => {
	const nextValue: string = value.toString().toUpperCase()

	const result: any = containersList.find((type: ContainerTyped) => type.typeCode === nextValue)

	if (!result) {
		const err: any = new Error('container type not found')
		err.status = 400
		throw err
	}

	const { ru, en, ...restValues } = result

	return {
		...restValues,
		...result[lang]
	}
}
