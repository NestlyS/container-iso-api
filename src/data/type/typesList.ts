type Locale = {
	name: string,
	type: string,
	specifications: string | null
}

export type ContainerTyped = {
	typeCode: string,
	groupCode: string,
	ru: Locale,
	en: Locale
}

export const containersList: ContainerTyped[] = [
	// Dry shipping container
    {
        typeCode: 'G0',
        groupCode: 'GP',
        ru: {
            name: 'Сухогрузный морской контейнер',
            type: 'Сухогрузный морской контейнер без вентиляции',
            specifications: 'Один/оба торца открыты'
        },
        en: {
            name: 'Dry Shipping Container',
            type: 'Dry Shipping Container without ventilation',
            specifications: 'One end/both ends open'
        }
    }, {
        typeCode: 'G1',
        groupCode: 'GP',
        ru: {
            name: 'Сухогрузный морской контейнер',
            type: 'Сухогрузный морской контейнер без вентиляции',
            specifications: 'Естественная вентиляция верхней части'
        },
        en: {
            name: 'Dry Shipping Container',
            type: 'Dry Shipping container without ventilation',
            specifications: 'Passive vents at upper part of cargo space'
        }
    }, {
        typeCode: 'G2',
        groupCode: 'GP',
        ru: {
            name: 'Сухогрузный морской контейнер',
            type: 'Сухогрузный морской контейнер без вентиляции',
            specifications: 'Полностью открыты одна/обе боковые стороны'
        },
        en: {
            name: 'Dry Shipping Container',
            type: 'Dry Shipping Container without ventilation',
            specifications: 'One/both ends open plus full opening(s) on one/both sides'
        }
    }, {
        typeCode: 'G3',
        groupCode: 'GP',
        ru: {
            name: 'Сухогрузный морской контейнер',
            type: 'Сухогрузный морской контейнер без вентиляции',
            specifications: 'Открыты не полностью одна/обе боковые стороны'
        },
        en: {
            name: 'Dry Shipping Container',
            type: 'Dry Shipping Container without ventilation',
            specifications: 'One/both ends open plus partial opening(s) on one/both sides'
        }
    }, {
        typeCode: 'G4',
        groupCode: 'GP',
        ru: {
            name: 'Сухогрузный морской контейнер',
            type: 'Сухогрузный морской контейнер без вентиляции',
            specifications: null
        },
        en: {
            name: 'Dry Shipping Container',
            type: 'Dry Shipping Container without ventilation',
            specifications: null
        }
    }, {
        typeCode: 'G5',
        groupCode: 'GP',
        ru: {
            name: 'Сухогрузный морской контейнер',
            type: 'Сухогрузный морской контейнер без вентиляции',
            specifications: null
        },
        en: {
            name: 'Dry Shipping Container',
            type: 'Dry Shipping Container without ventilation',
            specifications: null
        }
    }, {
        typeCode: 'G6',
        groupCode: 'GP',
        ru: {
            name: 'Сухогрузный морской контейнер',
            type: 'Сухогрузный морской контейнер без вентиляции',
            specifications: null
        },
        en: {
            name: 'Dry Shipping Container',
            type: 'Dry Shipping Container without ventilation',
            specifications: null
        }
    }, {
        typeCode: 'G7',
        groupCode: 'GP',
        ru: {
            name: 'Сухогрузный морской контейнер',
            type: 'Сухогрузный морской контейнер без вентиляции',
            specifications: null
        },
        en: {
            name: 'Dry Shipping Container',
            type: 'Dry Shipping Container without ventilation',
            specifications: null
        }
    }, {
        typeCode: 'G8',
        groupCode: 'GP',
        ru: {
            name: 'Сухогрузный морской контейнер',
            type: 'Сухогрузный морской контейнер без вентиляции',
            specifications: null
        },
        en: {
            name: 'Dry Shipping Container',
            type: 'Dry Shipping Container without ventilation',
            specifications: null
        }
    }, {
        typeCode: 'G9',
        groupCode: 'GP',
        ru: {
            name: 'Сухогрузный морской контейнер',
            type: 'Сухогрузный морской контейнер без вентиляции',
            specifications: null
        },
        en: {
            name: 'Dry Shipping Container',
            type: 'Dry Shipping Container without ventilation',
            specifications: null
        }
    },

    // Ventilated dry shipping container
    {
        typeCode: 'V0',
        groupCode: 'VH',
        ru: {
            name: 'Сухогрузный морской контейнер с вентиляцией',
            type: 'Сухогрузный морской контейнер с вентиляцией',
            specifications: 'Немеханическая система с вентиляционными отверстиями'
        },
        en: {
            name: 'Ventilated Dry Shipping Container',
            type: 'Ventilated Dry shipping Container',
            specifications: 'Nonmechanical system, vents at lower and upper parts of cargo space'
        }
    }, {
        typeCode: 'V1',
        groupCode: 'VH',
        ru: {
            name: 'Сухогрузный морской контейнер с вентиляцией',
            type: 'Сухогрузный морской контейнер с вентиляцией',
            specifications: null
        },
        en: {
            name: 'Ventilated dry shipping container',
            type: 'Ventilated dry shipping container',
            specifications: null
        }
    }, {
        typeCode: 'V2',
        groupCode: 'VH',
        ru: {
            name: 'Сухогрузный морской контейнер с вентиляцией',
            type: 'Сухогрузный морской контейнер с вентиляцией',
            specifications: 'Механическая система вентиляции расположена внутри'
        },
        en: {
            name: 'Ventilated Dry Shipping Container',
            type: 'Ventilated Dry Shipping Container',
            specifications: 'Mechanical ventilation system, located internally'
        }
    }, {
        typeCode: 'V3',
        groupCode: 'VH',
        ru: {
            name: 'Сухогрузный морской контейнер с вентиляцией',
            type: 'Сухогрузный морской контейнер с вентиляцией',
            specifications: null
        },
        en: {
            name: 'Ventilated Dry Shipping Container',
            type: 'Ventilated Dry Shipping container',
            specifications: null
        }
    }, {
        typeCode: 'V4',
        groupCode: 'VH',
        ru: {
            name: 'Сухогрузный морской контейнер с вентиляцией',
            type: 'Сухогрузный морской контейнер с вентиляцией',
            specifications: 'Механическая система вентиляции расположена снаружи'
        },
        en: {
            name: 'Ventilated Dry Shipping Container',
            type: 'Ventilated Dry Shipping Container',
            specifications: 'Mechanical ventilation system, located externally'
        }
    }, {
        typeCode: 'V5',
        groupCode: 'VH',
        ru: {
            name: 'Сухогрузный морской контейнер с вентиляцией',
            type: 'Сухогрузный морской контейнер с вентиляцией',
            specifications: null
        },
        en: {
            name: 'Ventilated Dry Shipping Container',
            type: 'Ventilated Dry Shipping Container',
            specifications: null
        }
    }, {
        typeCode: 'V6',
        groupCode: 'VH',
        ru: {
            name: 'Сухогрузный морской контейнер с вентиляцией',
            type: 'Сухогрузный морской контейнер с вентиляцией',
            specifications: null
        },
        en: {
            name: 'Ventilated Dry Shipping Container',
            type: 'Ventilated Dry Shipping Container',
            specifications: null
        }
    }, {
        typeCode: 'V7',
        groupCode: 'VH',
        ru: {
            name: 'Сухогрузный морской контейнер с вентиляцией',
            type: 'Сухогрузный морской контейнер с вентиляцией',
            specifications: null
        },
        en: {
            name: 'Ventilated Dry Shipping Container',
            type: 'Ventilated Dry Shipping Container',
            specifications: null
        }
    }, {
        typeCode: 'V8',
        groupCode: 'VH',
        ru: {
            name: 'Сухогрузный морской контейнер с вентиляцией',
            type: 'Сухогрузный морской контейнер с вентиляцией',
            specifications: null
        },
        en: {
            name: 'Ventilated Dry Shipping Container',
            type: 'Ventilated Dry Shipping Container',
            specifications: null
        }
    }, {
        typeCode: 'V9',
        groupCode: 'VH',
        ru: {
            name: 'Сухогрузный морской контейнер с вентиляцией',
            type: 'Сухогрузный морской контейнер с вентиляцией',
            specifications: null
        },
        en: {
            name: 'Ventilated Dry Shipping Container',
            type: 'Ventilated Dry Shipping Container',
            specifications: null
        }
    },

    // Bulk Container (BC)
    {
        typeCode: 'B0',
        groupCode: 'BU',
        ru: {
            name: 'Контейнер для насыпных грузов',
            type: 'Ящичного типа без давления',
            specifications: 'Закрытый'
        },
        en: {
            name: 'Bulk Container',
            type: 'Nonpressurized, box type',
            specifications: 'Closed'
        }
    }, {
        typeCode: 'B1',
        groupCode: 'BU',
        ru: {
            name: 'Контейнер для насыпных грузов',
            type: 'Ящичного типа без давления',
            specifications: 'Воздухонепроницаемый'
        },
        en: {
            name: 'Bulk Container',
            type: 'Nonpressurized, box type',
            specifications: 'Airtight'
        }
    }, {
        typeCode: 'B2',
        groupCode: 'BU',
        ru: {
            name: 'Контейнер для насыпных грузов',
            type: 'Ящичного типа без давления',
            specifications: null
        },
        en: {
            name: 'Bulk Container',
            type: 'Nonpressurized, box type',
            specifications: null
        }
    }, {
        typeCode: 'B3',
        groupCode: 'BK',
        ru: {
            name: 'Контейнер для насыпных грузов',
            type: 'Под давлением',
            specifications: 'Горизонтальная разгрузка, испытательное давление 150 кПа'
        },
        en: {
            name: 'Bulk Container',
            type: 'Pressurized',
            specifications: 'Horizontal discharge, test pressure 150 kPa'
        }
    }, {
        typeCode: 'B4',
        groupCode: 'BK',
        ru: {
            name: 'Контейнер для насыпных грузов',
            type: 'Под давлением',
            specifications: 'Горизонтальная разгрузка, испытательное давление 265 кПа'
        },
        en: {
            name: 'Bulk Container',
            type: 'Pressurized',
            specifications: 'Horizontal discharge, test pressure 265 kPa'
        }
    }, {
        typeCode: 'B5',
        groupCode: 'BK',
        ru: {
            name: 'Контейнер для насыпных грузов',
            type: 'Под давлением',
            specifications: 'Разгрузка опрокидыванием, испытательное давление 150 кПа'
        },
        en: {
            name: 'Bulk Container',
            type: 'Pressurized',
            specifications: 'Tipping discharge, test pressure 150 kPa'
        }
    }, {
        typeCode: 'B6',
        groupCode: 'BK',
        ru: {
            name: 'Контейнер для насыпных грузов',
            type: 'Под давлением',
            specifications: 'Разгрузка опрокидыванием, испытательное давление 265 кПа'
        },
        en: {
            name: 'Bulk Container',
            type: 'Pressurized',
            specifications: 'Tipping discharge, test pressure 265 kPa'
        }
    }, {
        typeCode: 'B7',
        groupCode: 'BK',
        ru: {
            name: 'Контейнер для насыпных грузов',
            type: 'Под давлением',
            specifications: null
        },
        en: {
            name: 'Bulk Container',
            type: 'Pressurized',
            specifications: null
        }
    }, {
        typeCode: 'B8',
        groupCode: 'BK',
        ru: {
            name: 'Контейнер для насыпных грузов',
            type: 'Под давлением',
            specifications: null
        },
        en: {
            name: 'Bulk Container',
            type: 'Pressurized',
            specifications: null
        }
    }, {
        typeCode: 'B9',
        groupCode: 'BK',
        ru: {
            name: 'Контейнер для насыпных грузов',
            type: 'Под давлением',
            specifications: null
        },
        en: {
            name: 'Bulk Container',
            type: 'Pressurized',
            specifications: null
        }
    },

    // Automobile Container (AC)
    {
        typeCode: 'S0',
        groupCode: 'SN',
        ru: {
            name: 'Автомобильный контейнер',
            type: 'Контейнер специального назначения',
            specifications: 'Для транспортировки скота'
        },
        en: {
            name: 'Automobile Container',
            type: 'Special purpose container',
            specifications: 'Livestock carrier'
        }
    }, {
        typeCode: 'S1',
        groupCode: 'SN',
        ru: {
            name: 'Автомобильный контейнер',
            type: 'Контейнер специального назначения',
            specifications: 'Для транспортировки автомобилей'
        },
        en: {
            name: 'Automobile Container',
            type: 'Special purpose container',
            specifications: 'Automobile carrier'
        }
    }, {
        typeCode: 'S2',
        groupCode: 'SN',
        ru: {
            name: 'Автомобильный контейнер',
            type: 'Контейнер специального назначения',
            specifications: 'Для транспортировки свежей рыбы'
        },
        en: {
            name: 'Automobile Container',
            type: 'Special purpose container',
            specifications: 'Live fish carrier'
        }
    }, {
        typeCode: 'S3',
        groupCode: 'SN',
        ru: {
            name: 'Автомобильный контейнер',
            type: 'Контейнер специального назначения',
            specifications: null
        },
        en: {
            name: 'Automobile Container',
            type: 'Special purpose container',
            specifications: null
        }
    }, {
        typeCode: 'S4',
        groupCode: 'SN',
        ru: {
            name: 'Автомобильный контейнер',
            type: 'Контейнер специального назначения',
            specifications: null
        },
        en: {
            name: 'Automobile Container',
            type: 'Special purpose container',
            specifications: null
        }
    }, {
        typeCode: 'S5',
        groupCode: 'SN',
        ru: {
            name: 'Автомобильный контейнер',
            type: 'Контейнер специального назначения',
            specifications: null
        },
        en: {
            name: 'Automobile Container',
            type: 'Special purpose container',
            specifications: null
        }
    }, {
        typeCode: 'S6',
        groupCode: 'SN',
        ru: {
            name: 'Автомобильный контейнер',
            type: 'Контейнер специального назначения',
            specifications: null
        },
        en: {
            name: 'Automobile Container',
            type: 'Special purpose container',
            specifications: null
        }
    }, {
        typeCode: 'S7',
        groupCode: 'SN',
        ru: {
            name: 'Автомобильный контейнер',
            type: 'Контейнер специального назначения',
            specifications: null
        },
        en: {
            name: 'Automobile Container',
            type: 'Special purpose container',
            specifications: null
        }
    }, {
        typeCode: 'S8',
        groupCode: 'SN',
        ru: {
            name: 'Автомобильный контейнер',
            type: 'Контейнер специального назначения',
            specifications: null
        },
        en: {
            name: 'Automobile Container',
            type: 'Special purpose container',
            specifications: null
        }
    }, {
        typeCode: 'S9',
        groupCode: 'SN',
        ru: {
            name: 'Автомобильный контейнер',
            type: 'Контейнер специального назначения',
            specifications: null
        },
        en: {
            name: 'Automobile Container',
            type: 'Special purpose container',
            specifications: null
        }
    },

    // Reefer Container (RC)
    {
        typeCode: 'R0',
        groupCode: 'RE',
        ru: {
            name: 'Рефконтейнер',
            type: 'Охлаждаемый',
            specifications: 'С машинным охлаждением',
        },
        en: {
            name: 'Reefer Container',
            type: 'Refrigerated',
            specifications: 'Mechanically refrigerated'
        }
    }, {
        typeCode: 'R1',
        groupCode: 'RT',
        ru: {
            name: 'Рефконтейнер',
            type: 'Охлаждаемый и обогреваемый',
            specifications: 'С машинным охлаждением и отоплением'
        },
        en: {
            name: 'Reefer Container',
            type: 'Refrigerated and heated',
            specifications: 'Mechanically refrigerated and heated'
        }
    }, {
        typeCode: 'R2',
        groupCode: 'RS',
        ru: {
            name: 'Рефконтейнер',
            type: 'Охлаждаемый и обогреваемый собственной установкой',
            specifications: 'С машинным охлаждением'
        },
        en: {
            name: 'Reefer Container',
            type: 'Self-powered refrigerated/heated',
            specifications: 'Mechanically refrigerated'
        }
    }, {
        typeCode: 'R3',
        groupCode: 'RS',
        ru: {
            name: 'Рефконтейнер',
            type: 'Охлаждаемый и обогреваемый собственной установкой',
            specifications: 'С машинным охлаждением и отоплением'
        },
        en: {
            name: 'Reefer Container',
            type: 'Self-powered refrigerated/heated',
            specifications: 'Mechanically refrigerated and heated'
        }
    }, {
        typeCode: 'R4',
        groupCode: 'RS',
        ru: {
            name: 'Рефконтейнер',
            type: 'Охлаждаемый и обогреваемый собственной установкой',
            specifications: null
        },
        en: {
            name: 'Reefer Container',
            type: 'Self-powered refrigerated/heated',
            specifications: null
        }
    }, {
        typeCode: 'R5',
        groupCode: 'RS',
        ru: {
            name: 'Рефконтейнер',
            type: 'Охлаждаемый и обогреваемый собственной установкой',
            specifications: null
        },
        en: {
            name: 'Reefer Container',
            type: 'Self-powered refrigerated/heated',
            specifications: null
        }
    }, {
        typeCode: 'R6',
        groupCode: 'RS',
        ru: {
            name: 'Рефконтейнер',
            type: 'Охлаждаемый и обогреваемый собственной установкой',
            specifications: null
        },
        en: {
            name: 'Reefer Container',
            type: 'Self-powered refrigerated/heated',
            specifications: null
        }
    }, {
        typeCode: 'R7',
        groupCode: 'RS',
        ru: {
            name: 'Рефконтейнер',
            type: 'Охлаждаемый и обогреваемый собственной установкой',
            specifications: null
        },
        en: {
            name: 'Reefer Container',
            type: 'Self-powered refrigerated/heated',
            specifications: null
        }
    }, {
        typeCode: 'R8',
        groupCode: 'RS',
        ru: {
            name: 'Рефконтейнер',
            type: 'Охлаждаемый и обогреваемый собственной установкой',
            specifications: null
        },
        en: {
            name: 'Reefer Container',
            type: 'Self-powered refrigerated/heated',
            specifications: null
        }
    }, {
        typeCode: 'R9',
        groupCode: 'RS',
        ru: {
            name: 'Рефконтейнер',
            type: 'Охлаждаемый и обогреваемый собственной установкой',
            specifications: null
        },
        en: {
            name: 'Reefer Container',
            type: 'Self-powered refrigerated/heated',
            specifications: null
        }
    },

    // Insulated Container (IC)
    {
        typeCode: 'H0',
        groupCode: 'HR',
        ru: {
            name: 'Рефконтейнер',
            type: 'Охлаждаемый/нагреваемый, со съёмным оборудованием',
            specifications: 'Охлаждаемый/нагреваемый, со съёмным внеш. оборудованием; K = 0,4 W/(m*mK)'
        },
        en: {
            name: 'Reefer Container',
            type: 'Refrigerated/heated with removable equipment',
            specifications: 'Refrigerated and/or heated, with removable equipment located externally; K = 0,4 W/(m*mK)'
        }
    }, {
        typeCode: 'H1',
        groupCode: 'HR',
        ru: {
            name: 'Рефконтейнер',
            type: 'Охлаждаемый/нагреваемый, со съёмным оборудованием',
            specifications: 'Охлаждаемый и/или нагреваемый, со съёмным внут. оборудованием'
        },
        en: {
            name: 'Reefer Container',
            type: 'Refrigerated/heated with removable equipment',
            specifications: 'Refrigerated and/or heated with removable equipment located internally'
        }
    }, {
        typeCode: 'H2',
        groupCode: 'HR',
        ru: {
            name: 'Рефконтейнер',
            type: 'Охлаждаемый/нагреваемый, со съёмным оборудованием',
            specifications: 'Охлаждаемый и/или нагреваемый, со съёмным внеш. оборудованием; K = 0.7 W/(m2 * K)'
        },
        en: {
            name: 'Reefer Container',
            type: 'Refrigerated/heated with removable equipment',
            specifications: 'Refrigerated and/or heated with removable equipment located externally; K = 0.7 W/(m2 * K)'
        }
    }, {
        typeCode: 'H3',
        groupCode: 'HR',
        ru: {
            name: 'Рефконтейнер',
            type: 'Охлаждаемый/нагреваемый, со съёмным оборудованием',
            specifications: null
        },
        en: {
            name: 'Reefer Container',
            type: 'Refrigerated/heated with removable equipment',
            specifications: null
        }
    }, {
        typeCode: 'H4',
        groupCode: 'HR',
        ru: {
            name: 'Рефконтейнер',
            type: 'Охлаждаемый/нагреваемый, со съёмным оборудованием',
            specifications: null
        },
        en: {
            name: 'Reefer Container',
            type: 'Refrigerated/heated with removable equipment',
            specifications: null
        }
    }, {
        typeCode: 'H5',
        groupCode: 'HI',
        ru: {
            name: 'Изотермический контейнер',
            type: 'Термоизолированный',
            specifications: 'Коэффициент теплопередачи 0,4 W/m2K'
        },
        en: {
            name: 'Reefer Container',
            type: 'Heat insulated',
            specifications: 'Insulated, coefficient of heat transfer K = 0.4 W/(m2 * K)'
        }
    }, {
        typeCode: 'H6',
        groupCode: 'HI',
        ru: {
            name: 'Изотермический контейнер',
            type: 'Термоизолированный',
            specifications: 'Коэффициент теплопередачи 0,7 W/mK'
        },
        en: {
            name: 'Reefer Container',
            type: 'Heat insulated',
            specifications: 'Insulated, coefficient of heat transfer K = 0.7 W/(m2 * K)'
        }
    }, {
        typeCode: 'H7',
        groupCode: 'HI',
        ru: {
            name: 'Изотермический контейнер',
            type: 'Термоизолированный',
            specifications: null
        },
        en: {
            name: 'Reefer Container',
            type: 'Heat insulated',
            specifications: null
        }
    }, {
        typeCode: 'H8',
        groupCode: 'HI',
        ru: {
            name: 'Изотермический контейнер',
            type: 'Термоизолированный',
            specifications: null
        },
        en: {
            name: 'Reefer Container',
            type: 'Heat insulated',
            specifications: null
        }
    }, {
        typeCode: 'H9',
        groupCode: 'HI',
        ru: {
            name: 'Изотермический контейнер',
            type: 'Термоизолированный',
            specifications: null
        },
        en: {
            name: 'Reefer Container',
            type: 'Heat insulated',
            specifications: null
        }
    },

    // Open Top Container (OT)
    {
        typeCode: 'U0',
        groupCode: 'UT',
        ru: {
            name: 'Контейнер с открытым верхом',
            type: 'Контейнер с открытым верхом',
            specifications: 'Один/оба торца открыты'
        },
        en: {
            name: 'Open Top Container',
            type: 'Open-top container',
            specifications: 'One/both ends open'
        }
    }, {
        typeCode: 'U1',
        groupCode: 'UT',
        ru: {
            name: 'Контейнер с открытым верхом',
            type: 'Контейнер с открытым верхом',
            specifications: 'Один/оба торца открыты; съёмные верхние элементы'
        },
        en: {
            name: 'Open Top Container',
            type: 'Open-top container',
            specifications: 'One/both ends open, removable top member(s) in end frame(s)'
        }
    }, {
        typeCode: 'U2',
        groupCode: 'UT',
        ru: {
            name: 'Контейнер с открытым верхом',
            type: 'Контейнер с открытым верхом',
            specifications: 'Один/оба торца открыты; открыты одна/обе стенки'
        },
        en: {
            name: 'Open Top Container',
            type: 'Open-top container',
            specifications: 'One/both ends open, one/both sides open'
        }
    }, {
        typeCode: 'U3',
        groupCode: 'UT',
        ru: {
            name: 'Контейнер с открытым верхом',
            type: 'Контейнер с открытым верхом',
            specifications: 'Один/оба торца открыты; открыты одна/обе стенки, съёмные элементы'
        },
        en: {
            name: 'Open Top Container',
            type: 'Open-top container',
            specifications: 'One/both ends open, one/both sides open, removable elements'
        }
    }, {
        typeCode: 'U4',
        groupCode: 'UT',
        ru: {
            name: 'Контейнер с открытым верхом',
            type: 'Контейнер с открытым верхом',
            specifications: 'Один/оба торца открыты, открыты частично одна и полностью другая сторона'
        },
        en: {
            name: 'Open Top Container',
            type: 'Open-top container',
            specifications: 'One/both ends open, one side partially open and the other one - fully open'
        }
    }, {
        typeCode: 'U5',
        groupCode: 'UT',
        ru: {
            name: 'Контейнер с открытым верхом',
            type: 'Контейнер с открытым верхом',
            specifications: 'Полностью закреплённые боковые стенки и торцы без дверей'
        },
        en: {
            name: 'Open Top Container',
            type: 'Open-top container',
            specifications: 'Complete, fixed side and end walls (no doors)'
        }
    }, {
        typeCode: 'U6',
        groupCode: 'UT',
        ru: {
            name: 'Контейнер с открытым верхом',
            type: 'Контейнер с открытым верхом',
            specifications: null
        },
        en: {
            name: 'Open Top Container',
            type: 'Open-top container',
            specifications: null
        }
    }, {
        typeCode: 'U7',
        groupCode: 'UT',
        ru: {
            name: 'Контейнер с открытым верхом',
            type: 'Контейнер с открытым верхом',
            specifications: null
        },
        en: {
            name: 'Open Top Container',
            type: 'Open-top container',
            specifications: null
        }
    }, {
        typeCode: 'U8',
        groupCode: 'UT',
        ru: {
            name: 'Контейнер с открытым верхом',
            type: 'Контейнер с открытым верхом',
            specifications: null
        },
        en: {
            name: 'Open Top Container',
            type: 'Open-top container',
            specifications: null
        }
    }, {
        typeCode: 'U9',
        groupCode: 'UT',
        ru: {
            name: 'Контейнер с открытым верхом',
            type: 'Контейнер с открытым верхом',
            specifications: null
        },
        en: {
            name: 'Open Top Container',
            type: 'Open-top container',
            specifications: null
        }
    },

    // Flat Container (FC)
    {
        typeCode: 'P0',
        groupCode: 'PL',
        ru: {
            name: 'Контейнер-платформа',
            type: 'С неполной верхней рампой',
            specifications: 'Платформа-контейнер'
        },
        en: {
            name: 'Flat Container',
            type: 'Platform-based containers with incomplete superstructure',
            specifications: 'Platform (container)'
        }
    }, {
        typeCode: 'P1',
        groupCode: 'PF',
        ru: {
            name: 'Контейнер-платформа',
            type: 'С жестко закрепленными торцапми и стойками',
            specifications: 'С полностью жёстко закреплёнными торцами'
        },
        en: {
            name: 'Flat Container',
            type: 'Fixed',
            specifications: 'Two complete and fixed ends'
        }
    }, {
        typeCode: 'P2',
        groupCode: 'PF',
        ru: {
            name: 'Контейнер-платформа',
            type: 'С жестко закрепленными торцапми и стойками',
            specifications: 'Жёстко закреплённые стойки, отдельные или стойки с подвижными верхом'
        },
        en: {
            name: 'Flat Container',
            type: 'Fixed',
            specifications: 'Fixed posts, either free-standing or with removable top member'
        }
    }, {
        typeCode: 'P3',
        groupCode: 'PC',
        ru: {
            name: 'Контейнер-платформа',
            type: 'Складной',
            specifications: 'Складная конструкция'
        },
        en: {
            name: 'Flat Container',
            type: 'Folding (collapsible)',
            specifications: 'Folding complete end structure'
        }
    }, {
        typeCode: 'P4',
        groupCode: 'PC',
        ru: {
            name: 'Контейнер-платформа',
            type: 'Складной',
            specifications: 'Складные стойки, свободно стоящие или съёмный верхний элемент'
        },
        en: {
            name: 'Flat Container',
            type: 'Folding (collapsible)',
            specifications: 'Folding posts, either free-standing or with removable top member'
        }
    }, {
        typeCode: 'P5',
        groupCode: 'PS',
        ru: {
            name: 'Контейнер-платформа',
            type: 'С полной верхней рампой',
            specifications: 'Открытый верх, открытые торцы'
        },
        en: {
            name: 'Flat Container',
            type: 'Platform-based containers with complete super-structure',
            specifications: 'Open top, open ends (skeletal)'
        }
    }, {
        typeCode: 'P6',
        groupCode: 'PS',
        ru: {
            name: 'Контейнер-платформа',
            type: 'С полной верхней рампой',
            specifications: null
        },
        en: {
            name: 'Flat Container',
            type: 'Platform-based containers with complete super-structure',
            specifications: null
        }
    }, {
        typeCode: 'P7',
        groupCode: 'PS',
        ru: {
            name: 'Контейнер-платформа',
            type: 'С полной верхней рампой',
            specifications: null
        },
        en: {
            name: 'Flat Container',
            type: 'Platform-based containers with complete super-structure',
            specifications: null
        }
    }, {
        typeCode: 'P8',
        groupCode: 'PS',
        ru: {
            name: 'Контейнер-платформа',
            type: 'С полной верхней рампой',
            specifications: null
        },
        en: {
            name: 'Flat Container',
            type: 'Platform-based containers with complete super-structure',
            specifications: null
        }
    }, {
        typeCode: 'P9',
        groupCode: 'PS',
        ru: {
            name: 'Контейнер-платформа',
            type: 'С полной верхней рампой',
            specifications: null
        },
        en: {
            name: 'Flat Container',
            type: 'Platform-based containers with complete super-structure',
            specifications: null
        }
    },

    // Tank Container (TC)
    {
        typeCode: 'T0',
        groupCode: 'TN',
        ru: {
            name: 'Контейнер-цистерна',
            type: 'Для неопасных (невоспламеняющихся) жидкостей',
            specifications: 'Минимальное давление 45 кПа'
        },
        en: {
            name: 'Tank Container',
            type: 'For nondangerous liquids',
            specifications: 'Minimum pressure 45 kPa'
        }
    }, {
        typeCode: 'T1',
        groupCode: 'TN',
        ru: {
            name: 'Контейнер-цистерна',
            type: 'Для неопасных (невоспламеняющихся) жидкостей',
            specifications: 'Минимальное давление 150 кПа'
        },
        en: {
            name: 'Tank Container',
            type: 'For nondangerous liquids',
            specifications: 'Minimum pressure 150 kPa'
        }
    }, {
        typeCode: 'T2',
        groupCode: 'TN',
        ru: {
            name: 'Контейнер-цистерна',
            type: 'Для неопасных (невоспламеняющихся) жидкостей',
            specifications: 'Минимальное давление 265 кПа'
        },
        en: {
            name: 'Tank Container',
            type: 'For nondangerous liquids',
            specifications: 'Minimum pressure 265 kPa'
        }
    }, {
        typeCode: 'T3',
        groupCode: 'TD',
        ru: {
            name: 'Контейнер-цистерна',
            type: 'Для опасных воспламеняющихся жидкостей',
            specifications: 'Минимальное давление 150 кПа'
        },
        en: {
            name: 'Tank Container',
            type: 'For dangerous liquids',
            specifications: 'Minimum pressure 150 kPa'
        }
    }, {
        typeCode: 'T4',
        groupCode: 'TD',
        ru: {
            name: 'Контейнер-цистерна',
            type: 'Для опасных воспламеняющихся жидкостей',
            specifications: 'Минимальное давление 265 кПа'
        },
        en: {
            name: 'Tank Container',
            type: 'For dangerous liquids',
            specifications: 'Minimum pressure 265 kPa'
        }
    }, {
        typeCode: 'T5',
        groupCode: 'TD',
        ru: {
            name: 'Контейнер-цистерна',
            type: 'Для опасных воспламеняющихся жидкостей',
            specifications: 'Минимальное давление 400 кПа'
        },
        en: {
            name: 'Tank Container',
            type: 'For dangerous liquids',
            specifications: 'Minimum pressure 400 kPa'
        }
    }, {
        typeCode: 'T6',
        groupCode: 'TD',
        ru: {
            name: 'Контейнер-цистерна',
            type: 'Для опасных воспламеняющихся жидкостей',
            specifications: 'Минимальное давление 600 кПа'
        },
        en: {
            name: 'Tank Container',
            type: 'For dangerous liquids',
            specifications: 'Minimum pressure 600 kPa'
        }
    }, {
        typeCode: 'T7',
        groupCode: 'TG',
        ru: {
            name: 'Контейнер-цистерна',
            type: 'Для газов',
            specifications: 'Минимальное давление 910 кПа'
        },
        en: {
            name: 'Tank Container (TC)',
            type: 'For gases',
            specifications: 'Minimum pressure 910 kPa'
        }
    }, {
        typeCode: 'T8',
        groupCode: 'TG',
        ru: {
            name: 'Контейнер-цистерна',
            type: 'Для газов',
            specifications: 'Минимальное давление 2200 кПа'
        },
        en: {
            name: 'Tank Container',
            type: 'For gases',
            specifications: 'Minimum pressure 2200 kPa'
        }
    }, {
        typeCode: 'T9',
        groupCode: 'TG',
        ru: {
            name: 'Контейнер-цистерна',
            type: 'Для газов',
            specifications: 'Минимальное давление уточняется в стандарте'
        },
        en: {
            name: 'Tank Container',
            type: 'For gases',
            specifications: 'Minimum pressure to be decided'
        }
    },

    // Air/surface Container (AS)
    {
        typeCode: 'A0',
        groupCode: 'AS',
        ru: {
            name: 'Авиационно-наземный контейнер',
            type: 'Авиационно-наземный контейнер',
            specifications: 'Авиационно-наземный'
        },
        en: {
            name: 'Air/Surface Container',
            type: 'Air/surface container',
            specifications: 'Air/surface'
        }
    },
]
