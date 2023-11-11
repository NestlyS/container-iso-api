import * as request from 'supertest'
import app from '../app'

describe('GET /info', () => {
	// it('should return 200')
	it('should return 422', (done) => {
		return request(app)
		.get('/info')
		.expect(422, done)
	})
})
