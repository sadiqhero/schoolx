const { ipcRenderer } = require('electron');
const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('students.db');
const path = require('path');
const fs = require('fs').promises;


// nav-script.js
document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('[data-route]').forEach(element => {
        element.addEventListener('click', (e) => {
            e.preventDefault();
            const route = e.currentTarget.dataset.route;
            ipcRenderer.send('navigate', route);
        });
    });
});
/* 
function home(){
    ipcRenderer.send('goto-home');
}
// Function to convert file path to data URL
async function getImageDataUrl(imagePath) {
    try {
        const imageBuffer = await fs.readFile(imagePath);
        const base64Image = imageBuffer.toString('base64');
        const mimeType = path.extname(imagePath).toLowerCase() === '.png' ? 'image/png' : 'image/jpeg';
        return `data:${mimeType};base64,${base64Image}`;
    } catch (error) {
        console.error('Error reading image:', error);
        return null;
    }
}

function searchStudent() {
    const searchTerm = document.getElementById('searchInput').value;
    db.all(`SELECT * FROM students_profiles WHERE first_name LIKE ? OR last_name LIKE ?`, 
        [`%${searchTerm}%`, `%${searchTerm}%`], 
        (err, rows) => {
            if (err) {
                console.error('Search error:', err);
                return;
            }
            const studentList = document.getElementById('studentList');
            studentList.innerHTML = '';
            rows.forEach(row => {
                const studentItem = document.createElement('div');
                studentItem.className = 'student-item';
                studentItem.textContent = `${row.first_name} ${row.last_name} - ${row.class}`;
                studentItem.onclick = () => displayStudentDetails(row);
                studentList.appendChild(studentItem);
            });
        }
    );
}

async function displayStudentDetails(student) {
    try {
        // Update the header section
        document.getElementById('full_name').textContent = `${student.first_name} ${student.last_name}`;
        document.getElementById('phone').textContent = `Mobile: ${student.phone}`;
        document.getElementById('email').textContent = `Email: ${student.email}`;

        // Update the details section
        document.getElementById('dob').textContent = student.dob;
        document.getElementById('gender').textContent = student.gender;
        document.getElementById('nationality').textContent = student.nationality;
        document.getElementById('state').textContent = student.state;
        document.getElementById('parent').textContent = student.parent;
        document.getElementById('fathers_occupation').textContent = student.occu;
        document.getElementById('disability').textContent = student.disability;
        document.getElementById('specify').textContent = student.specify;
        document.getElementById('dis_rate').textContent = student.dis_rate;
        document.getElementById('reading_ability').textContent = student.reading_ability;
        document.getElementById('writing_ability').textContent = student.writing_ability;
        document.getElementById('critical_thinking').textContent = student.critical_thinking;
        document.getElementById('school_part').textContent = student.school_part;
        document.getElementById('course').textContent = student.course;
        document.getElementById('class').textContent = student.class;
        
        // Handle passport photo display
        const photoElement = document.querySelector('.photo-placeholder');
        const defaultPhotoUrl = 'path/to/default-avatar.png'; // Add a default avatar image path

        if (student.passport_url) {
            try {
                const passportPath = path.join(__dirname, 'passports', student.passport_url);
                
                // Check if file exists
                await fs.access(passportPath);
                
                // Convert image to data URL
                const dataUrl = await getImageDataUrl(passportPath);
                
                if (dataUrl) {
                    photoElement.style.backgroundImage = `url('${dataUrl}')`;
                    photoElement.style.backgroundSize = 'cover';
                    photoElement.style.backgroundPosition = 'center';
                    photoElement.style.backgroundColor = 'transparent';
                } else {
                    throw new Error('Failed to load image');
                }
            } catch (error) {
                console.error('Error loading passport photo:', error);
                photoElement.style.backgroundImage =  null ;//`url('${defaultPhotoUrl}')`;
                photoElement.style.backgroundColor = '#f0f0f0';
            }
        } else {
            // No passport photo available, show default
            photoElement.style.backgroundImage = `url('${defaultPhotoUrl}')`;
            photoElement.style.backgroundColor = '#f0f0f0';
        }
    } catch (error) {
        console.error('Error displaying student details:', error);
    }
}

// Add event listener for search input
document.getElementById('searchInput').addEventListener('input', () => {
    const searchTimeout = setTimeout(searchStudent, 300); // Add debounce
    return () => clearTimeout(searchTimeout);
});

// Error handling for database connection
db.on('error', (err) => {
    console.error('Database error:', err);
});

// Clean up on window close
window.addEventListener('beforeunload', () => {
    db.close((err) => {
        if (err) {
            console.error('Error closing database:', err);
        }
    });
});

*/