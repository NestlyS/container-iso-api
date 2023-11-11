require('dotenv').config()

const config: any = {
	env: process.env.NODE_ENV || 'development',
	port: process.env.PORT || 7000
}

export default config
