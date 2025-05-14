import mongoose from 'mongoose';
import envConfig from './env.config.js';

class Database {
    constructor() {
        this.init();
    }

    init() {
        this.mongoConnection = mongoose.connect(envConfig.MONGODB_URI);
        console.log('[DB]: Database connected!');
    }
}

export default new Database();