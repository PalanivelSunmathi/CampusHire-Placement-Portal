# 🎓 CampusHire – Student Placement Portal

> **A modern web-based platform for managing student placement opportunities, applications, internships, and career profiles.**

CampusHire is a **Student Placement Portal** developed to simplify the placement process for students by providing a centralized platform to explore job opportunities, internships, manage their profiles, and submit job applications.

The project combines a user-friendly frontend interface with backend functionality to provide a structured placement management experience.

---

## 🌟 Project Overview

CampusHire is designed with the idea of bringing **students, job opportunities, internships, and applications** together in a single platform.

Students can register, log in, explore available opportunities, filter jobs based on their requirements, apply for suitable positions, and track their application information through the dashboard.

---

## ✨ Key Features

### 👤 Student Registration

* New students can create an account.
* Collects student information such as:

  * Name
  * Email
  * Phone Number
  * Department
  * CGPA
  * Password
* Includes basic form validation.
* Password confirmation is provided during registration.

---

### 🔐 Student Login

* Registered students can log in to the portal.
* Login details are validated.
* Successful login redirects the student to the dashboard.
* Login state is maintained for accessing protected pages.

---

### 🏠 Home Page

The CampusHire home page provides:

* Professional navigation bar
* Hero section
* Placement-focused introduction
* Job opportunities
* Internship opportunities
* Company information
* Search and filtering options
* Login and registration access
* Dashboard navigation
* Responsive design

---

### 💼 Job Opportunities

Students can explore available job opportunities with information such as:

* Job Role
* Company Name
* Location
* Salary Package
* Required Skills
* Job Type

Example opportunities include:

* Java Developer
* Web Developer
* Graduate Engineer Trainee

---

### 🔎 Job Search & Filtering

The portal provides job filtering functionality.

Students can search/filter opportunities based on:

* Job role
* Job type
* Location

This helps students quickly identify suitable opportunities.

---

### 🎓 Internship Opportunities

CampusHire also provides a dedicated section for internship opportunities.

Students can explore internships and identify opportunities relevant to their career interests.

---

### 📊 Student Dashboard

The dashboard provides a centralized view of the student's placement activities.

It includes:

* Student Profile
* Name
* Email
* Phone Number
* Department
* CGPA
* Application information
* Quick Actions

Students can also navigate directly to:

* Find Jobs
* Internships
* Profile
* Applications

---

### 📝 Job Application

Students can apply for available jobs through the application page.

The application form includes:

* Applicant Name
* Email
* Phone Number
* Department
* CGPA
* Resume Upload
* Skills
* Qualification
* Application Experience/Reason

After submission, the application information is stored and displayed in the placement system.

---

### 📋 Application Management

The portal maintains submitted application information such as:

* Applicant Name
* Email
* Phone
* Qualification
* Skills
* Applied Job
* Company
* Resume
* Application Date
* Application Status

Example application status:

**Applied**

This provides a structured way to manage student applications.

---

### 👨‍🎓 Student Profile

Students can maintain and view their academic and personal information through the dashboard.

Profile information includes:

* Student Name
* Email
* Phone
* Department
* CGPA

---

### 📱 Responsive Design

CampusHire is designed to provide a clean and responsive user interface across different screen sizes.

The interface uses:

* Bootstrap
* CSS
* Responsive layouts
* Cards
* Navigation components
* Icons
* Modern UI elements

---

## 🖥️ Pages / Modules

| Page            | Purpose                          |
| --------------- | -------------------------------- |
| 🏠 Home         | Main CampusHire landing page     |
| 📝 Registration | Student account creation         |
| 🔐 Login        | Student authentication           |
| 📊 Dashboard    | Student placement dashboard      |
| 💼 Jobs         | View available job opportunities |
| 🎓 Internships  | View internship opportunities    |
| 📄 Application  | Submit job applications          |
| 👤 Profile      | View student information         |

---

## 🛠️ Technologies Used

### Frontend

* HTML5
* CSS3
* JavaScript
* Bootstrap 5
* Bootstrap Icons
* Google Fonts

### Backend

* Backend server-side implementation
* API-based communication
* Application data handling

### Data Management

* Student registration data
* Student profile data
* Job data
* Internship data
* Application data

---

## 📁 Project Structure

```text
CampusHire-Placement-Portal/
│
├── index.html
├── registration.html
├── dashboard.html
├── application.html
│
├── style.css
├── script.js
│
├── backend/
│   ├── Backend source files
│   └── Configuration files
│
└── README.md
```

---

## 🔄 Application Flow

```text
                    ┌─────────────────┐
                    │    CampusHire   │
                    │      Home       │
                    └────────┬────────┘
                             │
                ┌────────────┴────────────┐
                │                         │
          ┌─────▼─────┐             ┌─────▼─────┐
          │ Register  │             │   Login   │
          └─────┬─────┘             └─────┬─────┘
                │                         │
                └────────────┬────────────┘
                             │
                      ┌──────▼──────┐
                      │  Dashboard  │
                      └──────┬──────┘
                             │
              ┌──────────────┼──────────────┐
              │              │              │
        ┌─────▼─────┐  ┌─────▼─────┐  ┌────▼─────┐
        │    Jobs   │  │Internships│  │ Profile  │
        └─────┬─────┘  └───────────┘  └──────────┘
              │
        ┌─────▼─────────┐
        │ Apply for Job │
        └─────┬─────────┘
              │
        ┌─────▼──────────┐
        │   Application  │
        │    Submitted   │
        └────────────────┘
```

---

## 🎯 Project Objectives

The main objectives of CampusHire are:

* To provide a centralized placement platform for students.
* To simplify job and internship searching.
* To make the application process easier.
* To maintain student placement information systematically.
* To provide a user-friendly student dashboard.
* To reduce manual placement-related activities.
* To create a foundation for a complete digital placement management system.

---

## 🚀 Future Enhancements

The project can be further enhanced with:

* 👨‍💼 Recruiter Login
* 🛡️ Admin Dashboard
* 🔎 Advanced Job Search
* 📧 Email Notifications
* 📄 Online Resume Management
* 📊 Placement Analytics
* 🔔 Application Notifications
* 🔐 Role-Based Authentication
* 🗄️ Improved Database Management
* ☁️ Cloud Deployment
* 📱 Mobile Application
* 📈 Student Placement Reports

---

## 💡 Benefits

### For Students

* Easy access to job opportunities
* Internship discovery
* Simple application process
* Centralized profile management
* Application information in one place

### For Placement Teams

* Organized student information
* Centralized opportunity management
* Easier application tracking
* Scope for future analytics and reporting

---

## ▶️ How to Run the Project

### Frontend

1. Clone the repository.
2. Open the project in **Visual Studio Code**.
3. Open the frontend project folder.
4. Start the frontend using **Live Server**.
5. Open the CampusHire home page in the browser.

### Backend

1. Open the `backend` folder.
2. Configure the required backend environment.
3. Start the backend server.
4. Connect the frontend with the backend services.
5. Run the CampusHire application.

---

## 🧪 Project Testing

The following major functionalities have been tested during development:

* Student Registration
* Student Login
* Dashboard Navigation
* Job Search
* Job Filtering
* Internship Navigation
* Job Application
* Resume Upload
* Application Data Storage
* Application Status
* Page-to-page Navigation
* Logout Functionality

---

## 📌 Project Status

**Current Status: 🚀 Development / Functional Prototype**

The major student-side placement portal functionalities have been implemented. The project can be further extended with advanced backend services, database integration, recruiter modules, admin management, and deployment.

---

## 👩‍💻 Developer

### Sunmathi P

**B.E. Electrical and Electronics Engineering**
**Sri Venkateswaraa College of Technology**

Interested in:

* Java Development
* Web Development
* Software Development

---

## ⭐ Conclusion

CampusHire provides a structured and user-friendly approach to student placement management.

The project demonstrates the integration of **web development, student management, job discovery, internship management, application processing, and backend functionality** into a single placement portal.

> **CampusHire — Discover Opportunities. Build Your Career.**
