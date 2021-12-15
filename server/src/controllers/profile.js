import Profile from '../models/Profile.js'

export const currentProfile = async (req, res) => {
    try {
        const profile = await Profile.findOne({user:req.user.id}).populate('User', ['name', 'avatar'])

        if(!profile) return res.status(400).json({
            message: 'Profile of the user does not exist!',
            data: null,
            success: false
           
        })
        res.status(200).json({
            message:'Profile found successfullly!',
            data: profile,
            success: true
        })
    } catch (error) {
        console.log(error)
    }
}

