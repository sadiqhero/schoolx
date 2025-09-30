// main.js
const { app, BrowserWindow, dialog, Menu, protocol, ipcMain } = require('electron');
const sqlite3 = require('sqlite3').verbose();
const path = require('path');
const pages = require('./pages');
const { register } = require('module');
const { profile } = require('console');
const fs = require('fs').promises;

let mainWindow;
let db;
let checkStudentsInterval;

function createProtocol() {
    protocol.registerFileProtocol('app', (request, callback) => {
      const url = request.url.replace('app://', '');
      try {
        return callback(path.join(__dirname, url));
      } catch (error) {
        console.error('Protocol error:', error);
      }
    });
}
  
// Error template for consistent error display
const createErrorHTML = (error) => `
  <!DOCTYPE html>
  <html>
  <head>
    <title>Error</title>
    <style>
      body { 
        font-family: Arial, sans-serif; 
        padding: 20px;
        background-color: #fff5f5;
        color: #e53e3e;
      }
      .error-container {
        border: 1px solid #fc8181;
        padding: 20px;
        border-radius: 8px;
        background-color: #fff;
      }
        
      .back-button {
        margin-top: 20px;
        padding: 8px 16px;
        background-color: #e53e3e;
        color: white;
        border: none;
        border-radius: 4px;
        cursor: pointer;
      }
    </style>
    <script>
      const { ipcRenderer } = require('electron');
      function loadPage(pageName) {
        try {
          const sqlite3 = require('sqlite3').verbose();
          const db = new sqlite3.Database('pages.db', (err) => {
            if (err) {
              console.error('Database connection error:', err);
              document.body.innerHTML = createErrorHTML('Database connection failed: ' + err.message);
              return;
            }
          });
          
          db.get('SELECT content FROM pages WHERE name = ?', [pageName], (err, row) => {
            if (err) {
              console.error('Query error:', err);
              document.documentElement.innerHTML = createErrorHTML('Failed to load page: ' + err.message);
              db.close();
              return;
            }
            
            if (row) {
              document.documentElement.innerHTML = row.content;
            } else {
              document.documentElement.innerHTML = createErrorHTML('Page not found: ' + pageName);
            }
            
            db.close((err) => {
              if (err) console.error('Error closing database:', err);
            });
          });
        } catch (error) {
          console.error('Unexpected error:', error);
          document.documentElement.innerHTML = createErrorHTML('Unexpected error: ' + error.message);
        }
      }

      function createErrorHTML(message) {
        return \`
          <div class="error-container">
            <h2>Error Occurred</h2>
            <p>\${message}</p>
            <button class="back-button" data-route="home">Return to Home</button>
          </div>
        \`;
      }
    </script>
  </head>
  <body>
    <div class="error-container">
      <h2>Error Occurred</h2>
      <p>${error}</p>
      <button class="back-button" onclick="loadPage('home')">Return to Home</button>
    </div>
  </body>
  </html>
`;

// Routes configuration
const ROUTES = {
    home: 'home',
    registration: 'registration',
    profile: 'profile',
    exam: 'exam',
    result: 'result',
    about: 'about',
    calendar: 'calendar',
    analysis: 'analysis',
    staff: 'staff',
    post: 'post',
    attendance: 'attendance',
    memories: 'memories',
    fees:'fees',
    staffReg:'staffReg',
    ecard :'ecard',
    equestion :'equestion',
    eresult :'eresult',
    escores :'escores',
    settings:'settings'
};

function createWindow() {
  try {
    mainWindow = new BrowserWindow({
        width: 1400,
        height: 950,
        webPreferences: {
            nodeIntegration: true,
            contextIsolation: false,
      }
    });

    ipcMain.on('login-success', ()=>{
      loadPage('home');
    });

    loadPage('home');

    //Menu.setApplicationMenu(null);

  } catch (error) {
    console.error('Error creating window:', error);
    dialog.showErrorBox('Window Creation Error', 
      `Failed to create application window: ${error.message}`);
    app.quit();
  }
}

function initDatabase() {
  try {
    db = new sqlite3.Database('pages.db', (err) => {
      if (err) {
        console.error('Database opening error:', err);
        dialog.showErrorBox('Database Error', 
          `Failed to open database: ${err.message}`);
        return;
      }
    });

    db.serialize(() => {
      // Enable foreign keys and WAL mode for better reliability
      db.run('PRAGMA foreign_keys = ON');
      db.run('PRAGMA journal_mode = WAL');

      db.run(`CREATE TABLE IF NOT EXISTS pages (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        name TEXT UNIQUE,
        content TEXT NOT NULL,
        created_at DATETIME DEFAULT CURRENT_TIMESTAMP
      )`, (err) => {
        if (err) {
          console.error('Table creation error:', err);
          dialog.showErrorBox('Database Error', 
            `Failed to create tables: ${err.message}`);
          return;
        }
      });

      const insert = db.prepare('INSERT OR REPLACE INTO pages (name, content) VALUES (?, ?)');
      pages.forEach(page => {
        insert.run(page.name, page.content, (err) => {
          if (err) {
            console.error(`Error inserting page ${page.name}:`, err);
            dialog.showErrorBox('Database Error', 
              `Failed to insert page ${page.name}: ${err.message}`);
          }
        });
      });
      insert.finalize((err) => {
        if (err) {
          console.error('Error finalizing inserts:', err);
          dialog.showErrorBox('Database Error', 
            `Failed to finalize page inserts: ${err.message}`);
        }
      });
    });
  } catch (error) {
    console.error('Database initialization error:', error);
    dialog.showErrorBox('Database Error', 
      `Failed to initialize database: ${error.message}`);
  }
}

function loadPage(pageName) {
  db.get('SELECT content FROM pages WHERE name = ?', [pageName], (err, row) => {
      if (err) {
          console.error('Error loading page:', err);
          mainWindow.loadURL(`data:text/html;charset=utf-8,${encodeURIComponent(
              createErrorHTML(`Failed to load page: ${err.message}`)
          )}`);
          mainWindow.executeJavaScript();
          return;
      }

      if (row) {
          mainWindow.loadURL(`data:text/html;charset=utf-8,${encodeURIComponent(row.content)}`);
          // Execute scripts after loading the content
          mainWindow.webContents.executeJavaScript(row.content);
      } else {
          mainWindow.loadURL(`data:text/html;charset=utf-8,${encodeURIComponent(
              createErrorHTML(`Page not found: ${pageName}`)
          )}`);
      }
  });
}

// Handle navigation events
ipcMain.on('navigate', async (event, route) => {
    console.log(`Navigating to route: ${route}`);
    
    if (ROUTES[route]) {
        // Send cleanup signal to current page
        event.sender.send('prepare-navigation');
        
        // Give time for cleanup
        await new Promise(resolve => setTimeout(resolve, 100));
        
        // Load new page
        console.log(`Loading file: ${ROUTES[route]}`);
        loadPage(ROUTES[route]);
    } else {
        console.error(`Route not found: ${route}`);
    }
});

// Function to check for new students and create payment records
function checkForNewStudents() {
  try {
    const studentsDb = new sqlite3.Database('students.db');
    
    // First check if the 'new' column exists in students_profiles table, add it if not
    studentsDb.all("PRAGMA table_info(students_profiles)", (err, rows) => {
      if (err) {
        console.error('Error checking table schema:', err);
        studentsDb.close();
        return;
      }
      
      // Check if 'new' column exists
      const hasNewColumn = Array.isArray(rows) && rows.some(row => row.name === 'new');
      
      if (!hasNewColumn) {
        // Add 'new' column if it doesn't exist
        studentsDb.run("ALTER TABLE students_profiles ADD COLUMN new TEXT DEFAULT 'no'", (err) => {
          if (err) {
            console.error('Error adding new column:', err);
            studentsDb.close();
            return;
          }
          processNewStudents(studentsDb);
        });
      } else {
        processNewStudents(studentsDb);
      }
    });
  } catch (error) {
    console.error('Error in checkForNewStudents:', error);
  }
}

function processNewStudents(studentsDb) {
  // Get current term information
  studentsDb.get("SELECT * FROM term WHERE status = 'current'", (err, termRow) => {
    if (err) {
      console.error('Error fetching current term:', err);
      studentsDb.close();
      return;
    }
    
    if (!termRow) {
      console.log('No current term found, skipping new student check');
      studentsDb.close();
      return;
    }
    
    // Get all new students
    studentsDb.all("SELECT * FROM students_profiles WHERE new = 'yes'", (err, students) => {
      if (err) {
        console.error('Error fetching new students:', err);
        studentsDb.close();
        return;
      }
      
      if (students && Array.isArray(students) && students.length > 0) {
        console.log(`Found ${students.length} new students to process`);
        
        // Start a transaction
        studentsDb.run('BEGIN TRANSACTION', (err) => {
          if (err) {
            console.error('Error starting transaction:', err);
            studentsDb.close();
            return;
          }
          
          let processedCount = 0;
          
          // Process each student
          students.forEach(student => {
            const fullName = `${student.first_name} ${student.last_name}`;
            const feeAmount = getFeeAmountForStudent(student.school_part, {
              nursery: termRow.nursery,
              primary: termRow.primari,
              junior_secondary: termRow.junior_secondary,
              senior_secondary: termRow.senior_secondary
            });
            
            // Insert payment record for the student
            studentsDb.run(
              `INSERT INTO payment (
                name, class, student_id, term, status, fee_amount
              ) VALUES (?, ?, ?, ?, 'not paid', ?)`,
              [fullName, student.class, student.id, termRow.term_name, feeAmount],
              function(err) {
                if (err) {
                  console.error(`Error creating payment record for student ${student.id}:`, err);
                  return;
                }
                
                // Update the student's 'new' status to 'no'
                studentsDb.run(
                  "UPDATE students_profiles SET new = 'no' WHERE id = ?",
                  [student.id],
                  function(err) {
                    if (err) {
                      console.error(`Error updating new status for student ${student.id}:`, err);
                      return;
                    }
                    
                    processedCount++;
                    
                    // If all students have been processed, commit the transaction
                    if (processedCount === students.length) {
                      studentsDb.run('COMMIT', function(err) {
                        if (err) {
                          console.error('Error committing transaction:', err);
                          studentsDb.run('ROLLBACK');
                        } else {
                          console.log(`Successfully processed ${processedCount} new students`);
                        }
                        studentsDb.close();
                      });
                    }
                  }
                );
              }
            );
          });
        });
      } else {
        console.log('No new students found');
        studentsDb.close();
      }
    });
  });
}

// Helper function to get fee amount based on student's school part
function getFeeAmountForStudent(schoolPart, fees) {
  switch (schoolPart) {
    case 'nursery':
      return fees.nursery;
    case 'primary':
      return fees.primary;
    case 'junior_secondary':
      return fees.junior_secondary;
    case 'senior_secondary':
      return fees.senior_secondary;
    default:
      return 0;
  }
}

// Proper app initialization with error handling
app.whenReady().then(() => {
  try {
    initDatabase();
    createWindow();
    createProtocol();
    
    // Check for new students initially
    checkForNewStudents();
    
    // Set up hourly check
    checkStudentsInterval = setInterval(checkForNewStudents, 3600000);

    app.on('activate', function () {
      if (BrowserWindow.getAllWindows().length === 0) createWindow();
    });
  } catch (error) {
    console.error('Application initialization error:', error);
    dialog.showErrorBox('Initialization Error', 
      `Failed to initialize application: ${error.message}`);
    app.quit();
  }
});

app.on('window-all-closed', function () {
  try {
    if (checkStudentsInterval) {
      clearInterval(checkStudentsInterval);
    }
    
    if (db) {
      db.close((err) => {
        if (err) {
          console.error('Error closing database:', err);
        }
      });
    }
    if (process.platform !== 'darwin') app.quit();
  } catch (error) {
    console.error('Error during application cleanup:', error);
    app.quit();
  }
});

// Global error handler
process.on('uncaughtException', (error) => {
  console.error('Uncaught exception:', error);
  dialog.showErrorBox('Unexpected Error', 
    `An unexpected error occurred: ${error.message}`);
});