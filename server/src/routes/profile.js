import {Router} from 'express'
import { currentProfile } from '../controllers/profile.js'
import auth from '../middleware/auth.js'

const router = Router()

router.get('/current-profile', auth, currentProfile)

export default router
