import * as path from 'path'
import { Router } from 'express'
import * as swaggerUi from 'swagger-ui-express'
import * as YAML from 'yamljs'

import { infoCtrl } from '../controllers/infoCtrl'
import { isoCtrl } from '../controllers/isoCtrl'

const router = Router()
const swaggerDocument = YAML.load(path.resolve(process.cwd(), 'src/docs', 'swagger.yml'))

// Get info to iso code
router.get('/info', infoCtrl)

// Get iso code to params
router.get('/iso', isoCtrl)

// Swagger docs
router.use('/docs', swaggerUi.serve)
router.get('/docs', swaggerUi.setup(swaggerDocument))

export default router
