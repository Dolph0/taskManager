import pkg from 'jsonwebtoken';
const { verify } = pkg;

const validateToken = (token) => {
    try {
        const decoded = verify(token, process.env.JWT_SECRET);
        return decoded;
    } catch (err) {
        throw new Error('Token is not valid');
    }
};


export default validateToken;