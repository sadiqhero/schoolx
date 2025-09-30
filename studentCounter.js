// studentCounter.js
const Database = require('./database');

class StudentCounter {
    constructor(dbPath) {
        this.db = new Database(dbPath);
    }

    // Safely update DOM element
    updateElement(elementId, count, title, imageUrl = './assets/add.png') {
        const element = document.getElementById(elementId);
        if (!element) {
            console.error(`Element with id '${elementId}' not found`);
            return;
        }

        element.innerHTML = `
            <div class="small-div">
                <img src="${imageUrl}" alt="${title} icon">
                <h2 class="numb">${count.toLocaleString()}</h2>
                <p class="${elementId.toLowerCase()}">${title}</p>
            </div>
        `;
    }

    async getTotalStudents() {
        try {
            const row = await this.db.query('SELECT COUNT(*) as count FROM students_profiles');
            return row.count.toString(); // Return as string
        } catch (err) {
            console.error('Error getting total students:', err);
            return '0'; // Return default value as string
        }
    }

    async getNotInCloudStudents() {
        try {
            const row = await this.db.query(
                'SELECT COUNT(*) as count FROM students_profiles WHERE cloud = ?',
                ['no']
            );
            return row.count.toString(); // Return as string
        } catch (err) {
            console.error('Error getting not in cloud count:', err);
            return '0'; // Return default value as string
        }
    }

    async initialize() {
        try {
            const totalStudents = await this.getTotalStudents();
            const notInCloudStudents = await this.getNotInCloudStudents();
            return { totalStudents, notInCloudStudents }; // Return final values as strings
        } catch (err) {
            console.error('Initialization error:', err);
            return { totalStudents: '0', notInCloudStudents: '0' }; // Return default values
        }
    }

    async cleanup() {
        await this.db.close();
    }
}

module.exports = StudentCounter;