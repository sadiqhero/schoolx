// database.js
const sqlite3 = require('sqlite3').verbose();

class Database {
    constructor(dbPath) {
        this.db = new sqlite3.Database(dbPath, (err) => {
            if (err) {
                console.error('Database connection error:', err);
            }
        });
    }

    query(sql, params = []) {
        return new Promise((resolve, reject) => {
            this.db.get(sql, params, (err, row) => {
                if (err) reject(err);
                else resolve(row);
            });
        });
    }

    close() {
        return new Promise((resolve, reject) => {
            this.db.close((err) => {
                if (err) reject(err);
                else resolve();
            });
        });
    }
}

module.exports = Database;