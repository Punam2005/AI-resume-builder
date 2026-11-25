const mongoose = require("mongoose")

async function connectToDB() {
    const mongoUri = process.env.MONGODB_URI || process.env.MONGO_URI

    try {
        if (!mongoUri) {
            throw new Error("MongoDB connection string is missing. Set MONGODB_URI in .env")
        }

        await mongoose.connect(mongoUri)
        console.log("Connected to Database")
    }
    catch (err) {
        console.error("Database connection failed:", err.message)
    }
}

module.exports = connectToDB