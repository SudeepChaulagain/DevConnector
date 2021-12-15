import mongoose from 'mongoose'

const dbConnection = async () => {
    try {
        await mongoose.connect(process.env.URL)
        console.log('DB connected successfully!')

    } catch (error) {
        console.log(error)
        process.exit
    }
}

export default dbConnection