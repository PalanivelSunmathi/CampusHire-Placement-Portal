document.addEventListener("DOMContentLoaded", function () {

    setupLogin();
    setupRegistration();
    setupApplication();
    loadApplications();
    loadStudentProfile();

});


// ==========================================
// LOGIN
// ==========================================

function setupLogin() {

    const loginForm =
        document.getElementById("loginForm");

    if (!loginForm) {
        return;
    }

    loginForm.addEventListener(
        "submit",
        async function (event) {

            event.preventDefault();

            const email =
                document.getElementById("loginEmail").value.trim();

            const password =
                document.getElementById("loginPassword").value.trim();

            if (email === "" || password === "") {

                alert("Please enter email and password.");
                return;

            }

            try {

                const response = await fetch(
                    "http://localhost:8080/api/login",
                    {
                        method: "POST",

                        headers: {
                            "Content-Type": "application/json"
                        },

                        body: JSON.stringify({
                            email: email,
                            password: password
                        })
                    }
                );

                if (response.ok) {

                    const student =
                        await response.json();

                    localStorage.setItem(
                        "loggedInStudent",
                        JSON.stringify(student)
                    );

                    alert("Login successful!");

                    window.location.href =
                        "dashboard.html";

                } else {

                    alert("Invalid email or password.");

                }

            } catch (error) {

                console.error("Login Error:", error);

                alert(
                    "Backend connection failed. Please make sure the backend is running."
                );

            }

        }
    );

}


// ==========================================
// REGISTRATION
// ==========================================

function setupRegistration() {

    const registrationForm =
        document.getElementById("registrationForm");

    if (!registrationForm) {
        return;
    }

    registrationForm.addEventListener(
        "submit",
        async function (event) {

            event.preventDefault();

            const name =
                document.getElementById("studentName").value.trim();

            const email =
                document.getElementById("studentEmail").value.trim();

            const phone =
                document.getElementById("studentPhone").value.trim();

            const course =
                document.getElementById("studentCourse").value;

            const college =
                document.getElementById("studentCollege").value.trim();

            const password =
                document.getElementById("studentPassword").value;

            const confirmPassword =
                document.getElementById("confirmPassword").value;

            // VALIDATION

            if (
                name === "" ||
                email === "" ||
                phone === "" ||
                course === "" ||
                college === "" ||
                password === "" ||
                confirmPassword === ""
            ) {

                alert("Please fill all the fields.");
                return;

            }

            if (!/^[0-9]{10}$/.test(phone)) {

                alert(
                    "Please enter a valid 10-digit phone number."
                );

                return;

            }

            if (password !== confirmPassword) {

                alert(
                    "Password and Confirm Password do not match."
                );

                return;

            }

            // STUDENT DATA

            const student = {

                name: name,

                email: email,

                phone: phone,

                department: course,

                college: college,

                cgpa: "",

                password: password

            };

            try {

                const response =
                    await fetch(
                        "http://localhost:8080/api/students",
                        {

                            method: "POST",

                            headers: {
                                "Content-Type":
                                    "application/json"
                            },

                            body:
                                JSON.stringify(student)

                        }
                    );

                if (response.ok) {

                    const savedStudent =
                        await response.json();

                    console.log(
                        "Saved Student:",
                        savedStudent
                    );

                    alert(
                        "Registration successful! You can now login."
                    );

                    registrationForm.reset();

                    window.location.href =
                        "index.html#login";

                }

                else if (response.status === 409) {

                    alert(
                        "This email is already registered. Please use another email."
                    );

                }

                else {

                    const errorMessage =
                        await response.text();

                    console.error(
                        "Registration Error:",
                        errorMessage
                    );

                    alert(
                        "Registration failed. Please try again."
                    );

                }

            } catch (error) {

                console.error(
                    "Registration Error:",
                    error
                );

                alert(
                    "Backend connection failed. Please make sure the backend is running."
                );

            }

        }
    );

}


// ==========================================
// APPLICATION SUBMISSION
// ==========================================

function setupApplication() {

    const applicationForm =
        document.getElementById("applicationForm");

    if (!applicationForm) {
        return;
    }

    applicationForm.addEventListener(
        "submit",
        async function (event) {

            event.preventDefault();

            const name =
                document.getElementById("applicantName").value.trim();

            const email =
                document.getElementById("applicantEmail").value.trim();

            const phone =
                document.getElementById("applicantPhone").value.trim();

            const qualification =
                document.getElementById("qualification").value.trim();

            const job =
                document.getElementById("appliedJob").value;

            const skills =
                document.getElementById("skills").value.trim();

            const experience =
                document.getElementById("experience").value.trim();

            const resumeInput =
                document.getElementById("resume");

            let resume = "Not uploaded";

            if (
                resumeInput &&
                resumeInput.files &&
                resumeInput.files.length > 0
            ) {

                resume =
                    resumeInput.files[0].name;

            }

            if (
                name === "" ||
                email === "" ||
                phone === "" ||
                qualification === "" ||
                job === "" ||
                skills === ""
            ) {

                alert(
                    "Please fill all required fields."
                );

                return;

            }

            if (!/^[0-9]{10}$/.test(phone)) {

                alert(
                    "Please enter a valid 10-digit phone number."
                );

                return;

            }

            let company = "";

            if (job.indexOf(" - ") !== -1) {

                company =
                    job.split(" - ")[1];

            }

            const application = {

                job: job,

                company: company,

                name: name,

                email: email,

                phone: phone,

                qualification: qualification,

                skills: skills,

                experience: experience,

                resume: resume,

                date:
                    new Date().toLocaleDateString(),

                status: "Applied"

            };

            try {

                const response =
                    await fetch(
                        "http://localhost:8080/api/applications",
                        {

                            method: "POST",

                            headers: {
                                "Content-Type":
                                    "application/json"
                            },

                            body:
                                JSON.stringify(application)

                        }
                    );

                if (!response.ok) {

                    throw new Error(
                        "Application submission failed"
                    );

                }

                await response.json();

                alert(
                    "Application submitted successfully!"
                );

                window.location.href =
                    "dashboard.html";

            } catch (error) {

                console.error(
                    "Application Error:",
                    error
                );

                alert(
                    "Backend connection failed. Please make sure the backend is running."
                );

            }

        }
    );

}


// ==========================================
// LOAD APPLICATIONS IN DASHBOARD
// ==========================================

function loadApplications() {

    const tableBody =
        document.getElementById(
            "applicationTableBody"
        );

    const applicationCount =
        document.getElementById(
            "applicationCount"
        );

    if (!tableBody) {
        return;
    }

    // GET LOGGED-IN STUDENT

    const studentData =
        localStorage.getItem(
            "loggedInStudent"
        );

    if (!studentData) {

        window.location.href =
            "index.html#login";

        return;

    }

    let student;

    try {

        student =
            JSON.parse(studentData);

    } catch (error) {

        console.error(
            "Student data error:",
            error
        );

        return;

    }

    const loggedInEmail =
        student.email;


    // GET APPLICATIONS

    fetch(
        "http://localhost:8080/api/applications"
    )

        .then(function (response) {

            if (!response.ok) {

                throw new Error(
                    "Failed to fetch applications"
                );

            }

            return response.json();

        })

        .then(function (applications) {

            // SHOW ONLY LOGGED-IN STUDENT APPLICATIONS

            const myApplications =
                applications.filter(function (application) {

                    return application.email === loggedInEmail;

                });


            tableBody.innerHTML = "";


            // APPLICATION COUNT

            if (applicationCount) {

                applicationCount.textContent =
                    myApplications.length;

            }


            // NO APPLICATIONS

            if (myApplications.length === 0) {

                const row =
                    document.createElement("tr");

                const cell =
                    document.createElement("td");

                cell.colSpan = 4;

                cell.className =
                    "text-center";

                cell.textContent =
                    "No applications submitted yet.";

                row.appendChild(cell);

                tableBody.appendChild(row);

                return;

            }


            // DISPLAY APPLICATIONS

            myApplications.forEach(
                function (application) {

                    const row =
                        document.createElement("tr");


                    const jobCell =
                        document.createElement("td");

                    const jobStrong =
                        document.createElement("strong");

                    jobStrong.textContent =
                        application.job ||
                        "Unknown Job";

                    jobCell.appendChild(
                        jobStrong
                    );


                    const companyCell =
                        document.createElement("td");

                    companyCell.textContent =
                        application.company ||
                        "Unknown Company";


                    const dateCell =
                        document.createElement("td");

                    dateCell.textContent =
                        application.date ||
                        "-";


                    const statusCell =
                        document.createElement("td");

                    const statusSpan =
                        document.createElement("span");

                    statusSpan.className =
                        "status pending";

                    statusSpan.textContent =
                        application.status ||
                        "Applied";

                    statusCell.appendChild(
                        statusSpan
                    );


                    row.appendChild(
                        jobCell
                    );

                    row.appendChild(
                        companyCell
                    );

                    row.appendChild(
                        dateCell
                    );

                    row.appendChild(
                        statusCell
                    );


                    tableBody.appendChild(
                        row
                    );

                }
            );

        })

        .catch(function (error) {

            console.error(
                "Application loading error:",
                error
            );

        });

}


// ==========================================
// LOAD LOGGED-IN STUDENT PROFILE
// ==========================================

function loadStudentProfile() {

    const studentData =
        localStorage.getItem(
            "loggedInStudent"
        );

    if (!studentData) {

        return;

    }

    let student;

    try {

        student =
            JSON.parse(studentData);

    } catch (error) {

        console.error(
            "Student data error:",
            error
        );

        return;

    }


    // STUDENT NAME

    const studentName =
        document.getElementById(
            "studentName"
        );

    if (studentName) {

        studentName.textContent =
            student.name || "Student";

    }


    // SIDEBAR NAME

    const sidebarName =
        document.getElementById(
            "sidebarName"
        );

    if (sidebarName) {

        sidebarName.textContent =
            student.name || "Student";

    }


    // AVATAR

    const firstLetter =
        (student.name || "S")
            .charAt(0)
            .toUpperCase();


    const sidebarAvatar =
        document.getElementById(
            "sidebarAvatar"
        );

    if (sidebarAvatar) {

        sidebarAvatar.textContent =
            firstLetter;

    }


    const topAvatar =
        document.getElementById(
            "topAvatar"
        );

    if (topAvatar) {

        topAvatar.textContent =
            firstLetter;

    }


    const profileAvatar =
        document.getElementById(
            "profileAvatar"
        );

    if (profileAvatar) {

        profileAvatar.textContent =
            firstLetter;

    }


    // PROFILE NAME

    const profileName =
        document.getElementById(
            "profileName"
        );

    if (profileName) {

        profileName.textContent =
            student.name ||
            "Student Name";

    }


    // DEPARTMENT

    const profileCourse =
        document.getElementById(
            "profileCourse"
        );

    if (profileCourse) {

        profileCourse.textContent =
            student.department ||
            "EEE";

    }


    // EMAIL

    const profileEmail =
        document.getElementById(
            "profileEmail"
        );

    if (profileEmail) {

        profileEmail.textContent =
            student.email ||
            "Not available";

    }


    // PHONE

    const profilePhone =
        document.getElementById(
            "profilePhone"
        );

    if (profilePhone) {

        profilePhone.textContent =
            student.phone ||
            "Not available";

    }


    // COLLEGE

    const profileCollege =
        document.getElementById(
            "profileCollege"
        );

    if (profileCollege) {

        profileCollege.textContent =
            student.college ||
            "Not available";

    }

}


// ==========================================
// LOGOUT
// ==========================================

function logout() {

    localStorage.removeItem(
        "loggedInStudent"
    );

    alert(
        "Logged out successfully!"
    );

    window.location.href =
        "index.html";

}


// ==========================================
// MOBILE SIDEBAR
// ==========================================

function toggleSidebar() {

    const sidebar =
        document.querySelector(
            ".dashboard-sidebar"
        );

    if (sidebar) {

        sidebar.classList.toggle(
            "show"
        );

    }

}