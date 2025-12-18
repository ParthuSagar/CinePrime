const mongoose = require('mongoose');

const connectDB = async () => {
    if (!process.env.MONGO_URI) {
        console.error('MongoDB connection error: MONGO_URI is not set');
        process.exit(1);
    }

    try {
        // In mongoose v6+ the connection options `useNewUrlParser` and
        // `useUnifiedTopology` are no longer necessary (and can cause errors
        // with newer MongoDB driver versions). Pass only the URI.
        await mongoose.connect(process.env.MONGO_URI);
        console.log('MongoDB connected');
    } catch (error) {
        console.error('MongoDB connection error:', error.message);
        process.exit(1);
    }
}

module.exports = connectDB;