const jwt = require('jsonwebtoken')
const dotenv = require('dotenv').config()


const auth = async (req, res, next) => {

    const token = req.headers.authorization || req.headers.Authorization
    if (!token) {
        return res.status(401).json({ message: 'Authentication failed!' })
    }

    try {
        let newToken = token.split(" ")[1]
        jwt.verify(newToken, process.env.SECRET_JWT_KEY, (err, decode) => {
            if (err) {
                return res.status(401).json({ message: 'Authentication failed!' })
            }
            /* need to check because while login user obj has been changed */
            let { iat, exp, ...rest } = decode
            req.user = {
                ...rest,
                token: newToken
            }
            return next()
        })
    } catch (error) {

    }
}

const refreshToken = async (req, res) => {
    let token = await req.cookies.refreshToken

    if (req.cookies?.refreshToken) {
        // Destructuring refreshToken from cookie
        const refreshToken = req.cookies.refreshToken;

        // Verifying refresh token
        jwt.verify(token, process.env.REFRESH_TOKEN_SECRET,
            (err, decoded) => {
                if (err) {

                    // Wrong Refesh Token
                    return res.status(406).json({ message: 'Unauthorized' });
                }
                else {
                    // Correct token we send a new access token
                    const accessToken = jwt.sign({
                        user: decoded.user
                    }, process.env.SECRET_JWT_KEY, {
                        expiresIn: '1d'
                    });
                    return res.json(accessToken);
                }
            })
    } else {
        return res.status(406).json({ message: 'Unauthorized' });
    }
}

module.exports = { auth, refreshToken }