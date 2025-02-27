const jwt = require('jsonwebtoken');
const secret = process.env.JWT_SECRET;
const expiration = '2h';

module.exports = {
    authMiddleware(req, res, next) {
        // console.log('REQ BODY logged from auth middleware', req.body);
        let token = req.body.token || req.query.token || req.headers.authorization;
        // console.log('TOKEN', token);
        if (req.headers.authorization) {
            token = token.split(' ').pop().trim();
        }

        if (!token) {
            return next();
            // return res.status(401).json({ message: 'Unauthorized, no token provided.' });
            
        }

        try {
            const { data } = jwt.verify(token, secret, { maxAge: expiration });
            req.user = data;
            return next();
        } catch (error) {
            console.error('Error verifying token', error);
            return res.status(401).json({ message: 'Unauthorized: Invalid or expired token.' });
        }

        return req;
     },

     signToken({ firstName, username, _id }) {
        const payload = { firstName, username, _id };

        return jwt.sign({ data: payload }, secret, { expiresIn: expiration });
     }
}

