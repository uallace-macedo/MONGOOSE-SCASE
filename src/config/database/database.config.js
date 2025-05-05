import mongoose from 'mongoose';

class Database {
  constructor() {
    this.init();
  }

  init() {
    this.mongoConnection = mongoose.connect(
      'mongodb://localhost:27017/mongoose_test'
    )

    console.log('[DB] Mongoose connected');
  }
}

export default new Database();
