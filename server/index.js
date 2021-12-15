import express from 'express'
import dotenv from 'dotenv'
import cookieParser from 'cookie-parser'
import cors from 'cors'
import csrf from 'csurf'
import dbConnection from './db.js'
import auth from './src/routes/auth.js'
import profile from './src/routes/profile.js'
// import profile from './src/routes/profile.js'

const app = express() 
dotenv.config()

const csrfProtection = csrf({
    cookie: true
})

app.use(express.json())
app.use(cors())
app.use(cookieParser())
app.use(csrfProtection)


app.get('/', (req,res) => {
    res.send('Working on dev connector!')
})

app.get('/api/csrf-token', (req, res) =>{
    res.json({csrfToken: req.csrfToken()})
})

app.use('/api/auth', auth)
app.use('/api', profile)

dbConnection()

const PORT = process.env.PORT || 3001

app.listen(PORT, () => {
    console.log(`Server is listening at port ${PORT}`)
})