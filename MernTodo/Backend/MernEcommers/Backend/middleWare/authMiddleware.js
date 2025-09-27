import Users from "../Model/userModel.js";
import jwt from 'jsonwebtoken'

const protect = async (req, res, next) => {

    let token;

    token = req.cookies.jwt

    if (token) {
        try {
            const decoded = jwt.verify(token, process.env.JWT_SECRET)

            req.user = await Users.findById(decoded.userId).select('-password')
            next()

        } catch (error) {
            console.log(error)
            res.status(401)
            throw new Error('Not Authorized , token failed')
        }
    }
    else {
        res.status(401)
        throw new Error('Not Authorized , no token')
    }

}

const admin = (req, res, next) => {
    if (req.user && req.user.isAdmin) {
        next()
    }
    else {
        res.status(404)
        throw new Error('Not authorized')
    }
}

export { protect, admin } 