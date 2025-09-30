const pages = [{
      name: 'login',
      content: `
   <!DOCTYPE html>
<html>
<head>
    <title>Authentication</title>
<link rel="stylesheet" href="app://assets/styles/login.css">
<script src="app://assets/scripts/login.js"></script>
</head>
<body>
    <div class="container">
        <div id="login-form">
            <h2>School Authority Login</h2>
            <div class="form-group">
                <label>Username</label>
                <input type="text" id="login-username" required>
            </div>
            <div class="form-group">
                <label>Password</label>
                <input type="password" id="login-password" required>
            </div>
            <button onclick="login()">Login</button>
            <div class="toggle-form">
                <span>New admin </span>
                <a onclick="toggleForms()">Sign up</a>
            </div>
        </div>

        <div id="signup-form">
            <h2>New Admin Sign Up</h2>
            <div class="form-group">
                <label>Full Name</label>
                <input type="text" id="fullname" required>
            </div>
            <div class="form-group">
                <label>Phone Number</label>
                <input type="tel" id="phone" required>
            </div>
            <div class="form-group">
                <label>Email</label>
                <input type="email" id="email" required>
            </div>
            <div class="form-group">
                <label>Username</label>
                <input type="text" id="username" required>
            </div>
            <div class="form-group">
                <label>Password</label>
                <input type="password" id="password" required>
            </div>
            <div class="form-group">
                <label>Confirm Password</label>
                <input type="password" id="confirm-password" required>
            </div>
            <button onclick="signup()">Sign Up</button>
            <div class="toggle-form">
                <span>Already have an account? </span>
                <a onclick="toggleForms()">Login</a>
            </div>
        </div>
    </div>
    <script src="./login.js">
    </script>
</body>
</html>
      `
    },
    {
        name: 'home',
        content:
       `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
<link rel="stylesheet" href="app://assets/styles/home.css">
<script src="app://assets/scripts/home.js"></script>
</head>
<body>
    <div class="container">
        <div class="top-section">
            <div class="small-grid">
                <div class="small-card" id="allStudents"></div>
                <div class="small-card" id="notInCloud"></div>
                <div class="small-card" id="pending"></div>
                <div class="small-card" id="notComing"></div>
            </div>
            <div class="medium-card"></div>
            <div class="medium-card" id="fees"></div>
            <div class="medium-card" id="term"></div>

        </div>
        <div class="bottom-section">
            <div class="column">
            <div class="rect-card" data-route="registration">
                    <img src="app://assets/images/add.png" class="menuicons" alt="Register Student">
                    Register Student</div>
                <div class="rect-card" data-route="exam">
                <img src="app://assets/images/result.png" class="menuicons" alt="exam">
                  Exam Wizard</div>
                <div class="rect-card" data-route="about"> <img src="app://assets/images/About.png" class="menuicons" alt="about">
                  About School</div>
            </div>
            <div class="column">
             <div class="rect-card"  data-route="fees"> <img src="app://assets/images/fees.png" class="menuicons" alt="fees">
                    School Fees</div>
                <div class="rect-card" data-route="result">
                    <img src="app://assets/images/exam.png" class="menuicons" alt="result">
                    Exam Result</div> 
               
                <div class="rect-card"  data-route="calendar"> <img src="app://assets/images/calendar.png" class="menuicons" alt="calendar">
                    School Calendar</div>
            </div>
            <div class="column">
                 <div class="rect-card" data-route="profile">
                    <img src="app://assets/images/search.png" class="menuicons" alt="search Student">
                    Search Student</div>
               
                <div class="rect-card"  data-route="staff"> <img src="app://assets/images/staffs.png" class="menuicons" alt="staff">
                  Staffs</div>
                <div class="rect-card" data-route="memories"> <img src="app://assets/images/memories.png" class="menuicons" alt="memories">
                  School Memories</div>
            </div>
            <div class="column">
                <div class="rect-card" data-route="attendance">
                <img src="app://assets/images/attendance.png" class="menuicons" alt="student attendance">
                   Student Attendance</div>

                <div class="rect-card"  data-route="post">
                <img src="app://assets/images/posts.png" class="menuicons" alt="posts">
                  Posts</div>
                <div class="rect-card"  data-route="analysis">
                <img src="app://assets/images/analysis.png" class="menuicons" alt="analysis">
                   Analysis</div>

            </div>
           
        </div>
    </div>


   
</body>
</html>`
    },
    {name: 'profile',
        content:
        `<!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Professional Profile</title>
        
           <link rel="stylesheet" href="app://assets/styles/profile.css">
           <link rel="stylesheet" href="app://assets/styles/navcss.css">
            <script src="app://assets/scripts/profile.js"></script>
        </head>
        <body>
        <section class="top">
           <h1 id="full_name">Full Name</h1>    <h2 id="class">Class</h2>
                 <div class="contact-info" id="phone">Mobile: </div>
                <div class="contact-info" id="email">Email: </div>
                <h3 id="date">Admitted on: </h3>
               
        </section>

            <section class="bottom">
            <div class="profile-container">
                <div class="details">
                    <div class="label">Date of Birth</div>
                    <div class="value" id="dob"></div>
                    
                    <div class="label">Gender</div>
                    <div class="value" id="gender"></div>
        
                    <div class="label">School Section</div>
                    <div class="value" id="school_part"></div>
                    
                    <div class="label">Course</div>
                    <div class="value" id="course"></div>
        
                    <div class="label">Nationality</div>
                    <div class="value" id="nationality"></div>
                    
                    <div class="label">State</div>
                    <div class="value" id="state"></div>
                    
                    <div class="label">Parent's Name</div>
                    <div class="value" id="parent"></div>
                    
                    <div class="label">Father's Occupation</div>
                    <div class="value" id="fathers_occupation"></div>
                    
                    <div class="label">Disability</div>
                    <div class="value" id="disability"></div>
        
                    <div class="label">Health Issue</div>
                    <div class="value" id="specify"></div>
                    
                    <div class="label">Disability Rate</div>
                    <div class="value" id="dis_rate"></div>
                    
                    <div class="label">Reading Ability</div>
                    <div class="value" id="reading_ability"></div>
                    
                    <div class="label">Writing Ability</div>
                    <div class="value" id="writing_ability"></div>
                    
                    <div class="label">Critical Thinking</div>
                    <div class="value" id="critical_thinking"></div>
                    
                   
                </div>
                
                <div class="photo-container">
                    <div class="photo-placeholder" id="imdisp"></div>
                    <div class="status-placeholder" id="stimage"></div>
                </div>
            </div>
        </section>
        
            <!-- Add a search section -->
             <section>
            <div class="search-container">
                <input type="text" id="searchInput" placeholder="Search by name...">
                <button onclick="searchStudent()">Search</button>
            </div>
            <div class="student-list" id="studentList"></div>
        </section>
        
        <div class="sidenav">
    <a href="#" data-route="home">
        <i class="fas fa-home"></i>
        <span class="nav-text">Home</span>
    </a>
    <a href="#" data-route="profile">
        <i class="fas fa-user"></i>
        <span class="nav-text">Profile</span>
    </a>
    <a href="#" data-route="registration">
        <i class="fas fa-envelope"></i>
        <span class="nav-text">Messages</span>
    </a>
    <a href="#" data-route="exam">
        <i class="fas fa-chart-bar"></i>
        <span class="nav-text">Analytics</span>
    </a>
    <a href="#" data-route="settings">
        <i class="fas fa-cog"></i>
        <span class="nav-text">Settings</span>
    </a>
</div>
         
        </body>
        </html>` 
    },{
      name: 'registration',
      content:`<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Student Registration Form</title>
 <link rel="stylesheet" href="app://assets/styles/navcss.css">
 <link rel="stylesheet" href="app://assets/styles/reg.css">
 <script src="app://assets/scripts/reg.js"></script>


</head>
<body>
   <form action="" id="dataForm"><div id="screen">
    <!-- Main container for the form -->
    
    <div class="container" id="container">


      <!-- Form fields --> 
      <div class="form-group" id="passportInputDiv">
        <input type="file" class="passportInputStyle" id="passportInput" accept="image/*" required>
    </div>
    <div class="preview">
        <img id="passportPreview" alt="Passport preview" src="" >
    </div>
     

      <div class="form-group" id="first_name"> 
        <label for="first_name">First Name:</label> 
        <input type="text" id="first_name_inp" name="first_name" required> 
      </div>

      <div class="form-group" id="last_name">
        <label for="last_name">Last Name:</label>
        <input type="text" id="last_name_inp" name="last_name" required>
      </div>

      <div class="form-group" id="address">
        <label for="address">Address:</label>
        <input type="text" id="address_inp" name="address" required>
      </div>

      <div class="form-group" id="dob">
        <label for="dob">Date of Birth:</label>
        <input type="date" id="dob_inp" name="dob" required>
        <label for="gender">Gender:</label>
        <select id="gender_inp" name="gender">
          <option value="male">Male</option>
          <option value="female">Female</option>
          <option value="other">Other</option>
        </select>
      </div>

      <div class="form-group" id="nationality">
        <label for="nationality">Nationality:</label>
        <input type="text" id="nationality_inp" name="nationality" required>
      </div>

      <div class="form-group" id="state">
        <label for="state">State Of Origin:</label>
        <input type="text" id="state_inp" name="state" required>
      </div>

      <div class="form-group" id="parent">
        <label for="parent">Name of Parent/Guardian:</label>
        <input type="text" id="parents_inp" name="parent" required>
      </div>

      <div class="form-group" id="occu">
        <label for="occu">Fathers Occupation:</label>
        <input type="text" id="occu_inp" name="occu" required>
      </div>

      <div class="form-group" id="phone">
        <label for="number">Parents Phone No:</label>
        <input type="tel" id="number_inp" name="number" required>
        <label for="email">Email:</label>
        <input type="email" id="email_inp" name="email" required>
      </div>

      <div class="form-group" id="sign">
        <label for="sign">Signature ID:</label>
        <input type="text" id="sign_inp" name="number" required>
      </div> 

      <div class="form-group"  id="statement">
       
        <p id="agreed">
          <strong><u>ADMISSION FORM DECLARATION:</u></strong><br><br>
          I hereby declare that I will obey all the rules and regulations of the institution
          and abide by the decisions made by the authorities. I understand that any false
          information provided may lead to the cancellation of my admission.
      </p> </div>

     
      <div id="school-stamp" ondblclick="showStamp()">
        <img id="stamp" src="app://assets/images/stamp.png" alt="School Stamp" >
    </div>
    

   
      <!-- Placeholder divs for grid layout -->
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>

      
    </div>


    <!-- Sidebar for additional information -->
    <div id="otherinfo">
      <!-- Personal Info Section -->
      <fieldset class="custom-section">
        <legend>Health Info</legend>
        <p class="plabel">
         Disability:
          <select id="disability" name="section">
            <option value="yes">Yes</option>
            <option value="no">No</option>
          </select>
        </p>
        <p class="plabel">
         Specify:
          <input type="text" id="specify" name="disability">
          
        </input>
        </p>
        <p class="plabel">
         Disability Rate:
          <select id="dis_rate" name="section">
            <option value="1">1 </option>
            <option value="2">2 </option>
            <option value="3">3 </option>
            <option value="4">4 </option>
            <option value="5">5 </option>
          </select>
        </p>
      </fieldset>

      <!-- Interview Result Section -->
      <fieldset class="custom-section">
        <legend>Interview Result</legend>
        <p class="plabel">
          Reading Ability:
          <select id="reading_ability" name="section">
            <option value="1">1 Point</option>
            <option value="2">2 Points</option>
            <option value="3">3 Points</option>
            <option value="4">4 Points</option>
            <option value="5">5 Points</option>
          </select>
        </p>
        <p class="plabel">
          Writing Ability:
          <select id="writing_ability" name="section">
            <option value="1">1 Point</option>
            <option value="2">2 Points</option>
            <option value="3">3 Points</option>
            <option value="4">4 Points</option>
            <option value="5">5 Points</option>
          </select>
        </p>
        <p class="plabel">
          Critical Thinking:
          <select id="critical_thinking" name="section">
            <option value="1">1 Point</option>
            <option value="2">2 Points</option>
            <option value="3">3 Points</option>
            <option value="4">4 Points</option>
            <option value="5">5 Points</option>
          </select>
        </p>
      </fieldset>

      <!-- Class Assigned Section -->
      <fieldset class="custom-section">
        <legend>Class Assigned To</legend>
        <p class="plabel">
          Section:
          <select id="school_part" name="section">
            <option value="nursery">Nursery</option>
            <option value="primary">Primary</option>
            <option value="senior_secondary">Junior Secondary</option>
            <option value="senior_secondary">Senior Secondary</option>
          </select>
        </p>
        <p class="plabel">
          Course:
          <select id="course" name="course">
            <option value="none">None</option>
            <option value="science">Science</option>
            <option value="art">Art</option>
            <option value="commerce">Commerce</option>
          </select>
        </p>
        <p class="plabel">
          Class:
          <select id="class" name="class">

             <option value="nursery 1">Nursery 1</option>
              <option value="nursery 2">Nursery 2</option>
              <option value="primary 1">Primary 1</option>
              <option value="primary 2">Primary 2</option>
              <option value="primary 3">Primary 3</option>
              <option value="primary 4">Primary 4</option>
              <option value="primary 5">Primary 5</option>
              <option value="primary 6">Primary 6</option>
              <option value="jss 1">JSS 1</option>
              <option value="jss 2">JSS 2</option>
              <option value="jss 3">JSS 3</option>
              <option value="ss 1">SS 1</option>
              <option value="ss 2">SS 2</option>
              <option value="ss 3">SS 3</option>

          </select>
        </p>
      </fieldset>

      <!-- Save Buttons -->
      <div id="savebox">
 
        <input type="submit" id="save" value="Submit Data" />
      </div>

 <div id="savebox">
        <input type="button" id="print" value="Print" />
      </div>

    </div>
   
  </div></form>

     <div class="sidenav">
    <a href="#" data-route="home">
        <i class="fas fa-home"></i>
        <span class="nav-text">Home</span>
    </a>
    <a href="#" data-route="profile">
        <i class="fas fa-user"></i>
        <span class="nav-text">Profile</span>
    </a>
    <a href="#" data-route="registration">
        <i class="fas fa-envelope"></i>
        <span class="nav-text">Messages</span>
    </a>
    <a href="#" data-route="exam">
        <i class="fas fa-chart-bar"></i>
        <span class="nav-text">Analytics</span>
    </a>
    <a href="#" data-route="settings">
        <i class="fas fa-cog"></i>
        <span class="nav-text">Settings</span>
    </a>
</div>
</body>
</html>
`
    },{
    name: 'staffReg',
    content:`<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Student Registration Form</title>

<link rel="stylesheet" href="app://assets/styles/staff_reg.css">
<link rel="stylesheet" href="app://assets/styles/navcss.css">
<script src="app://assets/scripts/staff_reg.js"></script>

</head>

<body>
  <form action="" id="dataForm">
    <div id="screen">
      <!-- Main container for the form -->

      <div class="container" id="container">


        <!-- Form fields -->
        <div class="form-group" id="passportInputDiv">
          <input type="file" class="passportInputStyle" id="passportInput" accept="image/*" required>
        </div>
        <div class="preview">
          <img id="passportPreview" alt="Passport preview" src="">
        </div>
        <div class="form-group" id="first_name">
          <label for="first_name">First Name:</label>
          <input type="text" id="first_name_inp" name="first_name" required>
        </div>

        <div class="form-group" id="last_name">
          <label for="last_name">Last Name:</label>
          <input type="text" id="last_name_inp" name="last_name" required>
        </div>

        <div class="form-group" id="address">
          <label for="address">Address:</label>
          <input type="text" id="address_inp" name="address" required>
        </div>

        <div class="form-group" id="dob">
          <label for="dob">Date of Birth:</label>
          <input type="date" id="dob_inp" name="dob" required>
          <label for="gender">Gender:</label>
          <select id="gender_inp" name="gender">
            <option value="male">Male</option>
            <option value="female">Female</option>
          </select>
        </div>

        <div class="form-group" id="nationality">
          <label for="nationality">Nationality:</label>
          <input type="text" id="nationality_inp" name="nationality" required>
        </div>

        <div class="form-group" id="state">
          <label for="state">State Of Origin:</label>
          <input type="text" id="state_inp" name="state" required>
        </div>

                <div class="form-group" id="phone">
          <label for="number">Phone No:</label>
          <input type="tel" id="number_inp" name="number" required>
          <label for="email">Email:</label>
          <input type="email" id="email_inp" name="email" required>
        </div>

 <div class="form-group" id="quote">
          <label for="quote">Say a Quote:</label>
          <input type="text" id="quote_inp" name="quote" required>
        </div>

        <div class="form-group" id="sign">
          <label for="sign">Staff ID:</label>
          <input type="text" id="id_inp" name="number" required>
        </div>


        <div class="form-group"  id="statement">
       
          <p id="agreed">
            <strong><u>ADMISSION FORM DECLARATION:</u></strong><br><br>
            I hereby declare that I will obey all the rules and regulations of the institution
            and abide by the decisions made by the authorities. I understand that any false
            information provided may lead to the cancellation of my employment.
        </p> </div>

      <div id="school-stamp" ondblclick="showStamp()">
        <img id="stamp" src="app://assets/images/stamp.png" alt="School Stamp" >
    </div>



        <!-- Placeholder divs for grid layout -->
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>


      </div>


      <!-- Sidebar for additional information -->
      <div id="otherinfo">
        <!-- Personal Info Section -->
        <fieldset class="custom-section">
          <legend>Educational Background</legend>
          <p class="plabel">
            Highest Qualification:
            <select id="qualification_inp" name="section">
              <option value="SSCE">SSCE</option>
              <option value="Diploma">Diploma</option>
              <option value="BSC. Degree">BSC. Degree</option>
              <option value="Master Degree">Master Degree</option>
            </select>
          </p>
          <p class="plabel">
            Institute Attended:
            <input type="text" id="institute" name="disability">

            </input>
          </p>
          <p class="plabel">
            Year of Graduation:
            <input type="text" id="graduation_year" name="disability">

            </input>
          </p>
        </fieldset>

        <!-- Interview Result Section -->
        <fieldset class="custom-section">
          <legend>Employment Info</legend>
       
          <p class="plabel">
            Employment Type:
            <select id="employ_inp" name="section">
              <option value="Full-Time">Full-Time</option>
              <option value="Part-Time">Part-Time</option>
              <option value="Contract">Contract</option>
              <option value="Intern">Intern</option>
            
            </select>
          </p>
          <p class="plabel">  Staff Duty:                                                                            :
            <select id="duty" name="section">
              <option value="Teacher">Teacher</option>
              <option value="Gateman">Gateman</option>
              <option value="Nanny">Nanny</option>
              <option value="Special Staff">Special Staff</option>
              <option value="Board Member">Board Member</option>
            </select>
          </p> 
          <p class="plabel">
            Salary Info:
            <select id="salary_type" name="section">
              <option value="Basic Salary">Basic Salary</option>
              <option value="Allowances">Allowances</option>
            </select>
          </p>
        </fieldset>

        <!-- Class Assigned Section -->
        <fieldset class="custom-section">
          <legend>Class Assigned To</legend>
          <p class="plabel">
            Section:
            <select id="school_part" name="section">
              <option value="Western Education">Western Education</option>
              <option value="Islamic Education">Islamic Education</option>
              <option value="Special Education">Special Education</option>
            </select>
          </p>
          <p class="plabel">
            Course:
            <select id="course" name="course">
              <option value="Science">Science</option>
              <option value="Art">Art</option>
              <option value="Commerce">Commerce</option>
            </select>
          </p>
          <p class="plabel">
            Form Master Of:
            <select id="form_class" name="class">
              <option value="Nursery 1">Nursery 1</option>
              <option value="Nursery 2">Nursery 2</option>
              <option value="Primary 1">Primary 1</option>
              <option value="Primary 2">Primary 2</option>
              <option value="Primary 3">Primary 3</option>
              <option value="Primary 4">Primary 4</option>
              <option value="Primary 5">Primary 5</option>
              <option value="Primary 6">Primary 6</option>
              <option value="JSS 1">JSS 1</option>
              <option value="JSS 2">JSS 2</option>
              <option value="JSS 3">JSS 3</option>
              <option value="SS 1">SS 1</option>
              <option value="SS 2">SS 2</option>
              <option value="SS 3">SS 3</option>
            </select>
          </p>
        </fieldset>


<fieldset class="custom-section">
          <legend>Emergency Contact</legend>
            <p class="plabel">
           Name:
            <input type="text" id="e_name" name="disability">

            </input>
          </p>
          <p class="plabel">
            Relationship:
            <input type="text" id="e_rel" name="disability">

            </input>
          </p>
          <p class="plabel">
           Phone:
            <input type="text" id="e_phone" name="disability">

            </input>
          </p>
        </fieldset>
       
        <!-- Save Buttons -->
        <div id="savebox">
          <input type="submit" id="draft" value="Pending Staff" />
          <input type="submit" id="save" value="Comfirmed Staff" />
        </div>


      </div>

    </div>
  </form>

   <div class="sidenav">
    <a href="#" data-route="home">
        <i class="fas fa-home"></i>
        <span class="nav-text">Home</span>
    </a>
    <a href="#" data-route="profile">
        <i class="fas fa-user"></i>
        <span class="nav-text">Profile</span>
    </a>
    <a href="#" data-route="registration">
        <i class="fas fa-envelope"></i>
        <span class="nav-text">Messages</span>
    </a>
    <a href="#" data-route="exam">
        <i class="fas fa-chart-bar"></i>
        <span class="nav-text">Analytics</span>
    </a>
    <a href="#" data-route="settings">
        <i class="fas fa-cog"></i>
        <span class="nav-text">Settings</span>
    </a>
</div>

</body>
</html>
`
  },{
    name: 'exam',
    content:`<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Exam</title>

<link rel="stylesheet" href="app://assets/styles/exam.css">
<link rel="stylesheet" href="app://assets/styles/navcss.css">

<script src="app://assets/scripts/exam.js"></script>
</head>
<body>
    <div class="pattern-overlay"></div>
    
    <div class="container">
        <div class="title">EXAM WIZARD</div>
        
        <div class="button-grid">
            <button class="exam-button" data-route="ecard">EXAM CARD</button>
            <button class="exam-button" data-route="equestion">E-QUESTIONS</button>
            <button class="exam-button" data-route="escores">EXAM SCORES</button>
            <button class="exam-button" data-route="eresult">EXAM RESULT</button>
        </div>
    </div>


  <!-- naviation -->

   <div class="sidenav">
    <a href="#" data-route="home">
        <i class="fas fa-home"></i>
        <span class="nav-text">Home</span>
    </a>
    <a href="#" data-route="profile">
        <i class="fas fa-user"></i>
        <span class="nav-text">Profile</span>
    </a>
    <a href="#" data-route="registration">
        <i class="fas fa-envelope"></i>
        <span class="nav-text">Messages</span>
    </a>
    <a href="#" data-route="exam">
        <i class="fas fa-chart-bar"></i>
        <span class="nav-text">Analytics</span>
    </a>
    <a href="#" data-route="settings">
        <i class="fas fa-cog"></i>
        <span class="nav-text">Settings</span>
    </a>
</div>

</body>
</html>

  `},
  {
    name:'fees',
   content:`<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>School Fee Management</title>
  <link rel="stylesheet" href="app://assets/styles/fees.css">
  <link rel="stylesheet" href="app://assets/styles/navcss.css">
  <!-- Add FontAwesome for the sidebar icons -->
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css">
</head>
<body>
    <div class="container">
        <div class="sidebar">
            <div class="search-container">
                <input type="text" placeholder="search student" id="searchInput">
            </div>
            <!-- Add student list container for search results -->
            <div id="studentList" class="student-list"></div>
        </div>
        <div class="main-content">
            <!-- Personal Data Section -->
            <div class="section">
                <div class="section-title">PERSONAL DATA</div>
                <div class="personal-data">
                    <div class="profile-photo photo-placeholder"></div>
                    <div class="student-info">
                        <div>
                            <span class="info-label">NAME:</span>
                            <span class="info-value" id="full_name"></span>
                        </div>
                        <div>
                            <span class="info-label">CLASS:</span>
                            <span class="info-value" id="class"></span>
                        </div>
                        <div>
                            <span class="info-label">ID:</span>
                            <span class="info-value" id="id"></span>
                        </div>
                        <div>
                            <span class="info-label">PHONE NUMBER:</span>
                            <span class="info-value" id="phone"></span>
                        </div>
                        <div>
                            <span class="info-label">ADMITTED ON:</span>
                            <span class="info-value" id="admit_date"></span>
                        </div>
                        <!-- Add email field to match the JS -->
                        <div>
                            <span class="info-label">EMAIL:</span>
                            <span class="info-value" id="email"></span>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Payment History Section -->
            <div class="section">
                <div class="section-title">PAYMENT HISTORY</div>
                <table class="payment-history-table">
                    <thead>
                        <tr>
                            <th>TERM</th>
                            <th>STATUS</th>
                            <th>FEE AMOUNT</th>
                            <th>AMOUNT PAID</th>
                            <th>OUTSTANDING</th>
                            <th>METHOD</th>
                            <th>DATE</th>
                        </tr>
                    </thead>
                    <tbody id="paymentTableBody">
                        <!-- Payment history will be populated by JS -->
                    </tbody>
                </table>
            </div>

            <!-- New Payment Section -->
            <div class="section">
                <div class="section-title">PAYMENT</div>
                <div class="term-selector">
                    <p class="term-title" id="term_title">FIRST TERM SCHOOL FEES</p>
                </div>
                <form class="new-payment-form" id="paymentForm">
                    <div class="form-group">
                        <label for="fees-amount">SCHOOL FEES AMOUNT:</label>
                        <div class="currency-input">
                            <input type="text" id="fees-amount" readonly>
                        </div>
                    </div>
                    <div class="form-group">
                        <label for="term">TERM:</label>
                        <select id="term_select">
                            <option>FIRST TERM</option>
                            <option>SECOND TERM</option>
                            <option>THIRD TERM</option>
                        </select>
                    </div>
                    <div class="form-group">
                        <label for="paymentAmount">AMOUNT PAID:</label>
                        <div class="currency-input">
                            <input type="text" id="paymentAmount">
                        </div>
                    </div>
                    <div class="form-group">
                        <label for="paymentMethod">METHOD:</label>
                        <select id="paymentMethod">
                            <option>BANK TRANSFER</option>
                            <option>CASH</option>
                        </select>
                    </div>
                    <button type="submit" class="submit-btn">SUBMIT PAYMENT</button>
                </form>
            </div>
        </div>
    </div>

   <div class="sidenav">
    <a href="#" data-route="home">
        <i class="fas fa-home"></i>
        <span class="nav-text">Home</span>
    </a>
    <a href="#" data-route="profile">
        <i class="fas fa-user"></i>
        <span class="nav-text">Find Student</span>
    </a>
    <a href="#" data-route="registration">
        <i class="fas fa-envelope"></i>
        <span class="nav-text">Registration</span>
    </a>
    <a href="#" data-route="exam">
        <i class="fas fa-chart-bar"></i>
        <span class="nav-text">Examination</span>
    </a>
    <a href="#" data-route="settings">
        <i class="fas fa-cog"></i>
        <span class="nav-text">Settings</span>
    </a>
</div>

<!-- We need to load Electron modules before our script -->
<script>
    // Create a global electron object to make it available to our script
    // (This is only required in some Electron setups)
    window.electron = {
        ipcRenderer: require('electron').ipcRenderer
    };
</script>
<script src="app://assets/scripts/fees.js"></script>
</body>
</html>`
  }
  ,
  {
    name:'about',
    content:`
    <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>About School X</title>
  <link rel="stylesheet" href="app://assets/styles/about.css">
<link rel="stylesheet" href="app://assets/styles/navcss.css">

<script src="app://assets/scripts/about.js"></script>

</head>
<body>
    <!-- Hero Section -->
    <section class="hero">
        <div class="hero-content">
            <h1>Welcome to School X</h1>
            <p>Shaping the future through excellence in education.</p>
            <a href="#about" class="btn">Learn More</a>
        </div>
    </section>

    <!-- About Section -->
    <section id="about" class="about">
        <div class="container">
            <h2>About School X</h2>
            <p>School X is a leading educational institution dedicated to nurturing young minds and preparing them for a bright future. Founded in 1990, we have a rich history of academic excellence and holistic development.</p>
            <div class="mission-vision">
                <div class="mission">
                    <h3>Our Mission</h3>
                    <p>To provide a world-class education that empowers students to achieve their full potential.</p>
                </div>
                <div class="vision">
                    <h3>Our Vision</h3>
                    <p>To be a global leader in education, innovation, and character building.</p>
                </div>
            </div>
        </div>
    </section>

    <!-- Key Statistics -->
    <section class="stats">
        <div class="container">
            <h2>By the Numbers</h2>
            <div class="stats-grid">
                <div class="stat">
                    <h3>1,200+</h3>
                    <p>Students</p>
                </div>
                <div class="stat">
                    <h3>100+</h3>
                    <p>Teachers</p>
                </div>
                <div class="stat">
                    <h3>50+</h3>
                    <p>Classrooms</p>
                </div>
                <div class="stat">
                    <h3>10+</h3>
                    <p>Sports Facilities</p>
                </div>
            </div>
        </div>
    </section>

    <!-- Gallery -->
    <section class="gallery">
        <h2>Our Campus</h2>
        <div class="gallery-grid">
            <img src="app://assets/images/building.jpg" alt="School Building">
            <img src="app://assets/images/classroom.jpg" alt="Classroom">
            <img src="app://assets/images/sportfield.jpg" alt="Sports Field">
            <img src="app://assets/images/liberary.jpg" alt="Library">
        </div>
    </section>

    <!-- Testimonials -->
    <section class="testimonials">
        <div class="container">
            <h2>What People Say About Us</h2>
            <div class="testimonial-grid">
                <div class="testimonial">
                    <p>"School X has provided an excellent environment for my child's growth. Highly recommended!"</p>
                    <h4>- Parent</h4>
                </div>
                <div class="testimonial">
                    <p>"The teachers are dedicated, and the facilities are top-notch. Proud to be an alumnus!"</p>
                    <h4>- Alumni</h4>
                </div>
            </div>
        </div>
    </section>

    <!-- Call to Action -->
    <section class="cta">
        <div class="container">
            <h2>Join the School X Family</h2>
            <p>Enroll your child today and give them the gift of a bright future.</p>
            <a href="#" class="btn">Apply Now</a>
        </div>
    </section>

    <!-- Footer -->
    <footer>
        <div class="container">
            <p>&copy; 2023 School X. All rights reserved.</p>
            <div class="social-links">
                <a href="#">Facebook</a>
                <a href="#">Twitter</a>
                <a href="#">Instagram</a>
            </div>
        </div>
    </footer>


      <div class="sidenav">
    <a href="#" data-route="home">
        <i class="fas fa-home"></i>
        <span class="nav-text">Home</span>
    </a>
    <a href="#" data-route="profile">
        <i class="fas fa-user"></i>
        <span class="nav-text">Profile</span>
    </a>
    <a href="#" data-route="registration">
        <i class="fas fa-envelope"></i>
        <span class="nav-text">Messages</span>
    </a>
    <a href="#" data-route="exam">
        <i class="fas fa-chart-bar"></i>
        <span class="nav-text">Analytics</span>
    </a>
    <a href="#" data-route="settings">
        <i class="fas fa-cog"></i>
        <span class="nav-text">Settings</span>
    </a>
</div>
</body>
</html>`
  }
  ,
  {
    name:'post',
    content:`
    <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>School Authority Posting</title>
  <link rel="stylesheet" href="app://assets/styles/post.css">
<link rel="stylesheet" href="app://assets/styles/navcss.css">


</head>
<body>
    <!-- Header -->
    <header>
        <h1>School Authority Posting</h1>
        <div class="audience-filter">
            <label>
                <input type="checkbox" id="teachersCheckbox" checked> Teachers
            </label>
            <label>
                <input type="checkbox" id="parentsCheckbox" checked> Parents
            </label>
        </div>
    </header>

    <!-- Post Section -->
    <section class="post-section">
        <h2>Create a New Post</h2>
        <form id="postForm">
            <input type="text" id="postTitle" placeholder="Enter title..." required>
            <textarea id="postContent" placeholder="Write your message here..." required></textarea>
            <button type="submit" class="btn">Post</button>
        </form>
    </section>

    <!-- Announcements Feed -->
    <section class="announcements">
        <h2>Announcements</h2>
        <div id="announcementsFeed"></div>
    </section>

      <!-- Edit Modal -->
    <div id="editModal" class="modal">
        <div class="modal-content">
            <span class="close">&times;</span>
            <h2>Edit Post</h2>
            <form id="editForm">
                <input type="text" id="editTitle" placeholder="Enter title..." required>
                <textarea id="editContent" placeholder="Write your message here..." required></textarea>
                <div class="audience-filter">
                    <label>
                        <input type="checkbox" id="editTeachersCheckbox"> Teachers
                    </label>
                    <label>
                        <input type="checkbox" id="editParentsCheckbox"> Parents
                    </label>
                </div>
                <button type="submit" class="btn">Save Changes</button>
            </form>
        </div>
    </div>

 <div class="sidenav">
    <a href="#" data-route="home">
        <i class="fas fa-home"></i>
        <span class="nav-text">Home</span>
    </a>
    <a href="#" data-route="profile">
        <i class="fas fa-user"></i>
        <span class="nav-text">Profile</span>
    </a>
    <a href="#" data-route="registration">
        <i class="fas fa-envelope"></i>
        <span class="nav-text">Messages</span>
    </a>
    <a href="#" data-route="exam">
        <i class="fas fa-chart-bar"></i>
        <span class="nav-text">Analytics</span>
    </a>
    <a href="#" data-route="settings">
        <i class="fas fa-cog"></i>
        <span class="nav-text">Settings</span>
    </a>
</div>

<script src="app://assets/scripts/post.js"></script>
</body>
</html>`
  }
  ,
  {
    name:'analysis',
    content:`<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
  <link rel="stylesheet" href="app://assets/styles/analysis.css">
<link rel="stylesheet" href="app://assets/styles/navcss.css">

<script src="app://assets/scripts/analysis.js"></script>

</head>
<body>

    <div class="app-container">
        <div class="search-container">
            <input type="text" class="search-bar" placeholder="search:">
     <div class="filter-container">
    <span class="filter-label">Filter by:</span>
    
    <select class="filter-dropdown" id="status">
        <option value="not paid">not paid</option>
        <option value="paid">paid</option>
        <option value="partial">partial</option>
       
    </select>
    
    <select class="filter-dropdown">
        <option value="first_term">first term 1</option>
        <option value="second_term">second term</option>
        <option value="third_term">third term</option>
      
    </select>
    
    <select class="filter-dropdown" id="class">
              <option value="all">class</option>
              <option value="nursery 1">Nursery 1</option>
              <option value="nursery 2">Nursery 2</option>
              <option value="primary 1">Primary 1</option>
              <option value="primary 2">Primary 2</option>
              <option value="primary 3">Primary 3</option>
              <option value="primary 4">Primary 4</option>
              <option value="primary 5">Primary 5</option>
              <option value="primary 6">Primary 6</option>
              <option value="jss 1">JSS 1</option>
              <option value="jss 2">JSS 2</option>
              <option value="jss 3">JSS 3</option>
              <option value="ss 1">SS 1</option>
              <option value="ss 2">SS 2</option>
              <option value="ss 3">SS 3</option>
    </select>
    
    <select class="filter-dropdown">
        <option value="all">gender</option>
        <option value="male">Male</option>
        <option value="female">Female</option>
        
     
    </select>
</div>
        </div>
        <div class="main-content">
            <div class="student-list" id="studentList">
                
            </div>
            <div class="details-pane" id="chart">
              
            </div>
        </div>
    </div>

   <div class="sidenav">
    <a href="#" data-route="home">
        <i class="fas fa-home"></i>
        <span class="nav-text">Home</span>
    </a>
    <a href="#" data-route="profile">
        <i class="fas fa-user"></i>
        <span class="nav-text">Profile</span>
    </a>
    <a href="#" data-route="registration">
        <i class="fas fa-envelope"></i>
        <span class="nav-text">Messages</span>
    </a>
    <a href="#" data-route="exam">
        <i class="fas fa-chart-bar"></i>
        <span class="nav-text">Analytics</span>
    </a>
    <a href="#" data-route="settings">
        <i class="fas fa-cog"></i>
        <span class="nav-text">Settings</span>
    </a>
</div>
</body>
</html>`
  }
  ,
  {
    name:'attendance',
    content:`<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
  <link rel="stylesheet" href="app://assets/styles/attendance.css">
<link rel="stylesheet" href="app://assets/styles/navcss.css">

<script src="app://assets/scripts/attendance.js"></script>

</head>
<body>
  <h1>this is attendance page</h1>


   <div class="sidenav">
    <a href="#" data-route="home">
        <i class="fas fa-home"></i>
        <span class="nav-text">Home</span>
    </a>
    <a href="#" data-route="profile">
        <i class="fas fa-user"></i>
        <span class="nav-text">Profile</span>
    </a>
    <a href="#" data-route="registration">
        <i class="fas fa-envelope"></i>
        <span class="nav-text">Messages</span>
    </a>
    <a href="#" data-route="exam">
        <i class="fas fa-chart-bar"></i>
        <span class="nav-text">Analytics</span>
    </a>
    <a href="#" data-route="settings">
        <i class="fas fa-cog"></i>
        <span class="nav-text">Settings</span>
    </a>
</div>
</body>
</html>`
  }
  ,
  {
    name:'calendar',
    content:`<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
  <link rel="stylesheet" href="app://assets/styles/calendar.css">
<link rel="stylesheet" href="app://assets/styles/navcss.css">

<script src="app://assets/scripts/calendar.js"></script>

</head>
<body>
  <h1>this is calendar page</h1>



   <div class="sidenav">
    <a href="#" data-route="home">
        <i class="fas fa-home"></i>
        <span class="nav-text">Home</span>
    </a>
    <a href="#" data-route="profile">
        <i class="fas fa-user"></i>
        <span class="nav-text">Profile</span>
    </a>
    <a href="#" data-route="registration">
        <i class="fas fa-envelope"></i>
        <span class="nav-text">Messages</span>
    </a>
    <a href="#" data-route="exam">
        <i class="fas fa-chart-bar"></i>
        <span class="nav-text">Analytics</span>
    </a>
    <a href="#" data-route="settings">
        <i class="fas fa-cog"></i>
        <span class="nav-text">Settings</span>
    </a>
</div>
</body>
</html>`
  }
  ,
  {
    name:'memories',
    content:`<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
  <link rel="stylesheet" href="app://assets/styles/memories.css">
<link rel="stylesheet" href="app://assets/styles/navcss.css">

<script src="app://assets/scripts/memories.js"></script>

</head>
<body>
  <h1>this is memories page</h1>



   <div class="sidenav">
    <a href="#" data-route="home">
        <i class="fas fa-home"></i>
        <span class="nav-text">Home</span>
    </a>
    <a href="#" data-route="profile">
        <i class="fas fa-user"></i>
        <span class="nav-text">Profile</span>
    </a>
    <a href="#" data-route="registration">
        <i class="fas fa-envelope"></i>
        <span class="nav-text">Messages</span>
    </a>
    <a href="#" data-route="exam">
        <i class="fas fa-chart-bar"></i>
        <span class="nav-text">Analytics</span>
    </a>
    <a href="#" data-route="settings">
        <i class="fas fa-cog"></i>
        <span class="nav-text">Settings</span>
    </a>
</div>
</body>
</html>`
  },{
    name:'result',
    content:`<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
  <link rel="stylesheet" href="app://assets/styles/result.css">
<link rel="stylesheet" href="app://assets/styles/navcss.css">

<script src="app://assets/scripts/result.js"></script>

</head>
<body>
  <h1>this is result page</h1>



   <div class="sidenav">
    <a href="#" data-route="home">
        <i class="fas fa-home"></i>
        <span class="nav-text">Home</span>
    </a>
    <a href="#" data-route="profile">
        <i class="fas fa-user"></i>
        <span class="nav-text">Profile</span>
    </a>
    <a href="#" data-route="registration">
        <i class="fas fa-envelope"></i>
        <span class="nav-text">Messages</span>
    </a>
    <a href="#" data-route="exam">
        <i class="fas fa-chart-bar"></i>
        <span class="nav-text">Analytics</span>
    </a>
    <a href="#" data-route="settings">
        <i class="fas fa-cog"></i>
        <span class="nav-text">Settings</span>
    </a>
</div>
</body>
</html>`
  }
  ,{
    name:'staff',
    content:`

    <!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>School Staff Management</title>

  <link rel="stylesheet" href="app://assets/styles/staff.css">
  <link rel="stylesheet" href="app://assets/styles/navcss.css">
  <script src="app://assets/scripts/staff.js"></script>

</head>
<body>
  <div class="gt">
    <div class="header-title">SCHOOL STAFFS</div>
    <button class="add-staff-btn" data-route="staffReg">ADD STAFF</button>
    <div class="search-container">
      <div class="search-label">search:</div>
      <input type="text" class="search-input">
    </div>
  </div>
  
  <div class="content">
    <div class="staff-list" id="staffList">

      <div class="staff-card">
        <div class="avatar" id="avater">passport</div>
        <div class="staff-info">
          <div class="staff-name">Abubakar Musa</div>
          <div class="staff-details">qoutes-hd djhsj sajdfmsjf dsfhkjhskfdds sdfhjdsjfhdsfjkhfjdfjhxf sadfdjsfhfnsdfnhsjdsfhjdsfhj</div>
        </div>
      </div>
      
      
      
      <div class="staff-card">
        <div class="staff-info">
          <div class="staff-name">Dawood kidir</div>
          <div class="staff-details">qoutes-hd djhsj sajdfmsjf dsfhkjhskfdds sdfhjdsjfhdsfjkhfjdfjhxf sadfdjsfhfnsdfnhsjdsfhjdsfhj</div>
        </div>
        <div class="avatar">passport</div>
      </div>
    </div>
    
    <div class="staff-profile">
      <div class="profile-header">
        <div class="profile-avatar" id="pavatar"></div>
        <div class="profile-title">
          <div id="full_name"></div>
          <div id="phone"></div>
          <div id="email"></div>
          <div id="id"></div>
          <div id="gender"></div>
          <div id="address"></div>
        </div>
      </div>
      <div class="info-section">
        <div class="info-fields">
          <div class="info-field"><p id="dob"></p></div>
          <div class="info-field"><p id="highest_qualification"></p></div>
          <div class="info-field"><p id="institute"></p></div>
          <div class="info-field"><p id="salary"></p></div>
          <div class="info-field"><p id="duty"></p></div>
          <div class="info-field"><p id="form_class"></p></div>

          <div class="info-field"> <p id="e_name"></p> </div>
          <div class="info-field"><p id="e_rel"></p></div>
          <div class="info-field"><p id="e_phone"></p></div>
        </div>
      </div>

    </div>
  </div>


 <div class="sidenav">
    <a href="#" data-route="home">
        <i class="fas fa-home"></i>
        <span class="nav-text">Home</span>
    </a>
    <a href="#" data-route="profile">
        <i class="fas fa-user"></i>
        <span class="nav-text">Profile</span>
    </a>
    <a href="#" data-route="registration">
        <i class="fas fa-envelope"></i>
        <span class="nav-text">Messages</span>
    </a>
    <a href="#" data-route="exam">
        <i class="fas fa-chart-bar"></i>
        <span class="nav-text">Analytics</span>
    </a>
    <a href="#" data-route="settings">
        <i class="fas fa-cog"></i>
        <span class="nav-text">Settings</span>
    </a>
</div>
  </body>
</html>`
  },
  { name:'settings',
    content:
   ` <!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>School Settings</title>

 <link rel="stylesheet" href="app://assets/styles/settings.css">
  <link rel="stylesheet" href="app://assets/styles/navcss.css">
  

</head>
<body>
  <div class="container">
    <div class="heade">SETTINGS</div>
    
    <div class="section">
      <div class="section-title">SET TERM</div>
      <div class="form-row">
        <div class="form-group">
          <label for="select-term">Select Term:</label>
          <select id="select-term">
            <option value="FIRST TERM">FIRST TERM</option>
            <option value="SECOND TERM">SECOND TERM</option>
            <option value="THIRD TERM">THIRD TERM</option>
          </select>
        </div>
      </div>
      <div class="form-row">
        <div class="form-group">
          <label for="term-beginning">Term Beginning:</label>
          <input type="date" id="term-beginning">
        </div>
        <div class="form-group">
          <label for="term-ending">Term Ending:</label>
          <input type="date" id="term-ending">
        </div>
      </div>
    </div>
    
    <div class="section">
      <div class="section-title">Set School Fees</div>
      <div class="form-row">
        <div class="form-group">
          <label for="nursery-amount">Nursery Amount:</label>
          <input type="number" id="nursery-amount" placeholder="Enter amount">
        </div>
        <div class="form-group">
          <label for="junior-sec-amount">Junior Sec Amount:</label>
          <input type="number" id="junior-sec-amount" placeholder="Enter amount">
        </div>
      </div>
      <div class="form-row">
        <div class="form-group">
          <label for="primary-amount">Primary Amount:</label>
          <input type="number" id="primary-amount" placeholder="Enter amount">
        </div>
        <div class="form-group">
          <label for="senior-sec-amount">Senior Sec Amount:</label>
          <input type="number" id="senior-sec-amount" placeholder="Enter amount">
        </div>
      </div>
    </div>
    
    <div class="actions">
     <input type="password" id="admin-password" placeholder="ENTER ADMIN PASSWORD AND SAVE" class="password-input">
     <button id="save-button" class="save-button">SAVE NEW TERM</button>
    </div>
    
    <div id="error-message" class="error-message">Invalid admin password. Please try again.</div>
    <div id="success-message" class="success-message">Settings saved successfully!</div>
  </div>

 <div class="sidenav">
    <a href="#" data-route="home">
        <i class="fas fa-home"></i>
        <span class="nav-text">Home</span>
    </a>
    <a href="#" data-route="profile">
        <i class="fas fa-user"></i>
        <span class="nav-text">Profile</span>
    </a>
    <a href="#" data-route="registration">
        <i class="fas fa-envelope"></i>
        <span class="nav-text">Messages</span>
    </a>
    <a href="#" data-route="exam">
        <i class="fas fa-chart-bar"></i>
        <span class="nav-text">Analytics</span>
    </a>
    <a href="#" data-route="settings">
        <i class="fas fa-cog"></i>
        <span class="nav-text">Settings</span>
    </a>
</div>
<script src="app://assets/scripts/settings.js"></script>
</body>
</html>`
  },

  { name:'ecard',
    content:
   ` <!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>School Settings</title>

 <link rel="stylesheet" href="app://assets/styles/ecard.css">
  <link rel="stylesheet" href="app://assets/styles/navcss.css">
  

</head>
<body>
  
<div class="head">
        <h1>EXAM CARD</h1>
    </div>

    <div class="main-container">
        <div class="left-panel">
            <div class="exam-card"></div>
            <div class="exam-card"></div>
        </div>

        <div class="search-panel">
            <input type="text" class="search-input" placeholder="Search:">
        </div>

        <div class="right-panel">
            <button class="wizard-home-btn"  data-route="exam">Wizard Home</button>
            
            <div class="action-buttons-container">
                <button class="action-btn">Refresh</button>
                <button class="action-btn" id="generate">Generate</button>
                <button class="action-btn">Print</button>
                <button class="action-btn">Export PDF</button>
            </div>
        </div>
    </div>

 <div class="sidenav">
    <a href="#" data-route="home">
        <i class="fas fa-home"></i>
        <span class="nav-text">Home</span>
    </a>
    <a href="#" data-route="profile">
        <i class="fas fa-user"></i>
        <span class="nav-text">Find Student</span>
    </a>
    <a href="#" data-route="registration">
        <i class="fas fa-envelope"></i>
        <span class="nav-text">Registration</span>
    </a>
    <a href="#" data-route="exam">
        <i class="fas fa-chart-bar"></i>
        <span class="nav-text">Examination</span>
    </a>
    <a href="#" data-route="settings">
        <i class="fas fa-cog"></i>
        <span class="nav-text">Settings</span>
    </a>
</div>
<!-- We need to load Electron modules before our script -->
<script>
    // Create a global electron object to make it available to our script
    // (This is only required in some Electron setups)
    window.electron = {
        ipcRenderer: require('electron').ipcRenderer
    };
</script>
<script src="app://assets/scripts/ecard.js"></script>
</body>
</html>`
  },

  { name:'equestion',
    content:
   ` <!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>School Settings</title>

 <link rel="stylesheet" href="app://assets/styles/equestion.css">
  <link rel="stylesheet" href="app://assets/styles/navcss.css">
  

</head>
<body>
  
 
<div class="head">
        <h1>EXAM QUESTION</h1>
    </div>

     

    <div class="main-container">

<div class="classes">
            <div class="classes-buttons-container">
                <button class="classes-btn">Nursery 1</button>
                <button class="classes-btn">Nursery 2</button>
                <button class="classes-btn">Primary 1</button>
                <button class="classes-btn">Primary 2</button>
                <button class="classes-btn">Primary 3</button>
                <button class="classes-btn">Primary 4</button>
                <button class="classes-btn">Primary 5</button>
                <button class="classes-btn">Primary 6</button>
                <button class="classes-btn">JSS 1</button>
                <button class="classes-btn">JSS 2</button>
                <button class="classes-btn">JSS 3</button>
                <button class="classes-btn">SS 1</button>
                <button class="classes-btn">SS 2</button>
                <button class="classes-btn">SS 3</button>

            </div>
        </div>

        <div class="left-panel">
            <div class="sheet"></div>
           
        </div>

        

        <div class="right-panel">
            <button class="wizard-home-btn"  data-route="exam">Wizard Home</button>
            
            <div class="action-buttons-container">
                <button class="action-btn">Refresh</button>
                <button class="action-btn">Print</button>
                <button class="action-btn">Export PDF</button>
<p class="archived">Archived</p>
                <select id="year" class="action-btn">
                <option class="action-btn" value="">Year</option>
                <option class="action-btn" value="2024">2024</option>
                <option class="action-btn" value="2023">2023</option>
                <option class="action-btn" value="2022">2022</option>
                </select>

                <select id="term" class="action-btn">
                <option class="action-btn" value="">Term</option>
                <option class="action-btn" value="first_term">First Term</option>
                <option class="action-btn" value="second_term">Second Term</option>
                <option class="action-btn" value="third_term">Third Term</option>
                </select>
            </div>
        </div>
    </div>

 <div class="sidenav">
    <a href="#" data-route="home">
        <i class="fas fa-home"></i>
        <span class="nav-text">Home</span>
    </a>
    <a href="#" data-route="profile">
        <i class="fas fa-user"></i>
        <span class="nav-text">Profile</span>
    </a>
    <a href="#" data-route="registration">
        <i class="fas fa-envelope"></i>
        <span class="nav-text">Messages</span>
    </a>
    <a href="#" data-route="exam">
        <i class="fas fa-chart-bar"></i>
        <span class="nav-text">Analytics</span>
    </a>
    <a href="#" data-route="settings">
        <i class="fas fa-cog"></i>
        <span class="nav-text">Settings</span>
    </a>
</div>
<script src="app://assets/scripts/equestion.js"></script>
</body>
</html>`
  },

  { name:'eresult',
    content:
   ` <!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>School Settings</title>

 <link rel="stylesheet" href="app://assets/styles/eresult.css">
  <link rel="stylesheet" href="app://assets/styles/navcss.css">
  

</head>
<body>
  
<h1> E-result </h1>

 <div class="sidenav">
    <a href="#" data-route="home">
        <i class="fas fa-home"></i>
        <span class="nav-text">Home</span>
    </a>
    <a href="#" data-route="profile">
        <i class="fas fa-user"></i>
        <span class="nav-text">Profile</span>
    </a>
    <a href="#" data-route="registration">
        <i class="fas fa-envelope"></i>
        <span class="nav-text">Messages</span>
    </a>
    <a href="#" data-route="exam">
        <i class="fas fa-chart-bar"></i>
        <span class="nav-text">Analytics</span>
    </a>
    <a href="#" data-route="settings">
        <i class="fas fa-cog"></i>
        <span class="nav-text">Settings</span>
    </a>
</div>
<script src="app://assets/scripts/eresult.js"></script>
</body>
</html>`
  },  

  { name:'escores',
    content:
   ` <!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>School Settings</title>

 <link rel="stylesheet" href="app://assets/styles/escores.css">
<link rel="stylesheet" href="app://assets/styles/navcss.css">
  

</head>
<body>
  
<h1> E-scores </h1>

 <div class="sidenav">
    <a href="#" data-route="home">
        <i class="fas fa-home"></i>
        <span class="nav-text">Home</span>
    </a>
    <a href="#" data-route="profile">
        <i class="fas fa-user"></i>
        <span class="nav-text">Profile</span>
    </a>
    <a href="#" data-route="registration">
        <i class="fas fa-envelope"></i>
        <span class="nav-text">Messages</span>
    </a>
    <a href="#" data-route="exam">
        <i class="fas fa-chart-bar"></i>
        <span class="nav-text">Analytics</span>
    </a>
    <a href="#" data-route="settings">
        <i class="fas fa-cog"></i>
        <span class="nav-text">Settings</span>
    </a>
</div>
<script src="app://assets/scripts/escores.js"></script>
</body>
</html>`
  },

  ];

  module.exports = pages;
