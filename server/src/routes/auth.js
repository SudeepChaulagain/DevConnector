import { Router } from 'express'
import { login, register} from '../controllers/auth.js'
import {registerValidator, loginValidator, validate} from '../validator.js'

const router = Router()

router.post('/login', loginValidator(), validate, login)
router.post('/register', registerValidator(), validate, register)

export default router