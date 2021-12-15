import jwt from 'jsonwebtoken'

const auth = (req, res, next) => {
    try {
        const token = req.cookies.token

        if (!token) {
            return res.status(401).json({
                message: 'Authentication Invalid!'
            })
        }
        const decodedToken = jwt.decode(token)

        if (!decodedToken) {
            return res.status(401).json({
                message: 'There was a problem authorizing the request!'
            })
        }
        else{
            req.user = decodedToken
            next()
        }
    } catch (error) {
        console.log(error)
    }
}

export default auth