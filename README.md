# CRUD Operation Project

A full-stack user management application featuring an innovative hover-based UI interaction system for CRUD operations.

---

## ⚠️ IMPORTANT - First Load Notice

**🕐 The application takes 10-20 seconds to load on first visit**

This is because the backend is hosted on Render's free tier, which spins down after periods of inactivity. The backend needs to "wake up" on the first request. **This is normal behavior - the app is not broken!** Subsequent requests will be fast.

---

## 🚀 Live Demo

- **Frontend**: [Live Application](https://crud-assignment-ten.vercel.app/)
- **Backend**: Deployed on Render
- **Database**: MongoDB Atlas

---

## ✨ Features

### Core Functionality
- **Create**: Add new users through a form interface
- **Read**: Display user data including username, full name, email, phone, and creation timestamp
- **Update**: Edit existing user information
- **Delete**: Remove users from the database

### Unique UI/UX Interaction Design

This project implements an **interaction-first UI approach** where features are revealed through user interaction:

#### Hidden Delete Button
- Hover over the **username** to reveal a red bar at the top
- Hover over the red bar to enlarge it and display a delete icon
- Click the delete icon to trigger a confirmation prompt
- Confirm to permanently delete the user

#### Hidden Edit Button
- Hover over **other user data fields** to reveal a red bar on the right side
- Hover over the red bar to enlarge it and display a pencil/edit icon
- Click the edit icon to open a pre-filled form with current user details
- Modify the information and submit to update the user

This design philosophy encourages users to explore and interact with the interface, creating a more engaging and discovery-based experience.

---

## 🛠️ Tech Stack

### Frontend
- HTML/CSS/JavaScript/React
- Deployed on **Vercel**

### Backend
- Custom REST API
- Deployed on **Render**

### Database
- **MongoDB** for persistent data storage

---

## 📋 API Endpoints

- `/get/FakeUsers` - Retrieve all users
- `/add/fakeUser` - Create a new user
- `/updateUser` - Update user by ID
- `/delete/:username` - Delete user

---

## 🎨 User Interface

The application displays user information in cards/rows showing:
- Username
- Full Name
- Email Address
- Phone Number
- Account Creation Timestamp

Interaction elements are hidden by default and revealed on hover, maintaining a clean and minimalist interface.

---

## 🚦 Getting Started

### Prerequisites
- Node.js installed
- MongoDB account/instance

### Installation

1. Clone the repository
```bash
git clone https://github.com/Saurabh209/CRUD_Assignment.git
```

2. Install dependencies
```bash
# Frontend
cd frontend
npm install

```



3. Run locally
```bash
# Backend
npm start

# Frontend
npm run dev
```

---

## 📦 Deployment

- **Frontend**: Connected to Vercel for automatic deployments
- **Backend**: Connected to Render for automatic deployments
- **Database**: MongoDB Atlas for cloud database hosting

---

## 🎯 Design Philosophy

This project emphasizes **progressive disclosure** and **interactive UI patterns**. Instead of cluttering the interface with visible buttons, users discover functionality through hover interactions, creating a more immersive and exploratory user experience.

---


## 🤝 Contributing

Contributions, issues, and feature requests are welcome!

---

## 📄 License

This project is licensed under the MIT License.

---

## 👨‍💻 Author
- [Github](https://github.com/Saurabh209)
- [LinkedIn](https://www.linkedin.com/in/saurabh-kumar-265aa1232)

---

## 🙏 Acknowledgments

- MongoDB for database solutions
- Vercel for frontend hosting
- Render for backend hosting