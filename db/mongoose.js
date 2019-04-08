const mongoose = require("mongoose");

class Database {
    constructor() {
        this.db_connect();
    }

    async db_connect() {
        try {
            this.database = await mongoose.connect(process.env.MONGODB_URI, {
                useNewUrlParser: true
            });
            console.log("Database connection successful");
            mongoose.set('debug', true);
        } catch (err) {
            console.error(err);
        }
    }
}

module.exports = new Database();