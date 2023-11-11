export interface HeightSizeTyped {
	code: string,
	mm: string,
	ft: string
}

export const heightSizeList: HeightSizeTyped[] = [
	{ code: '0', mm: '2438', ft: '8' },
	{ code: '2', mm: '2591', ft: '8,6' },
	{ code: '4', mm: '2743', ft: '9' },
	{ code: '5', mm: '2895', ft: '9,6' },
	{ code: '6', mm: 'greater than 2895', ft: '9,6' },
	{ code: '8', mm: '1295', ft: '4,3' },
	{ code: '9', mm: 'less than or equal to 1219', ft: '4' },
	{ code: 'C', mm: '2591', ft: '8,6' },
	{ code: 'D', mm: '2743', ft: '9' },
	{ code: 'E', mm: '2895', ft: '9,6' },
	{ code: 'F', mm: 'greater than 2895', ft: '9,6' },
	{ code: 'L', mm: '2591', ft: '8,6' },
	{ code: 'M', mm: '2743', ft: '9' },
	{ code: 'N', mm: '2895', ft: '9,6' },
	{ code: 'P', mm: 'greater than 2895', ft: '9,6' }
]

