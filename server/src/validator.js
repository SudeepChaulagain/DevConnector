import {check, validationResult} from 'express-validator'

export const registerValidator = () => {
    return [
    check('name', 'Name is required').notEmpty(),
    check('email', 'Please provide valid email').isEmail(),
    check('password', 'Password must be 6 or more characters').isLength({min: 6})
    ]

}

export const loginValidator = () => {
    return[
    check('email', 'Please provide valid email').isEmail(),
    check('password', 'Password must be 6 or more characters').isLength({min: 6})
    ]
}

export const validate = (req, res, next) => {

    const validationErrors = validationResult(req)

    if(!validationErrors.isEmpty()){
        const errors = validationErrors.array().map((error) => {
            return {
                message: error.msg
            }
        })
        return res.status(400).json({
            errors,
            data: null,
            success: false
        })
    }
    next()
   
 
}