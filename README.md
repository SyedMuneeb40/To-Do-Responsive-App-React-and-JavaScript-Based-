📝 To-Do App

A clean, modern, and fully responsive To-Do Application built with React.js and JavaScript. This project allows users to efficiently manage their daily tasks through a simple and intuitive interface.

The application demonstrates core React concepts including functional components, state management, props, event handling, array methods, and dynamic rendering.

🚀 Live Demo

🔗 Live Demo: mydailytaskweb.netlify.app

📂 Repository

🔗 GitHub: https://github.com/SyedMuneeb40/To-Do-Responsive-App-React-and-JavaScript-Based-.git

✨ Features
➕ Add new tasks
🗑️ Delete tasks by ID
📋 Display tasks dynamically
⚛️ React state management using useState
🔄 Dynamic UI updates without page reload
🚫 Prevents adding empty tasks
📱 Fully responsive design
🎨 Clean and user-friendly interface
🧩 Component-based architecture
⚡ Fast and lightweight frontend
🛠️ Technologies Used
Frontend
React.js
JavaScript (ES6+)
HTML5
CSS3
CSS Modules
React Concepts
Functional Components
useState
Props
Event Handling
Conditional Rendering
List Rendering
Array Methods
State Updates
📁 Project Structure
To-Do-App/
│
├── public/
│
├── src/
│   ├── components/
│   │   ├── TodoApp.jsx
│   │   └── TaskCard.jsx
│   │
│   ├── TodoApp.module.css
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
│
├── package.json
├── package-lock.json
└── README.md

The exact folder structure may vary depending on the project setup.

⚙️ How It Works

The application uses React's useState hook to maintain the current task list.

When a user enters a task and clicks the Add Task button:

The input value is validated.
An empty task is rejected.
A unique ID is assigned to the task.
The new task is added to the existing task list.
React updates the UI automatically.

For deleting a task, the application uses JavaScript's filter() method to create a new array excluding the task with the selected ID.

Example
const deleteHandler = (Id) => {
    setList((prevList) =>
        prevList.filter((task) => task.id !== Id)
    );
};

This approach keeps the React state immutable and triggers a re-render with the updated task list.

📱 Responsive Design

The application is designed to work across different screen sizes, including:

💻 Desktop
💻 Laptop
📱 Mobile
📟 Tablet

The layout and components adapt to different viewport sizes to provide a consistent user experience.

🧠 What I Learned

Through this project, I practiced and strengthened my understanding of:

React component architecture
Managing state with useState
Passing data through props
Handling user events
Updating arrays in React state
Using map() for dynamic rendering
Using filter() for deleting items
Form/input handling
Conditional rendering
Responsive CSS
CSS Modules
Building reusable React components
🔮 Future Improvements

The project can be extended with additional functionality such as:

💾 LocalStorage persistence
✏️ Edit/update tasks
✅ Mark tasks as completed
🔍 Search tasks
🏷️ Task categories
📅 Due dates
🎯 Task priorities
🌙 Dark mode
🔔 Task reminders
📊 Task statistics
💾 Data Persistence

Currently, tasks are managed using React state and are not persisted after the page is refreshed.

LocalStorage integration is planned as a future improvement.

🚀 Getting Started
Prerequisites

Make sure you have the following installed:

Node.js
npm
A modern web browser
Installation

Clone the repository:

git clone YOUR_GITHUB_REPOSITORY_URL

Navigate to the project directory:

cd To-Do-App

Install dependencies:

npm install

Start the development server:

npm run dev

The application will be available at the local development URL shown in your terminal.

📸 Screenshots

Add screenshots of your application here:

<img width="1916" height="945" alt="image" src="https://github.com/user-attachments/assets/b0fe0344-df72-4124-8be9-5057434b3352" />
<img width="373" height="856" alt="image" src="https://github.com/user-attachments/assets/d855db62-a57b-45f8-9dbd-49c3e2c021a8" />
<img width="376" height="665" alt="image" src="https://github.com/user-attachments/assets/52669749-3a72-4545-8fdc-11fe624890f1" />


🤝 Contributing

Contributions, suggestions, and improvements are welcome.

To contribute:

Fork the repository.
Create a new branch.
Make your changes.
Commit your changes.
Push the branch.
Open a Pull Request.
📄 License

This project is open-source and available under the MIT License.

👨‍💻 Author

Syed Muneeb

Software Engineer | React.js | JavaScript | Spring Boot

GitHub: https://github.com/SyedMuneeb40
LinkedIn: www.linkedin.com/in/syed-muneeb-dev

⭐ If you found this project useful or interesting, consider giving the repository a star!
