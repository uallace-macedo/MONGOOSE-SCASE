import 'dotenv/config';

export default {
    SERVER_PORT: process.env.SERVER_PORT,
    MONGODB_URI: process.env.MONGODB_URI,
    SECRET: process.env.SECRET,
    EXPIRES_IN: process.env.EXPIRES_IN
}